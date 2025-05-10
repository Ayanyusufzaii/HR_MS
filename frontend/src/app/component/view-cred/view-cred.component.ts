import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cred',
  templateUrl: './view-cred.component.html',
  styleUrls: ['./view-cred.component.css']
})
export class ViewCredComponent implements OnInit {

  isSidebarMinimized = false;
  isDropdownOpen = false;
  isCollapsed = false;

  employeeProfiles: any[] = [];
  searchTerm: string = '';
  selectedProfile: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getEmployeeProfiles();
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // 📥 Fetch all employee profiles
getEmployeeProfiles() {
  this.http.get<any[]>('http://localhost:3000/api/users').subscribe({
    next: (res) => {
      console.log('API Response:', res); // debug log
      this.employeeProfiles = res;       // direct assignment
    },
    error: (err) => {
      console.error('Error fetching employee profiles:', err);
    }
  });
}


  // 🔍 Filter profiles by name/email
filteredProfiles() {
  return this.employeeProfiles.filter(emp =>
    emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}


  // ✏️ Stub: Navigate to edit page (edit profile by email)
  editProfile(emp: any): void {
    console.log('Edit clicked for:', emp);
    // Uncomment below if editing is supported
    // this.router.navigate(['/edit-profile', emp.email]);
  }

  // 🗑️ Delete employee by email
  deleteProfile(email: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:3000/api/users/${email}`).subscribe({
        next: () => {
          this.employeeProfiles = this.employeeProfiles.filter(emp => emp.email !== email);
          alert('User deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          alert('Failed to delete user');
        }
      });
    }
  }

  // 👁️ View profile
  viewProfile(email: string): void {
    this.router.navigate(['/current-profile', email]);
  }

  // ❌ Close modal (if used)
  closeModal(): void {
    this.selectedProfile = null;
  }
}
