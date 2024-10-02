
const print=function(a,b){
    console.log(a,b);
}

const hashtable = new Map([
    ['name', 'islem'],
    ['job', 'Engineer'],
    [26802205, 'Telephone Number'],
    [true, 'this is true'],
    [print, 'Print value']
    

]);
// console.log(hashtable.get('name'));
// console.log(hashtable.get('job'));
// console.log(hashtable.get(26802205));
// console.log(hashtable.get(print));
// hashtable.set('age',20); //tanzed fi map
// console.log(hashtable.has('age')); //t9olk mawjoud w non fi map
// console.log(hashtable.has('country'));
//  //remove key value pair:
//  hashtable.delete('name');
 //get the size:
 //console.log(hashtable.size);

 //loop over map:
//  for(let item of hashtable){
//     console.log(item)
//  }

// for(let[key, value] of hashtable){
//     console.log(key,value)
// }

//console.log(hashtable.keys())
//console.log(hashtable.values());
hashtable.clear()
console.log(hashtable)



//console.log(hashtable)

