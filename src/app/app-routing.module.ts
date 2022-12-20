import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAccountComponent } from './advance/a-account/a-account.component';
import { AFinanceComponent } from './advance/a-finance/a-finance.component';
import { AFormMyRequestAddComponent } from './advance/a-form-my-request-add/a-form-my-request-add.component';
import { AMyRequestComponent } from './advance/a-my-request/a-my-request.component';
import { ATeamRequestComponent } from './advance/a-team-request/a-team-request.component';
import { CAccountComponent } from './ClearAdvance/c-account/c-account.component';
import { CFinanceComponent } from './ClearAdvance/c-finance/c-finance.component';
import { CFormMyRequestAddComponent } from './ClearAdvance/c-form-my-request-add/c-form-my-request-add.component';
import { CMyRequestComponent } from './ClearAdvance/c-my-request/c-my-request.component';
import { CTeamRequestComponent } from './ClearAdvance/c-team-request/c-team-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionComponent } from './setting/permission/permission.component';
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
  { path: 'te/myRequest', component: MyRequestComponent },
  { path: 'te/teamRequest', component: TeamRequestComponent },
  { path: 'te/account', component: AccountComponent },
  { path: 'te/account/detail', component: AccountDetailComponent },
  { path: 'te/myRequest/add', component: FormRequestComponent },
  { path: 'te/teamRequest/approve', component: RequestApproveComponent },
  { path: 'advance/myRequest', component: AMyRequestComponent },
  { path: 'advance/myRequest/add', component: AFormMyRequestAddComponent },
  { path: 'advance/temeRequest', component: ATeamRequestComponent },
  { path: 'advance/finance', component: AFinanceComponent },
  { path: 'advance/account', component: AAccountComponent },
  { path: 'clearAdvance/myRequest', component: CMyRequestComponent },
  { path: 'clearAdvance/myRequest/add', component: CFormMyRequestAddComponent },
  { path: 'clearAdvance/temeRequest', component: CTeamRequestComponent },
  { path: 'clearAdvance/finance', component: CFinanceComponent },
  { path: 'clearAdvance/account', component: CAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
