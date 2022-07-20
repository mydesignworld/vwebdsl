import { provide, ref } from 'vue'
export default {
    name: "tabs",
    props: {
      sticky: {
          type: Boolean,
          default: false
      },
      id: {
        type: String,
        default: null
      },      
    },    
    setup (props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide("selectedTitle", selectedTitle)
        return {
            tabTitles,
            selectedTitle
        };
    },

    methods: {
      showTab(tabName) {
        console.log(tabName);
        this.tab = tabName;
        this.$emit('tabChanged', tabName);
      },

      scrollTime () {   
        window.removeEventListener('scroll', this.handleScroll);
        setTimeout(() => {
         window.addEventListener("scroll", this.handleScroll, { passive: true });
        }, 1000);      
      },     

      handleScroll () {
        const el = document.querySelector(".sticky-top");
        const scrollTop = this.$refs.tabScroll.getBoundingClientRect().top
        // console.log(window.scrollY);
        if (scrollTop <= 60) {
          el.classList.add("is-pinned");
        } else {
          el.classList.remove("is-pinned");
        }               
      }    
    },

    computed: {
      isSticky() {
        if (this.sticky) {
          return 'sticky-top'
        } else {
          return ''
        }
      },
    },   

    mounted () {
        if (this.sticky) {
          window.addEventListener("scroll", this.handleScroll, { passive: true });
        } else {
          return
        }
    },
    
    beforeUnmount () {
      window.removeEventListener("scroll", this.handleScroll, { passive: true });
    }
}