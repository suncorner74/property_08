import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component'
import { BuilderDetailsComponent } from './component/builderDetails/builder-details/builder-details.component';
import { BuilderListComponent } from './component/builder-list/builder-list.component';
import { LoginComponent } from './component/login/login.component';
import { PropertyDetailComponent } from './component/property-detail/property-detail.component';
import { PropertyComponent } from './component/property/property.component';
import { PropertySerchComponent } from './component/property-serch/property-serch.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guards/auth-guard.service';
import { PostAdvComponent } from './post-adv/post-adv.component';
import { VastueServiceComponent } from './component/vastue-service/vastue-service.component';
import { SalesEnquiryComponent } from './component/sales-enquiry/sales-enquiry.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { PropertsaathiCareersComponent } from './component/propertsaathi-careers/propertsaathi-careers.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { LegalServicesComponent } from './component/legal-services/legal-services.component';
import { InteriorDesignerComponent } from './component/interior-designer/interior-designer.component';
import { HomeloansComponent } from './component/homeloans/homeloans.component';
import { ArchitechComponent } from './component/architech/architech.component';
import { AboutComponent } from './component/about/about.component';
import { CompareComponent } from './component/compare/compare.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      data: {
          title: 'Static Layouts'
      },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'builderDetails/:id',
    component: BuilderDetailsComponent,
  },
  {
    path: 'builderList',
    component: BuilderListComponent,
  },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent,
  },
  {
    path: 'propertySearch',
    component: PropertySerchComponent,
  },
  {
    path: 'property',
    component: PropertyComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'postadvertisement',
    component: PostAdvComponent,
  },

  {
    path: 'salesenquiry',
    component: SalesEnquiryComponent,
  },
  {
    path: 'vastueservice',
    component: VastueServiceComponent,
  },
  {
    path: 'termsandcondition',
    component: TermsConditionsComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  {
    path: 'legalservices',
    component: LegalServicesComponent,
  },
  {
    path: 'interriordesign',
    component: InteriorDesignerComponent,
  },
  {
    path: 'homeloan',
    component: HomeloansComponent,
  },
  {
    path: 'architect',
    component: ArchitechComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'propertysaathicareers',
    component: PropertsaathiCareersComponent,
  },
  {
    path: 'compare',
    component: CompareComponent,
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
