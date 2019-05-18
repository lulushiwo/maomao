<template>
    <div id="main">
        <HeaderTop></HeaderTop>
        <div class="movie_menu">
            <div class="city_name">
                <span>长沙</span>
                <i class="iconfont icon-f11"></i>
            </div>
            <router-link to="/home/ismovie" tag="div" class="is_movie">正在热映</router-link>
            <router-link to="/home/upcomingmovie" tag="div" class="upcoming_movie">即将热映</router-link>
            <div class="search_entry">
                <i class="iconfont icon-sousuo2"></i>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
    components: {
        HeaderTop,
    },
    methods: {
        
    }
}
</script>
<style lang="stylus" scoped>
#main 
    height 100%
    display flex
    flex-direction column
    .movie_menu
        width 100%
        height 45px
        display flex
        justify-content space-between
        align-items center
        line-height 2.8125rem
        border-bottom solid 1px #ccc
        .city_name
            height 100%
            margin-left 1.25rem
        .is_movie,.upcoming_movie
            color #666
        .router-link-active
            color #f03d37
            border-bottom solid 2px #f03d37
            font-weight 800 
        .search_entry
            color #f03d37
            margin-right 1.25rem
            .icon-sousuo2
                font-size 20px
</style>
