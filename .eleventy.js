module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");
  /*eleventyConfig.addPassthroughCopy("css");*/

  return {
    dir : {
      input : "src",
      output: "public",
    },
  };
};
