import AButton          from '@/components/button/'
import ADropDown        from '@/components/drop-down/';
import ACard            from '@/components/card/';
import options          from '../mixins/options';

export default {
    name        : 'balances-account-view',
    mixins      : [ options ],
    components  : {
        AButton,
        ADropDown,
        ACard
    }
};
