const db = require('../../Config/database');

// ==> Método responsável por criar uma novo cliente:
exports.createCliente = async (req, res) => {
  const {cnpj, nome, razao, atividade, bairro, cidade, estado, cep } = req.body;
  const errors = []

  const cnpjUnico = 'SELECT * FROM cliente WHERE cnpj = $1';
  db.query(cnpjUnico, [cnpj]).then(function(resultadoDaConsultaCnpj) {
    if (resultadoDaConsultaCnpj.rows.length > 0) {
      return res.status(400).send({error: 'Empresa já cadastrado'});
    }
  });

  const {rows} = await db.query(
    'INSERT INTO cliente (cnpj, nome, razao, atividade, bairro, cidade, estado, cep) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
    [cnpj, nome, razao, atividade, bairro, cidade, estado, cep],
  );
  const id = rows[0].id;
  res.status(201).send({
    res: {cnpj, nome, razao, atividade, bairro, cidade, estado, cep},
  });
};

// ==> Método responsável por listar todos os clientes:
exports.listAllClientes = async (req, res) => {
  const response = await db.query('SELECT * FROM cliente ');
  res.status(200).send(response.rows);
};

// ==> Método responsável por encontrar cliente pelo cnpj:
exports.getCNPJ = async (req, res) => {
  const consultarCNPJ = require('consultar-cnpj')
  const cnpj = req.params.cnpj;

  const empresa = await consultarCNPJ(cnpj);
  res.status(200).send(empresa);

  console.log(empresa)

 // const id = req.params.id;
//  const response = await db.query('SELECT * FROM transacoes WHERE id = $1', [
 //   id,
 // ]);
 // res.status(200).send(response.rows);
};

