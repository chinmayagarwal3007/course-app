const express = require("express");

const router = express.Router();

const {getAllUsers, 
    getAllContacts, 
    getAllServices, 
    deleteUserById, 
    deleteContactById, 
    deleteServiceById,
    getUserById,
    updateUserById,
    getServiceById,
    updateServiceById
} = require("../controllers/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleWare = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleWare, getAllUsers);
router.route("/users/deleteUser/:id").delete(authMiddleware, adminMiddleWare, deleteUserById);
router.route("/users/:id").get(authMiddleware, adminMiddleWare, getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleWare, updateUserById);


router.route("/contacts").get(authMiddleware, adminMiddleWare, getAllContacts);
router.route("/contacts/deleteContact/:id").delete(authMiddleware, adminMiddleWare, deleteContactById);


router.route("/services").get(authMiddleware, adminMiddleWare, getAllServices);
router.route("/services/deleteService/:id").delete(authMiddleware, adminMiddleWare, deleteServiceById);
router.route("/services/:id").get(authMiddleware, adminMiddleWare, getServiceById);
router.route("/services/update/:id").patch(authMiddleware, adminMiddleWare, updateServiceById);


module.exports = router;