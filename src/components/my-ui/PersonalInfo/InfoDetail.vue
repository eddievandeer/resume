<template>
    <div class="info-detail">
        <div class="info-detail-item introduction">
            <h2 class="title">个人介绍</h2>
            <p>性别: <span>{{info.gender}}</span></p>
            <p>年龄: <span>{{info.age}}</span></p>
            <p>学历: <span>{{info.qualification}}</span></p>
            <p>毕业院校: <span>{{info.university}}</span></p>
            <p>专业: <span>{{info.major}}</span></p>
        </div>
        <div class="info-detail-item contact">
            <h2 class="title">联系方式</h2>
            <p>邮箱: <span>{{info.email}}</span></p>
            <p>电话: <span>{{info.tel}}</span></p>
        </div>
        <div class="info-detail-item else" v-show="info.github || info.blog">
            <h2 class="title">其他</h2>
            <p v-show="info.github">GitHub: <a :href="info.github" target="__blank">{{info.github}}</a></p>
            <p v-show="info.blog">博客网站: <a :href="info.blog" target="__blank">{{info.blog}}</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfoDetail',
        props: {
            info: Object
        }
    }

</script>

<style lang="scss" scoped>
    .info-detail {
        width: 100%;
        margin-top: 1.6rem;
    }

    .info-detail-item {
        margin-bottom: 1.2rem;

        h2 {
            letter-spacing: 1px;
            margin-bottom: .6rem;

            i {
                margin-right: .8rem;
            }
        }

        p {
            line-height: 1.2rem;
            margin-bottom: .3rem;
        }
    }
</style>
