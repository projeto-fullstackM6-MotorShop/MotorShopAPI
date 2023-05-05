# MotorShopAPI

MotorShopAPI é uma aplicação como objetivo de gerenciar requisições de um site de venda de veiculos, realizando CRUDs de usuários, anuncios, comentários e endereços.

API DOC: https://motor-shop-api-doc.vercel.app/

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
    - [Scripts](#34-scripts)
- [Endpoints](#4-endpoints)
- [Desenvolvedores](#5-desenvolvedores)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Pg](https://www.npmjs.com/package/pg)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Pg](https://www.npmjs.com/package/pg)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [Mailgen](https://www.npmjs.com/package/mailgen)
- [Cors](https://www.npmjs.com/package/cors)
---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo as relações entre as tabelas do banco de dados.

<p align="center">
   <img src="https://user-images.githubusercontent.com/106447484/230074302-02481052-1565-407f-83a5-f0ce51823080.png"  width="900" height="500"/>
</p>

---

## 3. Início Rápido 
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4. Scripts

Executar aplicação em ambiente de desenvolvimento:

```
yarn dev
```

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-Users)
- [Login](#2-Login)
- [Announcements](#3-Announcements)
- [Comments](#4-Comments)

---

## 4.1. **Users**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota                       | Descrição                                                     |
|----------|----------------------------|---------------------------------------------------------------|
| POST     | /user                      | Criação de um usuario                                         |
| GET      | /profile/:userId           | Lista todos os anuncios de um usuario                         |
| GET      | /profile                   | Busca do perfil do usuario logado                             |
| GET      | /user/:userId              | Busca de usuario por id                                       | 
| POST     | /user/resetPassword        | Envia e-mail de recuperação de senha para o e-mail do usuario |
| PATCH    | /user/resetPassword/:token | Recuperação de senha                                          |   
| PATCH    | /user/address              | Edição de endereço                                            |   
| PATCH    | /user                      | Edição do usuario                                             |   
| DELETE   | /user                      | Deleção do usuario logado                                     |   

---

## 4.2. **Login**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota     | Descrição                          |
|----------|----------|------------------------------------|
| POST     | /login   | Rota para autenticação do usuario  |


---

## 4.3. **Announcements**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota                           | Descrição                                 |
|----------|--------------------------------|-------------------------------------------|
| POST     | /announcement                  | Criação de um anuncio                     |
| GET      | /announcement/user             | Lista todos os anuncios do usuario logado |
| GET      | /announcement                  | Lista todos os anuncios                   |
| GET      | /announcement/:announcementId  | Busca de anuncio por id                   | 
| PATCH    | /announcement/:announcementId  | Edição de anuncio                         |    
| DELETE   | /announcement/:announcementId  | Deleção de anuncio                        |   

---

## 4.4. **Comments**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota                      | Descrição                                 |
|----------|---------------------------|-------------------------------------------|
| POST     | /comment/:announcementId  | Criação de um comentario em um anuncio    |
| GET      | /comment/:announcementId  | Lista todos os comentarios de um anuncio  |   
| DELETE   | /comment/:commentId       | Deleção de um comentario                  |   

---

## 5. Desenvolvedores
[ Voltar para o topo ](#tabela-de-conteúdos)

[Clayson Eufrasio](https://github.com/ClaysonRobertoEufrasio)

[Igor Silveira](https://github.com/devIgorSilveira)

[Isaias Gregory](https://github.com/Lightgreg)

[Victoria Milan](https://github.com/victoriamilans)
