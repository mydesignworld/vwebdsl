import ADropDown        from '@/components/drop-down/';
import AIcon            from '@/components/icon/';
import Card             from '@/components/card/'
import CardCode         from '@/components/card-code/'
import options          from '../mixins/options';

export default {
    name        : 'view-primary-select',
    mixins      : [ options ],
    components  : {
        ADropDown,
        AIcon,
        Card,
        CardCode
    }
};
