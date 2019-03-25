import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'userhome', loadChildren: './userhome/userhome.module#UserhomePageModule' },
  { path: 'nutricion', loadChildren: './nutricion/nutricion.module#NutricionPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ejercicio', loadChildren: './ejercicio/ejercicio.module#EjercicioPageModule' },
  { path: 'nutricionadmin', loadChildren: './nutricionadmin/nutricionadmin.module#NutricionadminPageModule' },
  { path: 'adminhome', loadChildren: './adminhome/adminhome.module#AdminhomePageModule' },
  { path: 'agregardieta', loadChildren: './agregardieta/agregardieta.module#AgregardietaPageModule' },
  { path: 'nutricioneditardieta', loadChildren: './nutricioneditardieta/nutricioneditardieta.module#NutricioneditardietaPageModule' },
  { path: 'micuenta', loadChildren: './micuenta/micuenta.module#MicuentaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
