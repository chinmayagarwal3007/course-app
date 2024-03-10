const express = require("express");

const router = express.Router();

const {getAllUsers, getAllContacts, getAllServices} = require("../controllers/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleWare = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleWare, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleWare, getAllContacts);
router.route("/services").get(authMiddleware, adminMiddleWare, getAllServices);

module.exports = router;