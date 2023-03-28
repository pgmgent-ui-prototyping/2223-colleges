const wrapWithSpan = (content) => {
    return `<span>${content}</span>`;
}

const sort = (arr) => {
    const sortedArray = arr.sort((a, b) => {
        return a.data.nav.order - b.data.nav.order;
    });

    return sortedArray;
};

const getCurrentYear = () => {
    return new Date().getFullYear();
  }

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
      'input/assets/styles/dist/': 'styles/',
      'input/assets/images/': 'img/',
  });

  // Shortcodes!
  eleventyConfig.addFilter('wrapWithSpan', wrapWithSpan);
  eleventyConfig.addFilter('sortByOrder', sort);

  eleventyConfig.addShortcode('currentYear', getCurrentYear);

  return {
      dir: {
          input: './input/pages/',
          output: 'output',
          includes: '../_partials',
          layouts: '../_layouts',
          data: '../_data'
      }
  }
}