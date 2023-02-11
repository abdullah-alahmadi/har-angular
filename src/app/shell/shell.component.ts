import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  logout() {
    this.auth.signOut().then(
      result => {
        this.router.navigateByUrl('login')
      }
    )
  }

}
