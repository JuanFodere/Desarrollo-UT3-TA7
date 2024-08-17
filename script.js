const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Harry Potter',
        author: 'JK'
    },
    {
        title: 'La Vida es Bella',
        author: 'Paula'
    }
]

function getTheTitles(books){
    let nuevoArreglo = []
    for(let i = 0; i < books.length; i++){
        nuevoArreglo.push(books[i].title)
    }
    console.log(nuevoArreglo)
}

getTheTitles(books)
  