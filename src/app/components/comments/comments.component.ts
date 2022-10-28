import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];
  selectedComment: IComment

  constructor(private CommentService: CommentService) { }

  ngOnInit(): void {
    this.CommentService.getAll().subscribe(value => this.comments =value)
  }


  getComment(comment: IComment) {
    this.selectedComment = comment
  }
}
