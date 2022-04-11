import {getTest} from 'Scripts/services/testApi.js'

const Name = ['Mike', 'Jacky', 'Andy']
Name.forEach((obj, idx)=> console.log(`${idx} => ${obj}`))

getTest().then(res=>{
  console.log(res)
})