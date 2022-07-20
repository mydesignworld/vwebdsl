import { inject } from 'vue'
  export default {
    props: {
      title: {
        type: String,
        default: 'title'
      },   
    },

    setup () {
        const selectedTitle = inject("selectedTitle")
        
        return {
            selectedTitle
        }
    },    

    computed: {
      tabId () {
        return this.title.toLowerCase().replace(/ /g, "-");
      },      
    },
  }