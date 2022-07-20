import SwitchTheme from "@/components/switch-theme";

export default {
    name: 'sidebarMenu',
    
    components: {
      SwitchTheme
    },

    props: {
        navLinks        : {
            type     : Array,
            required : false,
            default  : () => ([])
        },        
    },    

    data: () => ({
        isBurgerActive: false,
    }),
    
    methods: {
        toggle() {
            document.body.classList.toggle('sidenav-toggled');
            this.isBurgerActive = !this.isBurgerActive;
        }
    }
}