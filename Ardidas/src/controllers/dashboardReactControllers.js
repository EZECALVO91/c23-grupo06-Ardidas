const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");

const usersController = {
// ---------------ACA EMPIEZA EL DASHBOARD DE REACT--------------------------------------------------------------------------------------------------------------

    DashboardReact:(req, res) => {
      res.render("./dashboardReact/dashboardReact", {title: "Dashboard", usuarioLogeado: req.session.usuarioLogin,}); // vista de formulario de login.
    },


}

module.exports = usersController;
