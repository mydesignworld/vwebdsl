import AIcon from '../icon';

/**
 * @component   a-badge             Presents a information <span/> component.
 * @property    {String}            state       State of this badge, to know: 'caution', 'success' or 'warning'
 * @property    {String|'norma'}    size        The size of this badge, to know: 'xsmall', 'small' or 'normal'
 * @property    {String}            iconLeft    Icon to display within badge on left side
 * @property    {String}            iconRight   Icon to display within badge on right side
 * @property    {Boolean|false}     primary     Whether this badge is primary or not
 * @property    {Boolean|false}     secondary   Whether this badge is secondary or not
 * @property    {Boolean|false}     dark        Whether this badge is dark or not
 * @property    {Boolean|false}     light       Whether this badge is light or not
 */
 export default {
    name    : 'a-badge',
    props   : {
        iconLeft    : String,
        iconRight   : String,
        primary     : Boolean,
        secondary   : Boolean,
        light       : Boolean,
        dark        : Boolean,
        size        : {
            type        : String,
            default     : 'normal',
            /**
             * Validator for property `size`
             * @param   {String|'normal'}   value   Value assigned
             * @return  {Boolean}   `true` if is valid, `false` otherwise
             */
            validator(value = 'normal')
            {
                return ['xsmall', 'small', 'normal'].includes(value);
            }
        },
        state : {
            type    : String,
            default : '',
            /**
             * Validator for property `state`
             * @param   {String}    value   Value assigned
             * @return  {Boolean}   `true` if is valid, `false` in other case
             */
            validator(value = '')
            {
                return ['caution', 'success', 'warning', ''].includes(value);
            }
        }
    },
    components : {
        AIcon
    },    
    computed : {
        /**
         * Computes all the badge styles based on its configuration
         * @return {Array}  Set of styles
         * @private
         */
        _badgeStyle()
        {
            const styles = [];
            if (this.state)
            {
                styles.push(
                    this.primary
                        ? `bg-${this.state}`
                        : this.secondary
                            ? `bg-none bg-none-${this.state}`
                            : '');
            }
            else
            {
                styles.push(this.primary ? `bg-primary` : this.secondary ? `bg-none bg-none-primary` : 'bg-primary');
            }

            styles.push({ small : 'badge-sm', xsmall : 'badge-xs' }[this.size] || '');
            styles.push(this.light ? 'bg-light' : '', this.dark ? 'bg-dark' : '');

            return styles.filter(Boolean);
        }
    },
    methods    : {
        /**
         * Handles badge click event
         * @emit   {Event} 'click'
         * @private
         */
        _onClick()
        {
            this.$emit('click');
        }
    }
};
