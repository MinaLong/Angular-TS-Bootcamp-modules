import { Injectable } from '@angular/core';
import { FormGroup, Validator } from '@angular/forms';

// used in emails/signup component

// validator class that checks if password equals passwordConfirmation
// validation on formgroup instead of form control

// make this class available for dependency injection by other components
// this is a synchronous validator so dependency injection is not required
// however it will be handy when we have asynchronous validator
@Injectable({ providedIn: 'root' })
export class PasswordValidator implements Validator {
    validate(formGroup: FormGroup) {
        const { password, passwordConfirmation } = formGroup.value;

        if (password === passwordConfirmation) {
            return null;
        }
        return { passwordsNoMatch: true };
    }
}
