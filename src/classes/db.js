import { collection, addDoc, getDocs, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '../utils/firebase';

export default class Database {
    constructor(collection){
        this.collection = collection;
        this.listenData = [];
    }

    async add({data}){
        try {
  const docRef = await addDoc(collection(db, this.collection), data);
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

    listen(){
        return new Promise((resolve, reject)=>{
            try{
                const q = query(collection(db, this.collection), orderBy('dateAdded'));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const data = [];
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    this.listenData = data
            });
        } catch(e){
            console.log('error', e);
        }
    });
}
}