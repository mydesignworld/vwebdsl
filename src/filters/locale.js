/**
 * Return current document locale
 * @return {String|'en'}    window.document locale
 */
export const getCurrentLocale = () =>
    (document && document.getRootNode().children[0].getAttribute('lang')) || 'en';
