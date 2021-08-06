const authors = [
    {
      id: 1,
      name: [{
        first: "Philip",
        last: "Dullman",
      }],
      series: ["His Dark Materials", "Sally Lockhart"],
    },
    {
      id: 2,
      name: [{
        first: "Terry",
        last: "Pratchett",
      }],
      series: ["Discworld", "Long Earth"],
    },
    {
        id: 3,
        name: [{
          first: "Terry",
          last: "Aratchett",
        }],
        series: ["Discworld", "Long Earth"],
      },
  ];


  const sortByLastName = authors => {
      return borrowList = authors.map((author) => author.name);
  }
  console.log(sortByLastName(authors))


  function getTotalNumberOfBorrows(account, books) {
    let borrowList = books.map((book) => book.borrows.map(borrow => borrow.id))
    let borrowed = borrowList.filter((id) => account.id)
    return borrowed.length
  }

  function getTotalNumberOfBorrows(account, books) {
    return books.reduce((acc,book)=>{book.borrows.forEach(borrow => 
        if (borrow.id === account.id) return acc++)},0)
  }



  return books.reduce((acc,book)=>{
      return book.borrows.forEach(borrow => {
    if (borrow.id === account.id) return acc++}
      )} , 0)