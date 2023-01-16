import ABadge   from '@/components/badge/';
import AButton  from '@/components/button/';
import ACard    from '@/components/card/';
import CardCode from '@/components/card-code/';
import AIcon    from '@/components/icon/';

export default {
    components : {
        ABadge,
        AButton,
        ACard,
        CardCode,
        AIcon
    },
    /**
     * @override
     */
     data()
     {
         return {
             toggleText      : false,
         };
     },
     methods : {
        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        */

        /**
        * Toggle card body data
        * @param   {Object}  toDo  which card should be toggled
        */
        toggleCardText()
        {
            this.toggleText = !this.toggleText;
        }
    },       
};
