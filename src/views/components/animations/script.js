import ADropDown        from '@/components/drop-down/';
import AIcon            from '@/components/icon/';
import ACard            from '@/components/card/';
import CardCode         from '@/components/card-code/';
import FooterNav        from '@/components/foot-nav/';
import options          from './mixins/options';

export default {
    name        : 'animations-view',
    mixins      : [ options ],
    components  : {
        AIcon,
        ADropDown,
        ACard,
        CardCode,
        FooterNav
    },

    /**
     * @override
     */
    data()
    {
        return {
            icons           : [],
            selected        : '',
            selectedtitle   : ''
        };
    },

    methods     : {
        /**
         * Display Animation based in drop down value selected
         * @param   {String}    selectedOption That's currently slected
         * @private
         */
        _animationSelected(selectedOption)
        {
            this.selectedtitle = selectedOption.option.label;
            this.selected = selectedOption.option.value;
        }
    }
};
