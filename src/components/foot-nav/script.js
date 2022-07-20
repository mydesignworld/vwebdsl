export default {
  name: 'FootNav',
  props: {
    prevNav: {
      type: String,
      default: '/'
    },
    nextNav: {
      type: String,
      default: ''
    },
    prevTitle: {
      type: String,
      default: 'Home'
    },
    nextTitle: {
      type: String,
      default: 'Coming Soon'
    },    
  }  
}