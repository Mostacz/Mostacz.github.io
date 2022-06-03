import { Engine } from "./Engine.js";
import { WallGameObject } from "./WallGameObject.js";
import { PlayerGameObject } from "./PlayerGameObject.js";
import { Finish } from "./Finish.js";

new Engine(document.querySelector("canvas")).start([
    new WallGameObject(0, 0, 200, 600, "blue"),
    new WallGameObject(0, 600, 10, 100, "blue"),
    new WallGameObject(0, 700, 500, 200, "blue"),
    new WallGameObject(600, 600, 300, 150, "blue"),
    new WallGameObject(1000, 700, 600, 200, "blue"),
    new WallGameObject(500, 850, 500, 50, "blue"),
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
    new Finish(250, 250, 100, 100),
    new PlayerGameObject(20, 640, 25, 25)
]);
