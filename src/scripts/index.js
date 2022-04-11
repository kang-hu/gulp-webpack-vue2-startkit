import {getTest} from 'Scripts/services/testApi.js'
import helloWorld from 'Scripts/components/HelloWorld.vue'

getTest().then(res=>{
  console.log(res)
})

var app = new Vue({
  el: '#app',
  components: {
    helloWorld
  },
  data() {
    return {
      hello: 'hello!'
    }
  },
})