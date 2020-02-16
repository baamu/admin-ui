import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatInputModule, MatDialogModule} from '@angular/material';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { StorageServiceModule } from 'angular-webstorage-service';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { AdminManageusersComponent } from './admin-manageusers/admin-manageusers.component';
import { AdminRepositoryComponent } from './admin-repository/admin-repository.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {AdminManagedownloadComponent} from './admin-managedownload/admin-managedownload.component';
import { PopupComponent } from './popup/popup.component';
import { AppService } from './app.service';


@NgModule({ 
  declarations: [
    AppComponent,  
    routingComponents,
    AdminHistoryComponent,
    AdminManageusersComponent,
    AdminRepositoryComponent,
    AdminLoginComponent,
    AdminManagedownloadComponent,
    PopupComponent,
  ],
  entryComponents: [PopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StorageServiceModule,
    MatDialogModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
