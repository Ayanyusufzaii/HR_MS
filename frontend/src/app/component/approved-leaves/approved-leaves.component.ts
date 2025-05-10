import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LeaveRequest {
  id: number;
  emailId: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  reason?: string;
  status: string;
}

interface LeaveStatusResponse {
  message: string;
}

@Component({
  selector: 'app-approved-leaves',
  templateUrl: './approved-leaves.component.html',
  styleUrls: ['./approved-leaves.component.css']
})
export class ApprovedLeavesComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadApprovedLeaveRequests(); // Change the method to load only approved leaves
  }

  loadApprovedLeaveRequests(): void {
    // Fetch only approved leaves from the backend API
    this.http.get<{ leaveRequests: LeaveRequest[] }>('http://localhost:3000/api/get-approved-leaves')
      .subscribe(response => {
        this.leaveRequests = response.leaveRequests;
      }, error => {
        console.error('Failed to load approved leave requests', error);
      });
  }

  updateLeaveStatus(leaveId: number, status: string): void {
    this.http.post<LeaveStatusResponse>('http://localhost:3000/api/update-leave-status', { leaveId, status })
      .subscribe(response => {
        alert(response.message);
        this.loadApprovedLeaveRequests(); // Refresh list to reflect the changes
      }, error => {
        alert('Error updating leave status');
        console.error(error);
      });
  }

  searchTerm: string = '';
  statusFilter: string = '';

  get filteredLeaveRequests() {
    return this.leaveRequests.filter(leave =>
      (leave.emailId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
       leave.reason?.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.statusFilter === '' || leave.status === this.statusFilter)
    );
  }
}
