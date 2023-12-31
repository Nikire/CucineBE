# CucineBE
Cuciné App Backend

## Setting up dotenv
You'll need a .env configuration file with this keys:

```env
PORT = 3001 // optional
DB_PORT = 5432
DB_NAME = cucine
DB_USER = postgres
DB_PASSWORD = (yourpassword)
```
## Setting up database

I've made a script to create the database instantly by running the following command:

```node
node src/scripts/setupDB.js
```

## API Reference 


### Error handling

Every error that occurs whem you are trying to request something, you will get a response like this:

```json
{
	"error": true,
	"message": "..."
}
```

Where `"message"` explains the error and most cases explains how to solve it.

<br/>

### Ingredients endpoint '/ingredients'

#### **GET** '/'

**200 Response example from '/ingredients/**

```json
{
  "data":[
    {
      "id": "40b8ae1d-db03-4079-aa7f-3b57ff2a2514",
      "name": "Harina",
      "svg": "<svg...",
    },
    {
      "id": "61dfaa2f-90cd-46ef-9628-c1e58aa5871f",
      "name": "Azúcar",
      "svg": "<svg..."
    }
  ]
}
```