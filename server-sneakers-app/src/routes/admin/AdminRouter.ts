import { Router } from 'express';
import { UserComponent } from '../../components';
import { CategorieProductComponent } from '../../components';
import { ProductComponent } from '../../components';
/**
 * @constant {express.Router}
 */
const router: Router = Router();
console.log('admin router')
router.get('/users', UserComponent.findAll);
router.post('/users', UserComponent.create);
router.get('/users/:id', UserComponent.findOne);
router.delete('/users/:id', UserComponent.remove);
// router.patch('/users/:id', UserComponent.updateOne);

router.get('/categorie-products', CategorieProductComponent.findAll);
router.post('/categorie-products', CategorieProductComponent.create);
router.get('/categorie-products/:id', CategorieProductComponent.findOne);
router.delete('/categorie-products/:id', CategorieProductComponent.remove);

/** Routes Products */
router.get('/products', CategorieProductComponent.findAll);
router.post('/products', CategorieProductComponent.create);
router.get('/products/:id', CategorieProductComponent.findOne);
router.delete('/products/:id', CategorieProductComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
