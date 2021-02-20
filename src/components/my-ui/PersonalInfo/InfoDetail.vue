<template>
    <div class="info-detail">
        <div class="info-detail-item introduction">
            <h2 class="title"><i class="fa fa-address-card-o" aria-hidden="true"></i>个人介绍</h2>
            <p>性别：{{info.gender}}</p>
            <p>毕业院校：{{info.university}}</p>
            <p>专业：{{info.major}}</p>
        </div>
        <div class="info-detail-item contact">
            <h2 class="title"><i class="fa fa-envelope-o" aria-hidden="true"></i>联系方式</h2>
            <p>邮箱：{{info.email}}</p>
            <p>电话：{{info.tel}}</p>
        </div>
        <div class="info-detail-item else">
            <h2 class="title"><i class="fa fa-at" aria-hidden="true"></i>其他</h2>
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
        margin-top: 1.6rem;

        .info-detail-item {
            margin-bottom: 1.2rem;

            h2 {
                letter-spacing: 1px;
                margin-bottom: .6rem;

                i {
                    margin-right: .8rem;
                }
            }

            a,
            p {
                color: white;
            }

            p {
                line-height: 1.2rem;
                margin-bottom: .3rem;
            }
        }
    }

</style>
