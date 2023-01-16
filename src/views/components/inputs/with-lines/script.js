import AInput   from '@/components/input/';
import ACard    from '@/components/card/';
import CardCode from '@/components/card-code/';

export default {
    components : {
        AInput,
        ACard,
        CardCode
    },

    /**
     * @override
     */
    mounted()
    {
        document.getElementById('user02-lines').value = ' ';
        document.getElementById('user03-lines').value = '999,999,999.00';
        document.getElementById('InputEmails-lines').value = '999,999,999.00';
    }
};
