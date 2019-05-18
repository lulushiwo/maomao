<template>
    <div id="app">
        <FooterGuide></FooterGuide>
        <router-view></router-view>
    </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
    components: {
        FooterGuide,
    }
}
</script>
<style lang="stylus">
#app 
    width 100%
    height 100%

</style>
