import { getCurrentLocale } from './locale';
import { strToNumber }      from './string';

export const MINIMUM_FRACTION_DIGITS = 2;
export const MAXIMUM_FRACTION_DIGITS = 4;

/**
 * Evaluates if value is really a Number or not
 * @param   {*} value To evaluate
 * @return  {*} The value {Number} instance
 * @throws  {Error} If value is not a number in any case.
 * @private
 */
function _isNumber(value)
{
    const _value = typeof value === 'string'
        ? strToNumber(value)
        : value;

    if (typeof _value !== 'number' || isNaN(_value) || !isFinite(_value))
    {
        throw new Error(`Invalid {Number} argument: ${value}`);
    }

    return _value;
}

/**
 * Returns if a {Number} is positive or not (-goe 0.00)
 * @param   {*} value   To evaluate
 * @return  {Boolean}   `true` if `value` is greater or equal to 0.00, `false` in other case
 * @throws  {Error}     If `value` is not a valid {Number}
 */
export const isPositive = value =>
    _isNumber(value) >= 0.00;

/**
 * Transforms a value into its {Number} representation
 * @param   {*} value   To transform
 * @return  {*}         The value {Number} instance
 * @throws  {Error}     If value is not a valid {Number} in any case
 */
export const toNumber = value =>
    _isNumber(value);

/**
 * Returns the default configuration for Intl.NumberFormat constructor
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
 * @return  {Object}    Default options
 * @private
 */
const _defaultNumberToLocaleOptions = () => ({
    maximumFractionDigits : MAXIMUM_FRACTION_DIGITS,
    minimumFractionDigits : MINIMUM_FRACTION_DIGITS
});

/**
 * Uses Internalization library to return formatted value to current locale
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
 * @param   {*}         value   Number value to format
 * @param   {Object}    options To set format
 * @return  {String|*}  Value formatted
 * @throws  {Error}     If `value` is not a valid {Number}
 */
export const numberToLocale = ( value, options = _defaultNumberToLocaleOptions()) =>
    new Intl.NumberFormat(getCurrentLocale(), { ...options })
        .format(_isNumber(value));

/**
 * Adds two values
 * @param   {Number}    value   Default value
 * @param   {Number|1}  inc     To be added
 * @return  {Number}    Both values added
 * @throws  {Error}     If `value`, `inc` or both are not valid {Number}
 */
export const add = (value, inc = 1) =>
    Number(_isNumber(value) + _isNumber(inc));
