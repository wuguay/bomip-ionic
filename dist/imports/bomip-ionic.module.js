import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export var isBlank = function (obj) { return obj === undefined || obj === null; };
var BomipIonicModule = /** @class */ (function () {
    function BomipIonicModule() {
    }
    BomipIonicModule_1 = BomipIonicModule;
    BomipIonicModule.forRoot = function () {
        return {
            ngModule: BomipIonicModule_1,
            providers: []
        };
    };
    BomipIonicModule = BomipIonicModule_1 = __decorate([
        NgModule({
            declarations: [],
            exports: [],
            imports: [CommonModule]
        })
    ], BomipIonicModule);
    return BomipIonicModule;
    var BomipIonicModule_1;
}());
export { BomipIonicModule };
//# sourceMappingURL=bomip-ionic.module.js.map