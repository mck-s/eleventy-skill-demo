module.exports = function(eleventyConfig) {
    // Passthrough copy for CSS and images
    eleventyConfig.addPassthroughCopy('src/css/main.css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/admin');
    eleventyConfig.addPassthroughCopy('src/_data');

  
    // Return configuration for Eleventy
    return {
      dir: {
        input: "src",    // Source folder for Eleventy templates
        output: "public", // Output folder where Eleventy generates the site
      },
    };
  }; 
  