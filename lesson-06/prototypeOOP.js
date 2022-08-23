'user strict'

function KitchenDevice(){
	let self = this;

	self.brandName = 'noBrandName';
	self.totalPrice = 20000;
}

KitchenDevice.prototype.setBrandName = function(value){
	this.brandName = value;
}

KitchenDevice.prototype.getBrandName = function(){
	return this.brandName;
}

KitchenDevice.prototype.setTotalPrice = function(value){
	this.totalPrice = value;
}

KitchenDevice.prototype.getTotalPrice = function(){
	return this.totalPrice;
}

//--------------------------------------

function Teapot(volume){
	//KitchenDevice.call(this);

	let self = this;

	self.maxTemperature = 100;
	self.isTurnedOn = false;
}

Teapot.prototype = Object.create(KitchenDevice.prototype);
Teapot.prototype.constructor = Teapot;


Teapot.prototype.turnOn = function(){
	this.isTurnedOn = true;
}

Teapot.prototype.turnOff = function(){
	this.isTurnedOn = false;
}

Teapot.prototype.setMaxTemperature = function(value){

	if(value < 0 || value > 100){
		throw new Error('Invalid temperature data');
	}		
	this.maxTemperature = value;
}

Teapot.prototype.getMaxTemperature = function(){
	return this.maxTemperature;
}

Teapot.prototype.getIsTurnedOn = function(){
	return this.isTurnedOn;
}


let tefal = new Teapot(2400);

tefal.setBrandName('Test Brand Name')
console.log(tefal.getBrandName());
console.log(tefal.getTotalPrice());


console.log(tefal.getIsTurnedOn());

tefal.turnOn();
console.log(tefal.getIsTurnedOn());

console.log(tefal.getMaxTemperature());

tefal.setMaxTemperature(20);
console.log(tefal.getMaxTemperature());

tefal.turnOff();
console.log(tefal.getIsTurnedOn());




	










