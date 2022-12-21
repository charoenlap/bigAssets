import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAccountDetailComponent } from './advance/a-account-detail/a-account-detail.component';
import { AAccountComponent } from './advance/a-account/a-account.component';
import { AFinanceDetailComponent } from './advance/a-finance-detail/a-finance-detail.component';
import { AFinanceComponent } from './advance/a-finance/a-finance.component';
import { AFormMyRequestAddComponent } from './advance/a-form-my-request-add/a-form-my-request-add.component';
import { AMyRequestComponent } from './advance/a-my-request/a-my-request.component';
import { ATeamRequestApproveComponent } from './advance/a-team-request-approve/a-team-request-approve.component';
import { ATeamRequestComponent } from './advance/a-team-request/a-team-request.component';
import { CAccountDetailComponent } from './ClearAdvance/c-account-detail/c-account-detail.component';
import { CAccountComponent } from './ClearAdvance/c-account/c-account.component';
import { CFinanceDetailComponent } from './ClearAdvance/c-finance-detail/c-finance-detail.component';
import { CFinanceComponent } from './ClearAdvance/c-finance/c-finance.component';
import { CMyRequestDetailComponent } from './ClearAdvance/c-my-request-detail/c-my-request-detail.component';
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
import { FormRequestComponent } from './te/form-request/form-request.component';
import { MyRequestComponent } from './te/my-request/my-request.component';
import { RequestApproveComponent } from './te/request-approve/request-approve.component';
import { TeamRequestComponent } from './te/team-request/team-request.component';

const routes: Routes = [
  { path: '',  component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'permission', component: PermissionComponent },
  { path: 'userGroup', component: UserGroupComponent },
  { path: 'user', component: UserComponent },
  { path: 'te/myRequest', component: MyRequestComponent },
  { path: 'te/myRequest/detail', component: FormRequestComponent },
  { path: 'te/teamRequest', component: TeamRequestComponent },
  { path: 'te/teamRequest/detail', component: RequestApproveComponent },
  { path: 'te/account', component: AccountComponent },
  { path: 'te/account/detail', component: AccountDetailComponent },
  { path: 'advance/myRequest', component: AMyRequestComponent },
  { path: 'advance/myRequest/detail', component: AFormMyRequestAddComponent },
  { path: 'advance/teamRequest', component: ATeamRequestComponent },
  { path: 'advance/teamRequest/detail', component: ATeamRequestApproveComponent },
  { path: 'advance/finance', component: AFinanceComponent },
  { path: 'advance/finance/detail', component: AFinanceDetailComponent },
  { path: 'advance/account', component: AAccountComponent },
  { path: 'advance/account/detail', component: AAccountDetailComponent },
  { path: 'clearAdvance/myRequest', component: CMyRequestComponent },
  { path: 'clearAdvance/myRequest/detail', component: CMyRequestDetailComponent },
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
