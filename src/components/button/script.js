import AIcon from '../icon';

/**
 * @component   adhara-button       Presents a clickable <button/> component.
 * @property    {String}            state       State of this button, to know: 'success' or 'warning'
 * @property    {String|'norma'}    size        The size of this button, to know: 'xsmall', 'small' or 'normal'
 * @property    {String|'button'}   type        Type of button, to know: 'button', 'submit', 'clear', 'reset', 'cancel'
 * @property    {String}            icon        Icon to display within button
 * @property    {Boolean|false}     primary     Whether this button is primary or not
 * @property    {Boolean|false}     secondary   Whether this button is secondary or not
 * @property    {Boolean|false}     light       Whether this button is light or not
 * @property    {Boolean|false}     disabled    Whether this button is disabled or not
 * @emits       {Event}             'click'     Click event triggered by native component
 */
export default {
    name          : 'a-button',
    props         : {
        type      : {
            type    : String,
            default : 'button',
            /**
             * Validator for property `type`
             * @param   {String}    value   Value assigned
             * @return  {Boolean}   `true` in valid case, `false` otherwise
             */
            validator(value = '')
            {
                return value === 'button' || [ 'submit', 'clear', 'reset', 'cancel' ].includes(value);
            }
        },
        icon      : String,
        primary   : Boolean,
        secondary : Boolean,
        light     : Boolean,
        disabled  : Boolean,
        size      : {
            type    : String,
            default : 'normal',
            /**
             * Validator for property `size`
             * @param   {String|'normal'}   value   Value assigned
             * @return  {Boolean}   `true` if is valid, `false` otherwise
             */
            validator(value = 'normal')
            {
                return [ 'xsmall', 'small', 'normal' ].includes(value);
            }
        },
        state     : {
            type    : String,
            default : '',
            /**
             * Validator for property `state`
             * @param   {String}    value   Value assigned
             * @return  {Boolean}   `true` if is valid, `false` in other case
             */
            validator(value = '')
            {
                return [ 'success', 'warning', '' ].includes(value);
            }
        }
    },
    components : {
        AIcon
    },  
    computed : {
        /**
         * Computes all the button styles based on its configuration
         * @return {Array}  Set of styles
         * @private
         */
        _btnStyle()
        {
            const styles = [];
            if (this.state)
            {
                styles.push(
                    this.primary
                        ? `btn-${this.state}`
                        : this.secondary
                            ? `btn-outline-${this.state}`
                            : '');
            }
            else
            {
                styles.push(this.primary ? `btn-primary` : this.secondary ? `btn-outline-primary` : 'btn-link');
            }

            styles.push({ small : 'btn-sm', xsmall : 'btn-xs' }[this.size] || '');
            styles.push(this.light ? 'btn-light' : '');
            styles.push(this.disabled ? 'disabled' : '');

            return styles.filter(Boolean);
        }
    },
    methods  : {
        /**
         * Handles native button click event
         * @param   {Event} e   MouseEvent
         * @emits   {Event} 'click'
         * @private
         */
        _onClick()
        {
            // @todo : When defined, add here click events middleware interceptor
            // this.$emit('click', e);
            // Arturo/Ronnie - We need to review this first,
            // it's causing click events to fire twice - Same as for Drop Down
        }
    }
};
