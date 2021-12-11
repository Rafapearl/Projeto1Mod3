const blueFilmes = [
    { id:1,
      Filme: 'Nemo',
      Ano: 2003,
      Duração: '1h 41min',
      Gênero: 'Animação',
      Nota: 10,
      Assistido: 'não',
      imagem: 'https://images-na.ssl-images-amazon.com/images/I/61KcmrlBKqL.jpg'


},
{  id:2,
   Filme: 'Gladiador',
   Ano: 2000,
   Duração: '2h 35m',
   Gênero: 'Ação',
   Nota: 8,
   Assistido: 'não',
   imagem: 'https://www.cafecomfilme.com.br/media/k2/items/cache/7a7a1b5b62bd91f168816ae073e91b87_XL.jpg?t=20201213_160849'



},
{ id:3,
  Filme: 'Coringa',
  Ano: 2019,
  Duração: ' 2h 2m',
  Gênero: 'Ação',
  Nota: 9,
  Assistido: 'não',
  imagem: 'https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg'
}
]


const getFilmesService = () => {
    return blueFilmes;
}

const getFilmesByIdService = (idParam) => {
    return blueFilmes.find((filme) => filme.id == idParam);
}

const createFilmeService =(newFilme) => {
   const newId = blueFilmes.length + 1;
   newFilme.id = newId;
   blueFilmes.push(newFilme);
   return newFilme;
}

const updateFilmeService = (idParam, filmeEdit) => {
   const index =  blueFilmes.findIndex((filme) => filme.id == idParam);
   if(index >= 0 ){
    blueFilmes[index] = {
        ...blueFilmes[index],
        ...filmeEdit
   }
   return true
}
   else{
        return false
   }
}

const deleteFilmeService = (idParam) => {
const index =  blueFilmes.findIndex((filme) => filme.id == idParam);
const vagaExcluida = blueFilmes[index]
blueFilmes.splice(index, 1)
return vagaExcluida

}

module.exports = {
    getFilmesService,
    getFilmesByIdService,
    createFilmeService,
    updateFilmeService,
    deleteFilmeService
};