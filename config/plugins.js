const ckeditor = require("./_plugins/ckeditor");
const upload = require("./_plugins/upload");

module.exports = () => {
  return {
    ckeditor,
    upload,
  };
};
