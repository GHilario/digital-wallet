# Instruções de execução

Primeiramente baixe o repositorio usando o comando
**git clone https://github.com/GHilario/digital-wallet.git**
O projeto possui uma pasta referente ao BackEnd e uma referente ao FrontEnd

Na pasta de Backend siga os seguintes passos:

1. execute o comando **yarn install** para baixar todas as dependências
2. Configure o banco de dados no arquivo src/config/database.js, nele vai ter os campos (host,username,password,database) referente ao seu banco de dados
3. O servidor esta configurado para rodar na porta 3333, caso queira mudar basta trocar no arquivo src/index.js
4. execute o comando **yarn start**
5. A documentação da api pode ser acessada pela rota **/doc**. http://localhost:3333/doc/

Observação: Ao subir o backend será criado um usuário padrão
login: ADMIN
senha: 123456

# Documentação API
**Criar Usuário**
----
  Cria um usuário

* **URL**

  /user

* **Method:**

  `POST`

* **Body Params**
```json
{
  "login": "string",
  "senha": "string",
  "nome": "string"
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json
{
  "login": "string",
  "senha": "string",
  "nome": "string"
}
```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "string" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "string" }`

* **Sample Call:**

  ```javascript
    axios.post('/user', {
    login: 'joao.silva',
    senha: '123456',
    nome: 'João Silva'
  });
  ```
**Login**
----
Endpoint para autenticar um usuário

* **URL**

  /session

* **Method:**

  `POST`
  
* **Body Params**
```json
{
  "login": "string",
  "senha": "string",
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json
{	
  "usuario": {
	  "login": "string",
	  "senha": "string"
  },
  "token":"string"
}
```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "string" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "string" }`

* **Sample Call:**

  ```javascript
    axios.post('/session', {
    login: 'joao.silva',
    senha: '123456'
  });
  ```
**Obter Saldo**
----
Endpoint para exibir o saldo de um usuário

* **URL**

  /saldo

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json
{
  "login": "string",
  "saldo": "number"
}
```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "string" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "string" }`

* **Sample Call:**

  ```javascript
    axios.get('/saldo');
**Criar Movimentação**
----
Endpoint para realizar uma movimentação

* **URL**

  /movimentacao

* **Method:**

  `POST`

* **Body Params**
```json
{
  "login_destino": "string",
  "valor_transferido": "number"
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json
{
  "login_destino": "string",
  "valor_transferido": "number"
}
```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "string" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "string" }`

* **Sample Call:**

  ```javascript
    axios.post('/user', {
    login_destino: 'maria.jose',
    valor_transferido: 50
  });
**Obter Movimentações**
----
Endpoint para listar as movimentações de um usuário

* **URL**

  /movimentacao

* **Method:**

  GET
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json
{
	[
	  "id_transacao": "number",
	  "login_destino": "string",
	  "valor_transferido": "number",
	  "login_origem": "string",
	  "data": "date"
   ]
}
```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "string" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "string" }`

* **Sample Call:**

  ```javascript
    axios.get('/movimentacao');