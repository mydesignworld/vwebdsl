import { isPositive, toNumber } from './number';
import { getCurrentLocale }     from './locale';

let DEFAULT_DATE_FORMAT = 'DD MMM YYYY';
let DEFAULT_TIME_FORMAT = 'HH:mm';

const FORMATS = {
    'YYYY' : { key : 'year', format : 'numeric' },
    'YY'   : { key : 'year', format : '2-digit' },
    'MMMM' : { key : 'month', format : 'long' },
    'MMM'  : { key : 'month', format : 'short' },
    'MM'   : { key : 'month', format : '2-digit' },
    'DDD'  : { key : 'day', format : 'numeric' },
    'DD'   : { key : 'day', format : '2-digit' },
    'HH'   : { key : 'hour', format : '2-digit' },
    'mmm'  : { key : 'minute', format : 'numeric' },
    'mm'   : { key : 'minute', format : '2-digit' }
};

/**
 * Returns the formatting object for a {Date}
 * @param   {String}    pattern  To parse
 * @return  {Object}    Formatting configuration
 * @private
 */
const _parseFormat = (pattern = DEFAULT_DATE_FORMAT) =>
{
    const config = {};
    if (pattern && typeof pattern === 'string')
    {
        (pattern.match(/([A-Za-z]+)/g) || [])
            .forEach(
                value =>
                {
                    const { key = '', format = '' } = FORMATS[value] || {};
                    if (key && format)
                    {
                        config[key] = format;
                    }
                }
            );
    }

    return config;
};

/**
 * Formats a {Date} using toLocaleDateString
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 * @param   {Date}      date    To format
 * @param   {String}    format  To apply
 * @return {String}    Formatted date
 * @private
 */
const _formatDate = (date, format) =>
    date.toLocaleDateString(getCurrentLocale(), _parseFormat(format));

/**
 * Formats a {Date} using toLocaleTimeString
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
 * @param   {Date}      date    To format
 * @param   {String}    format  To apply
 * @return {String}    Formatted time
 * @private
 */
const _formatTime = (date, format = DEFAULT_TIME_FORMAT) =>
    date.toLocaleTimeString(getCurrentLocale(), _parseFormat(format));

/**
 * Evaluates if a value is a valid {Date} instance
 * @param   {*} value   To evaluate
 * @return {Date}      Date instance
 * @throws  {Error}     If {value} is not a valid {Date} representation
 * @private
 */
function _isDate(value)
{
    let _value;

    try
    {
        switch (typeof value)
        {
            case 'string':
                _value = (/^\d+$/g.test(value))
                    ? new Date(parseInt(value, 10))
                    : value
                        ? new Date(Date.parse(value))
                        : null;
                break;
            case 'number':
                _value = isPositive(value) && value !== 0.00
                    ? new Date(toNumber(value))
                    : null;
                break;
            default:
                _value = value;
        }
    }
    catch (e)
    {
        _value = e;
    }

    if (!(_value instanceof Date) || isNaN(_value))
    {
        throw new Error(`Invalid {Date} argument: ${value}`);
    }

    return _value;
}

/**
 * @getter
 * @return  {String}    Current DEFAULT_DATE_FORMAT
 */
export const getDefaultDateFormat = () => DEFAULT_DATE_FORMAT;

/**
 * @getter
 * @return  {String}    Current DEFAULT_TIME_FORMAT
 */
export const getDefaultTimeFormat = () => DEFAULT_TIME_FORMAT;

/**
 * @setter  Defines DEFAULT_DATE_FORMAT
 * @param   {String}  format To apply
 */
export const setDefaultDateFormat = (format = '') =>
{
    DEFAULT_DATE_FORMAT = format;
};

/**
 * @setter  Defines DEFAULT_TIME_FORMAT
 * @param   {String}  format To apply
 */
export const setDefaultTimeFormat = (format = '') =>
{
    DEFAULT_TIME_FORMAT = format;
};

/**
 * Returns localized date string from a {Date}
 * @param   {Date}      date    To localized
 * @param   {*}         format  To apply
 * @return  {String}    Formatted date
 */
export const dateToLocaleDateString = (date, format) =>
    _formatDate(_isDate(date), format);

/**
 * Returns localized time string from a {Date}
 * @param   {Date}      date    To localized
 * @param   {*}         format  To apply
 * @return  {String}    Formatted time
 */
export const dateToLocaleTimeString = (date, format) =>
    _formatTime(_isDate(date), format);

