const add=(a,b)=>{
          return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                              if(a<0 || b<0){
                                        return reject('Number must be non-negeative')
                              }
                              resolve(a+b)
                    },3000)
          })
}

const doWork = async ()=>{
          const sum = await add(1,-30)
          const sum2 = await add(sum,10)
          const sum3 = await add(sum2,-20)
          return sum3
}

doWork().then((res)=>{
          console.log('result', res)
}).catch((e)=>{
          console.log('e', e)
})