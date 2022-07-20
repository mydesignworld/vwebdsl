import AButton     from '@/components/button/';
import AIcon       from '@/components/icon/';

export default {
  name        : 'a-dashboard-card',
  components  : {
    AButton,
    AIcon
  },  
  data() {
    return {
      activeCard: false
    };
  },  
  props       : {
    icon          : String,
    title         : String,    
    card        : {
      type        : String,
      default     : 'default'
    },  
    animate     : {
      type        : Boolean,
      default     : false
    },
    actionBody  : {
      type        : Boolean,
      default     : false
    },    
    actionText  : {
      type        : Boolean,
      default     : false
    },
    actionCard  : {
      type        : Boolean,
      default     : false
    },
    actionIcon  : {
      type        : Boolean,
      default     : false
    }               
  },

  methods       : {
    handleClick   : function() {
      this.activeCard = !this.activeCard
    },
  }, 
  
  computed      : {
    animated() {
      if (this.animate) {
        return 'animated'
      } else {
        return ''
      }
    }
  }
}