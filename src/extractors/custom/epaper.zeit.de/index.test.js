import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('EpaperZeitDeExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://epaper.zeit.de/article/bf397a9d07bfaf9d17b4939773dfc96b8f39585143ca74fb5ea035dfccff22a9';
      const html = fs.readFileSync(
        './fixtures/epaper.zeit.de/1566927390034.html'
      );
      result = Mercury.parse(url, { html, fallback: false });
    });

    it('is selected properly', () => {
      // This test should be passing by default.
      // It sanity checks that the correct parser
      // is being selected for URLs from this domain
      const extractor = getExtractor(url);
      assert.equal(extractor.domain, URL.parse(url).hostname);
    });

    it('returns the title', async () => {
      // To pass this test, fill out the title selector
      // in ./src/extractors/custom/epaper.zeit.de/index.js.
      const { title } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(title, `Lässt sich ein No Deal noch verhindern?`);
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/epaper.zeit.de/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, 'Politik · Jan Roß');
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/epaper.zeit.de/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, null);
    });

    it('returns the excerpt', async () => {
      // To pass this test, fill out the excerpt selector
      // in ./src/extractors/custom/epaper.zeit.de/index.js.
      const { excerpt } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        excerpt,
        'Großbritannien steht kurz vor einem chaotischen EU-Ausstieg. Dabei gibt es noch\n                            allerletzte Möglichkeiten'
      );
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/epaper.zeit.de/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(lead_image_url, null);
    });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/epaper.zeit.de/index.js.
      // You may also want to make use of the clean and transform
      // options.
      const { content } = await result;

      const $ = cheerio.load(content || '');

      const first13 = excerptContent(
        $('*')
          .first()
          .text(),
        13
      );

      // Update these values with the expected values from
      // the article.
      assert.equal(
        first13,
        'Politik · Jan Roß Großbritannien steht kurz vor einem chaotischen EU-Ausstieg. Dabei gibt'
      );
    });
    it('removes intertitles', async () => {
      const { content } = await result;
      const $ = cheerio.load(content || '');
      const intertitles = $('intertitle').text();
      assert.equal(intertitles, '');
    });
  });
});
