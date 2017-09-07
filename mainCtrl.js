module.exports = {
    getAllUsers:(req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.getAllUsers().then(users=>res.status("200").send(users)).catch(()=>res.status("500").send());
     },
     getAllVehicles:(req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.getAllVehicles().then(vehicles=>res.status("200").send(vehicles)).catch(()=>res.status("500").send());
     },
     addUser: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const{name, email} = req.body;
        dbInstance.addUser([name, email]).then(users=>res.status("200").send(users)).catch((err)=>res.status("500").send(err));
     },
    addVehicle: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const{make, model, year, owner_id} = req.body;
        dbInstance.addVehicle([make, model, year, owner_id]).then(vehicles=>res.status("200").send(vehicles)).catch(()=>res.status("500").send());
     },
    getCountCarsByID:(req,res,next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params;
        dbInstance.getCountCarsByID([id]).then(vehicle=>res.status("200").send(vehicle)).catch(()=>res.status("500").send());
     },
    getCarsByUserID:(req,res,next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params;
        dbInstance.getVehiclesByUserID([id]).then(vehicle=>res.status("200").send(vehicle)).catch(()=>res.status("500").send());
     },
    getByEmail:(req,res,next) => {
        const dbInstance = req.app.get('db')
        const {userEmail, userFirstStart} = req.query;
        if(userEmail) {
        dbInstance.userEmail([userEmail]).then(vehicle=>res.status("200").send(vehicle)).catch((error)=>res.status("500").send(error));
        return;
        }
        if(userFirstStart) {
        dbInstance.vehicleEmail([userFirstStart]).then(vehicle=>res.status("200").send(vehicle)).catch((error)=>res.status("500").send(error));
        return;
        }
     },
    getVehiclesByYear:(req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.getVehiclesByYear().then(vehicles=>res.status("200").send(vehicles)).catch(()=>res.status("500").send());
     },
    UpdateVehicleOwner:(req,res,next) => {
        const dbInstance = req.app.get('db')
        const {vid, uid} = req.params;
        dbInstance.UpdateVehicleOwner([vid, uid]).then(vehicles=>res.status("200").send(vehicles)).catch(()=>res.status("500").send());
     },
    DeleteVehicleByID:(req,res,next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params;
        dbInstance.DeleteVehicleByID([id]).then(vehicle=>res.status("200").send(vehicle)).catch(()=>res.status("500").send());
     },
    DeleteOwnership:(req,res,next) => {
        console.log(req.params)
        const dbInstance = req.app.get('db')
        const {vid, uid} = req.params;
        dbInstance.DeleteOwnership([vid, uid]).then(vehicle=>res.status("200").send(vehicle)).catch(()=>res.status("500").send());
     }




}
