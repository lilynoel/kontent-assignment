import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { Personas } from '../taxonomies/personas';
import { Sitemap } from '../taxonomies/sitemap_538125f';

/**
 * Generated by '@kontent-ai/model-generator@5.2.0'
 *
 * Article
 * Id: b7aa4a53-d9b1-48cf-b7a6-ed0b182c4b89
 * Codename: article
 */
export type Article = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: 85d5efc6-f47e-2fde-a6f5-0950fe89ecd1
   * Codename: title
   *
   * The title should fit within 60 characters.Our voice and tone recommendations: — avoid coffee jargon.
   */
  title: Elements.TextElement;

  /**
   * Teaser image (asset)
   * Required: false
   * Id: 62eb9881-e222-6b81-91d2-fdf052726414
   * Codename: teaser_image
   *
   * Upload an image at a resolution of at least 600 × 1200 px.
   */
  teaserImage: Elements.AssetsElement;

  /**
   * Post date (date_time)
   * Required: false
   * Id: 4ae5f7a9-fe1f-1e8c-bfec-d321455139c4
   * Codename: post_date
   *
   * Provide a date that will appear on the live site as the date this article was posted live. This date will also influence the order of the articles.
   */
  postDate: Elements.DateTimeElement;

  /**
   * Summary (text)
   * Required: false
   * Id: 90550cbe-7bff-40a9-2947-9c81489fe562
   * Codename: summary
   *
   * Provide a short summary of the text. It should be catchy and make the visitor want to read the whole article.The summary should fit within 160 characters.
   */
  summary: Elements.TextElement;

  /**
   * Body Copy (rich_text)
   * Required: false
   * Id: 108ed7c0-fc8c-c0ec-d0b5-5a8071408b54
   * Codename: body_copy
   *
   * Keep the article structured with concise paragraphs complemented with headlines that will help the reader navigate through the article's content.Preferred glossary terms — coffee, brewing, grinder, drip, roast, filter.
   */
  bodyCopy: Elements.RichTextElement;

  /**
   * Related articles (modular_content)
   * Required: false
   * Id: ee7c3687-b469-6c56-3ac6-c8dfdc8b58b5
   * Codename: related_articles
   *
   * Provide articles with related topics.
   */
  relatedArticles: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Meta keywords (text)
   * Required: false
   * Id: 5efb2425-5987-a4a6-a2d3-b14712b56e73
   * Codename: meta_keywords
   *
   * Enter tags separated with a comma. Example: coffee, "coffee roast”, grinder
   */
  metaKeywords: Elements.TextElement;

  /**
   * Personas (taxonomy)
   * Required: false
   * Id: 0a16b642-ac3e-584d-a45a-ba354a30b2bd
   * Codename: personas
   *
   * Provide all personas for which this article is relevant.
   */
  personas: Elements.TaxonomyElement<Personas>;

  /**
   * Meta description (text)
   * Required: false
   * Id: b9dc537c-2518-e4f5-8325-ce4fce26171e
   * Codename: meta_description
   *
   * Sum up the blog for SEO purposes. Limit for the meta description is 160 characters.
   */
  metaDescription: Elements.TextElement;

  /**
   * URL pattern (url_slug)
   * Required: false
   * Id: f2ff5e3f-a9ca-4604-58b0-34a2ad6a7cf1
   * Codename: url_pattern
   *
   * Provide a SEO-friendly URL.
   */
  urlPattern: Elements.UrlSlugElement;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: a4d7a146-7e39-4001-b462-c5a0c734f3f5
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;

  /**
   * Meta title (text)
   * Required: false
   * Id: 09398b24-61ed-512e-5b5c-affd54a098e5
   * Codename: metadata__meta_title
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Length: 30–60 characters
   */
  metadataMetaTitle: Elements.TextElement;

  /**
   * Meta description (text)
   * Required: false
   * Id: 2e555cc1-1eae-520c-189e-28548904f529
   * Codename: metadata__meta_description
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Length: 70–150 characters
   */
  metadataMetaDescription: Elements.TextElement;

  /**
   * og:title (text)
   * Required: false
   * Id: 1db86c7a-e836-3c4e-01e6-4f704ad38ba5
   * Codename: metadata__og_title
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Max. 60 characters
   */
  metadataOgTitle: Elements.TextElement;

  /**
   * og:description (text)
   * Required: false
   * Id: 05987dc9-ebe3-7b61-b949-522eb42dbc0d
   * Codename: metadata__og_description
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Max. 150 characters
   */
  metadataOgDescription: Elements.TextElement;

  /**
   * og:image (asset)
   * Required: false
   * Id: ce6cda71-9d38-1d57-3ac3-ec9b2e286edd
   * Codename: metadata__og_image
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Use images that are at least 1200 × 630 px for best display on high resolution devices. At the minimum, you should use images that are 600 × 315 px to display link page posts with larger images. Images may be up to 1 MB in size.
   */
  metadataOgImage: Elements.AssetsElement;

  /**
   * twitter:site (text)
   * Required: false
   * Id: 34213fdf-0015-8f4f-e5e6-83c6842cff4a
   * Codename: metadata__twitter_site
   * From snippet: Metadata
   * Snippet codename: metadata
   */
  metadataTwitterSite: Elements.TextElement;

  /**
   * twitter:creator (text)
   * Required: false
   * Id: 68f65095-c9b4-05d6-a473-2883c2f0c7af
   * Codename: metadata__twitter_creator
   * From snippet: Metadata
   * Snippet codename: metadata
   */
  metadataTwitterCreator: Elements.TextElement;

  /**
   * twitter:title (text)
   * Required: false
   * Id: b208d3dc-bd8d-b1af-5ef0-747650730ba7
   * Codename: metadata__twitter_title
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Max. 60 characters
   */
  metadataTwitterTitle: Elements.TextElement;

  /**
   * twitter:description (text)
   * Required: false
   * Id: b7d1dd8b-a5d8-2ad8-2f57-49881363f6f7
   * Codename: metadata__twitter_description
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description, or use this field to describe the general services provided by the website. Max. 150 characters.
   */
  metadataTwitterDescription: Elements.TextElement;

  /**
   * twitter:image (asset)
   * Required: false
   * Id: 63793ba4-6004-a93c-68ca-52a1f0482bca
   * Codename: metadata__twitter_image
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Twitter's recommendation: A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card should be at least 280 × 150 px. Images may be up to 1 MB in size.Let's go for 560 × 300 px.
   */
  metadataTwitterImage: Elements.AssetsElement;
}>;
