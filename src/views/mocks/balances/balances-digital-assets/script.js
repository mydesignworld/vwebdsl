import AButton          from '@/components/button/'
import ADropDown        from '@/components/drop-down/';
import Card             from '@/components/card/';
import options          from '../mixins/options';

export default {
    name        : 'balances-digital-assets-view',
    mixins      : [ options ],
    components  : {
        AButton,
        ADropDown,
        Card
    }
};
