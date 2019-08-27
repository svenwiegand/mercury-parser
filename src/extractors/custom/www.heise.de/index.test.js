import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwHeiseDeExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://www.heise.de/developer/artikel/Barrierefreiheit-Stolpersteine-bei-mobilen-Anwendungen-ueberwinden-Teil-2-4500303.html';
      const html = fs.readFileSync(
        './fixtures/www.heise.de/1566901916104.html'
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
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { title } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        title,
        `Barrierefreiheit: Stolpersteine bei mobilen Anwendungen überwinden, Teil 2`
      );
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, 'Roman Zimmer, Alexander Huber, Martin Kinting');
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, `2019-08-27T08:12:00.000Z`);
    });

    it('returns the dek', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { dek } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(dek, null);
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        lead_image_url,
        'https://www.heise.de/developer/imgs/06/2/7/3/3/6/8/1/accessibility-shutterstock-f03f3155d0416c40.jpeg'
      );
    });

    it('returns the excerpt', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { excerpt } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        excerpt,
        'Der barrierefreie Zugang zu Apps ist wichtig. Allgemeine Designrichtlinien und konkrete Maßnahmen helfen bei der Umsetzung.'
      );
    });

    it('returns the next_page_url', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { next_page_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        next_page_url,
        'https://www.heise.de/developer/artikel/Barrierefreiheit-Stolpersteine-bei-mobilen-Anwendungen-ueberwinden-Teil-2-4500303.html?seite=2'
      );
    });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/www.heise.de/index.js.
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
        'Im Frühjahr 2009 erschien die erste nach einer Süßspeise benannte Version des damals'
      );
    });
  });
});
