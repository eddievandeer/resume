<template>
    <div class="info-detail">
        <div class="info-detail-item introduction">
            <h2><i class="fa fa-address-card-o" aria-hidden="true"></i>个人介绍</h2>
            <p>性别：{{info.gender}}</p>
            <p>毕业院校：{{info.education.university}}</p>
            <p>专业：{{info.education.major}}</p>
        </div>
        <div class="info-detail-item contact">
            <h2><i class="fa fa-envelope-o" aria-hidden="true"></i>联系方式</h2>
            <p>邮箱：{{info.contact.email}}</p>
            <p>电话：{{info.contact.tel}}</p>
        </div>
        <div class="info-detail-item else">
            <h2><i class="fa fa-at" aria-hidden="true"></i>其他</h2>
            <p>GitHub：<a :href="info.github" target="__blank">{{info.github}}</a></p>
            <p>博客网站：<a :href="info.blog" target="__blank">{{info.blog}}</a></p>
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
        margin-top: 1rem;

        .info-detail-item {
            margin-bottom: 1rem;
        }

        h2 {
            letter-spacing: 1px;

            i {
                margin-right: .8rem;
            }
        }

        a,
        p {
            color: white;
        }
    }

</style>
