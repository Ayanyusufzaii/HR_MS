import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { EmpDashboardComponent } from './component/emp-dashboard/emp-dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { HrDashboardComponent } from './component/hr-dashboard/hr-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { EmployeeDatabaseComponent } from './component/employee-database/employee-database.component';
import { LeaveAttendanceComponent } from './component/leave-attendance/leave-attendance.component';
import { PayrollManagementComponent } from './component/payroll-management/payroll-management.component';
import { HrNoticeComponent } from './component/hr-notice/hr-notice.component';
import { OverallPerformanceComponent } from './component/overall-performance/overall-performance.component';
import { RecruitmentComponent } from './component/recruitment/recruitment.component';
import { WorkTrackReportsComponent } from './component/work-track-reports/work-track-reports.component';
import { MyLeaveComponent } from './component/my-leave/my-leave.component';
import { ApplicationsComponent } from './component/applications/applications.component';
import { EventsComponent } from './component/events/events.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeProfileComponent } from './component/employee-profile/employee-profile.component';
import { ApprovedLeavesComponent } from './component/approved-leaves/approved-leaves.component';
import { RejectedLeavesComponent } from './component/rejected-leaves/rejected-leaves.component';
import { CurrentProfileComponent } from './component/current-profile/current-profile.component';
import { AuthGuard } from './component/services/auth.guard';
import { ViewCredComponent } from './component/view-cred/view-cred.component';
import { HrProfileComponent } from './component/hr-profile/hr-profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'emp-dashboard', component: EmpDashboardComponent, canActivate: [AuthGuard] },
  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard] },
  { path: 'hr-dashboard', component: HrDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'employee-database', component: EmployeeDatabaseComponent, canActivate: [AuthGuard] },
  { path: 'leave-attendance', component: LeaveAttendanceComponent, canActivate: [AuthGuard] },
  { path: 'payroll-management', component: PayrollManagementComponent, canActivate: [AuthGuard] },
  { path: 'hr-notice', component: HrNoticeComponent, canActivate: [AuthGuard] },
  { path: 'overall-performance', component: OverallPerformanceComponent, canActivate: [AuthGuard] },
  { path: 'recruitment', component: RecruitmentComponent, canActivate: [AuthGuard] },
  { path: 'work-track-reports', component: WorkTrackReportsComponent, canActivate: [AuthGuard] },
  { path: 'my-leaves', component: MyLeaveComponent, canActivate: [AuthGuard] },
  { path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'employee-details', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'create-employee', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employee/:email', component: EmployeeProfileComponent, canActivate: [AuthGuard] },
  { path: 'approved-leaves', component: ApprovedLeavesComponent, canActivate: [AuthGuard] },
  { path: 'rejected-leaves', component: RejectedLeavesComponent, canActivate: [AuthGuard] },
  { path: 'current-profile/:email', component: CurrentProfileComponent, canActivate: [AuthGuard] },
  { path: 'view-cred', component: ViewCredComponent, canActivate: [AuthGuard] },
  { path: 'hr-profile', component: HrProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
