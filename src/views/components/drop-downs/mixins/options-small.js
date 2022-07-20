/* istanbul ignore file */
export default {
    /**
     * @override
     */
    data : () => ({
        options : [
            {
                id       : 'edit',
                value    : 'edit',
                label    : 'edit',
                disabled : false
            },
            {
                id       : 'copy',
                value    : 'copy',
                label    : 'copy',
                disabled : false
            },
            {
                id       : 'delete',
                value    : 'delete',
                label    : 'delete',
                disabled : true
            }
        ],
        optionsempty : []
    })
};
