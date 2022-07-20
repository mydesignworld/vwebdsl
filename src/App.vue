<template>
  <Navigation v-if="$route.meta.navdsl">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear="appear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </Navigation>
  <NavigationLoans v-if="$route.meta.navloans">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear="appear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </NavigationLoans>
  <NavigationMarginBlock v-if="$route.meta.marginbloc">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear="appear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </NavigationMarginBlock>  
  
  <router-view v-slot="{ Component }" v-if="$route.meta.marginblocs">
      <component :is="Component"></component>
  </router-view>
   
  <div class="app-wrapper-icons">
    <AdharaIcons id="adharaIcons" />
    <Icons id="bootstrapIcons" />
  </div>
</template>


<script>
  import MenuSidebar from '@/components/menu-sidebar/';
  import Navigation from '@/components/navigation/'
  import NavigationLoans from '@/components/navigation-loans/'
  import NavigationMarginBlock from '@/components/navigation-margin-bloc/'
  import Icons           from '@/assets/images/icons/bootstrap-icons.vue';
  import AdharaIcons     from '@/assets/images/icons/adhara-icons.vue';  
  export default {
    name: 'App',
    components: {
      AdharaIcons,
      Icons,
      MenuSidebar,
      Navigation,
      NavigationLoans,
      NavigationMarginBlock   
    },
  }  
</script>

<style>
  .app-wrapper-icons{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 0;
    height: 0;
    pointer-events: none;
    visibility: hidden;
  }

</style>
