const Project = require("../project");
const ProjectBadge = require("../projectBadge");

let rustBadge = new ProjectBadge("Rust");
let tauriBadge = new ProjectBadge("Tauri");
let unityBadge = new ProjectBadge("Unity");
let unrealBadge = new ProjectBadge("Unreal Engine");
let csharpBadge = new ProjectBadge("C#");
let cppBadge = new ProjectBadge("C++");
let angularBadge = new ProjectBadge("Angular");

// Simple list of projects that will be used as data
module.exports = [
    new Project("attackOnChancla", "Attack on Chancla", "AOC is a fast game in which you have to find an especific item that you mom requests. But don't take too long or your mother will find it first.", "", "https://fireinfern.itch.io/attack-on-chancla", [
        csharpBadge, unityBadge
    ]),
    new Project("polymorpher", "Polymorpher", "Polymorpher is a Rogelike game inpired in a morphing alien hero, he will try to scape the scientific facility that has him imprison", "", "https://fireinfern.itch.io/polymorpher", [
        csharpBadge, unityBadge
    ]),
    new Project("fractureSouls", "Fracture Souls", "Fracture Souls is a unfair multiplayer game, race the other players through a difficult area, avoid traps and colect your souls", "", "https://fireinfern.itch.io/fracturedsouls"),
    new Project("dataDrivenPlugin", "Unreal Data Driven Plugin", "A simple implementation of a Data Driven Components and Actors, creates Data Containers that store Data Fragments that can be search by class and get specific data", "", "https://github.com/Fireinfern/UnrealDataDrivenPlugin", [
        cppBadge, unrealBadge
    ]),
    new Project("unrealDynamicCamera", "Unreal Dynamic Camera", "A strategy based camera system for unreal, includes Third person Camera Mode. Collision detection and other Camera Modes are planned.", "", "https://github.com/Fireinfern/DynamicCameraPlugin", [
        cppBadge, unrealBadge
    ]),
    new Project("unrealTool", "Unreal Tool", "Created with Tauri, this application is being develop with the purpose of having a simple interface to use commands that are used in unreal, configure which version tu use and what to do.", "", "https://github.com/Fireinfern/UnrealTauriTool", [
        rustBadge, tauriBadge, angularBadge
    ])
];