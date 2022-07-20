import firebase from 'firebase'
import {ref, onBeforeMount} from 'vue';
import { useRoute, useRouter } from 'vue-router'
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

  setup () {
    const router = useRouter ();
    const route = useRoute ();
    const name = ref("");
    
    onBeforeMount (() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        }
        else if (route.path == "/login" || route.path == "/register") {
            router.replace("/");
            const curuser = firebase.auth().currentUser;
            if (curuser) {
                name.value = curuser.displayName;
                console.log("Menu User" + name.value );
            }
        }
      });
    });

    const signOut = () => {
      document.body.classList.toggle('sidenav-toggled');

      firebase.auth().signOut().then(() => {
      }).catch((error) => {
        console.log(error)
      });
    }

    return {
      signOut,
      name
    }

  }    
}  