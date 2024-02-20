# Installation
## /server
```
npm init
```
```
npm install
```
```
npx prisma migrate dev --schema=./src/db/prisma/schema.prisma
```
```
npm run start:dev
```
## .env properties
* DATABASE_URL (i.e. postgresql://postgres:{password}@localhost:5432/{db_name}?schema=public)
* PORT
## Example of create user model
```
  {
    name: "Daniel",
    city: "London",
    email: "daniel@mail.ru",
    bday: "1973-01-1",
    phone: "123456",
    avatar: *some blob*
  }
```
## /client
```
npm init
```
```
npm install
```
```
npm start
```
## .env properties
* REACT_APP_API_URL

