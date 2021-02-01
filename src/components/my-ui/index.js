import PersonalInfo from './PersonalInfo'
import MySkills from './MySkills'
import MyExperiences from './MyExperiences'

const COMPONENTS = [
    PersonalInfo,
    MySkills,
    MyExperiences
]

const MyUI = {}

MyUI.install = Vue => {
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default MyUI