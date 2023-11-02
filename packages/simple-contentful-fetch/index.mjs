import fs from 'fs-extra';
import fetch from 'node-fetch';
import path from 'path';
import contentful from 'contentful';
import { finished } from 'node:stream/promises';
import { debounce } from './utils.mjs';
import 'dotenv/config';

const syncAsset = async (out, url) => {
  if (!url) return;
  let i = 0;
  let dots = Array.from('...');
  let writeDone;

  console.log('Fetching', url);

  const response = await fetch(url)
    .catch(err => console.log('Fetch error', url, err));

  if (!response.ok) { console.error(`Cannot download asset from ${url}`, response.statusText); return Promise.reject(response.statusText); }

  fs.ensureDirSync(path.dirname(out));

  const fileStream = fs.createWriteStream(out);

  const writingFile = debounce(() => {
    if (!writeDone && typeof process.stdout?.clearLine === 'function') {
      i = i > 2 ? 0 : i + 1;
      process.stdout.clearLine(1);
      process.stdout.cursorTo(0);
      process.stdout.write('Downloading file' + dots.slice(0,i).join(''));
    }
  }, 50, true);

  process.stdout.write("\x1B[?25l"); //disable cursor

  response.body.on('data', writingFile);

  fileStream.on('finish', () => {
    writeDone = true;
    process.stdout.write('\u001B[?25h'); // enable cursor
    console.log('');
    console.log('Downloaded', out);
  });

  return finished(response.body.pipe(fileStream))
    .catch(console.error);
}

const getContentfulEntries = (
  { content_type = "pagePatientStory", ...options },
  callback = () => {}
) => {
  if (
    !process.env.CONTENTFUL_ACCESSTOKEN ||
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_HOST
  ) {
    throw Error('Missing environment variable', {
      CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
    });
  }

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENV || "master",
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
    host: process.env.CONTENTFUL_HOST
  });

  return client
    .getEntries({
      content_type,
      ...options
    })
    .then((contentType) => {
      const updatedContent = typeof callback === 'function' ? callback(contentType) : contentType;
      return updatedContent;
    })
    .catch(console.error)
}

/**
 *
 * @param {string} out path to write data to
 * @param {Object} data json data to write out
 * @returns {Promise}
 */
const writeContentfulData = async (out, data) => {
  // Ensure the path is resolved
  const outFile = path.resolve(out);
  // Ensure circular references are cleaned up
  const safeData = data.stringifySafe ? data.stringifySafe() : data;
  const content = JSON.parse(safeData);

  return fs.outputJSON(
    outFile, content, { spaces: 2 }
  )
  .catch(console.error)
};

const syncContentful = async (
  out = "./content.json",
  contentfulOptions,
  callback = () => {}
) => {
  const content = await getContentfulEntries(contentfulOptions, callback);
  return writeContentfulData(out, content).then(() => console.log(`Successfully wrote content type "${content_type}" to "${out}".`));
}

export { syncContentful, syncAsset, getContentfulEntries, writeContentfulData, fs, fetch };
export { get__name } from './utils.mjs';
