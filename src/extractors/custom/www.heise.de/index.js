export const WwwHeiseDeExtractor = {
  domain: 'www.heise.de',

  title: {
    selectors: [
      'header .a-article-header__title',
      'header .article__heading',
      'header .article__title',
    ],
  },

  author: {
    selectors: [
      'header .a-creator__name',
      'header .publish-info__author',
      'header .article__author',
    ],
  },

  date_published: {
    selectors: [
      ['header .meta-datetime', 'datetime'],
      ['header .publish-info__date', 'datetime'],
    ],
  },

  dek: {
    selectors: ['header h2'],
  },

  lead_image_url: {
    selectors: [
      ['header figure.article-image a-img', 'src'],
      ['header figure.article__lead img', 'src'],
    ],
  },

  excerpt: {
    selectors: [
      '.a-article-header__lead',
      'header .article-content__lead',
      'header .article__description',
    ],
  },

  next_page_url: {
    selectors: [['footer a.seite_weiter', 'href']],
  },

  content: {
    selectors: ['.article-content', ['article > *:not(header)']],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['nav'],
  },
};
