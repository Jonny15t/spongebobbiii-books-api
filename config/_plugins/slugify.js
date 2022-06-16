module.exports = {
  enabled: true,
  config: {
    contentTypes: {
      "book-review": {
        field: "slug",
        references: "review_title",
      },
    },
  },
};
