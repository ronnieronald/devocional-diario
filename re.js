const fs = require('fs');

for (let i = 1; i <= 31; i++) {
  const fecha = 32 - i;
  fs.renameSync(`página_${i}.jpg`, `${fecha} de julio.jpg`);
}

console.log('✅ Listo:');
console.log('   página_31.jpg → 1 de julio.jpg');
console.log('   página_30.jpg → 2 de julio.jpg');
console.log('   ...');
console.log('   página_1.jpg → 31 de julio.jpg');
