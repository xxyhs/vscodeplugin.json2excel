const { Workbook } = require('exceljs')

async function fastExport (data, outputPath, settings = []) {
  const wb = new Workbook();
  const ws = wb.addWorksheet('Data');
  
  console.log(settings);
  // 1. 先写入 headers
  ws.columns = Object.keys(data[0]).map(key => ({ header: key, key }));
  
  // 2. 批量添加行（内部优化）
  ws.addRows(data);
  
  // 3. 流式写入磁盘（不占内存）
  await wb.xlsx.writeFile(outputPath);
}

module.exports = {
  fastExport
}
