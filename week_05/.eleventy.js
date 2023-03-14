module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({
        './input/assets/styles': 'styles/'
    });

    return {
        dir: {
            input: './input/pages/',
            output: 'output',
            includes: '../_partials',
            layouts: '../_layouts',
        }
    }
}