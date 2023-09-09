import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NotfoundComponent, MenuComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NotfoundComponent, MenuComponent],
})
export class SharedModule {}
