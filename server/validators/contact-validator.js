const {z} = require('zod');

const ContactSchema = z.object({
    username: z
    .string({required_error: "UserName is required"})
    .trim()
    .min(1, {message: "Username is required!"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invalid email address"}),

    message: z
    .string({required_error:"messsage is required"})
    .trim()
    .min(1, {message: "messsage is required!"})

})

module.exports = {ContactSchema};