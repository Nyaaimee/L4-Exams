import Users from "../modules/users.module.js"

const userController = {};

// get all users
userController.getUsers = (req,res) =>{
    res.send(Users);
}

// add user
userController.addUser = (req,res) =>{
    const newUser = req.body;
    res.send(newUser);
}
export default userController;