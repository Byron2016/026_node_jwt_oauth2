<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>026_node_jwt_oauth2</h1>
	</div>
</div>

&nbsp;

# Table of contents

---

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technologies used](#technologies-used)
- [References](#references)
- [Steps](#steps)
- [Errors](#errors)

  - <details> <summary>List of Steps</summary>

    - [Install & Setup Vite + React + Bootstrap 5](#-artificial-intelligence-and-bots)

   </details>

[⏪(Back to top)](#table-of-contents)

# Project Description

**026_node_jwt_oauth2** is a practice to build a **Nodejs y mysql, app completa (login, registro)- #1** Nodejs following Youtube DOMINICODE's tutorial [Login Angular 10 - API Node & MySql (Nodejs y mysql, app completa (login, registro)- #1)]
(https://www.youtube.com/watch?v=8si7IFlj0l4&list=PL_9MDdjVuFjHtNjQV2Kvs1xJIazMCH3Pi)
and the other help that you can find into **Reference** section.

# Technology stack

Se hace con un stack tecnológico un poco mezclado

- Se requerirá tener instalado en el ordenador **postman** a fin de poder hacer las pruebas de la API a través de esta herramienta.
- Se utilizara un cliente de base de datos relacional, pera este caso será MySql a través de **Sequel Pro**, se usará [PlanetScale](https://planetscale.com/)
- Se utilizará un servidor realizado en **Nodejs**, junto a nodejs usaremos **express** y no lo haremos con javascript plano sino que usaremos **TypeScript**.
- Para realizar la conexión hacia la base de datos usaremos **TypeORM**
- La base de datos a utilizar será **MySql**
- Para la gestión del usuario como tal se usará **JWT** el mismo que manejará dos roles (admin y otro normal (lo llamaremos reader))

[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

---

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

[⏪(Back to top)](#table-of-contents)

# References

---

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

- Database
  - [PlanetScale](https://planetscale.com/)
  - [PlanetScale - Hosting de MySQL Gratuito y Fácil](https://www.youtube.com/watch?v=XEY-7tKkPik)

[⏪(Back to top)](#table-of-contents)

# Steps

- Update nvm version

  - D:\dev_20220602\00_Documentacion\T_Node_001.txt

- Build project scafolding wiht **typeorm** este creará una estructura compleata para nuestro proyecto, para lo cual creará un directorio con el nombre que le indiquemos, además del cliente de base de datos que usaremos y el servidor.

  ```bash
    npx typeorm init --name login_roles --database mysql --express
  cd login_roles
  ```

  This command is going to install typeorm

  Files created:

  - tsconfig.json: configuración de typeScript
  - package.json: con dependencias que coloca inicialmente
    - devDependencies
      "ts-node": "10.7.0",
      "@types/node": "^16.11.10",
      "typescript": "4.5.2"
    - dependencies":
      "typeorm": "0.3.16",
      "reflect-metadata": "^0.1.13",
      "mysql": "^2.14.1",
      "express": "^4.17.2",
      "body-parser": "^1.19.1"
  - Directorio src:

- Update dependecies

  - Delete from package.json

    ```bash
      rm -rf node_modules
    ```

    - ts-node, @types/node, typescript
    - mysql, express, body-parser

  - Delete node_modules dir.
  - run

    ```bash
      npm i -D ts-node @types/node typescript
    ```

    ```bash
      npm i mysql express
    ```

  Note: body-parser allow us to communicate with client, this can be doing directly with express, for that reason we will not to install it.

- Add new dependencies

  ```bash
    npm i cors jsonwebtoken bcryptjs class-validator helmet
  ```

  Note:

  - cors: Allow us to accept all request from a front end.
  - jsonwebtoken: Allow us to generate a token for our user
  - bcryptjs: Allow us to encrypt user´s password
  - class-validator: Allow us to validate information of our database fields.
  - helmet:

  ```bash
    npm i -D ts-node-dev typescript @types/bcryptjs @types/cors @types/jsonwebtoken @types/express @types/node
  ```

  Note:

  - ts-node-dev: Allow us to reload our server
  - typescript:
  - Some @types to work with typescript.
    - /bcryptjs:
    - /cors:
    - /jsonwebtoken:
    - /express:
    - /node:

- Modify tsconfig.json file

  - change "outDir": from "./build" to "./dist",
  - Add "rootDir": "./src",

- Modify package.json file (11.00)

  ```bash
  	"scripts": {
  	  ...
  	  "tsc": "tsc",
  	  "dev": "set debug=* && ts-node-dev --respawn --transpile-only ./	src/index.ts"
  	}
  ```

- DataBase Configuration (11.55)

  - Add file "./src/data-key.json

        ```bash
        {
          "database": {
            "username": "xxxxx",
            "password": "yyyyy",
            "database": "dbname"
          }
        }
        ```

  - Add data-key.json to .gitignore file.

  - Modify file "data-source.ts"

    ```bash
    	...
    	const dataKey:any = require("../data-key.json");

    		export const AppDataSource = new DataSource({
    		...
    			username: dataKey.database.username,
    			password: dataKey.database.password,
    			database: "login_node",
    		...
          	subscribers: [],
        ssl: {
          rejectUnauthorized: false,
        },
    		})
    ```

    Note: ssl... is used to avoid error about ssl conection.

  - PlanetScale

    - Create a dataBase in [PlanetScale](https://planetscale.com/)

      - Press button "Create your first database"
      - Name: login_node
      - Region: us-east-1(N.Virginia)
      - copy username and password.
      - Go to Settings tabs
        - Select Passwords menu
        - Press button "New Password"
          - Name: write a user name ejam: admin
          - Branch: main
          - Role: Admin
        - COPY PASSWORD

    - Go to Console tab
    - show databases;
    - use dbname;
    - show tables;
    -

  - Test
  - run

    ```bash
        npm run dev
    ```

- Clean code generated by **typeorm**

  - delete "/src/routes.ts" file
  - Modify "/src/index.ts" file

    ```bash
      import * as express from "express";
      import { Request, Response } from "express";
      import { AppDataSource } from "./data-source";

      AppDataSource.initialize()
        .then(async () => {
          // create express app
          const app = express();
          // start express server
          app.listen(3000);

          console.log(
            "Express server has started on port 3000.       Open http://localhost:3000/users to see       results"
          );
        })
        .catch((error) => console.log(error));
    ```

    [⏪(Back to top)](#table-of-contents)

# Errors:

- Module '"xxxx/login_roles/node_modules/dotenv/lib/main"' has no default export.ts(1192)
- File 'xxxx/login_roles/node_modules/@types/express/index.d.ts' is not a module.ts(2306)
- DATABASE:

  - trying to connect to DB:
    - errno: 1105,
      sqlMessage: 'unknown error: Code: UNAVAILABLE\n' + 'server does not allow insecure connections, client must use SSL/TLS\n',
    - Solution: - Add into file "data-source.ts"

  ```bash
  	...
  	subscribers: [],
    ssl: {
      rejectUnauthorized: false,
    },
  ```

[⏪(Back to top)](#table-of-contents)

```

```
