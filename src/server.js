const app = require('./app');
const environment = require('./enviroment');

const {URL,port} = environment;

app.listen(8080, () => console.log(`Servidor aberto em ${URL}`));

