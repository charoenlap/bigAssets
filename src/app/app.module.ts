import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { PermissionComponent } from './setting/permission/permission.component';
import { MyRequestComponent } from './te/my-request/my-request.component';
import { TeamRequestComponent } from './te/team-request/team-request.component';
import { AccountComponent } from './te/account/account.component';
import { AMyRequestComponent } from './advance/a-my-request/a-my-request.component';
import { ATeamRequestComponent } from './advance/a-team-request/a-team-request.component';
import { AFinanceComponent } from './advance/a-finance/a-finance.component';
import { AAccountComponent } from './advance/a-account/a-account.component';
import { CMyRequestComponent } from './ClearAdvance/c-my-request/c-my-request.component';
import { CTeamRequestComponent } from './ClearAdvance/c-team-request/c-team-request.component';
import { CFinanceComponent } from './ClearAdvance/c-finance/c-finance.component';
import { CAccountComponent } from './ClearAdvance/c-account/c-account.component';
import { FormRequestComponent } from './te/form-request/form-request.component';
import { AFormMyRequestAddComponent } from './advance/a-form-my-request-add/a-form-my-request-add.component';
import { RequestApproveComponent } from './te/request-approve/request-approve.component';
import { AccountDetailComponent } from './te/account-detail/account-detail.component';
import { ATeamRequestApproveComponent } from './advance/a-team-request-approve/a-team-request-approve.component';
import { UserGroupComponent } from './setting/user-group/user-group.component';
import { UserComponent } from './setting/user/user.component';
import { AFinanceDetailComponent } from './advance/a-finance-detail/a-finance-detail.component';
import { AAccountDetailComponent } from './advance/a-account-detail/a-account-detail.component';
import { CMyRequestDetailComponent } from './ClearAdvance/c-my-request-detail/c-my-request-detail.component';
import { CTeamRequestDetailComponent } from './ClearAdvance/c-team-request-detail/c-team-request-detail.component';
import { CFinanceDetailComponent } from './ClearAdvance/c-finance-detail/c-finance-detail.component';
import { CAccountDetailComponent } from './ClearAdvance/c-account-detail/c-account-detail.component';
import { PermissionAddComponent } from './setting/permission-add/permission-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PermissionComponent,
    MyRequestComponent,
    TeamRequestComponent,
    AccountComponent,
    AMyRequestComponent,
    ATeamRequestComponent,
    AFinanceComponent,
    AAccountComponent,
    CMyRequestComponent,
    CTeamRequestComponent,
    CFinanceComponent,
    CAccountComponent,
    FormRequestComponent,
    AFormMyRequestAddComponent,
    RequestApproveComponent,
    AccountDetailComponent,
    ATeamRequestApproveComponent,
    UserGroupComponent,
    UserComponent,
    AFinanceDetailComponent,
    AAccountDetailComponent,
    CMyRequestDetailComponent,
    CTeamRequestDetailComponent,
    CFinanceDetailComponent,
    CAccountDetailComponent,
    PermissionAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
