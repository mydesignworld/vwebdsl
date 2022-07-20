/* istanbul ignore file */
export default {
    /**
     * @override
     */
    data : () => ({
        options : [
            {
                id       : 'direct',
                value    : 'direct',
                label    : 'Direct',
                disabled : false
            },
            {
                id       : 'indirect',
                value    : 'indirect',
                label    : 'Indirect',
                disabled : false
            },
        ]
    })
};
