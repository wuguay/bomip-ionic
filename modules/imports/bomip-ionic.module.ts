import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

export const isBlank = (obj: any) => obj === undefined || obj === null;

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule]
})
export class BomipIonicModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BomipIonicModule,
            providers: []
        };
    }
}
