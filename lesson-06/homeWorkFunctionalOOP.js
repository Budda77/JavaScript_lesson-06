'user strict'

function Robot(){
	let self = this;
	self.greeting = 'I am Robot - I just work.';
	self.activity = '- I just work.';
	
	self.work = function (){
		this.result = self.greeting;
		return this.result;
	}
}

function CoffeeRobot(){
	Robot.call(this);	
	this.greeting = 'I am CoffeeRobot - I make coffee.';
} 

function RobotDancer(){
	Robot.call(this);
	this.greeting = 'I am RobotDancer - I just dance.';	
}

function RobotCoocker(){
	Robot.call(this);
	this.greeting = 'I am RobotCoocker - I just coock.';	
}


let robot = new Robot();

let coffeeRobot = new CoffeeRobot();

let dancerRobot = new RobotDancer();

let coockerRobot = new RobotCoocker();

let robots = [robot,
		coffeeRobot,
		dancerRobot,
		coockerRobot		
]


function customForEach(item, i, array){
	console.log(item.work());
}

robots.forEach(customForEach);













