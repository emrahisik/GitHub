const arr = [
    {name: 'John',employed: true},
    {name: 'Josh',employed: true},
    {name: 'Jake',employed: false},
    {name: 'Jordan',employed: false},    
]

const out=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
]

//let f = arr.forEach(element => console.log(element))
//const found = arr.find(el => el.name==='Josh')
//console.log(found)


function getMostCommonGenres(books) {
    //let genreList = books.map(book => book.genre)
    return books.reduce((acc,book)=>{
        acc.forEach(genre => {
          if (!acc[genre].name){
            let name = book.genre;
            let count = 1
            acc.push({name, count})
          }else{
            acc[genre].count+=1
          }
        });
        return acc
      },[])
  }






  books.filter(book => {
    return authors.reduce((acc,author) => {
      const name = `${author.name.first} ${author.name.last}`;
      let count = 0;
      if (book.authorId===author.id){
        count+=book.borrows.length
      };
      acc.push({name,count});
      return acc
    },[])
  })