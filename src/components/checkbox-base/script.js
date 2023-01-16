/**
 * Renders a unique checbox item as part of a checkbox group
 * @component   a-checkbox-base
 * @property    {String}            fieldId     Option identifier
 * @property    {String}            fieldValue  Option identifier
 * @property    {String}            label       Option text to display
 * @property    {Boolean}           checked     Whether input is selected or not
 * @property    {Boolean}           disabled    Whether is disabled or not
 */
export default {
    name  : 'a-checkbox-base',
    props : {
        fieldId     : {
            type        : String,
            required    : true
        },
        fieldValue  : {
            type        : String,
            required    : true
        },
        label       : String,
        checked     : Boolean,
        disabled    : Boolean
    }
};
