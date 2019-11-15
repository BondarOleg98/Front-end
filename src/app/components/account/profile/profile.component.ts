import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile = {userId: null, fullName: null, email: null, createdAt: null, photoPath: null};

  constructor(private activatedRoute: ActivatedRoute,
              private accountService: AccountService,
              private router: Router) {
  }

  private setDefaultAvatar() {
    // tslint:disable-next-line:max-line-length
    this.profile.photoPath = '../../../assets/images/default_avatar.jpg';
  }

  ngOnInit() {
    this.setDefaultAvatar();
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.accountService.getUserById(userId)
      .subscribe(
        user => {
          this.profile = user;
          if (!this.profile.photoPath) {
            this.setDefaultAvatar();
          }
        },
        error => {
          console.log('Error');
          console.log(error);
          console.log('Error message');
          console.log(error.message);
          console.log('Error object');
          console.error(error.error);
          // handle error
          this.router.navigate(['']);
        }
      );
  }

  edit() {
    console.log('edit button clicked');
  }

  canEdit() {
    const currentUser = this.accountService.getCurrentUser();
    return currentUser && this.profile.userId === currentUser.userId;
  }

}