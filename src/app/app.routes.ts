import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { FrecuentlyQuestionsComponent } from './frecuentlyQuestions/frecuentlyQuestions.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';

export const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'preguntas-frecuentes', component: FrecuentlyQuestionsComponent },
    { path: 'clientes', component: ClientsComponent },
    { path: 'contactanos', component: ContactComponent },

];
