import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../service/account.service';
import {BookReviewCommentService} from '../../service/book-review-comment.service';
import {flatMap, map, switchMap} from 'rxjs/operators';
import {Page} from '../../models/page';
import {User} from '../../models/user';
import {BookReviewComment} from '../../models/book-review-comment';

@Component({
  selector: 'app-book-review-comment',
  templateUrl: './book-review-comment.component.html',
  styleUrls: ['./book-review-comment.component.css']
})
export class BookReviewCommentComponent implements OnInit {
  defaultPhotoPath = '../../../assets/images/default_avatar.jpg';
  pageSize = 3;
  page: number;
  loading: boolean;
  isLogged: boolean;
  loggedUser: User;

  @Input() reviewId: number;
  reviewComments: BookReviewComment[];
  ableToExpand: boolean;

  constructor( private bookReviewCommentService: BookReviewCommentService,
               private accountService: AccountService ) { }

  ngOnInit() {
    this.page = 1;
    this.reviewComments = [];
    this.ableToExpand = true;
    this.loading = true;
    this.isLogged = localStorage.getItem('currentUser') != null;
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getReviewComment();
  }

  getReviewComment(): void {
    this.loading = true;
    const tmpComments: BookReviewComment[] = [];
    const doneComments = {};
    this.bookReviewCommentService.getBookReviewComments(this.reviewId, this.page, this.pageSize).pipe(
      map((respPage: Page<BookReviewComment>) => {
        return respPage.array;
      }),
      flatMap((reviewCommentList: BookReviewComment[]) => {
        if (reviewCommentList.length < this.pageSize) {
          this.ableToExpand = false;
          this.loading = false;
        }
        return reviewCommentList;
      }),
      switchMap((reviewComment: BookReviewComment) => {
        tmpComments.push(reviewComment);
        return this.accountService.getUserById(reviewComment.userId);
      }),
      map((author: User) => {
        this.loading = false;
        const comments = tmpComments.filter(value => value.userId === author.userId);
        comments
          .filter(comment => doneComments[comment.commentId] == null)
          .forEach((comment) => {
            doneComments[comment.commentId] = true;
            comment.author = author;
            this.reviewComments.unshift(comment);
        });
      }),
    ).subscribe();
  }
  expandReviewsComments(): void {
    this.page += 1;
    this.getReviewComment();
  }
  sendComment(commentText: string): void {
    if (commentText === '') {
      return;
    }
    const newComment: BookReviewComment = {
      commentId: -1,
      userId: this.loggedUser.userId,
      bookReviewId: this.reviewId,
      content: commentText,
      creationTime: null,
      author: null
    };
    this.bookReviewCommentService.addReviewComment(newComment).pipe(
      flatMap((comment: BookReviewComment) => {
        return this.accountService.getUserById(comment.userId);
      }),
      map((user: User) => {
        newComment.author = user;
      }),
      )
      .subscribe(() => {
        newComment.creationTime = new Date();
        this.reviewComments.push(newComment);
      });
  }
}
