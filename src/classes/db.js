import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase';

export default class Database {
    constructor(collection){
        this.collection = collection;
    }

    async add({data}){
        try {
  const docRef = await addDoc(collection(db, this.collection), data);
  console.log("Document written with ID: ", docRef.id);
  return docRef;
} catch (e) {
  return e;
}

    }

    get(){
    return new Promise(async(resolve, reject)=>{
        try{
            const querySnapshot = await getDocs(collection(db, this.collection));
            const data = [];
            querySnapshot.forEach((doc) => {
                  data.push(doc.data());
                });
                resolve(data);
        }catch(e){
            reject(e);
        }
    });

    }
}