import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css'],
  providers: [DatePipe]
})
export class MyLeaveComponent implements OnInit {
  isSidebarMinimized = false;
  isLeaveModalOpen = false;

  leaveRequest = {
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
    emailId: '',
    status: 'Pending'
  };

  remainingLeaves = 6;

  user: any = {
    name: 'Employee',
    email: ''
  };

  leaveRequests: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.user = user;
      this.leaveRequest.emailId = user.email;
      this.fetchLeaveRequests();
      console.log('Logged-in user:', this.user);
      this.router.navigate(['/login']);
    }
  }

  formatDate(dateStr: string): string {
    return this.datePipe.transform(dateStr, 'MM/dd/yyyy')!;
  }

  fetchLeaveRequests(): void {
    const email = this.authService.getLoggedInUserEmail();
    this.http.get<any[]>(`http://localhost:3000/api/leave-requests-emp?emailId=${email}`).subscribe(
      data => {
        this.leaveRequests = data.map(leave => {
          leave.formattedFromDate = this.formatDate(leave.fromDate);
          leave.formattedToDate = this.formatDate(leave.toDate);
          return leave;
        });
      },
      error => {
        console.error('Error fetching leave requests:', error);
      }
    );
  }

  submitLeave(): void {
    if (this.leaveRequest.leaveType && this.leaveRequest.fromDate && this.leaveRequest.toDate && this.leaveRequest.reason) {
      const fromDate = new Date(this.leaveRequest.fromDate);
      const toDate = new Date(this.leaveRequest.toDate);

      if (fromDate > toDate) {
        alert('From date cannot be later than to date.');
        return;
      }

      this.http.post('http://localhost:3000/api/leave-requests', this.leaveRequest).subscribe(
        () => {
          alert('Leave request submitted successfully');
          this.closeLeaveModal();
          this.fetchLeaveRequests();
        },
        error => {
          console.error('Error:', error);
          alert('Submission failed. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

  cancelLeaveRequest(id: number): void {
    const email = this.authService.getLoggedInUserEmail();
    if (confirm('Are you sure you want to cancel this leave request?')) {
      this.http.delete(`http://localhost:3000/api/leave-requests-del?emailId=${email}&id=${id}`).subscribe({
        next: () => {
          this.fetchLeaveRequests();
        },
        error: (err) => {
          console.error('Delete failed:', err);
        }
      });
    }
  }

  get dateCount(): number {
    if (this.leaveRequest.fromDate && this.leaveRequest.toDate) {
      const from = new Date(this.leaveRequest.fromDate);
      const to = new Date(this.leaveRequest.toDate);
      const timeDifference = to.getTime() - from.getTime();
      return timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
    }
    return 0;
  }

  toggleSidebar(): void {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }

  openLeaveModal(): void {
    this.isLeaveModalOpen = true;
    this.leaveRequest.emailId = this.user.email;
  }

  closeLeaveModal(): void {
    this.isLeaveModalOpen = false;
  }

  logout(): void {
    this.authService.clearUser();
    this.router.navigate(['/login']);
  }
}
