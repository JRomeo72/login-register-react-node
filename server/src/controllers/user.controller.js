import User from "../models/user.model.js"

// > User Profile 
const profile = async (req, res) => {

    let { user } = req;
    let userFound = await User.findById(user.id);
    if(!userFound) return res.status(400).send({message: "User not found"});

    console.log(userFound)
    res.send(userFound)
};

let userCtr = {
    profile
}

export default userCtr