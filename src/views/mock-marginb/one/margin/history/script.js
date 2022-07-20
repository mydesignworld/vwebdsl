import ABadge                     from '@/components/badge/';
import AButton                    from '@/components/button/';
import ADropDown                  from '@/components/drop-down/';
import ATable                     from '@/components/tables/table/';
import AIcon                      from '@/components/icon/';
import Card                       from '@/components/card/';
import Modal                      from '@/components/modal/';
import methods                    from '../../../mixins/shared';
import options                    from '../../../mixins/options';

export default {
    name        : 'table-scroll-view',
    mixins      : [ options, methods ],
    components  : {
        ABadge,
        AButton,
        ADropDown,
        AIcon,
        ATable,
        Card,
        Modal
    },
};
