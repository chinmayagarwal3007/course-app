const express = require("express");

const router = express.Router();

const {getAllUsers, getAllContacts, getAllServices, deleteUserById, deleteContactById, deleteServiceById} = require("../controllers/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleWare = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleWare, getAllUsers);
router.route("/users/deleteUser/:id").delete(authMiddleware, adminMiddleWare, deleteUserById);
router.route("/contacts").get(authMiddleware, adminMiddleWare, getAllContacts);
router.route("/contacts/deleteContact/:id").delete(authMiddleware, adminMiddleWare, deleteContactById);
router.route("/services").get(authMiddleware, adminMiddleWare, getAllServices);
router.route("/services/deleteService/:id").delete(authMiddleware, adminMiddleWare, deleteServiceById);

module.exports = router;