const { Workbook } = require('exceljs');
const vscode = require('vscode');
const dayjs = require('dayjs');
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

async function fastExport(data, outputPath, settings = []) {
  const wb = new Workbook();
  const ws = wb.addWorksheet('Data');

  if (settings && settings.length > 0) {
    ws.columns = settings.filter(s => s.selected).map(setting => ({ header: setting.colName || setting.prop, key: setting.prop }));
    data.forEach(item => {
      settings.forEach(setting => {
        if (setting.colType === 'date' && getType(item[setting.prop]) !== 'date') {
          if (item[setting.prop]) {
            const dayjsDate = dayjs(item[setting.prop]);
            if (dayjsDate.isValid()) {
              item[setting.prop] = dayjsDate.toDate();
            }
          } else {
            item[setting.prop] = null; // 没有日期值设置为 null
          }
        }
        if (setting.colType === 'string' && getType(item[setting.prop]) !== 'string') {
          item[setting.prop] = item[setting.prop] ? 'true' : 'false';
        }
        if (setting.colType === 'number' && getType(item[setting.prop]) !== 'number') {
          if (item[setting.prop] !== undefined && item[setting.prop] !== null && !isNaN(+item[setting.prop])) {
            item[setting.prop] = +item[setting.prop];
          }
        }
      })
    });

    ws.columns.forEach(col => {
      const firstRowDataValue = data.find(t => t[col.key])
      let cellValue = '';
      if (firstRowDataValue) {
        if (getType(firstRowDataValue[col.key]) === 'date') {
          cellValue = dayjs(firstRowDataValue[col.key]).format('YYYY-MM-DD HH:mm:ss');
        } else {
          cellValue = firstRowDataValue[col.key] ? firstRowDataValue[col.key].toString() : '';
        }
      };
      col.width = Math.max(col.header.length, cellValue.length) + 5;
    });
    ws.addRows(data);
    const headerRow = ws.getRow(1);

    headerRow.eachCell(cell => {
      cell.font = {
        bold: true
      };
      cell.border = {
        bottom: { style: 'medium' }
      }
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFA5D6A7' }
      };
    })

    ws.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: 1, column: headerRow.cellCount }
    };

    ws.views = [
      {
        state: 'frozen',
        xSplit: 0,
        ySplit: 1,
        topLeftCell: 'A2'
      }
    ];

    await wb.xlsx.writeFile(outputPath);
  } else {
    vscode.window.showWarningMessage(vscode.l10n.t('No Column Selected. Please select at least one column to export.'));
  }
}

module.exports = {
  fastExport
}
