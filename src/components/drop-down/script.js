import AdharaDropDownItem from '../drop-down-item';
import AIcon              from '../icon';

/**
 * Renders a <select/> box.
 * @component   adhara-drop-down
 * @property    {String}    id              Unique element identifier
 * @property    {String}    name            Unique form name identifier
 * @property    {Object}    model           Reference associated with the drop-down
 * @property    {Array}     options         Set of elements to display (required)
 * @property    {String}    defaultValue    Pre-selected option
 * @property    {Boolean}   disabled        Whether drop-down is disabled or not
 * @property    {String}    size            Drop-down size
 * @emits       {Event}     change          Whenever its selected value changes
 */
export default {
    name       : 'adhara-drop-down',
    components : {
        AdharaDropDownItem,
        AIcon,
    },
    props      : {
        id           : String,
        name         : String,
        model        : Object,
        options      : {
            type     : Array,
            required : true,
            default  : () => ([])
        },
        defaultValue : String,
        disabled     : Boolean,
        size         : String
    },
    computed   : {
        /**
         * Class style for select size
         * @return {String} `"select-sm"` if size is "small", `""` in other case
         * @private
         */
        _selectSize()
        {
            return { 'small' : 'select-sm', 'xsmall' : 'select-xs' }[this.size] || '';
        }
    },
    /**
     * @override
     */
    data()
    {
        return {
            // selected: this.options.length > 0 ? this.options[0] : null,
            selected : this.defaultValue ? this.defaultValue : this.options.length ? this.options[0].id : null,
            open     : false,
            close    : true
        };
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
        },
        /**
         * Handles click events on option items
         * @param   {Object}    option  Selected option
         * @emits   {Event}     change  With selection option and associated model
         * @private
         */
         _onItemClick(option = {})
         {
            if (!option.disabled) {
                this.selected = option.label;
                this.open = false;
                this.close = true;
                this.$emit('change', { option, model : this.model });
            } else {
                console.log('disabled');
            }
         },        
         /**
          * Handles click event on selected item
          * @private
          */
         _onSelectedClick()
         {
            if (!this.disabled)
             {
                 this.open = !this.open;
                 this.close = !this.close;
              
             }
         },

         /**
          * Handles blur event on drop-down
          * @private
          */
         _onBlur()
         {
            this.open = false;
            this.close = true;
         }
    }
};
