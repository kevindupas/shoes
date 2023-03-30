"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../../components");
const components_2 = require("../../components");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
console.log('admin router');
router.get('/users', components_1.UserComponent.findAll);
router.post('/users', components_1.UserComponent.create);
router.get('/users/:id', components_1.UserComponent.findOne);
router.delete('/users/:id', components_1.UserComponent.remove);
// router.patch('/users/:id', UserComponent.updateOne);
router.get('/categorie-products', components_2.CategorieProductComponent.findAll);
router.post('/categorie-products', components_2.CategorieProductComponent.create);
router.get('/categorie-products/:id', components_2.CategorieProductComponent.findOne);
router.delete('/categorie-products/:id', components_2.CategorieProductComponent.remove);
/** Routes Products */
router.get('/products', components_2.CategorieProductComponent.findAll);
router.post('/products', components_2.CategorieProductComponent.create);
router.get('/products/:id', components_2.CategorieProductComponent.findOne);
router.delete('/products/:id', components_2.CategorieProductComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=AdminRouter.js.map