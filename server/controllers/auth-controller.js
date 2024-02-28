const User = require("../models/user-model");

// *--------------------------------

// Home Logic

// *--------------------------------

const home = async (req, res) => {
  try {
    res.status(200).send("Hello from router!!");
  } catch (error) {
    console.log(error);
  }
};

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
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "user already exists" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg:"Registration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

// *--------------------------------

// Login Logic

// *--------------------------------

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const userExist = await User.findOne({email});
    if(!userExist){
        return res.status(401).json({msg: "Invalid Credentials"});
    }

    const user = await userExist.checkPassword(password);

    if(user){
        res.status(200).json({
            msg:"Login Successfull",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
          }); 
    }
    else{
        return res.status(401).json({msg: "Invalid Credentials"});
    }

  } catch (error) {
    res.status(500).json("Lgin failed");
  }
};



module.exports = {home, register, login};
