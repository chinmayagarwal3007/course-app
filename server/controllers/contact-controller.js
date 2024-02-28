const Contact = require('../models/contact-model');

const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        const messageCreated = await Contact.create({ username, email, message });
        res.status(201).json({
            msg: "message sent successfully",
            message: messageCreated
        })
    }
    catch (error) {
        res.status(400).json({ msg: "message can not be delivered"});
    }
}

module.exports = contactForm;
