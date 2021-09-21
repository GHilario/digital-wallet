# Instruções de execução

Primeiramente baixe o repositorio usando o comando
**git clone https://github.com/GHilario/digital-wallet.git**
O projeto possui uma pasta referente ao BackEnd e uma referente ao FrontEnd

Na pasta de Backend siga os seguintes passos:

1. execute o comando **yarn install** para baixar todas as dependências
2. Configure o banco de dados no arquivo src/config/database.js, nele vai ter os campos (host,username,password,database) referente ao seu banco de dados
3. rode o comando **yarn migrate** para criar as tabelas do banco de dados
4. O servidor esta configurado para rodar na porta 3333, caso queira mudar basta trocar no arquivo src/index.js
5. execute o comando **yarn start**
6. A documentação da api pode ser acessada pela rota **/doc**. http://localhost:3333/doc/
