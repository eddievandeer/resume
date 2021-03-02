import PersonalInfo from './PersonalInfo'
import MySkills from './MySkills'
import MyExperiences from './MyExperiences'
import MyInput from './MyInput'
import Drawer from './Drawer'

const COMPONENTS = [
    PersonalInfo,
    MySkills,
    MyExperiences,
    MyInput,
    Drawer
]

const MyUI = {}

MyUI.install = Vue => {
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default MyUI