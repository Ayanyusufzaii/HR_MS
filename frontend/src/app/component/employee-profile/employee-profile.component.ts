import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employeeProfile: any = null;
  email: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the email parameter from the route
    this.email = this.route.snapshot.paramMap.get('email');
    if (this.email) {
      this.fetchProfile(this.email);
    }
  }

  fetchProfile(email: string) {
    this.http.get<any>(`http://localhost:3000/api/user/profile?email=${email}`).subscribe({
      next: (res) => {
        if (res.success) {
          this.employeeProfile = res.data;
        }
      },
      error: (err) => {
        console.error('Error fetching profile', err);
      }
    });
  }
}
