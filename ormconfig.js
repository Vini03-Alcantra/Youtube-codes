const ssl = "?ssl=true";
const urlConnetcion = process.env.DATABASE_URL+ssl;  
console.log("procces in deploy", urlConnetcion)
module.exports = {
  "type": "postgres",
  "url": urlConnetcion,   
  "entities": [
    "dist/models/**/*.js"
 ],
 "migrations": [
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
