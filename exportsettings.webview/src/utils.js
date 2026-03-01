import dayjs from "dayjs";
export const dataTypeMap = {
  'string': 'string',
  'number': 'number',
  'bool': 'string',
  'date': 'date'
};

export function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};

export function parseSettingsContext(jsonData) {
  if (getType(jsonData) !== 'array') {
    return [];
  }
  if (jsonData.length === 0) {
    return [{
      prop: 'data',
      colName: 'data',
      colType: 'string',
      selected: true
    }];
  }
  const firstItem = jsonData[0];
  let dataType = getType(firstItem);
  if (dataType !== 'object') {
    if (dataType === 'string' && dayjs(firstItem).isValid()) {
      dataType = 'date';
    }
    const colType = dataTypeMap[dataType] || 'string';

    return [{
      prop: 'data',
      colName: 'data',
      colType,
      selected: true
    }];
  }
  return Object.keys(firstItem).map(prop => {
    let propType = getType(firstItem[prop]);
    if (propType === 'string' && dayjs(firstItem[prop]).isValid()) {
      propType = 'date';
    }
    const colType = dataTypeMap[propType] || 'string';
    return {
      prop,
      colName: prop,
      colType,
      selected: true
    };
  })
}

export function diffSettingContext(contextA, contextB) { 
  const strA = contextA.map(t => `${t.prop}-${t.colName}-${t.colType}`).join('|');
  const strB = contextB.map(t => `${t.prop}-${t.colName}-${t.colType}`).join('|');
  return strA !== strB;
}
