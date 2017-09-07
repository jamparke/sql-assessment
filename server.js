const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , config = require('./config')

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive(config.connectionString).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============
app.delete('/api/user/:uid/vehicle/:vid', mainCtrl.DeleteOwnership);
app.post('/api/users', mainCtrl.addUser);
app.get('/api/users', mainCtrl.getAllUsers);
app.get('/api/user/:id/vehiclecount', mainCtrl.getCountCarsByID);
app.get('/api/user/:id/vehicle', mainCtrl.getCarsByUserID);
app.get('/api/newervehiclesbyyear', mainCtrl.getVehiclesByYear);
app.get('/api/vehicle', mainCtrl.getByEmail);
app.put('/api/vehicle/:vid/user/:uid', mainCtrl.UpdateVehicleOwner)
app.post('/api/vehicles', mainCtrl.addVehicle);
app.delete('/api/vehicle/:id', mainCtrl.DeleteVehicleByID);
app.get('/api/vehicles', mainCtrl.getAllVehicles);







// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
