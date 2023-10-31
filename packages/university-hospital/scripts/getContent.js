import { syncAsset, writeContentfulData, getContentfulEntries, get__name } from '@uwhealth/simple-contentful-fetch';
import path from 'node:path';

const __dirname = get__name(import.meta.url, true);

// const contentfulData = getContentfulEntries(); // TODO: implement

syncAsset(
  path.resolve(__dirname, '../public/', 'remote-assets/Tech-Wall-Lake.mp4'),
  'https://bynder.uwhealth.org/m/1b36dd22807177c4/original/Tech-Wall-Lake.mp4' //TODO: sync assets referenced in contentfulData
);

writeContentfulData(
  path.resolve(__dirname, '../src/content/layout/base.json'),
  JSON.stringify({ video: '/public/remote-assets/Tech-Wall-Lake.mp4' }, null, 0) // TODO: will be replaced with `contentfulData`
);
