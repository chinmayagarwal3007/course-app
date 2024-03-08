const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({}, {password:0});
        if(!users || users.length === 0){
            return res.status(404).json({msg: "No Users found!!"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async (req, res) => {
    try {
        const messages = await Contact.find();
        if(!messages || messages.length === 0){
            return res.status(404).json({msg: "No messages found!!"});
        }
        return res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
}


module.exports = {getAllUsers, getAllContacts};