import ABadge           from '@/components/badge/';
import AButton          from '@/components/button/';
import ADashboardCard   from '@/components/card-dashboard/';
import ADropDown        from '@/components/drop-down/';
import AIcon            from '@/components/icon/';
import AInput           from '@/components/input/';
import methods          from '../mixins/shared';
import Modal            from '@/components/modal/';
import options          from '../mixins/options';

export default {
    name        : 'dashboard-bank-view',
    mixins      : [ options, methods ],
    components  : {
        ABadge,
        AButton,
        ADashboardCard,
        ADropDown,
        AIcon,
        AInput,
        Modal
    },

    /**
    * Load new theme when page loads
    */
    mounted()
    {
        document.getElementById('bluebank').click();
    },

    /**
    * Change back to main theme when page exit
    */
    unmounted()
    {
        document.getElementById('adhara').click();
    }
};
