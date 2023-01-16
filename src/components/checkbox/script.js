import ACheckboxBase from '../checkbox-base/index.vue';

/**
 * @component   a-checkbox                      Presents a chekbox container
 * @property    {String}            id          Option identifier
 * @property    {String}            value       Value of slected checkbox
 * @property    {Array}             options     Set of elements to display (required)*
 * @property    {Boolean|false}     disabled    Whether this checkbox is disabled or not*
 * @property    {Boolean|false}     switch      Whether checkbox should be presented as a switch
 * @property    {Boolean|false}     button      Whether checkbox should be presented as a selectable button
 * @property    {Boolean|false}     inline      Whether checkboxes should be horizontally aligned
 * @property    {Boolean|false}     single      Whether checkbox group should only allow for a single selection option
 * @emits       {Event}             'change'    Change event triggered by native component
 */

export default {
    name        : 'a-checkbox',
    components  : {
        ACheckboxBase
    },
    emits : ['update:value'],
    props : {
        id          : {
            type      : String,
            required  : true
        },
        value       : {
            type      : Array,
            required  : true
        },
        options     : {
            type      : Array,
            required  : true,
            validator : value =>
            {
                /**
                 * Validator for property `options`
                 * @param   {String}    value   Value assigned
                 * @return  {Boolean}   `true` in valid case, `false` otherwise
                 */
                const hasNameKey = value.every(option =>
                    Object.keys(option).includes('name')
                );
                const hasIdKey = value.every(option =>
                    Object.keys(option).includes('id')
                );

                return hasNameKey && hasIdKey;
            }
        },
        disabled    : Boolean,
        switch      : Boolean,
        button      : Boolean,
        inline      : Boolean,
        single      : Boolean
    },
    /**
     * @override
     */
    setup(props, context)
    {
        /**
         * Determine which option should be checked
         * @param   {String}    optionId    The value of the item option
         * @param   {Boolean}   checked     Used to check the correct option Id
         */
        const check = (optionId, checked) =>
        {
            let updatedValue = [...props.value];
            const single = props.single;
            if (checked)
            {
                if (single)
                {
                    updatedValue = [];
                }
                updatedValue.push(optionId);
            }
            else
            {
                updatedValue.splice(updatedValue.indexOf(optionId), 1);
            }
            context.emit('update:value', updatedValue);
        };

        return {
            check
        };
    },

    computed   : {
        /**
         * Computes all the checkbox styles based on its configuration
         * @return {Array}  Set of styles
         * @private
         */
        _checkboxStyle()
        {
            const styles = [];
            styles.push(this.switch ? `form-switch` : this.button ? `form-button` : 'form-checkbox');
            styles.push(this.inline ? `form-check-inline` : '');

            return styles.filter(Boolean);
        }
    },

    methods : {
        /**
         * Determines if an option is disabled or not
         * @param   {Object}    option  To parse
         * @return  {Boolean}   `true` if option should appear disabled, `false` in other case
         * @private
         */
        _isOptionDisabled(option = {})
        {
            let isDisabled = false;
            switch (typeof option.disabled)
            {
                case 'boolean':
                    isDisabled = !!option.disabled;
                    break;
                case 'function':
                    isDisabled = option.disabled(this.model);
                    break;
                case 'undefined':
                default:
                    isDisabled = false;
            }

            return isDisabled;
        }
    }
};
