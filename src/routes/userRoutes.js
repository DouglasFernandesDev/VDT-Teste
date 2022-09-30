import { Router } from 'express';
import CorridasController from '../controllers/CorridasController';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UserController.index);
router.get('/corrida/', loginRequired, CorridasController.show);
router.get('/corrida/:id', loginRequired, CorridasController.getById);
router.get('/:id', UserController.show);

// router.post('/corrida/:id/reserve', loginRequired, ReserveController.store);
router.post('/corrida/', loginRequired, CorridasController.store);
router.post('/', loginRequired, UserController.store);

router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
