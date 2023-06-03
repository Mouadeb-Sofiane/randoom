import PocketBase from 'pocketbase';
import { type ArtistesResponse, type OeuvresResponse, Collections, } from './pocketbase-types';
var pocketbase_ip=''
if (import.meta.env.MODE === 'production')
  pocketbase_ip='http://'
else 
  pocketbase_ip='http://127.0.0.1:8090'
export const pb = new PocketBase(pocketbase_ip);

export async function Allartistes() {
    const listeartistes = await pb.collection("artistes").getFullList<ArtistesResponse>() ;
    return listeartistes;
}

export async function AllOeuvres() {
    const listeOeuvres = await pb.collection("oeuvres").getFullList<OeuvresResponse>();
    return listeOeuvres;
}

export async function artistesById(id: string) {
    const unartistes = await pb.collection('artistes').getOne(id);
    return unartistes;
}
export async function AllOeuvresByartiste(p: any){
    const sortedOeuvresartistes = await pb.collection('artistes').getFullList({
     filter: `nom = '${p}'`,
        expand: 'oeuvres',
    });
    return sortedOeuvresartistes;
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

export async function oneIDArtiste(id: string) {
    return await pb.collection(Collections.Artistes).getOne<ArtistesResponse>(id)
  }

export async function oneIDOeuvre(id: string) {
    return await pb.collection(Collections.Oeuvres).getOne<OeuvresResponse>(id)
  }

  