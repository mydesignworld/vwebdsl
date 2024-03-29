import AButton          from '@/components/button/';
import ADropDown        from '@/components/drop-down/';
import AIcon            from '@/components/icon/';
import ACard            from '@/components/card/';
import Modal            from '@/components/modal/';
import options          from './mixins/options';


export default {
    name       : 'mock-view',
    mixins     : [ options ],
    components : {
        AButton,
        ADropDown,
        AIcon,
        ACard,
        Modal
    },
    methods: {
        showModal(showThis) {
            this.$refs.modal.showModal(showThis);
        },
    },    
};
