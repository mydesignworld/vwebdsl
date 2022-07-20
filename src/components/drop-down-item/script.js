/**
 * Renders a unique drop-down item option
 * @component   adhara-drop-down-item
 * @property    {Object}    model       To render
 * @property    {Boolean}   selected    Whether is selected option or not
 * @propertt    {Boolean}   disabled    Whether is disabled or not
 */
export default {
    name            : 'adhara-drop-down-item',
    props           : {
        model    : Object,
        selected : Boolean,
        disabled : Boolean
    },
    computed: {
        title() {
            if (this.disabled) {
                return 'Currently Disabled'
            }
        }
     },    
    methods : {
        /**
         * Handles click event on this element
         * @private
         */
        _onClick()
        {
            // this.$emit('click', this.model);
            // Arturo/Ronnie - We need to review this first,
            // it's causing change events to fire twice - same as with button emit
        }
    }
};
