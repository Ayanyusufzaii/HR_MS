import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userKey = 'user';
  



  // Store the entire user object, including employeeId and email
  setUser(user: { id: number; name: string; email: string; grp_id: number }): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // Retrieve the user object, including employeeId and email
  getUser(): { id: number; name: string; email: string; grp_id: number } | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  clearUser(): void {
    localStorage.removeItem(this.userKey);
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  // Retrieve the email of the logged-in user (used in various components)
  getLoggedInUserEmail(): string {
    const user = this.getUser(); // Uses the getUser method now
    return user ? user.email : ''; // Return the email if user exists
  }

  // Store the email and employeeId separately (this can be omitted if we are using the setUser method)
  setEmailAndId(employeeId: string, email: string): void {
    localStorage.setItem('employeeId', employeeId);
    localStorage.setItem('email', email);
  }

  // Retrieve email and employeeId separately
  getEmailAndId(): { employeeId: string | null, email: string | null } {
    const user = this.getUser();
    return user ? { employeeId: user.id.toString(), email: user.email } : { employeeId: null, email: null };
  }

  // Optionally, you can store additional user data if necessary
  setAdditionalData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getAdditionalData(key: string): string | null {
    return localStorage.getItem(key);
  }
}
