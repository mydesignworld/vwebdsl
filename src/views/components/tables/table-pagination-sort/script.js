import { columnsmin, footersmin, rows } from '../data-custom';
import AButton                          from '@/components/button/';
import ADropDown                        from '@/components/drop-down/';
import ATable                           from '@/components/tables/table/';
import ACard                            from '@/components/card/';
import CardCode                         from '@/components/card-code/';
import options                          from '../mixins/options';

export default {
    name       : 'table-pagination-sort-view',
    mixins     : [ options ],
    components : {
        AButton,
        ADropDown,
        ATable,
        ACard,
        CardCode
    },
    /**
     * @override
     */
    data : () => ({
        columnsmin,
        footersmin,
        rows,
        sort       : {
            field : 'total',
            order : 'asc'
        },
        pagination : {
            enabled      : true,
            itemsPerPage : 10,
            align        : 'right'
        }
    })
};
