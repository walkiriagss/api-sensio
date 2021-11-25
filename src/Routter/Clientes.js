const router = require('express-promise-router')();
const ClientesController = require('../Controller/Clientes');

// ==> Definindo as rotas do CRUD - 'Cliente':

// ==> Rota responsável por criar uma nova 'Cliente': (POST): localhost:8080/api/clientes
router.post('/clientes', ClientesController.createCliente);

// ==> Rota responsável por listar todos os 'Cliente': (GET): localhost:8080/api/clientes

router.get('/clientes', ClientesController.listAllClientes);

// ==> Rota responsável por selecionar 'Cliente' pelo 'cnpj' : (GET): localhost:8080/api/consultacpnj/1545254345
router.get('/consultacpnj/:cnpj', ClientesController.getCNPJ);


module.exports = router;

