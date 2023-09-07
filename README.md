# Trybe Travel - API de Gestão de Agência de Viagens
Este projeto consiste em uma API RESTful desenvolvida em TypeScript utilizando a arquitetura em camadas MSC e o ORM Sequelize para gerenciamento do banco de dados. A API é responsável pela gestão de pacotes de viagem com duração mínima de 3 dias, saindo de Fortaleza para diversos destinos.


## :hammer: Dependências
As seguintes dependências já estão incluídas no arquivo package.json:
- Express
- Nodemon
- Sequelize
- Mysql2
- Sequelize-cli
- Jsonwebtoken

## :computer: Visualize este projeto:
- Instale as dependências: `npm install`
- Execute a aplicação para inicializar o container do banco de dados e da API: `docker-compose up -d`
- Dentro do container `trybe_travel`, crie o banco de dados, as tabelas e insira os dados nas tabelas packages e users: `npm run db:reset`.

## :bulb: Habilidades:
A API possui as seguintes rotas:

- `PATCH /packages/:id`: Atualiza os dados do pacote de viagem correspondente ao ID informado.
- `DELETE /packages/:id`: Remove o pacote de viagem correspondente ao ID informado.
- `POST /login`: Realiza o login do usuário e retorna um token JWT válido por 1 hora.
- `POST /users`: Retorna todos os usuários cadastrados no banco de dados.

### Autenticação
As rotas /users exigem autenticação com JWT. Para acessá-las, é necessário enviar o token JWT no header Authorization da requisição. O token JWT pode ser obtido através da rota /login.