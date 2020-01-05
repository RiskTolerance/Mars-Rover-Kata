//========== old input ============
//let inputs = 'rffrfflfrff';
//let inputsArr = inputs.split('');
//=================================
let inputsArr = [];

const rover = {
  facing: 'N',
  position: {
    x: 0,
    y: 0,
  },
  //whatup my rover has a battery
  battery: 100,
  travelLog: [],
}

//added a function to create a random input of 20 steps.
function createInput(){
  for(let i = 0; i < 41; i++){
    let randomInputs = Math.floor(Math.random() * 4) + 1;
    switch(randomInputs){
      case 1:
        inputsArr.push('f');
        break;
      case 2:
        inputsArr.push('l');
        break;
      case 3:
        inputsArr.push('r');
        break;
      case 4:
        inputsArr.push('b');
        break;
    }
  }
  console.log(inputsArr);
}

//run this function to start
function start(inputsArr){
  createInput();
  inputsArr.forEach(function(input){
    switch(input){
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'f':
        if(rover.battery > 0){
          moveForward(rover);
          rover.travelLog.push([rover.position.x, rover.position.y]);
          break;
        }
        else {
          console.error('Rover battery depleated! Please recharge your rover!')
          inputsArr = null;
        }
      case 'b':
        if(rover.battery > 0){
        moveBackwards(rover);
        rover.travelLog.push([rover.position.x, rover.position.y]);
        break;
        }
        else {
          console.error('Rover battery depleated! Please recharge your rover!')
          inputsArr = null;
        }
    }
  });
  console.log(rover.travelLog);
}

function turnLeft(rover){ 
  switch(rover.facing){
    case 'N':
      rover.facing = 'E';
      break;
    case 'E':
      rover.facing = 'S';
      break;
    case 'S':
      rover.facing = 'W';
      break;
    case 'W':
      rover.facing = 'N';
      break;
    }
  console.log("Rover turned left!");
}

function turnRight(rover){
  switch(rover.facing){
    case 'N':
      rover.facing = 'W';
      break;
    case 'W':
      rover.facing = 'S';
      break;
    case 'S':
      rover.facing = 'E';
      break;
    case 'E':
      rover.facing = 'N';
      break;
    }
  console.log("Rover turned right!");
}

function moveForward(rover){
    switch(rover.facing){
      case 'N':
        rover.position.y = rover.position.y + 1;
        break;
      case 'W':
        rover.position.x = rover.position.x - 1;
        break;
      case 'S':
        rover.position.y = rover.position.y - 1;
        break;
      case 'E':
        rover.position.x = rover.position.x + 1;
        break;
      }
      rover.battery = rover.battery - 5;
      console.log("Rover moved forward!");
      console.warn('Rover battery at ' + rover.battery + '%!!!')
}

function moveBackwards(rover){
    switch(rover.facing){
      case 'N':
        rover.position.y = rover.position.y - 1;
        break;
      case 'W':
        rover.position.x = rover.position.x + 1;
        break;
      case 'S':
        rover.position.y = rover.position.y + 1;
        break;
      case 'E':
        rover.position.x = rover.position.x - 1;
        break;
      }
    rover.battery = rover.battery - 5;
    console.log("Rover moved backwards!");
    console.warn('Rover battery at ' + rover.battery + '%!!!')
}