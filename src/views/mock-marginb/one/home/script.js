import AButton          from '@/components/button/';
import ADropDown        from '@/components/drop-down/';
import AIcon            from '@/components/icon/';
import Card             from '@/components/card/';
import Modal            from '@/components/modal/';


export default {
    name       : 'mock-view',
    components : {
        AButton,
        ADropDown,
        AIcon,
        Card,
        Modal,
    },   
    methods: {
        showModal(showThis) {
            this.$refs.modal.showModal(showThis);
        },
    },    
};
