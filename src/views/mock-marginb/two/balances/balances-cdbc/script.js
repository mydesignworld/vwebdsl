import AButton          from '@/components/button/';
import ADropDown        from '@/components/drop-down/';
import Card             from '@/components/card/';
import methods          from '../../../mixins/shared';
import options          from '../../../mixins/options';

export default {
    name        : 'balances-cdbc-view',
    mixins     : [ options, methods ],
    components  : {
        AButton,
        ADropDown,
        Card
    },
}; 
