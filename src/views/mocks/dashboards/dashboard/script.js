import ABadge           from '@/components/badge/';
import AButton          from '@/components/button/';
import ACard            from '@/components/card/';
import ADropDown        from '@/components/drop-down/';
import AIcon            from '@/components/icon/';
import AInput           from '@/components/input/';
import methods          from '../mixins/shared';
import Modal            from '@/components/modal/';
import options          from '../mixins/options';

export default {
    name            : 'dashboard-view',
    mixins          : [ options, methods ],
    components      : {
        ABadge,
        AButton,
        ACard,
        ADropDown,
        AIcon,
        AInput,
        Modal
    }
};
