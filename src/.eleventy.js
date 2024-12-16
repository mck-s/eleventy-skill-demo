module.exports = function(eleventyConfig) {

    eleventy.Config.addPassthroughCopy('./src/style.css');
    eleventy.Config.addPassthroughCopy('./src/assets');
    
    return {
    dir: {
    input: "src",
    output: "_site"
    }
    };
    }