import fs from 'fs-extra';
import path from 'path';
import contentful from 'contentful';
import * as url from 'url';
import 'dotenv/config';
import { write } from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

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

const getContentfulEntries = (
  { content_type = "pagePatientStory", ...options },
  out = "./content.json",
  callback = () => {}
) => {

  const writeOut = (data) => {
    // Ensure the path is resolved
    const outFile = path.resolve(out);
    // Ensure circular references are cleaned up
    const content = JSON.parse(data.stringifySafe());

    fs.outputJSON(
      outFile, content, { spaces: 2 }
    )
    .then(() => console.log(`Successfully wrote content type "${content_type}" to "${outFile}" (${data.items.length} entries).\n`))
    .catch((e) => console.error(e))
  };

  return client
    .getEntries({
      content_type,
      ...options
    })
    .then((contentType) => {
      const updatedContent = typeof callback === 'function' ? callback(contentType) : contentType;

      writeOut(updatedContent);
    })
    .catch((e) => console.error(e))
}

export default getContentfulEntries;
export {getContentfulEntries};
