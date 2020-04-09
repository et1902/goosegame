import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { WebSocketService } from './websocket.service';

const routes: Routes = [
  { path: 'game/:gameId', component: GameComponent},
  { path: '**', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
