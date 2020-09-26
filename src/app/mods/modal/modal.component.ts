import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) {

    // print out current component
    // console.log(el.nativeElement);
  }

  // lifecycle hook: ngOnInit, ngOnDestroy, ngOnChange
  ngOnInit(): void {
    // this add our current component app-modal to html body directly
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // this remove our current component app-modal from html body
    this.el.nativeElement.remove();
  }

  // when we close the model, we want to flip the showModel boolean at the parent component
  // model-home to false. 
  // child to parent communication
  // @Output, EventEmitter
  onCloseClick() {
    this.closeModal.emit();
  }

}
