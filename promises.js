//callbacks
// const docallback = (callback)=>{
//           setTimeout(()=>{
//                     //callback('this is my error',undefined)
//                     callback(undefined,[1,2,3,4,5])
//           },3000)
// }
// docallback((err,res)=>{
//           if(err){
//                     return console.log(err)
//           }
//           console.log(res)
// })


//promises 
const promises = new Promise((resolve,reject)=>{
          setTimeout(()=>{
                    //resolve([34,5,6,7])
                    reject('Something went wrong')
          },3000)
})
promises.then((data)=>{
          console.log('Success' , data)
}).catch((err)=>{
          console.log('Error', err)
})