/* istanbul ignore file */
import { Tooltip } from 'bootstrap';

/**
 * @component   a-tooltip                       Presents a tooltip container <div class="tooltip"/> component.
 * @property    {String}            title       The content (Text or HTML) for the tooltip.
 * @property    {String}            position    Determine the position of the tooltip in relation to the element.
 * @property    {Boolean|false}     primary     Whether this button is primary or not
 * @property    {Boolean|false}     secondary   Whether this button is secondary or not
 */
export default {
    name       : 'a-card',
    props      : {
        title       : String,
        primary     : Boolean,
        secondary   : Boolean,
        position      : {
            type    : String,
            default : 'top',
            /**
             * Validator for property `position`
             * @param   {String|'top'}   value   Value assigned
             * @return  {Boolean}   `true` if is valid, `false` otherwise
             */
            validator(value = 'top')
            {
                return [ 'top', 'right', 'bottom', 'left'].includes(value);
            }
        }
    },

    computed   : {
        /**
         * Computes all the tooltip styles based on its configuration
         * @return {Array}  Set of styles
         * @private
         */
        _tooltipStyle()
        {
            const styles = [];
            styles.push(this.primary ? `tooltip-primary` : this.secondary ? `tooltip-secondary` : 'tooltip-default');

            return styles.filter(Boolean);
        },

        /**
         * Computes the tooltip position based on its configuration
         * @return {Array}  Set of positions
         * @private
         */
        _tooltipPosition()
        {
            const positions = [];
            positions.push({ right : 'right', bottom : 'bottom', left : 'left' }[this.position] || 'top');

            return positions.filter(Boolean);
        }
    },
    /**
     * @override
     */
    mounted()
    {
        const atooltip = new Tooltip(document.body, {
            selector : "[data-bs-toggle='tooltip']"
        });

        return atooltip;
    }
};
