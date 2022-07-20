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
  /**
  * Load new theme when page loads
  */
   mounted()
   {
       document.getElementById('bluebank').click();
       // console.log(this.$route.name);
   },

   /**
  * Change back to main theme when page exit
  */
   unmounted()
   {
     if (!this.$route.name.includes('Bank'))
     {
       document.getElementById('adhara').click();
     }
   }    
};