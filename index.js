

import express from 'express';
import{resolve} from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');


//importando rotas
import alunoRoutes from "./src/routes/alunoRoutes.js";

class App{
    constructor(){//o construtor é chamado quando a classe é instanciada
        //aqui é onde a aplicação é inicializada
        this.app = express();//cria uma instancia do express
        this.middleware();//configura o middleware
        this.routes();//configura as rotas
    }

    middleware(){//configura o middleware 
        //configurando o engine de template handlebars
         // Configura o Handlebars como motor de visualização
        this.app.engine('handlebars', engine());
        this.app.set('view engine', 'handlebars');
        this.app.set('views', resolve(__dirname,'src','views'));

        //configurar pasta public 
        this.app.use(express.static(resolve(__dirname, 'public')));

        this.app.use(express.json());
        //o express.json() é um middleware que faz o parse do corpo da requisição
        //para o formato json, ou seja, transforma o corpo da requisição em um objeto javascript
        //usado para receber dados no formato json
        //exemplo: { "name": "Lucas" } -> { name: "Lucas" }

        this.app.use(express.urlencoded({extended: true}));
        //o express.urlencoded() é um middleware que faz o parse do corpo da requisição
        //para o formato urlencoded, ou seja, transforma o corpo da requisição em um objeto javascript
        //usado para receber dados no formato urlencoded
        //exemplo: name=Lucas -> { name: "Lucas" }
        //html forms geralmente usam esse formato
    }
    routes(){
        this.app.get("/", alunoRoutes);
    }

}

export default new App().app;
//exporta a instancia da classe App, ou seja, a aplicação express
//aqui é onde a aplicação é inicializada
//e exportada para ser usada em outros arquivos
//o new App() cria uma nova instancia da classe App
//e o .app retorna a aplicação express
//ou seja, a aplicação express é inicializada e exportada
//para ser usada em outros arquivos
//exemplo: import app from './index.js'


