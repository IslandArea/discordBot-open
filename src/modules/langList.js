const { readdirSync } = require('fs');
const path = require('path');

let fileNames = [];

readdirSync(path.relative("src/lang/", "/")).filter(fls => fls.endsWith('.json')).forEach(f => {
    fileNames.push(f.slice(0, -5));
});

/**
 * @type {Array}
 * @returns File names
 */
module.exports = fileNames;
