import ADropDown    from '@/components/drop-down/';
import ACard        from '@/components/card/';
import options      from '../mixins/options';

export default {
    name       : 'balances-divider-view',
    mixins     : [ options ],
    components : {
        ADropDown,
        ACard
    }
};
