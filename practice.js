
function getMostCommonGenres(books) {
  let genreList = books.map((book) => book.genre);
  return genreList.reduce((acc, genreName) => {
    for (let genre of acc) {
      const count = 0;
      if (!acc[genre]) {
        const name = genreName;
        count = 1;
        acc.push({ name, count });
      } else {
        acc[genre].count++;
      }
    }
    return acc;
  }, []);
}

/*

function getMostCommonGenres(books) {
  let genreList = books.map(book => book.genre)
  return books.reduce((acc,{genre})=>{
      if (!acc[genre]){
        acc.push({name:genre, count:1})
      }else if (acc[genre].name===genre) {
        acc[genre].count+=1
      } return console.log(acc);
    },[])
}*/



function getMostCommonGenres(books){
    let countBooks = books.reduce((acc, {genre})=>{
        if(acc[genre]){
            acc[genre]+=1;
        } else{
            acc[genre]=1;
        }
        return acc;
    }, {});
    let accumulator=[]
    for(let genre in acc){
        accumulator.push({name:genre , count: acc[genre]})
    };
    return accumulator.sort((countA,countB)=> countB-countA).slice(0,5)
}


/*

function getMostCommonGenres(books) {
  let genreList = books.map(book => book.genre)
  return books.reduce((acc,{genre})=>{
      if (!acc[genre]){
        acc.push({name:genre, count:1})
      }else if (acc[genre].name===genre) {
        acc[genre].count+=1
      } return console.log(acc);
    },[])
}*/