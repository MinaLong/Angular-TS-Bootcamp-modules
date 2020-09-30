import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css']
})
export class PhotosHomeComponent implements OnInit {

  imageURL: string;

  // dependency injection to inject photo service 
  constructor(private photosService: PhotosService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    // have to subscribe since fetch URL emits an observable
    this.photosService.fetchRandomPhotoURL().subscribe((res: string) => {
      // console.log(res);
      this.imageURL = res;
    });
  }

}
