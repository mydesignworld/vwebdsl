import BalancesAccountView        from './balances-account'
import BalancesCdbcView           from './balances-cdbc'
import BalancesDigitalAssetsView  from './balances-digital-assets'
import BalancesFnalityView        from './balances-fnality'
import BalancesTableView          from './table'
import BalancesView               from './balances'
import Tab                        from '@/components/tabs/tab/'
import Tabs                       from '@/components/tabs/tabs/'

export default {
  name        : 'balance-view',
  components  : {
      BalancesAccountView,
      BalancesCdbcView,
      BalancesDigitalAssetsView,
      BalancesFnalityView,
      BalancesTableView,
      BalancesView,
      Tab,
      Tabs,
  },
};