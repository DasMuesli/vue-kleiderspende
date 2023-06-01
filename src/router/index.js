import StartSeite from '../components/StartSeite'
import { createRouter, createWebHashHistory } from 'vue-router'
import RegistrierungStart from '../components/RegistrierungStart'
import RegistrierungAbschluss from '../components/RegistrierungAbschluss'
import RegistrierungAdresse from '../components/RegistrierungAdresse'
import ImpressumFake from '../components/ImpressumFake'
import DatenschutzerklaerungFake from '../components/DatenschutzerklaerungFake'
import KontaktFake from '../components/KontaktFake'
import AuflistungGeschaeftsstellen from '../components/AuflistungGeschaeftsstellen'


const routes = [
    {   path: '/',   name: 'StartSeite',  component: StartSeite  },
    {   path: '/RegistrierungStart',   name: 'RegistrierungStart',     component: RegistrierungStart },
    {   path: '/RegistrierungAbschluss', name: 'RegistrierungAbschluss', component: RegistrierungAbschluss },
    {   path: '/RegistrierungAdresse', name: 'RegistrierungAdresse', component: RegistrierungAdresse },
    {   path: '/Impressum', name: 'Impressum', component: ImpressumFake },
    {   path: '/Datenschutzerklaerung', name: 'Datenschutzerklaerung', component: DatenschutzerklaerungFake },
    {   path: '/Kontakt', name: 'Kontakt', component: KontaktFake },
    {   path: '/AuflistungGeschaeftsstellen', name: 'AuflistungGeschaeftsstellen', component: AuflistungGeschaeftsstellen },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export{
    router,
    routes
}