import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current-profile',
  templateUrl: './current-profile.component.html',
  styleUrls: ['./current-profile.component.css']
})



export class CurrentProfileComponent implements OnInit {
  email: string | null = null;
  profile: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    if (this.email) {
      this.fetchProfile(this.email);
    }
  }

fetchProfile(email: string): void {
this.http.get<any>(`http://localhost:3000/api/employee-profiles/email/${email}`)
.subscribe({
    next: (res) => {
      console.log('API response:', res); // 👈 Check what's actually coming
      if (res.success) {
        this.profile = res.data;
        console.log('Documents:', this.profile.documents); // 👈 This should be an array
      }
    },
    error: (err) => {
      console.error('Error fetching profile:', err);
    }
  });
}

}
