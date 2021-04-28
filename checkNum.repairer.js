let creepTypes = require('creepTypes');

function checkRepairerNum() {
    let repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);

    if(repairers.length + Memory.build.filter(c => c == 'repairer').length < creepTypes['repairer'].num) {
        Memory.build.push('repairer');
        console.log('Added Repairer to queue!');
    }
}

module.exports = checkRepairerNum;