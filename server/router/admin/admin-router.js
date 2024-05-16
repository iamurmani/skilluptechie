const router = require('express').Router();
const {registerAdmin,loginAdmin} =require("../../controller/admin/admin-controller")




// Register Admin
router.post('/register', registerAdmin)
router.post('/loginAdmin', loginAdmin)





module.exports = router;