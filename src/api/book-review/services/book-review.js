'use strict';

/**
 * book-review service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-review.book-review');
