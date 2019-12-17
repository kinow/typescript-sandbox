"use strict";
class Car {
    constructor(year, maker) {
        this.year = year;
        this.maker = maker;
    }
    isValid() {
        return this.year > 0 && this.maker.trim().length > 0;
    }
}
//# sourceMappingURL=file1.js.map