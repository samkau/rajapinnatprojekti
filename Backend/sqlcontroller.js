var mysql = require('mysql');
var con = null;
module.exports = {
  initConnection: function (){
    con = mysql.createConnection({
      host: "localhost",
      user: "testuser",
      password: "testuser",
      database: "rent_a_car_db"
    });
    con.connect(function(err) {
        if (err) throw err;
    });
  },

  list_all_cars: function (req,res) {
    con.query("SELECT * FROM car", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getByLicense: function (req,res) {
    con.query("SELECT * FROM car WHERE license_plate=\""+req.params.license_plate+"\"", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getByBrand: function (req,res) {
    con.query("SELECT * FROM car WHERE brand=\""+req.params.brand+"\"", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getByModel: function (req,res) {
    con.query("SELECT * FROM car where model=\""+req.params.model+"\"", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getById: function (req,res) {
    con.query("SELECT * FROM car where car_id=\""+req.params.carId+"\"", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getByYear: function (req,res) {req.body.owner_id+
    con.query("SELECT * FROM car where makeyear=\""+req.params.makeYear+"\"", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getAvailable: function (req,res) {
    con.query("SELECT * FROM car where available=req.body.owner_id+true", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  getNotAvailable: function (req,res) {
    con.query("SELECT * FROM car where available=false", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  addcar: function (req,res) {
    con.query("INSERT INTO car (license_plate,brand,model,makeyear,owner_id,available,available_from)\
     VALUES (\'"+req.body.license_plate+"\',\'"+req.body.brand+"\',\'"+req.body.model+"\',\'"+req.body.makeyear+"\',\'"+req.body.owner_id+"\',\
     \'"+req.body.available+"\',\'"+req.body.available_from+"\')",
     function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

    res.send('Car added')
    console.log(req.body)
  },

  updatecar: function (req,res) {
    con.query("UPDATE car \
      SET license_plate=\'"+req.body.license_plate+"\',brand=\'"+req.body.brand+"\',model=\'"+req.body.model+"\'\
      ,makeyear=\'"+req.body.makeyear+"\',owner_id=\'"+req.body.owner_id+"\',available=\'"+req.body.available+"\'\
      ,available_from=\'"+req.body.available_from+"\' WHERE license_plate=\'"+req.body.license_plate+"\'",
     function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

    res.send('Car updated')
    console.log(req.body)
  },

  removecar: function (req,res) {
    con.query("DELETE FROM rent WHERE car_id=\'"+req.params.deletecar+"\'", function (err, result, fields) {
      if (err) throw err;
      con.query("DELETE FROM car WHERE car_id=\'"+req.params.deletecar+"\'", function (err, result, fields) {
        if (err) throw err;
        });
    });
    res.send('Car with license_plate '+req.params.deletecar+" has been removed")
  }

}
