import {alunos} from "./AlunoController.js";
import {livros} from "./LivroController.js";

class HomeController {
    listar(req, res) {
        const alunosAtivos = alunos.filter(aluno => aluno.ativo == true);
        const numeroAlunos = alunos.length;
        const livrosAtivos = livros.filter(livro => livro.ativo == true);
        const numeroLivros = livros.length;
        res.render("home", {numeroAlunos, alunosAtivos, numeroLivros, livrosAtivos});
    }
}

export default new HomeController();