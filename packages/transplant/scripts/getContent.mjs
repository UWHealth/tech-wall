import getContentfulEntries from "simple-contentful-fetch/index.mjs";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import QRCode from 'qrcode';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const OUT_PATH = path.resolve(__dirname, '../public/content/stories.json');
const QR_DIR = path.resolve(__dirname, '../public/qr-codes');

const parseImage = (image) => {
  return image && image.fields ? image.fields.url : '';
}

getContentfulEntries(
  { content_type: "pagePatientStory", limit: 300 },
  OUT_PATH,
  (data) => {
    const updatedItems = data.items.map((entry, i) => {

      const { slug, pageTitle, patientName, bynderIntroMedia, introCopy, contentBody } = entry.fields;
      const url = 'https://www.uwhealth.org/patient-stories/' + slug;
      const qrcodePath = `${QR_DIR}/${slug}.svg`;

      QRCode.toFile(qrcodePath, url, (err) => { if (err) console.error(err) })

      return {
        title: pageTitle,
        name: patientName,
        image: parseImage(bynderIntroMedia),
        intro: documentToHtmlString(introCopy),
        body: documentToHtmlString(contentBody),
        url,
        qrcodeUrl:path.relative('../public/', qrcodePath),
      }
    });

    data.items = updatedItems;

    return data;
  }
);
