<template>
  <div class="vue-multiple-themes">
    <span v-if="changeThemeOff" class="change-theme-box" @click="changeTheme()">
      {{ themeName }}
    </span>
  </div>
</template>

<script>
export default {
        data() {
            return {
                darkMode: false,
            }
        },
        mounted() {
            // set 'app-background' class to body tag
            let bodyElement = document.body;
            bodyElement.classList.add("app-background");

            // check for active theme
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");

            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark')
                this.darkMode = true
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false
            }
        },

        methods: {
            toggleTheme() {
            const activeTheme = localStorage.getItem("theme");
            console.log(activeTheme);
            let htmlElement = document.documentElement;
            if (activeTheme === "light") {
                    localStorage.setItem("theme", 'dark');
                    htmlElement.setAttribute('theme', 'dark');
            } else {
                    localStorage.setItem("theme", 'light');
                    htmlElement.setAttribute('theme', 'light');
            }
            },
        },

        

};
</script>
