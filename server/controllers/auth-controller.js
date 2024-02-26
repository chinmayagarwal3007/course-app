// testing something

const User = require('../models/user-model')

// *--------------------------------

// Home Logic

// *--------------------------------

const home = async (req, res) => {
    try {
        res.status(200).send("Hello from router!!");
    } catch (error) {
        console.log(error);
    }
}


// *--------------------------------

// Registration Logic

// *--------------------------------

// 1. Get Registration Data
// 2. Check Email Existense
// 3. Hash Paasword
// 4. Create user
// 5. Save to DB
// 6. Respond with Registration successfull

const register = async (req, res) => {
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"user already exists"});
        }

        const userCreated = await User.create({username, email, phone, password});
        res.send(userCreated);

    } catch (error) {
        console.log(error);
    }
}

// *--------------------------------

// Login Logic

// *--------------------------------

const login = async(req, res) => {
    try {
        res.status(200).json({ message: "Hello from Login page!!"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {home, register, login};