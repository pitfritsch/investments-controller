import { firebaseDatabase } from '../utils/firebaseUtils'

export default class FirebaseService {
  
  static getDataList = (nodePath, callback, size = 30) => {
    let query = firebaseDatabase.ref(nodePath).limitToLast(size);

    query.on('value', dataSnapshot => {
      let items = [];
      dataSnapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        items.push(item);
      })
      callback(items)
    })

    return query
  }

  static pushData = async (nodePath, obj) => {
    const ref = firebaseDatabase.ref(nodePath).push()
    const id = ref.key
    await ref.set(obj)
    return id
  }

}