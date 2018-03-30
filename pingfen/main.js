Vue.component('x-rate', {
  template: `
    <div>
      <span v-for="star,index in stars" :key="index">
        <span v-if="star" @click="$emit('input',index+1)">★</span>
        <span v-else @click="$emit('input',index+1)">☆</span>
      </span>
    </div>
`,
  props: ['value'],
  
  computed: {
    stars: function() {
      let array = [false,false,false,false,false]
      for (let i = 0; i < array.length; i++) {
        array[i] = i < this.value
      }
      return array
    }
  }
  
})

new Vue({
  el: "#app",
  data(){
    return {
      value:3
    }
  }
})