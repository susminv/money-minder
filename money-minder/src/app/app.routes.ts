import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: 'login',
        loadComponent: () => import('').then(m => m.LoginComponent)
    },
];
