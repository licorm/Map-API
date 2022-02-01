const Pool = require('pg').Pool
const fs = require('fs')
const array = require('./details');

const details = array.array

detailsArray = [];
for (const detail of details) {
  const detailsObject = {};
  detailsObject.name = detail.name;
  detailsObject.latitude = detail.coordinates.latitude;
  detailsObject.longitude = detail.coordinates.longitude;
  detailsObject.address = detail.location.address1
  detailsArray.push(detailsObject)
}
console.log(detailsArray)
// ID SERIAL PRIMARY KEY NOT NULL,
//   NAME VARCHAR(255) NOT NULL,
//   TYPE VARCHAR(50) NOT NULL,
//   LATITUDE SMALLINT,
//   LONGITUDE SMALLINT,
//   ADDRESS VARCHAR(100)

const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

for (const shop of detailsArray) {
  const text = `INSERT INTO shops(name, latitude, longitude, address)VALUES($1, $2, $3, $4)`
  const values = [`${shop.name}`, shop.latitude, shop.longitude, `${shop.address}`]
      // for (const shop in detailsArray) {
        pool.query(
          text, values,
          (err, res) => {
            console.log(err, res);
            
          }
        );
  
      // }
      
}
pool.end()
