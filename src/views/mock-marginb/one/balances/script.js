import BalancesCdbcView           from './balances-cdbc'
import BalancesFnalityView        from './balances-fnality'
import BalancesView               from './balances'
import Tab                        from '@/components/tabs/tab/'
import Tabs                       from '@/components/tabs/tabs/'

export default {
  name        : 'balance-view',
  components  : {
      BalancesCdbcView,
      BalancesFnalityView,
      BalancesView,
      Tab,
      Tabs,
  },
};