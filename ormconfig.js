const ssl = "?ssl=true";
const urlConnetcion = process.env.DATABASE_URL  
console.log("procces in deploy", urlConnetcion)
module.exports = {
  "type": "postgres",
  "url": urlConnetcion,   
  "extra": {
    "ssl": "true"
  },
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
