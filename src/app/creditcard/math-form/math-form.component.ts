import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import { MathValidators } from 'src/app/shared/math-validators';

@Component({
  selector: 'app-math-form',
  templateUrl: './math-form.component.html',
  styleUrls: ['./math-form.component.css']
})
export class MathFormComponent implements OnInit {

  secondsPerSolution = 0;

  mathForm = new FormGroup({
    var1: new FormControl(this.randomNumber()),
    var2: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  }, [
    // custom validator
    // if valid return null
    // moved to MathValidators
    // (form: AbstractControl) => {
    //   const { var1, var2, answer } = form.value;
    //   if (var1 + var2 === parseInt(answer)) {
    //     return null;
    //   }
    //   // validator addition is true, shows up in form.errors as error
    //   return { addition: true };
    // },

    // since we're not invoking the function
    // we're just putting the function here for our mathForm to call this function 
    MathValidators.addition('var1', 'var2', 'answer'),
  ]);

  constructor() { }

  // both are lifecycle hooks
  // ngOnInit() is used to execute any piece of code for only one time (for eg : data fetch on load).
  // ngOnChanges() will execute on every @Input() property change.
  ngOnInit(): void {

    // console.log(this.mathForm.statusChanges);
    // statusChanges is an observable that will emit everytime any 
    // form control changes (which are invalid -> valid, or valid -> invalid)
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100),
      // scan operator is similar to reduce, but it emits intermediate values
      scan((acc, value) => {
        return {
          numSolved: acc.numSolved + 1,
          startTime: acc.startTime,
        }
      }, { numSolved: 0, startTime: new Date() }),
    ).subscribe(({ numSolved, startTime }) => {

      this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / numSolved / 1000;

      // another function setValue({}) will need to set all values
      this.mathForm.patchValue({
        var1: this.randomNumber(),
        var2: this.randomNumber(),
        answer: '',
      });
    });
  }

  // getter method, can reference {{ var2 }} directly in template
  get var2() {
    return this.mathForm.controls.var2.value;
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}
