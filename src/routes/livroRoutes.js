import{Router} from 'express';
import LivroController from '../controllers/LivroController.js';

const router  = Router();
//cria uma nova instancia do Router

router.get("/", LivroController.listarLivros);
router.post("/", LivroController.cadastrarLivro);
router.post("/:id/excluir", LivroController.excluirLivro);
router.post("/:id/editar", LivroController.editarLivro);


export default router;