import{Router} from 'express';

const router  = Router();
//cria uma nova instancia do Router

router.get("/", (req, res) => {
    res.render("home");
});

export default router;