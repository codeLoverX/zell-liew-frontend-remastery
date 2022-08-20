import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  constructor() {
   
   }

  ngOnInit(): void {
    if (this.name && this.age){
      this.isInput= true
    }
  }
  // From parent to child
  @Input('aliasName') name?: string;
  @Input() age?: number;
  isInput = false
  // From child to parent
  @Output() newMusicianEvent= new EventEmitter<string>();
  addNewArtist(val: string) {
    if (this.newMusicianEvent !== undefined)
      this.newMusicianEvent.emit(val);
  }
}
