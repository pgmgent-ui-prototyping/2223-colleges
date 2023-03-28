function sortByOrder(values) {
    let vals = [...values]
    return vals.sort((a, b) => a.data.nav.order - b.data.nav.order)
}

function getCurrentYear() {
    return new Date().getFullYear();
}


function sayHello(name) {
    return `Hi ${name}`;
}

module.exports = (eleventyConfig) => {
    eleventyConfig.addShortcode('sayHello', sayHello);

    
  eleventyConfig.addPassthroughCopy({
      'input/assets/styles/dist/': 'styles/',
      'input/assets/images/': 'img/',
  });

    // Create the filter function.

      // Add the filter.
eleventyConfig.addFilter('sortByOrder', sortByOrder)


eleventyConfig.addShortcode('currentYear', getCurrentYear);

eleventyConfig.addShortcode('currentYear', getCurrentYear)

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