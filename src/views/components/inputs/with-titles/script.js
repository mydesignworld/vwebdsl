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
        document.getElementById('user02-titles').value = ' ';
        document.getElementById('user03-titles').value = 'adhara@adhara.io';
        document.getElementById('InputEmails-titles').value = 'adhara.adhara.io';
    }
};
