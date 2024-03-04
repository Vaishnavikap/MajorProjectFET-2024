const express = require("express");
const {createRole, deleteRole, getAllRoles, updateRole  }= require("../controller/rolecontroller.js");
const roleRouter = express.Router();
const Role=require("../model/rolemodel.js")




//Create a new role in DB
roleRouter.post('/create', createRole);

//Update a role in DB
roleRouter.put('/update/:id', updateRole);

//Get All Role
roleRouter.get('/getAll', getAllRoles)

//Delete a role
roleRouter.delete('/deleteRole/:id',deleteRole)

module.exports = roleRouter;