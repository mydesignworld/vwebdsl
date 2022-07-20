import SwitchTheme from "@/components/switch-theme";

export default {

    components: {
      SwitchTheme
    },

    data: () => ({
        isBurgerActive: false
    }),
    methods: {
        toggle() {
            document.body.classList.toggle('sidenav-toggled');
            this.isBurgerActive = !this.isBurgerActive;
        }
    },
}  