import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { BuilderDetailsComponent } from './component/builderDetails/builder-details/builder-details.component';
import { BuilderListComponent } from './component/builder-list/builder-list.component';
import { LoginComponent } from './component/login/login.component';
import { PropertyDetailComponent } from './component/property-detail/property-detail.component';
import { PropertySerchComponent } from './component/property-serch/property-serch.component';
import { PropertyComponent } from './component/property/property.component';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guards/auth-guard.service';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { AboutComponent } from './component/about/about.component';
import { PropertsaathiCareersComponent } from './component/propertsaathi-careers/propertsaathi-careers.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { SalesEnquiryComponent } from './component/sales-enquiry/sales-enquiry.component';
import { LegalServicesComponent } from './component/legal-services/legal-services.component';
import { VastueServiceComponent } from './component/vastue-service/vastue-service.component';
import { HomeloansComponent } from './component/homeloans/homeloans.component';
import { ArchitechComponent } from './component/architech/architech.component';
import { InteriorDesignerComponent } from './component/interior-designer/interior-designer.component';
import { PostAdvComponent } from './post-adv/post-adv.component';
import { CompareComponent } from './component/compare/compare.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BuilderDetailsComponent,
    BuilderListComponent,
    LoginComponent,
    PropertyDetailComponent,
    PropertyComponent,
    PropertySerchComponent,
    RegisterComponent,
    AboutComponent,
    PropertsaathiCareersComponent,
    TestimonialsComponent,
    TermsConditionsComponent,
    SalesEnquiryComponent,
    LegalServicesComponent,
    VastueServiceComponent,
    HomeloansComponent,
    ArchitechComponent,
    InteriorDesignerComponent,
    PostAdvComponent,
    CompareComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
  ],
    
  providers: [ AuthGuard,
               { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
