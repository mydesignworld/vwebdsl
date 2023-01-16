import AInput   from '@/components/input/';
import ACard     from '@/components/card/';
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
        document.getElementById('user02').value = ' ';
        document.getElementById('user03').value = 'adhara@adhara.io';
        document.getElementById('InputEmails').value = 'adhara.adhara.io';
    }
};
