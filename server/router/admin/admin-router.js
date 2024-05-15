const router = require('express').Router();
const {registerAdmin} =require("../../controller/admin/admin-controller")




// Register Admin
router.post('/register', registerAdmin)





module.exports = router;