import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function Allfilm() {
    const listefilm = await pb.collection("film").getFullList() ;
    return listefilm;
}

export async function Allbooks() {
    const listebooks = await pb.collection("books").getFullList();
    return listebooks;
}

export async function filmById(id) {
    const aFilm = await pb.collection('film').getOne(id);
    return aFilm;
}


export async function AllfilmByDate(){
    const filmDate = await pb.collection('film').getFullList({
        sort : "Released_Year",
    });
    return filmDate
}

export async function allbooksByRat(){
    const booksRat = await pb.collection('books').getFullList({
        sort : "average_rating",
    });
    return booksRat
}
