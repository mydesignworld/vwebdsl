import ACard                   from '@/components/card/';
import FooterNav               from '@/components/foot-nav/';
import Tab                     from '@/components/tabs/tab/';
import TableExperimentalView   from './table-experimental';
import TablePaginationSortView from './table-pagination-sort';
import TablePaginationView     from './table-pagination';
import TableScrollSortView     from './table-scroll-sort';
import TableScrollView         from './table';
import Tabs                    from '@/components/tabs/tabs/';

export default {
    name       : 'tables-view',
    components : {
        ACard,
        FooterNav,
        TableExperimentalView,
        TablePaginationSortView,
        TablePaginationView,
        TableScrollSortView,
        TableScrollView,
        Tab,
        Tabs
    }
};
