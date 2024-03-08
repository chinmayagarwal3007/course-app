const express = require("express");

const router = express.Router();

const {getAllUsers, getAllContacts} = require("../controllers/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleWare = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleWare, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleWare, getAllContacts);

module.exports = router;