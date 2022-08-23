'user strict'

function KitchenDevice(){
	let self = this;
	
	self.brandName = 'noBrandName';
	self.totalPrice = 0;
	
	self.setBrandName = function(value){
		self.brandName = value;
	}
	
	self.getBrandName = function(){
		return self.brandName;
	}
	
	self.setTotalPrice = function(value){
		self.totalPrice = value;
	}
	
	self.getTotalPrice = function(){
		return self.totalPrice;
	}
	
}

//--------------------------------------

function Teapot(volume){
	KitchenDevice.call(this);

	let self = this;

	self.maxTemperature = 100;
	self.isTurnedOn = false;

	self.turnOn = function(){
		self.isTurnedOn = true;
	}

	self.turnOff = function(){
		self.isTurnedOn = false;
	}

	self.setMaxTemperature = function(value){

		if(value < 0 || value > 100){
			throw new Error('Invalid temperature data');
		}
		self.maxTemperature = value;
	}

	self.getMaxTemperature = function(){
		return self.maxTemperature;
	}

	self.getIsTurnedOn = function(){
		return self.isTurnedOn;
	}
}

let tefal = new Teapot(2400);

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





