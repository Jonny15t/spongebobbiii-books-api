const ckeditor = require("./_plugins/ckeditor");
const upload = require("./_plugins/upload");
const slugify = require("./_plugins/slugify");

module.exports = () => {
  return {
    ckeditor,
    upload,
    slugify,
  };
};
