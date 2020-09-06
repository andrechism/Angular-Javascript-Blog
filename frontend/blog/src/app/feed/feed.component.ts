import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  faTrashAlt = faTrashAlt

  listPost: Post[];
  post: Post = new Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data
    })
  }

  cadastrarMensagem() {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data
      location.assign('/feed/#nome')
    })
  }

  deletarMensagem(post: Post) {
    this.postService.deleteMensagem(post).subscribe((data: Post) => {
      location.assign('/feed/#nome')
    })
  }
}
