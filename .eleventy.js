module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");
  /*eleventyConfig.addPassThroughCopy("css");*/

  return {
    dir : {
      input : "src",
      output: "public",
    },
  };
};
