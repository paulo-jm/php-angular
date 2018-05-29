import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutNavigationComponent } from './layout-navigation/layout-navigation.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  declarations: [LayoutHeaderComponent, LayoutFooterComponent, LayoutNavigationComponent, LayoutContentComponent],
  exports: [LayoutHeaderComponent, LayoutFooterComponent, LayoutNavigationComponent, LayoutContentComponent]
})
export class LayoutModule { }
