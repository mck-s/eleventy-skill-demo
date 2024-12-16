module.exports = function(eleventyConfig) {

    eleventy.Config.addPassthroughCopy('css/main.css');
    eleventy.Config.addPassthroughCopy('/images');
    
    return {
    dir: {
    input: "src",
    output: "public"
    }
    };
    }