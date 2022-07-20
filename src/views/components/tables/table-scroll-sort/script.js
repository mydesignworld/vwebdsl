import { columnsmax, footers, rows }   from '../data-custom';
import AButton                      from '@/components/button/';
import ADropDown                    from '@/components/drop-down/';
import ATable                       from '@/components/tables//table/';
import Card                         from '@/components/card/';
import CardCode                     from '@/components/card-code/';
import options                      from '../mixins/options';

export default {
    name       : 'table-scroll-sort-view',
    mixins     : [ options ],
    components : {
        AButton,
        ADropDown,
        ATable,
        Card,
        CardCode
    },
    /**
     * @override
     */
    data : () => ({
        columnsmax,
        footers,
        items : rows,
        sort  : {
            field : 'amt',
            order : 'asc'
        }
    })
};
