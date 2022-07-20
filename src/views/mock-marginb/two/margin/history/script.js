import ABadge                     from '@/components/badge/';
import AButton                    from '@/components/button/';
import ADropDown                  from '@/components/drop-down/';
import ATable                     from '@/components/tables/table/';
import Card                       from '@/components/card/';
import methods                    from '../../../mixins/shared';
import options                    from '../../../mixins/options';

export default {
    name        : 'table-scroll-view',
    mixins      : [ options, methods ],
    components  : {
        ABadge,
        AButton,
        ADropDown,
        ATable,
        Card
    },
};
