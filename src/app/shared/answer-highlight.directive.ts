import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  // elementRef gets a reference of the html element this directive is used at
  // NgControl is the glue between the our form control and this class
  constructor(private el: ElementRef, private controlName: NgControl) {
  }

  ngOnInit() {

    // get access to the form group in this directive
    // console.log(this.controlName.control.parent);

    // valueChanges emits an observable every time the value changes
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ var1, var2, answer }) =>
          Math.abs((var1 + var2 - answer) / (var1 + var2))
        ),
      )
      .subscribe((value) => {
        if (value < 0.2) {
          // add a property to class html element
          this.el.nativeElement.classList.add('closeAnswer');
        } else {
          this.el.nativeElement.classList.remove('closeAnswer');
        }
      });
  }
}
