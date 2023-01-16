import ABadge       from '@/components/badge/';
import AButton      from '@/components/button/';
import ACard        from '@/components/card/';
import ADropDown    from '@/components/drop-down/';
import CardCode     from '@/components/card-code/';
import AIcon        from '@/components/icon/';
import options      from '../mixins/options';

export default {
    mixins     : [ options ],
    components : {
        ABadge,
        AButton,
        ACard,
        ADropDown,
        CardCode,
        AIcon
    }      
};
