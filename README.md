# MotorShopAPI


## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
    - [Scripts](#34-scripts)
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
