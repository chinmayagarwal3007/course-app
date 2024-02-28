require("dotenv").config();
const express = require('express');
const app = express();
const AuthRoute = require('./router/auth-router');
const ContactRoute = require('./router/contact-router');
const {connectDb} = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/form", ContactRoute); 

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
})
