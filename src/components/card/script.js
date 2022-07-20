/* istanbul ignore file */

import AIcon            from '@/components/icon/';

export default {
  name        : 'card',
  components  : {
    AIcon
  },  
  props : {
      icon    : String,
      title   : String,
      card    : {
          type    : String,
          default : 'default'
      },
      animate : Boolean
  }
};