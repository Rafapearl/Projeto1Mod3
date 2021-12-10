const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const cors = require('cors') ;
app.use(cors());

const filmesRouter = require('./routes/routes.filme');
app.use('/filmes', filmesRouter)

app.listen(port, () => {console.log(`A fera está trabalhando na porta ${port}`);});
