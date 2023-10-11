# CucineBE
Cuciné App Backend

## Setting up dotenv
You'll need a .env configuration file with this keys:

```env
PORT = 3001 // optional
DB_PORT = 5432
DB_NAME = cucine
DB_USER = postgres
DB_PASSWORD = 
```
## Setting up database

I've made a script to create the database instantly by running the following command:

```node
node src/scripts/setupDB.js
```