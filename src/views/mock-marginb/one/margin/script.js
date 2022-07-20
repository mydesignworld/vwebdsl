import BalancesTableView          from './table'
import BalancesHistoryTableView   from './history'
import Tab                        from '@/components/tabs/tab/'
import Tabs                       from '@/components/tabs/tabs/'
import Modal                      from '@/components/modal/';
import methods                    from '../../mixins/shared';

export default {
  name        : 'balance-view',
  mixins      : [ methods ],
  components  : {
      BalancesTableView,
      BalancesHistoryTableView,
      Modal,
      Tab,
      Tabs,
  },  
};