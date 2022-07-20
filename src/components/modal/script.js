import AButton from '@/components/button/'
import AIcon from '../icon';
import { Modal } from 'bootstrap';

export default {
  name: 'Modal', 

  components: {
      AButton,
      AIcon
  },    

  props: {
    autoClose: {
      type: Boolean,
      default: false
    },     
    closeIcon: {
      type: Boolean,
      default: false
    },
    hideActions: {
      type: Boolean,
      default: false
    },           
    href: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: 'testModal'
    }, 
    title: {
      type: String,
      default: 'Modal Header'
    },          
    trigger: {
      type: String,
      default: null
    },
    triggerTitle: {
      type: String,
      default: ''
    },
    static: {
      type: Boolean,
      default: false
    },                    
  },    

  computed: {
    isStatic () {
      if (this.static) {
        return "static"
      } else {
        return null
      }
    },
    modalTrigger() {
      switch (this.trigger) {
        case 'text':
          return 'text'
        case 'link':
          return 'link' 
        case 'icon':
          return 'icon-sm bi-info-circle-fill text-primary'                                                           
        default:
          return 'btn btn-primary'
      }
    },
    type () {
      switch (this.trigger) {
        case 'text':
          return 'span'
        case 'link':
          return 'a'
        case 'icon':
          return 'i'                                                         
        default:
          return 'button'
      }
    },
    
    triggerHide() {
      if (this.triggerTitle === 'hidetitle') {
        return 'd-none'
      } else {
        return
      }      
    }     

  },

  methods: {
    showModal(modalName) {
      this.modal = modalName;
      const activeModal = document.getElementById(modalName);
      this.newModal = new Modal(activeModal, {});
      this.newModal.toggle();
      this.$emit('openModal', modalName);     
      document.body.appendChild(activeModal);
    },

    showModalTimeOut(modalName) {
      this.modal = modalName;
      const activeModal = document.getElementById(modalName);
      this.newModal = new Modal(activeModal, {});
      this.newModal.toggle();
      this.$emit('openModal', modalName);
      document.body.appendChild(activeModal); 
      setTimeout(function () {
        this.hideModal();
        this.$emit('closeModal', modalName);
      }.bind(this), 3000)    
    },    

    hideModal(modalName) {
      this.modal = modalName;
      this.newModal.hide();
    },

    closeModal(modalName) {
      this.$emit('closeModal', modalName);
    },

    saveModal(modalName) {
      this.modal = modalName;
      this.newModal.hide();
      this.$emit('saveModal', modalName);
    },      
  }   

}