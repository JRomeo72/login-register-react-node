import User from "../models/user.model.js"

const getUsers = async (req, res) => {

    let users = await User.find({})
    res.json(users)
}

let userCtr = {
    getUsers
}

export default userCtr