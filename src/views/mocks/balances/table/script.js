import { columns, rows }          from '../data-custom';
import AButton                    from '@/components/button/';
import ACard                      from '@/components/card/';
import ADropDown                  from '@/components/drop-down/';
import ATable                     from '@/components/tables/table/';
import options                    from '../mixins/options';

export default {
    name        : 'table-scroll-view',
    mixins      : [ options ],
    components  : {
        AButton,
        ACard,
        ADropDown,
        ATable
    },
    /**
     * @override
     */
    data : () => ({
        blockView  : true,
        columns,
        items      : rows,
        sort       : {
            field  : 'entity',
            order  : 'desc'
        }
    }),

    methods        : {
        /**
        * Handle the icon click to toggle between table and blocks
        */
        handleToggle()
        {
            this.blockView = !this.blockView;
        }
    }
};
