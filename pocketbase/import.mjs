import {pb} from "./backend.mjs"
import books from "./books.json" assert { type: 'json' };
import series from "./series.json" assert { type: 'json' };
import film from "./film.json" assert { type:'json' };

for (const aBook of books) {
    //console.log(aBook);
    pb.collection("book").create(aBook)
}

for (const aSerie of series) {
    //console.log(aBook);
    pb.collection("serie").create(aSerie)
}

for (const aFilm of film) {
    //console.log(aBook);
    pb.collection("film").create(aFilm)
}

