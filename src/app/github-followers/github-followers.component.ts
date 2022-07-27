import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.ge
  }

}
