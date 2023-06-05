import {pb} from "./backend.mjs"
import books from "./books.json" assert { type: 'json' };
import series from "./series.json" assert { type: 'json' };
import film from "./film.json" assert { type:'json' };

for (const aBook of books) {
    //console.log(aBook);
    await pb.collection("books").create(aBook)
}

for (const aSerie of series) {
    //console.log(aSerie);
   await pb.collection("series").create(aSerie)
}

for (const aFilm of film) {
    //console.log(aFilm);
    await pb.collection("film").create(aFilm)
}

