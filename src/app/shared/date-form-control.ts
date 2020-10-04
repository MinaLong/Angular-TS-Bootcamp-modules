
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';
// class we created that extends FormControl class
// in order to customize input masking
// we can also use npm-mask library for input masking - pretty good library
// npm install ngx-mask

import { FormControl } from '@angular/forms';

// for forms (creditcard/card-form project)
export class DateFormControl extends FormControl {
    // override the method
    setValue(value: string | null, options: any) {

        // to handle null value when form resets
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true });
            return;
        }

        // regex: if include anything other than 0-9 or '/'
        // disallow users putting letters
        if (value.match(/[^0-9|\/]/gi)) {
            // re-write input with original value (basically disallow user to type letters)
            // this.value is the current value before the latest typing
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length > 5) {
            // re-write input with original value (disallow user to type additional numbers)
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length === 2 && this.value.length === 3) {
            // if we have '12/' user can delete the added '/'
            // value is the new value user wants
            super.setValue(value, { ...options, emitModelToViewChange: true });
            return;
        }

        // have to call parent's setValue method in order to actually update value in formgroup
        // emitModelToViewChange: update the value in the input box as well
        if (value.length === 2) {
            super.setValue(value + '/', { ...options, emitModelToViewChange: true });
            return;
        }
        super.setValue(value, { ...options, emitModelToViewChange: true });
    }
}
