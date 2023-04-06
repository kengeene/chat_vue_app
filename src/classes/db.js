import { collection, addDoc, getDocs, query, onSnapshot } from "firebase/firestore";
import { db } from '../utils/firebase';

export default class Database {
    constructor(collection){
        this.collection = collection;
        this.listenData = [];
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

    listen(){
        return new Promise((resolve, reject)=>{
            try{
                const q = query(collection(db, this.collection));
                console.log('listening');
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