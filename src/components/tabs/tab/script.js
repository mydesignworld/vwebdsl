import { dashedStr, strToLowerCase } from '../../../filters/string';
import { inject }                    from 'vue';

/**
 * @component   a-tab
 * @property    {String}    title   Tab's title/id
 */
export default {
    name  : 'a-tab',
    props : {
        title : String
    },
    computed : {
        /**
         * Parses this component prop@`title` with the right format
         * @return  {String}    Parsed title
         * @private
         */
        _tabId()
        {
            return strToLowerCase(dashedStr(this.title));
        },
        /**
         * Returns if the tab is active
         * @return {Boolean} Is active
         * @private
         */
        _isActive()
        {
            return this.title === this.selectedTitle;
        }
    },
    /**
     * @override
     */
    setup()
    {
        const selectedTitle = inject('selectedTitle');

        return {
            selectedTitle
        };
    }
};
