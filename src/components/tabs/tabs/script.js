import { computed, ref }             from 'vue';
import { dashedStr, strToLowerCase } from '../../../filters/string';


const _tabsBindOptions = { passive : true };

/**
 * Renders a tabbed-selection block
 * @component  a-tabs
 * @property    {Boolean}   sticky  Whether tabs are sticky or not
 * @property    {String}    id      Unique DOM identifier
 * @emits       {Event}     'tabChanged'   Event triggered by native component when tab change
 */
export default {
    name     : 'a-tabs',
    props    : {
        sticky : Boolean,
        id     : String
    },
    /**
     * Provides values for child components
     * @return {{selectedTitle: String}}  Selected title
     */
    provide()
    {
        return {
            selectedTitle : computed(() => this.selectedTitle)
        };
    },
    computed : {
        /**
         * @return  {String} The right syntax for tab identifier
         * @private
         */
        _id()
        {
            return strToLowerCase(dashedStr(this.id));
        }
    },
    methods  : {
        /**
         * Parses a title to its right syntax
         * @param   {*} title   Tab title
         * @return  {String}    Parsed title
         * @private
         */
        _titleParsed(title)
        {
            return strToLowerCase(dashedStr(title));
        },
        /**
         * Handles native keyboard press, and will fire on each keyboard press
         * @param   {String}    tabName To select
         * @emits   {Event} 'tabChanged'
         * @private
         */
        _onTabClick(tabName)
        {
            this.selectedTitle = tabName;
            this.$emit('tabChanged', tabName);
        },
        /**
         * Handles scroll event
         * @private
         */
        _onScroll()
        {
            if (this.sticky)
            {
                const tabScroll = this.$refs.tabScroll;
                if (tabScroll)
                {
                    const { top = 0 } = tabScroll.getBoundingClientRect();
                    tabScroll.classList[top <= 60 ? 'add' : 'remove']('is-pinned');
                }
            }
        }
    },
    /**
     * @override
     */
    setup(props, { slots })
    {
        const tabTitles = ref(slots.default()
            .filter(tab => tab.type && /a-tab/.test(tab.type.name))
            .map(tab => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);

        return {
            tabTitles,
            selectedTitle
        };
    },
    /**
     * @override
     */
    mounted()
    {
        if (this.sticky)
        {
            window.addEventListener('scroll', this._onScroll.bind(this), _tabsBindOptions);
        }
    },
    /**
     * @override
     */
    beforeUnmount()
    {
        window.removeEventListener('scroll', this._onScroll.bind(this));
    }
};
