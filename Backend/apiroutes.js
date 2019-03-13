
module.exports = function(app) {
    var sqlctrl = require('./sqlcontroller');
    //Public data with GET
    app.get('/cars', sqlctrl.list_all_cars);

	app.get('/cars/license_plate/:license_plate', sqlctrl.getByLicense);

	app.get('/cars/brand/:brand', sqlctrl.getByBrand);

	app.get('/cars/model/:model', sqlctrl.getByModel);

	app.get('/cars/carid/:carId', sqlctrl.getById);

	app.get('/cars/makeyear/:makeYear', sqlctrl.getByYear);

	app.get('/cars/available', sqlctrl.getAvailable);

	app.get('/cars/notAvailable', sqlctrl.getNotAvailable);

	//Registered data with PUT,POST,UPDATE,DELETE,PATCH

  app.put('/cars/addcar', sqlctrl.addcar)
	//app.post('/cars/:addcar', sqlctrl.addcar)
	app.delete('/cars/deletecar/:deletecar', sqlctrl.removecar)
	app.patch('/cars/modifycar', sqlctrl.updatecar)

};
