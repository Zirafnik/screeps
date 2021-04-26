function checkDefenseRepairerNum() {
    let repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'defenseRepairer');
    console.log('DefenseRepairers: ' + repairers.length);

    if(repairers.length + Memory.build.filter(c => c == 'defenseRepairer').length < 1) {
        Memory.build.push('defenseRepairer');
        console.log('Added DefenseRepairer to queue!');
    }
}

module.exports = checkDefenseRepairerNum;