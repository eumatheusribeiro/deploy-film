import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { UserRoutingModule } from './pages/user/user-routing.module';
import { MenuModule } from './shared/components/menu/menu.module';
import { InfiniteScrollModule } from './shared/directives/infinite-scroll/infinite-scroll.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HomeRoutingModule,
    UserRoutingModule,
    FontAwesomeModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    HeaderModule,
    FooterModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
