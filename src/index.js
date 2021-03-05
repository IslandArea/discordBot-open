const langList = require('./modules/langList');

module.exports = {

    /**
     * @module EN
     * @description English (English) Language
     */
    en: require('./lang/en.json'),

    /**
     * @module PL
     * @description Polish (Polski) Language
     */
    pl: require('./lang/pl.json'),

    /**
     * @module langList
     * @type {Array}
     */
    langList: langList
}