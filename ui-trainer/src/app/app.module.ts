import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { HomeComponent } from './home/home.component';
import { AdminSidenavigationComponent } from './admin-sidenavigation/admin-sidenavigation.component';
import { QueryUserComponent } from './manage-users/query-user/query-user.component';
import { CreateUserComponent } from './manage-users/create-user/create-user.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DeleteUserComponent } from './manage-users/delete-user/delete-user.component';
import { UpdateUserComponent } from './manage-users/update-user/update-user.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ManageDomainsComponent } from './manage-domains/manage-domains.component';
import { FileExplorerModule } from './file-explorer/file-explorer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileService } from './common/services/file.service';
import { ManageEntitiesComponent } from './manage-entities/manage-entities.component';
import { ManageIntentsComponent } from './manage-intents/manage-intents.component';
import { AddEntityComponent } from './common/modals/add-entity/add-entity.component';
import { EditEntityComponent } from './common/modals/edit-entity/edit-entity.component';
import { ChooseEntityComponent } from './common/modals/choose-entity/choose-entity.component';
import { EntitiesDataService } from './common/services/entities-data.service';
import { ManageResponsesComponent } from './manage-responses/manage-responses.component';
import { ManageStoriesComponent } from './manage-stories/manage-stories.component';
import { AddEntityValueComponent } from './common/modals/add-entity-value/add-entity-value.component';
import { ApplicationsComponent } from './applications/applications.component';
import { SocketIoComponent } from './socket-io/socket-io.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageTrainerComponent } from './manage-trainer/manage-trainer.component';
import { AddProjectComponent } from './common/modals/add-project/add-project.component';
import { EditProjectComponent } from './common/modals/edit-project/edit-project.component';
import { DeleteProjectComponent } from './common/modals/delete-project/delete-project.component';
import { CopyProjectComponent } from './common/modals/copy-project/copy-project.component';
import { AddDomainComponent } from './common/modals/add-domain/add-domain.component';
import { DeleteDomainComponent } from './common/modals/delete-domain/delete-domain.component';
import { EditDomainComponent } from './common/modals/edit-domain/edit-domain.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidenavigationComponent,
    HomeComponent,
    AdminSidenavigationComponent,
    QueryUserComponent,
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    ManageDomainsComponent,
    ManageEntitiesComponent,
    ManageIntentsComponent,
    AddEntityComponent,
    EditEntityComponent,
    ChooseEntityComponent,
    ManageResponsesComponent,
    ManageStoriesComponent,
    AddEntityValueComponent,
    ApplicationsComponent,
    SocketIoComponent,
    ManageProjectsComponent,
    ManageTrainerComponent,
    AddProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    CopyProjectComponent,
    AddDomainComponent,
    DeleteDomainComponent,
    EditDomainComponent,
  ],
  entryComponents: [
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    AddEntityComponent,
    EditEntityComponent,
    ChooseEntityComponent,
    AddEntityValueComponent,
    AddProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    CopyProjectComponent,
    AddDomainComponent,
    DeleteDomainComponent,
    EditDomainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    FileExplorerModule,
    FlexLayoutModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, FileService, EntitiesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
