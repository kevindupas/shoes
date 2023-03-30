"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../components");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
/**
 * GET method route
 * @example http://localhost:PORT/v1/users
 *
 * @swagger
 * /v1/categorie-products:
 *   get:
 *     description: Get all stored categorie-products in Database
 *     tags: ["categorie-products"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of users
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Users'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.ProductComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/products
 *
 * @swagger
 * /v1/products:
 *   post:
 *      description: Create new Product
 *      tags: ["products"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductSchema'
 *            example:
 *              categorie: Shoes
 *              unit_price: 80
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UserSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.ProductComponent.create);
router.get('/:id', components_1.ProductComponent.findOne);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=ProductRouter.js.map