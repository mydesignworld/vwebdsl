import AButton      from '@/components/button/';
import ACard        from '@/components/card/';
import ACheckbox    from '@/components/checkbox/';
import AIcon        from '@/components/icon/';
import CardCode     from '@/components/card-code/';
import options      from './mixins/options';

export default {
    mixins     : [ options ],

    data    : () => ({
        inlineSelect    : false,
        single          : false
    }),

    components : {
        AButton,
        ACard,
        ACheckbox,
        AIcon,
        CardCode
    },


    methods   : {
        /**
         * Handles input change to set the checkbox group settings
         * @param   {String} settingsSelected   Selected checkbox value
         * @private
         */
        _checkboxSettings(settingsSelected)
        {
            this.inlineSelect = settingsSelected.includes('inline'); // Set checkbox group to inline L&F
            this.single = settingsSelected.includes('single');  // Allow only one checkbox selection at a time
        }
    }
};
