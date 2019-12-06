import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FriendStatus} from '../models/friend-status';
import {apiUrls} from '../../api-urls';
import {catchError, map} from 'rxjs/operators';
import {ErrorHandlerService} from './error-handler.service';
import {User} from '../models/user';
import {Page} from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private readonly friendStatusUrl: string;
  private readonly friendRequestUrl: string;
  private readonly getFriendsUrl: string;

  constructor(private http: HttpClient, private errorHadlerService: ErrorHandlerService) {
    this.friendStatusUrl = apiUrls.API_FRIENDS.API_FRIENDS_STATUS;
    this.friendRequestUrl = apiUrls.API_FRIENDS.API_FRIEND_REQUEST;
    this.getFriendsUrl = apiUrls.API_FRIENDS.API_GET_FRIENDS;
  }

  getFriendStatus(targetUserId: number): Observable<FriendStatus> {
    const params = new HttpParams().set('targetUserId', targetUserId.toString());
    return this.http.get<FriendStatus>(this.friendStatusUrl, {params});
  }

  sendFriendRequest(destinationUserId: number) {
    const params = new HttpParams().set('destinationUserId', destinationUserId.toString());
    return this.http.post(this.friendRequestUrl, null, {params}).pipe(
      map(value => 'OK'), // needs because server returns null normally
      catchError(this.errorHadlerService.handleError('Sending friend request', null))
    );
  }

  deleteFromFriends(friendId: number) {
    const params = new HttpParams().set('friendId', friendId.toString());
    return this.http.delete(this.friendRequestUrl, {params}).pipe(
      map(value => 'OK'), // needs because server returns null normally
      catchError(this.errorHadlerService.handleError('Deleting from friends', null))
    );
  }

  getFriends(page: number, pageSize: number): Observable<Page<User>> {
    const params = new HttpParams().set('page', page.toString()).set('pageSize', pageSize.toString());
    return this.http.get<Page<User>>(this.getFriendsUrl, {params});
  }
}
