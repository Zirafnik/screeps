PROBLEMS:
[x]creeps get re-assigned src for harvesting each tick -> when new spawn, they switch  => only harvesters mine, all other take from storage

FEATURES:
-when adding spawns to queue, make for loop to add all the missing creeps? (only for imporant classes)
-make harvesters first fill up extensions, because Spawn earns a small amount of energy each tick on its own => but only up to 300 energy in extensions
[x]make harvester always top priority spawn ==> other spawns depend on it
-prioritize building queue ==> roads last to be built
[x]function to calculate creep cost
-function to calculate total energy stored
[x]repairer only for rampart => otherwise switching between roads and other, since roads first in arr
[x]add adjustable values (creep nums, creep body, creep src location...) all into one file
[x]set up storage + containers -> create dedicated creep energy source roles
-add creep to harvest the dead
[x]try folder structure + add importing files
-towers logic
-renew creeps
-use try/catch to start checking for errors
-make tower feeding creep
-make defensive strong creeps meele + ranged, when ramparts.length > 0
-make tough creeps meele + ranged, when no ramparts
-update creep saying
-update creep bodies