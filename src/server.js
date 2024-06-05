const app = require('./app');
const environment = require('./enviroment');

const PORT = environment.port;

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));

