import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i != 3; ++i) {
      this.photos.push(`../../assets/gallery/${i + 1}.jfif`);
    }
  }

  photos: string[] = [];

}
