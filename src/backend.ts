import PocketBase from 'pocketbase';
import { Collections, type BooksResponse, type SeriesResponse, type FilmResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function RandomFilm() {
    const records = await pb.collection('film').getList<FilmResponse>(1, 1, { sort: '@random' })
    return records
}

export async function Allfilm() {
    const listefilm = await pb.collection("film").getFullList<FilmResponse>() ;
    return listefilm;
}

export async function Allbooks() {
    const listebooks = await pb.collection("books").getFullList<BooksResponse>();
    return listebooks;
}

export async function Allseries() {
    const listeseries = await pb.collection("series").getFullList<SeriesResponse>() ;
    return listeseries;
}

export async function filmById(id: string) {
    const aFilm = await pb.collection('film').getOne(id);
    return aFilm;
}

export async function booksById(id: string) {
    const aBooks = await pb.collection('books').getOne(id);
    return aBooks;
}

export async function seriesById(id: string) {
    const aSeries = await pb.collection('series').getOne(id);
    return aSeries;
}

export async function AllfilmByDate(){
    const filmDate = await pb.collection('film').getFullList({
        sort : "Released_Year",
    });
    return filmDate
}

export async function allseriesByRunt(){
    const seriesRunt = await pb.collection('books').getFullList({
        sort : "Runtime_of_Series",
    });
    return seriesRunt
}


export async function oneIDFilm(id: string) {
    return await pb.collection(Collections.Film).getOne<FilmResponse>(id)
  }

export async function oneIDSeries(id: string) {
    return await pb.collection(Collections.Series).getOne<SeriesResponse>(id)
  }

export async function oneIDBooks(id: string) {
    return await pb.collection(Collections.Books).getOne<BooksResponse>(id)
  }
