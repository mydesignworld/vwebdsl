import AInput   from '@/components/input/';
import Card     from '@/components/card/';
import CardCode from '@/components/card-code/';

export default {
    components : {
        AInput,
        Card,
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
