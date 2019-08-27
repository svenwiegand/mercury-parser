import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwHeiseDeExtractor', () => {
  describe('heise news extractor', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://www.heise.de/newsticker/meldung/Fairphone-3-das-moeglichst-nachhaltig-Smartphone-4505848.html';
      const html = fs.readFileSync(
        './fixtures/www.heise.de/1566904612597.html'
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
        `Fairphone 3 im Hands-on: Das möglichst nachhaltige Smartphone`
      );
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, 'Jörg Wirtgen & Jan-Keno Janssen');
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, `2019-08-27T10:00:00.000Z`);
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
        'https://www.heise.de/imgs/18/2/7/3/7/6/7/5/fairphone-1-92812e2727a92303.png'
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
        'Modular aufgebaut, konfliktfreie Rohstoffe, langer Support – das Fairphone 3 hat viele Vorteile, ist aber teurer und schwerer als technisch ähnliche Handys.'
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
        'Das niederländische Unternehmen Fairphone bringt das dritte Smartphone mit nachhaltigem Anspruch, das Fairphone'
      );
    });
  });

  describe('heise developer extractor', () => {
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

  describe('heise magazine extractor', () => {
    let result;
    let url;
    beforeAll(() => {
      url = 'https://www.heise.de/select/ct/2019/18/1566917336782380';
      const html = fs.readFileSync(
        './fixtures/www.heise.de/1566906117596.html'
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
      assert.equal(title, `Abschied vom Passwort`);
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, 'Von Jürgen Schmidt');
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, null);
    });

    it('returns the dek', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { dek } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(dek, 'Passwortloses Anmelden dank FIDO2');
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/www.heise.de/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        lead_image_url,
        'https://heise.cloudimg.io/width/900/q65.png-lossy-65.webp-lossy-65.foil1/_www-heise-de_/select/ct/2019/18/1566917336782380/contentimages/image-1565610525241990.jpg'
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
        'Es ist keine Zukunftsmusik, sondern bereits ganz real möglich, sich sicher und komplett ohne Passwort bei Internet-Diensten anzumelden. Der noch recht junge Internet-Standard FIDO2 nimmt zügig Fahrt auf und verspricht, Passwörter bald überflüssig zu machen.'
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
        'Es ist keine Zukunftsmusik, sondern bereits ganz real möglich, sich sicher und komplett'
      );
    });
  });
});
