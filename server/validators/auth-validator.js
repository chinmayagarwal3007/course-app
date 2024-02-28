const {z} = require('zod');

const signupSchema = z.object({
    username: z
    .string({required_error:"Username is required"})
    .trim()
    .min(3, {message: "Username must be atleast of 3 chars."})
    .max(255, {message: "Username must be not be more than 255 chars"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invalid email address"}),

    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message: "Phone no. should be atleast 10 digits long."})
    .max(20, {message: "Phone no. cannot be greater than 20 digits."}),

    password: z
    .string({required_error:"Password is required"})
    .min(6, {message: "Pasword must be atleast of 6 chars"})
    .max(1024, {message: "Password must be not be more than 1024 chars"}),
});

const LoginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim(),

    password: z
    .string({required_error:"Password is required"})
});




module.exports = {signupSchema, LoginSchema};