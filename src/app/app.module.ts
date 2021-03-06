import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_templates/template-header/template-header.component';
import { TemplateLobbyComponent } from './_templates/template-lobby/template-lobby.component';
import { GameComponent } from './game/game.component';
import { GameboardComponent } from './game/gameboard/gameboard.component';
import { GamefieldComponent } from './game/gameboard/gamefield/gamefield.component';

import { WebSocketService } from './websocket.service';
import { WebStorageService } from './webstorage.service';

const routes: Routes = [
  { path: 'game/:gameID', component: GameComponent},
  { path: '**', component: TemplateLobbyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateLobbyComponent,
    GameComponent,
    GameboardComponent,
    GamefieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [WebSocketService, WebStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
