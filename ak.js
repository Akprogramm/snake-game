
console.log('ak khan is here');

 let mymap = new Map();

 let key1='abdul';
 let key2={};
 let key3={
            name: 'ak',
            age: 19,
            subject: 'computerScince'
           };

 mymap.set(key1);
 mymap.set(key2,'I am ak khan 2');
 mymap.set(key3,'I am ak khan 3');

console.log(mymap);          
// console.log(mymap.values());
// console.log(mymap.get(key3));


// for(let key in mymap.keys())
// {
//  console.log(key);
// }


//  mymap.forEach((values,keys)=>{
//  console.log(values,keys);
//  })

 let ak=Array.from(mymap);

 console.log('array is : ',ak);