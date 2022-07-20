import ABadge           from '@/components/badge/';
import ADropDown        from '@/components/drop-down/';
import AInput           from '@/components/input/';
import Card             from '@/components/card/';
import CardCode         from '@/components/card-code/';
import FooterNav        from '@/components/foot-nav/';
import Modal            from '@/components/modal/';
import Tab              from '@/components/tabs/tab/';
import Tabs             from '@/components/tabs/tabs/';
import options          from './mixins/options';

export default {
    name       : 'modal',
    mixins     : [ options ],
    components : {
        ABadge,
        ADropDown,
        AInput,
        Card,
        CardCode,        
        FooterNav,
        Modal,
        Tab,
        Tabs
    },
};
