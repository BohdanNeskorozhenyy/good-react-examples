/**
 * Иллюстрируем проблему невозможности сделать запрос стандартными способами
 * при помощи useEffect
 * */
const path = require('path');

require('ignore-styles');

require('@babel/register')({
    configFile: path.resolve(__dirname, './babel.config.js'),
});

require('./server');
