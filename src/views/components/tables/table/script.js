import { columns, footers, rows, rowsTable }   from '../data-custom';
import AButton                      from '@/components/button/';
import ADropDown                    from '@/components/drop-down/';
import ATable                       from '@/components/tables/table/';
import Card                         from '@/components/card/';
import CardCode                     from '@/components/card-code/';
import options                      from '../mixins/options';

export default {
    name       : 'table-scroll-view',
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
        columns,
        footers,
        rows,
        rowsTable,
        sort       : {
            field : 'default',
            order : 'asc'
        },        
        pagination : {
            enabled      : true,
            itemsPerPage : 3,
            align        : 'right'
        }
    })    
};
