import { Engine } from "./Engine.js";
import { WallGameObject } from "./WallGameObject.js";
import { PlayerGameObject } from "./PlayerGameObject.js";

new Engine(document.querySelector("canvas")).start([
    new WallGameObject(0, 0, 200, 600, "blue"),
    new WallGameObject(0, 700, 1600, 200, "blue"),
    new WallGameObject(200, 0, 1400, 200, "blue"),
    new WallGameObject(1550, 200, 50, 500, "blue"),
    new WallGameObject(200, 500, 1250, 100, "blue"),
    new WallGameObject(1100, 300, 350, 200, "blue"),
    new WallGameObject(700, 200, 150, 250, "blue"),
    new WallGameObject(850, 400, 200, 50, "blue"),
    new WallGameObject(900, 300, 200, 50, "blue"),
    new WallGameObject(200, 400, 450, 100, "blue"),
    new WallGameObject(400, 300, 250, 100, "blue"),
    new WallGameObject(400, 235, 60, 65, "blue"),
    new WallGameObject(500, 200, 200, 60, "blue"),
    new PlayerGameObject(20, 640, 25, 25, "green")
]);