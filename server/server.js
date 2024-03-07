require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();

const AuthRoute = require('./router/auth-router');
const ContactRoute = require('./router/contact-router');
const ServiceRoute = require('./router/service-router');

const {connectDb} = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT ,DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/form", ContactRoute); 
app.use("/api/data", ServiceRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
})
