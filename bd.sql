CREATE TABLE cliente
(
    id serial NOT NULL,
    cnpj varchar(14) NOT NULL,
    nome varchar(100) NOT NULL,
    razao varchar(100) NOT NULL,
    atividade varchar(100),
    bairro varchar(100),
    cidade varchar(100),
    estado varchar(100),
    cep varchar(100),
    UNIQUE (cnpj),
    PRIMARY KEY (id)
);
