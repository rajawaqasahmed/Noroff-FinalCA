import { AbstractControl } from '@angular/forms';

export function phoneValidator(control: AbstractControl) {
    console.log(control);
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp('^(([0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4})|([0-9]{3}[.\s\.]{0,1}[0-9]{3}[.\s\.]{0,1}[0-9]{4})|([0-9]{3}[ \ ]{1}[0-9]{3}[ \ ]{1}[0-9]{4}))$');

        if (!regex.test(control.value)) {
            console.log("failed");
            return {
                isError: true
            };
        }
    }
    console.log("validation of phone succeeded");
    return null;
}