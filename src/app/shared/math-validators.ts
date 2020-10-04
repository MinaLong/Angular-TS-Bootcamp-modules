import { AbstractControl } from '@angular/forms';

// used in creditcard/math-form component
export class MathValidators {

    // static keyword: only use the function without creating an instance of the class
    // kind of like util functions, those functions do not have access to 
    // any instance variable of the class
    static addition(var1: string, var2: string, answer: string) {
        // have the addition function return the actual validation function
        // but also be able to take in parameters
        return (form: AbstractControl) => {
            const num1 = form.value[var1];
            const num2 = form.value[var2];
            const sumStr = form.value[answer];
            if (num1 + num2 === parseInt(sumStr)) {
                return null;
            }
            // validator addition is true, shows up in form.errors as error
            return { addition: true };
        }
    }
}
