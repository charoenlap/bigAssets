import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAccountDetailComponent } from './advance/a-account-detail/a-account-detail.component';
import { AAccountComponent } from './advance/a-account/a-account.component';
import { AFinanceDetailComponent } from './advance/a-finance-detail/a-finance-detail.component';
import { AFinanceComponent } from './advance/a-finance/a-finance.component';
import { AMyRequestComponent } from './advance/a-my-request/a-my-request.component';
import { ATeamRequestComponent } from './advance/a-team-request/a-team-request.component';
import { CAccountDetailComponent } from './ClearAdvance/c-account-detail/c-account-detail.component';
import { CAccountComponent } from './ClearAdvance/c-account/c-account.component';
import { CFinanceDetailComponent } from './ClearAdvance/c-finance-detail/c-finance-detail.component';
import { CFinanceComponent } from './ClearAdvance/c-finance/c-finance.component';
import { CMyRequestComponent } from './ClearAdvance/c-my-request/c-my-request.component';
import { CTeamRequestDetailComponent } from './ClearAdvance/c-team-request-detail/c-team-request-detail.component';
import { CTeamRequestComponent } from './ClearAdvance/c-team-request/c-team-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionComponent } from './setting/permission/permission.component';
import { UserGroupComponent } from './setting/user-group/user-group.component';
import { UserComponent } from './setting/user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountDetailComponent } from './te/account-detail/account-detail.component';
import { AccountComponent } from './te/account/account.component';
import { MyRequestComponent } from './te/my-request/my-request.component';
import { TeamRequestComponent } from './te/team-request/team-request.component';
import { PermissionAddComponent } from './setting/permission-add/permission-add.component';
import { MyRequestEditComponent } from './te/my-request-edit/my-request-edit.component';
import { ATeamRequestDetailComponent } from './advance/a-team-request-detail/a-team-request-detail.component';
import { AMyRequestAddComponent } from './advance/a-my-request-add/a-my-request-add.component';
import { AMyRequestEditComponent } from './advance/a-my-request-edit/a-my-request-edit.component';
import { CMyRequestAddComponent } from './ClearAdvance/c-my-request-add/c-my-request-add.component';
import { CMyRequestEditComponent } from './ClearAdvance/c-my-request-edit/c-my-request-edit.component';
import { TestComponent } from './test/test.component';
import { MyRequestAddComponent } from './te/my-request-add/my-request-add.component';
import { TeamRequestDetailComponent } from './te/team-request-detail/team-request-detail.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '',  component: SignInComponent },  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'permission', component: PermissionComponent },
  { path: 'permission/add', component: PermissionAddComponent },
  { path: 'userGroup', component: UserGroupComponent },
  { path: 'user', component: UserComponent },
  { path: 'te/myRequest', component: MyRequestComponent },
  { path: 'te/myRequest/form/add', component: MyRequestAddComponent },
  { path: 'te/myRequest/form/edit', component: MyRequestEditComponent },
  { path: 'te/teamRequest', component: TeamRequestComponent },
  { path: 'te/teamRequest/detail', component: TeamRequestDetailComponent },
  { path: 'te/account', component: AccountComponent },
  { path: 'te/account/detail', component: AccountDetailComponent },
  { path: 'advance/myRequest', component: AMyRequestComponent },
  { path: 'advance/myRequest/add', component: AMyRequestAddComponent },
  { path: 'advance/myRequest/edit', component: AMyRequestEditComponent },
  { path: 'advance/teamRequest', component: ATeamRequestComponent },
  { path: 'advance/teamRequest/detail', component: ATeamRequestDetailComponent },
  { path: 'advance/finance', component: AFinanceComponent },
  { path: 'advance/finance/detail', component: AFinanceDetailComponent },
  { path: 'advance/account', component: AAccountComponent },
  { path: 'advance/account/detail', component: AAccountDetailComponent },
  { path: 'clearAdvance/myRequest', component: CMyRequestComponent },
  { path: 'clearAdvance/myRequest/add', component: CMyRequestAddComponent },
  { path: 'clearAdvance/myRequest/edit', component: CMyRequestEditComponent },
  { path: 'clearAdvance/temeRequest', component: CTeamRequestComponent },
  { path: 'clearAdvance/temeRequest/detail', component: CTeamRequestDetailComponent },
  { path: 'clearAdvance/finance', component: CFinanceComponent },
  { path: 'clearAdvance/finance/detail', component: CFinanceDetailComponent },
  { path: 'clearAdvance/account', component: CAccountComponent },
  { path: 'clearAdvance/account/detail', component: CAccountDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
