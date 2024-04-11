const express = require('express');
const router = express.Router();
const {DashboardReactVite} = require('../../controllers/APIS/dashboardReactApi')

router.get("/dashboardReact", DashboardReactVite)

module.exports = router;
