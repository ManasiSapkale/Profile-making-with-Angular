import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [

 {path:'',component:NavbarComponent},
 {path:'home',component:HomeComponent},
 {path:'services',component:ServicesComponent},
 {path:'gallery',component:GalleryComponent},
 {path:'quotes',component:QuotesComponent},
 {path:'about',component:AboutComponent},
 {path:'contact',component:ContactComponent},
 {path:'users',component:UserComponent},
 {path:'post',component:PostComponent}
 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
