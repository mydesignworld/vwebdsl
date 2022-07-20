import ADropDown      from '@/components/drop-down/';
import AIcon          from '@/components/icon/';
import Card           from '@/components/card/';
import CardCode       from '@/components/card-code/';
import options        from '../mixins/options';
import optionsempty   from '../mixins/options-small';

export default {
    name       : 'view-primary-select',
    mixins     : [ options, optionsempty ],
    components : {
        ADropDown,
        AIcon,
        Card,
        CardCode
    }
};
