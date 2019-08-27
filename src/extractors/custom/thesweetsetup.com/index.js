export const ThesweetsetupComExtractor = {
  domain: 'thesweetsetup.com',

  title: {
    selectors: ['header h1'],
  },

  author: {
    selectors: ['header .framed a'],
  },

  date_published: {
    selectors: ['header .post-date'],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [['article .article-hero img', 'src']],
  },

  content: {
    selectors: ['article'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
