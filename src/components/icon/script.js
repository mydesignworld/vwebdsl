/**
 * Uses bootstrap-icon library
 * @component   adhara-icon, a-icon
 * @property    {String}            icon    (required) To be rendered
 */

export default {
    name  : 'a-icon',
    props : {
        icon : {
            type     : String,
            required : true
        }
    }
};

/* ANOTER WAY if you want to import the two svg sprites directly here instead of in App.vue

import icons           from '@/assets/images/icons/bootstrap-icons.svg';
import adharaIcons     from '@/assets/images/icons/adhara-icons.svg';

export default {
    name  : 'a-icon',
    props : {
        icon : {
            type     : String,
            required : true
        },
    },
    computed    : {
        /**
         * Computes the path and sprite that should be used
         * @return {Array}  Set of icons
         * @private
         */
        /*
        _svgPath()
        {
            console.log(adharaIcons);
            if (this.icon.includes('adhara'))
            {
                return adharaIcons + `#${this.icon}`;
            } else 
            {
                return icons + `#${this.icon}`; 
            }
        }        
    },    
    data       : () => ({ icons }),
};

*/
