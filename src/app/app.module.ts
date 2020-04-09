import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_templates/template-header/template-header.component';
import { TemplateLobbyComponent } from './_templates/template-lobby/template-lobby.component';
import { GameComponent } from './game/game.component';

import { WebSocketService } from './websocket.service';

const routes: Routes = [
  { path: 'game/:gameId', component: GameComponent},
  { path: '**', component: TemplateLobbyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateLobbyComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
