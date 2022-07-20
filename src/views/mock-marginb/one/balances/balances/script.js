import ADropDown            from '@/components/drop-down/';
import Card                 from '@/components/card/';
import methods              from '../../../mixins/shared';
import options              from '../../../mixins/options';

export default {
    name       : 'balances-divider-view',
    mixins     : [ options, methods ],
    components : {
        ADropDown,
        Card
    },
};
