import {pb} from "./backend.mjs"
import books from "./books.json" assert { type: 'json' };
import books from "./series.json" assert { type: 'json' };

for (const aBook of books) {
    //console.log(aBook);
    pb.collection("book").create(aBook)
}

for (const aSerie of series) {
    //console.log(aBook);
    pb.collection("serie").create(aSerie)
}