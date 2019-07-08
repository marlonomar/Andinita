import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { LogoComponent } from './logo/logo.component';
import { SliderComponent } from './slider/slider.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    LogoComponent,
    SliderComponent,
    MensagemComponent,
    ProdutosComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
