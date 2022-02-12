
const { PurgeCSS } = require('purgecss'); 

async function runTheThing() {

  const result = await new PurgeCSS().purge({
    // Settings and stuff
    content: ["**/*.html"],
    css: ["static/css/main.css"],
    safelist: {
    standard: [/[d]/],
    }
  });

  const fs = require('fs');
  fs.writeFile('test.css', result[0].css, function (err) {
      if (err) { throw err; }
      console.log('test.cssが作成されました');
  });
}

runTheThing();