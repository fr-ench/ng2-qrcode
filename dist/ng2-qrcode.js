/// <reference path="ng2-qrcode.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QRCode = require("qrcodejs2");
function isValidQrCodeText(data) {
    return !(typeof data === 'undefined' || data === '');
}
var QRCodeComponent = (function () {
    function QRCodeComponent(el) {
        this.el = el;
        this.qrdata = '';
        this.size = 256;
        this.level = 'M';
        this.colordark = '#000000';
        this.colorlight = '#ffffff';
        this.usesvg = false;
    }
    QRCodeComponent.prototype.ngOnInit = function () {
        try {
            if (!isValidQrCodeText(this.qrdata)) {
                throw new Error('Empty QR Code data');
            }
            this.qrcode = new QRCode(this.el.nativeElement, {
                text: this.qrdata,
                width: this.size,
                height: this.size,
                colorDark: this.colordark,
                colorLight: this.colorlight,
                useSVG: this.usesvg,
                correctLevel: QRCode.CorrectLevel[this.level.toString()]
            });
        }
        catch (e) {
            console.error('Error generating QR Code: ' + e.message);
        }
    };
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.qrcode) {
            return;
        }
        var qrData = changes['qrdata'];
        if (qrData && isValidQrCodeText(qrData.currentValue)) {
            this.qrcode.clear();
            this.qrcode.makeCode(qrData.currentValue);
        }
    };
    return QRCodeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "qrdata", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], QRCodeComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "level", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "colordark", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "colorlight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], QRCodeComponent.prototype, "usesvg", void 0);
QRCodeComponent = __decorate([
    core_1.Component({
        selector: 'qrcode',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: ''
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], QRCodeComponent);
exports.QRCodeComponent = QRCodeComponent;
var QRCodeModule = (function () {
    function QRCodeModule() {
    }
    return QRCodeModule;
}());
QRCodeModule = __decorate([
    core_1.NgModule({
        exports: [QRCodeComponent],
        declarations: [QRCodeComponent],
        entryComponents: [QRCodeComponent]
    })
], QRCodeModule);
exports.QRCodeModule = QRCodeModule;
//# sourceMappingURL=ng2-qrcode.js.map