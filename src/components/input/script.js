/**
 * @component   a-input             Renders a <input /> component.
 * @property    {Boolean|false}     disabled                Whether this input is disabled or not
 * @property    {Boolean|false}     required                Whether the input value is required or not
 * @property    {String}            errorMessage            Display if the input have validation that fails
 * @property    {Boolean|false}     labels                  Whether this input show label in field
 * @property    {Boolean|false}     lines                   Whether this input show only a line t the bottom
 * @property    {String}            label                   The label that describe the input
 * @property    {String}            id                      Identify the input and bind it to it's label.
 * @property    {String|'text'}     type                    The type of input: 'text', 'password', 'email' or 'number'
 * @property    {String}            modelValue              The value of input to submit. String or Number.
 * @property    {String|' '}        placeholder             Add placeholder to the input. Assit with animating labels.
 * @emits       {Event}             'input, change, blur'   Click event triggered by native component
 */

 const ALLOWED_TYPES = [ 'text', 'password', 'email', 'number' ];

export default {
    name     : 'a-input',
    props    : {
        disabled     : Boolean,
        errorMessage : String,
        id           : String,
        label        : String,
        labels       : Boolean,
        lines        : Boolean,
        required     : Boolean,        
        modelValue        : {
            type : [ String, Number ]
        },
        placeholder  : {
            type    : String,
            default : ' '
        },
        type         : {
            type    : String,
            default : 'text',
            /**
             * Validator for type `value`
             * @param   {String}    value   Value assigned
             * @return  {Boolean}   `true` if is valid, `false` in other case
             */
            validator(value)
            {
                return ALLOWED_TYPES.includes(value);
            }
        },             
    },
    emits: ['update:modelValue'],
    computed : {
        /**
         * Computes what should be used as the id (identifier) for the form input
         * @return {Array}  Set of styles
         * @private
         */
        _inputId()
        {
            return this.id
                ? this.id
                : this.label
                    ? this.label.toLowerCase().trim()
                        .replace(/\s/g, '-')
                    : '';
        },
        /**
         * Computes the input wrapper style
         * @return {Array}  Set of styles
         * @private
         */
        _wrapperStyle()
        {
            return this.labels
                ? `wrap-label`
                : this.lines
                    ? `wrap-line`
                    : 'wrap-title';
        },
        /**
         * Computes all the input styles based on its configuration
         * @return {Array}  Set of styles
         * @private
         */
        _inputStyle()
        {
            const styles = [];
            styles.push(this.labels ? `input-label` : this.lines ? `input-line` : null);
            styles.push(this.disabled ? 'disabled' : '');

            return styles.filter(Boolean);
        }
    },
    methods  : {
        /**
         * Handles native keyboard press, and will fire on each keyboard press
         * @param   {Event} e   MouseEvent
         * @emits   {Event} 'input'
         * @private
         */
        _onInput(e)
        {
            // Can add validation here
            this.$emit('update:modelValue', e.target.value);
        },
        /**
         * Handles native change, and will fire when value has changed
         * @param   {Event} e   MouseEvent
         * @emits   {Event} 'change'
         * @private
         */
         _onChange(e)
         {
             // Can add validation here
             this.$emit('update:modelValue', e.target.value);
         },
        /**
         * Handles native blur, and will fire when focus move from input
         * @param   {Event} e   MouseEvent
         * @emits   {Event} 'blur'
         * @private
         */
        _onBlur(e)
        {
            // Can add validation here
            this.$emit('update:modelValue', e.target.value);
        }

        /* to-do - to validate if it's a number, and comma/decimal format display
        validateNumber: event => {
            const char = String.fromCharCode(event.keyCode);
            if (!/^[0-9,.]*$/.test(char)) {
                event.preventDefault();
            }
        }  */
    }
};
