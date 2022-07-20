import ABadge           from '@/components/badge';
import AButton          from '@/components/button';

export default {
  name: 'a-table-pagination',
  components: {
    ABadge,
    AButton
  },  
  props: {
    page : Number,
    totalPages: Number,
    paginationOptions: Object
  },
  data(){
    return{
    }
  },
  computed:{  
    prevPage() {
      return this.page - 1;
    },    
    nextPage() {
      return this.page + 1;
    },
    itemsPerPage() {
      return this.paginationOptions.itemsPerPage
    },
    fromItem () {
      return this.itemsPerPage * this.prevPage + 1
    },
    toItem () {
      return this.itemsPerPage * this.page 
    },      
    totalRows () {
      return this.totalPages * this.itemsPerPage
    },
    alignClass(){
        switch (this.paginationOptions.align) {
            case 'center':
                return 'd-flex justify-content-center'           
            case 'left':    
                return 'd-flex justify-content-start'                                       
            default: 
                return 'd-flex justify-content-end align-items-center'  
        }
    }   
  },
  methods:{
    goToPage(newPage) {      
      this.$emit('new-page', parseInt(newPage))
    },
    onChange(event) {
      this.goToPage(event.target.value)
    }
  }
}