const fs = require('fs');

for (let i = 1; i <= 31; i++) {
  const nombreOriginal = `${i} de julio.jpg`;
  const nombreNuevo = `${i}-de-julio.jpg`; // o `${i}-julio.jpg`
  fs.renameSync(nombreOriginal, nombreNuevo);
}

console.log('✅ Renombrado para web:');
console.log('   1 de julio.jpg → 1-de-julio.jpg');
