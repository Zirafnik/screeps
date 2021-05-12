const creepTypes = require("./creepTypes");

function checkUpgraderNum() {
    let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length + Memory.build.filter(c => c == 'upgrader').length < creepTypes['upgrader'].num) {
        Memory.build.push('upgrader');
        console.log('Added Upgrader to queue!');
    }
}

module.exports = checkUpgraderNum;