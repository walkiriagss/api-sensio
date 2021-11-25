<h1 align="center">Back-End Teste Sensio ERP</h1>
<p align="center">O presente trabalho é um teste para uma vaga de emprego, onde deveria ser desenvolver um pequeno sistema web onde os usuários deverão conseguir incluir clientes, fazendo uma busca por CNPJs. Outra tela deve listas todos os clientes cadastrados.</p>
<p align="center">Este é o Back-End do projeto</p>
<h4 align="center"> 
	🚧  Node  🚀 Em construção...  🚧
</h4>
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
É preciso deixar este código rodando para ter acessar a api que está apenas localmente. Para isso você deve criar banco de dados com a tabela disponível em api-sensio/bd.sql, fazer as configurações do seu 
PostgreSQL em api-sensio/.env e por fim, executar a aplicação.

### 🎲 Rodando 

```bash
# Clone este repositório
$ git clone <https://github.com/walkiriagss/financeira.git>

# Acesse a pasta do projeto backend no terminal/cmd
$ cd api-sensio

# Instale as dependências
$ npm install

# Acesse a pasta de criação da tabela do banco de dados
$ cd api-sensio/bd.sql

# Copie a tabela e cole o em um novo script no portgreSql

# Subistitua as configurações do banco para as configurações do seu banco em  
$ cd back/.env
DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}

# Instale as dependências
$ npm install

# Execute a aplicação backend
$ npm start

# O servidor inciará na porta:8080 - acesse <http://localhost:8080> - Deixe esse rodando e execute o front com instruções abaixo

# Acesse a pasta do projeto no terminal/cmd
$ cd financeira

# Instale as dependências
$ npm install

# Execute a aplicação backend
