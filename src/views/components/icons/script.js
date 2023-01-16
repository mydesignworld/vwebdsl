import AInput           from '@/components/input/';
import AIcon            from '@/components/icon/';
import ACard            from '@/components/card/';
import CardCode         from '@/components/card-code/';
import FooterNav        from '@/components/foot-nav/';
import Modal            from '@/components/modal/';
import Tab              from '@/components/tabs/tab/';
import Tabs             from '@/components/tabs/tabs/';

export default {
    name        : 'icons',
    components  : {
        AIcon,
        AInput,
        ACard,
        CardCode,
        FooterNav,
        Modal,
        Tab,
        Tabs
    },

    /**
     * @override
     */
    data()
    {
        return {
            icons       : [],
            searchTerm  : '',
            content: ''
        };
    },

    methods: {
        /**
         * Loop through icon symbol inside adharaIcons container
         */
        _showAdharaIcons()
        {
            this.icons = [];
            const sprite = document.getElementById('adharaIcons');
            const symbols = sprite.querySelectorAll('symbol');

            symbols.forEach(symbol =>
            {
                this.icons.push({ name  : symbol.id });
            });
        },

        /**
         * Loop through icon symbol inside bootstrapIcons container
         */
        _showBootstrapIcons()
        {
            this.icons = [];
            const sprite = document.getElementById('bootstrapIcons');
            const symbols = sprite.querySelectorAll('symbol');

            symbols.forEach(symbol =>
            {
                this.icons.push({ name  : symbol.id });
            });
        },
      
        /**
         * Display Icon set based on tab that was selected
         * @param   {String}    tabName That's currently active
         * @private
         */
        _tabChanged(tabName)
        {
            this.tabName = tabName;
            if (this.tabName == 'Bootstrap Icons')
            {
                this._showBootstrapIcons();
            }
            else
            {
                this._showAdharaIcons();
            }
        },

        _showModal(showThis, iconName) {
            this.content = iconName;
            this.$refs.modal.showModal(showThis);
        },

        _hideModal(modalName) {
            this.$refs.modal.hideModal(modalName);
        },  
        
    },
 
    computed  : {
        /**
         * Filter icons list to show only icons that contains search term
         * @return {String} The search characters as per user input
         * @private
         */
        _filterByTerm()
        {
            return this.icons.filter(icon =>
                icon.name.toLowerCase().includes(this.searchTerm)
            );
        }
    },

    /**
     * Method to run when page is created
     */
    created()
    {
        this._showAdharaIcons();
    }

};
