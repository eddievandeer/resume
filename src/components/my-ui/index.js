import PersonalInfo from './PersonalInfo'
import MySkills from './MySkills'
import MyExperiences from './MyExperiences'
import MyInput from './MyInput'
import Drawer from './Drawer'
import ToTop from './ToTop'
import DragWrapper from './DragWrapper'

const COMPONENTS = [
    PersonalInfo,
    MySkills,
    MyExperiences,
    MyInput,
    Drawer,
    ToTop,
    DragWrapper
]

const MyUI = {}

MyUI.install = Vue => {
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default MyUI