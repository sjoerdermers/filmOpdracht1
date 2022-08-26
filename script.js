movies.map((movie) => {
  let imageSource = movie.poster; // pak de url uit de array

  let posterImage = document.createElement("img"); // creeer een image element in de DOM
  posterImage.src = imageSource; // plak de source (url) in het image element

  let listItem = document.createElement("li"); // creeer een list element in de DOM
  const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

  listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
  pakUl.appendChild(listItem); // in de ul komt het listItem
  return movie;
});

//

const pakAlleFilms = document.getElementsByName("films");
console.log("Voorbeeld van een type film pakken:", pakAlleFilms[3]);

//

// list leeg maken bij *klik* NewMovies
pakAlleFilms[0].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];
    console.log(x);
    pakParent.removeChild(pakKind);
  }
});
//

// list leeg maken bij *klik* Avengers
pakAlleFilms[1].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];

    pakParent.removeChild(pakKind);
  }
});
//

// De avenger films pakken uit array en nieuwe array maken: keuzeSelectie
pakAlleFilms[1].addEventListener("click", function () {
  for (x = 0; x < movies.length; x++) {
    let zoekAvengers = movies[x].title.toLowerCase().includes("avengers");
    if (zoekAvengers === true) {
      //console.log("Avenger films:", movies[x], zoekAvengers);
      // nieuwe array maken:
      const keuzeSelectie = function (a) {
        a.push(movies[x]);
        return a;
      };
      console.log(keuzeSelectie([])); //===>werkt wel!
    }
  }
  console.log(keuzeSelectie); //====>werkt niet? undefined
});

// Avenger films inplakken in list
pakAlleFilms[1].addEventListener("click", function () {
  keuzeSelectie.map((movie) => {
    let imageSource = movie.poster; // pak de url uit de array

    let posterImage = document.createElement("img"); // creeer een image element in de DOM
    posterImage.src = imageSource; // plak de source (url) in het image element

    let listItem = document.createElement("li"); // creeer een list element in de DOM
    const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

    listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
    pakUl.appendChild(listItem); // in de ul komt het listItem
    return movie;
  });
});

// de includes functie:

/* // X-men
 for (x = 0; x < movies.length; x++) {
  let zoekXMen = movies[x].title.toLowerCase().includes("x-men");

  console.log("xmen films", movies[x], zoekXMen);
}  */

//
//
//
// ------------eerst array maken met alleen new movies  en dan moves.map((newmovies)=> { etc})

pakAlleFilms[2].addEventListener("click", function () {
  console.log("dit zijn de x-men films:");
});

pakAlleFilms[3].addEventListener("click", function () {
  console.log("dit zijn de princesess films:");
});

pakAlleFilms[4].addEventListener("click", function () {
  console.log("dit zijn de batmens films:");
});

//
