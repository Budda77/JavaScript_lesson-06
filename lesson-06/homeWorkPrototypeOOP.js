'user strict'

function Robot(){
	let self = this;
	self.greeting = 'I am Robot - I just work.';
}	

Robot.prototype.setWork = function (value){
	this.greeting = value;
}

Robot.prototype.work = function (){
	return this.greeting;
}
	

//---------------------//----------------->


function CoffeeRobot(){}
	CoffeeRobot.prototype = Object.create(Robot.prototype);	

function RobotDancer(){}

	RobotDancer.prototype = Object.create(Robot.prototype);	

	
function RobotCoocker(){}
	RobotCoocker.prototype = Object.create(Robot.prototype);	

	
let robot = new Robot();

let coffeeRobot = new CoffeeRobot();
coffeeRobot.setWork('I am CoffeeRobot - I make coffee.');

let dancerRobot = new RobotDancer();
dancerRobot.setWork('I am RobotDancer - I just dance.');

let coockerRobot = new RobotCoocker();
coockerRobot.setWork('I am RobotCoocker - I just coock.');


let robots = [robot,
		coffeeRobot,
		dancerRobot,
		coockerRobot		
]

function customForEach(item, i, array){
	console.log(item.work());
}

robots.forEach(customForEach);
























