class Car {
	constructor (private year : number, private maker : string) {}
	public isValid () : boolean {
		return this.year > 0 && this.maker.trim().length > 0;
	}
}