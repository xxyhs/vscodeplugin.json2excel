const enjson = require('./package.nls.json');
const zhcnjson = require('./package.nls.zh-cn.json');
const fs = require('fs');

const newDict = {};
for (const key in enjson) {
  newDict[enjson[key]] = zhcnjson[key];
}
fs.writeFileSync('./l10n/bundle.l10n.zh-cn.json', JSON.stringify(newDict, null, 2));