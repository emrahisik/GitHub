const authors = [
    {
      id: 1,
      name: {
        firstName: "Philip",
        surname: "Pullman",
      },
      series: ["His Dark Materials", "Sally Lockhart"],
    },
    {
      id: 2,
      name: {
        firstName: "Terry",
        lastName: "Pratchett",
      },
      series: ["Discworld", "Long Earth"],
    },
  ];



function getSeriesListById(authors, id) {
     return !id;
  
    let selected = null;
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      if (author.id === id) selected = author;
    }
    if (!selected) return [];
  
    const message = `Series list: ${selected.series.join(", ")}`;
    console.log(message)
    return message;
  }

  console.log(getSeriesListById(authors))