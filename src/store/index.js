import { createStore } from 'vuex'
import infoMutation from './info'
import skillsMutation from './skills'
import experiencesMutation from './experiences'
import themeMutation from './theme'

export default createStore({
    state: {
        personalInfo: {
            name: '',
            image: './images/avatar.png',
            gender: '',
            age: '',
            job: '',
            qualification: '',
            university: '',
            major: '',
            github: '',
            blog: '',
            email: '',
            tel: ''
        },
        internship: [{
            title: '实习公司',
            type: '实习/全职',
            startTime: '2021.7',
            endTime: '至今',
            descriptions: [
                '实习经历描述'
            ]
        }],
        skills: [{
            type: '前端/后端/嵌入式等',
            skill: [
                {
                    title: 'Java/C++/JavaScript等',
                    descriptions: ['技能描述']
                }
            ]
        }],
        experiences: [
            {
                type: '个人项目/商业项目等',
                details: [
                    {
                        source: '',
                        title: '项目名称',
                        descriptions: ['项目描述']
                    }
                ]
            }
        ],
        evaluation: ['自我评价'],
        parts: ['my-internship', 'my-skills', 'my-experiences'],
        theme: {
            type: 'normal',
            color: 'cyan',
            // style: 'vertical'
            style: 'horizontal'
        }
    },
    mutations: {
        ...infoMutation,
        ...skillsMutation,
        ...experiencesMutation,
        ...themeMutation
    },
    actions: {},
    modules: {}
})