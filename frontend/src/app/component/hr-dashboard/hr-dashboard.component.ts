import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent {
  isSidebarMinimized = false;

  // Inject AuthService and Router into the constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Toggle sidebar minimization
 toggleSidebar(): void {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }
  // Logout function to clear user data and navigate to login
  logout(): void {
    this.authService.clearUser();  // Clear user data from AuthService and localStorage
    this.router.navigate(['/login']);  // Navigate to login page
  }
}
