<template>
    <div>
        <footer class="footer_guide border-1px" >
            <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/home/ismovie'}" @click="goTo('/home')">
                <span class="item_icon">
                    <i class="iconfont icon-dianying"></i>
                </span>
                <span>电影</span>
            </a>
            <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/cinema'}"  @click="goTo('/cinema')">
                <span class="item_icon">
                    <i class="iconfont icon-yingyuan"></i>
                </span>
                <span>影院</span>
            </a>
            <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/profile'}" @click="goTo('/profile')">
                <span class="item_icon">
                    <i class="iconfont icon-wodedangxuan"></i>
                </span>
                <span>我的</span>
            </a>
        </footer>
    </div>
</template>
<script>
export default {
    methods: {
        goTo(path) {
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus" scoped>
.footer_guide
    border-top solid 1px #e4e4e4
    position fixed
    z-index 100
    right 0
    bottom 0
    background-color #f5f5f5
    width 100%
    height 50px
    display flex
    .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 8px
        color #999999
        .icon-dianying,.icon-yingyuan,.icon-wodedangxuan
            font-size 21px
        &.on
            color #f03d37
            span 
            font-size 10px
</style>
