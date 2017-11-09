(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.bp = global.bp || {}, global.bp.ionic = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var isBlank = function (obj) { return obj === undefined || obj === null; };
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
        core.NgModule({
            declarations: [],
            exports: [],
            imports: [common.CommonModule]
        })
    ], BomipIonicModule);
    return BomipIonicModule;
    var BomipIonicModule_1;
}());

exports.isBlank = isBlank;
exports.BomipIonicModule = BomipIonicModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
