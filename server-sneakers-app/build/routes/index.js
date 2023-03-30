"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express = require("express");
const http = require("http");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const jwtConfig = require("../config/middleware/jwtAuth");
const AuthRouter_1 = require("./AuthRouter");
const UserRouter_1 = require("./UserRouter");
const ProductRouter_1 = require("./ProductRouter");
const CategorieProductRouter_1 = require("./CategorieProductRouter");
const AdminRouter_1 = require("./admin/AdminRouter");
const swaggerDef = require('../../swaggerDef');
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    /**
     * @description
     *  Forwards any requests to the /v1/users URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/users', jwtConfig.isAuthenticated, UserRouter_1.default);
    /***************** */
    /**
     * @description
     *  Forwards any requests to the /v1/cproducts URI to our ProductRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/products', ProductRouter_1.default);
    /***************** */
    /**
     * @description
     *  Forwards any requests to the /v1/categorie-products URI to our CategorieProductRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/categorie-products', CategorieProductRouter_1.default);
    /****** ADMIN ROUTER */
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/v1/admin', jwtConfig.isAuthenticated, AdminRouter_1.default);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter_1.default);
    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc({
        swaggerDefinition: swaggerDef,
        apis: [path.join(__dirname, '../../src/**/**/*.ts')],
    })));
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map