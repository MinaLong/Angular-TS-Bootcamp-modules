import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.css']
})

// used in /emails/inbox/email-create
export class EmailModalComponent implements OnInit {

  // this output emits and event to the parent component of the modal component
  @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // this add our current component app-email-modal to html body directly
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestoy(): void {
    // this removes our current component app-email-modal from html body
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    // when this click event happens in the modal, emits an event output to parent
    // so parent component no longer show this modal
    this.dismiss.emit();
  }
}
