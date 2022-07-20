/* istanbul ignore file */
export default {
    /**
     * @override
     */
    data : () => ({
        options : [
            {
                id       : 'one',
                value    : 'one',
                label    : 'Option One',
                disabled : false
            },
            {
                id       : 'two',
                value    : 'two',
                label    : 'Option Two',
                disabled : false
            },
            {
                id       : 'three',
                value    : 'three',
                label    : 'Option Three',
                disabled : true
            }
        ]
    })
};
