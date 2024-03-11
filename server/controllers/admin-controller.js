const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model");

const getAllUsers = async (req, res, next) => {

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

const getAllContacts = async (req, res, next) => {
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

const getAllServices = async (req, res, next) => {
    try {
        const services = await Service.find();
        if(!services || services.length === 0){
            return res.status(404).json({msg: "No services found!!"});
        }
        return res.status(200).json(services);
    } catch (error) {
        next(error);
    }
}

const deleteUserById = async (req, res, next) => {
    try {
        
        const id = req.params.id;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Check if the user is an admin
        if (user.isAdmin) {
            return res.status(403).json({ msg: 'Admin cannot be deleted' });
        }

        // If the user is not an admin, delete the user
        await User.deleteOne({ _id: id });
        res.status(200).json({msg: "User deleted Successfully!!"});

    } catch (error) {
        next(error)
    }
}

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        res.status(200).json({msg: "Message deleted Successfully!!"})
    } catch (error) {
        next(error)
    }
}


const deleteServiceById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Service.deleteOne({_id:id});
        res.status(200).json({msg: "Service deleted Successfully!!"});
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers, getAllContacts, getAllServices, deleteUserById, deleteContactById, deleteServiceById};