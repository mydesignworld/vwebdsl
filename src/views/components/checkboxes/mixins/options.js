/* istanbul ignore file */
export default {
    /**
     * @override
     */
    data  : () => ({
        options : [
            { id : '1', value : 'One', name : 'Option One', disabled : false },
            { id : '2', value : 'Two', name : 'Option Two', disabled : false },
            { id : '3', value : 'Three', name : 'Option Three', disabled : false }
        ],
        optionsSelected : ['2'],

        settingsOptions : [
            { id : 'inline', value : 'One', name : 'Inline View', disabled : false },
            { id : 'single', value : 'Two', name : 'Allow only one option to be slected', disabled : false }
        ],
        settingsSelected : [],

        standardOptions : [{ id : 'standard', value : 'One', name : 'Option One', disabled : false }],

        standardSelected : [],

        selectedOptions : [{ id : 'selected', value : 'One', name : 'Option One', disabled : false }],

        selectedSelected : ['selected'],

        disabledOptions : [{ id : 'disabledstate', value : 'One', name : 'Option One', disabled : true }],

        disabledSelected : [],

        disabledActiveOptions : [{ id : 'disabledactivestate', value : 'One', name : 'Option One', disabled : true }],

        disabledActiveSelected : ['disabledactivestate']

    })
};
