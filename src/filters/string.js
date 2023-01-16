/**
 * Checks that value is really an {String} type
 * @param   {*} value   To evaluate
 * @throws  {Error}     If value is not an {String}
 * @private
 */
const _isString = value =>
{
    if (typeof value !== 'string')
    {
        throw new Error(`Invalid {String} value: ${value}`);
    }
};

/**
 * Transforms any string into its lower-case format, i.e.: 'HeLLo' -> 'hello'
 * @param   {String}    text    To be transformed
 * @return  {String}    Transformed text
 * @throws  {Error}     If `text` is not an {String}
 */
export const strToLowerCase = (text = '') =>
{
    _isString(text);

    return text.toLowerCase();
};

/**
 * Returns the {Number} representation of a stringified number, i.e.: '1,000.00' -> 1000.00
 * @param   {*|String}  value       To be parsed
 * @return  {*|Number|undefined}    Parsed value, `undefined` if value is an empty string
 * @throws  {Error}     If `value` is not an {String}
 */
export const strToNumber = (value = '') =>
{
    _isString(value);

    return /^[\d,.-]+$/.test(value)
        ? Number(value.replace(/[^\d,.]+/g, '').trim())
        : value || undefined;
};

/**
 * Separates each word of a text with a {sep} character, i.e.:
 *          ' hello world' --> 'hello-world'
 *          'HelloWorld' --> 'Hello-World'
 * @param   {String}    text    To be dashed
 * @param   {String}    sep     To use as replacer
 * @return  {String}    Transformed string
 * @throws  {Error}     If `text` is not an {String}
 */
export const dashedStr = (text = '', sep = '-') =>
{
    _isString(text);

    return text
        .trim()
        .split(/((?:[A-Z][a-z]+)|\s)/g)
        .filter(Boolean)
        .filter(item => !!item.trim().length)
        .join(sep);
};

/**
 * Returns the capitalized format of a text, i.e.: 'hello' -> 'Hello'
 * @param   {*|String}  text    To be formatted
 * @return  {String}    String formatted
 * @throws  {Error}     If `text` is not an {String}
 */
export const strToCapital = (text = '') =>
{
    _isString(text);

    return text.length
        ? `${text[0].toUpperCase()}${text.substr(1)}`
        : text;
};

/**
 * Returns the camelCase format of a text, i.e.: 'hello-world' -> 'helloWorld'
 * @param   {*|String}  text    To be formatted
 * @return  {String}    String formatted
 * @throws  {Error}     If `text` is not an {String}
 */
export const strToCamelCase = (text = '') =>
{
    _isString(text);

    return text
        .split(/\W/g)
        .map((part, index) => (index ? strToCapital(part) : strToLowerCase(part)))
        .join('');
};

