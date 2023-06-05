import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function Allartistes() {
    const listeartistes = await pb.collection("artistes").getFullList() ;
    return listeartistes;
}

export async function AllOeuvres() {
    const listeOeuvres = await pb.collection("oeuvres").getFullList();
    return listeOeuvres;
}

export async function artistesById(id) {
    const unartistes = await pb.collection('artistes').getOne(id);
    return unartistes;
}
export async function AlloeuvresByartiste(p){
    const sortedoeuvresartistes = await pb.collection('artistes').getFullList({
     filter: nom = `${p}`,
        expand: 'oeuvres',
    });
    return sortedoeuvresartistes;
}

export async function AllartistesByDate(){
    const artistesDate = await pb.collection('artistes').getFullList({
        sort : "date_naissance",
    });
    return artistesDate
}

export async function alloeuvresByDate(){
    const oeuvresDate = await pb.collection('oeuvres').getFullList({
        sort : "date_creation",
    });
    return oeuvresDate
}
