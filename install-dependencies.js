const { exec } = require('child_process');

exec('npm install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao instalar as dependências: ${error.message}`);
    return;
  }
  console.log(stdout);
});