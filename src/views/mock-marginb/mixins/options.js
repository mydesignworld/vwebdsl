/* istanbul ignore file */
export default {
    /**
     * @override
     */
    data : () => ({
        options : [
            {
                id       : '1',
                value    : 'create',
                label    : 'Create',
                disabled : false
            },
            {
                id       : '2',
                value    : 'default',
                label    : 'Default',
                disabled : false
            },            
            {
                id       : '3',
                value    : 'modify',
                label    : 'Modify',
                disabled : true
            },
            {
                id       : '4',
                value    : 'cancel',
                label    : 'Cancel',
                disabled : true
            }
        ],
        optionsInProgress : [
            {
                id       : '1',
                value    : 'confirm',
                label    : 'Confirm',
                disabled : false
            },
            {
                id       : '2',
                value    : 'cancel',
                label    : 'Cancel',
                disabled : false
            }
        ]        
    })
};