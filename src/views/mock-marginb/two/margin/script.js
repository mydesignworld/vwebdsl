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


  methods : {
    navigateAction ()
    {
      this.fromRoute = window.history.state.back;
      if (this.fromRoute === '/marginbloc/bank/balances') {
        document.getElementById('requests-tab').click();
      }     
    }, 
  },

  /**
  * Load new theme when page loads
  */
    mounted()
    {
        document.getElementById('bluebank').click();
        this.navigateAction();
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