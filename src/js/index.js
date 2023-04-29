const canvas = document.querySelector('canvas')
const board = canvas.getContext("2d")

canvas.width = DISPLAY_PIXEL * ASPECT_RATIO.width
canvas.height = DISPLAY_PIXEL * ASPECT_RATIO.height

const playerProperty = {
    width: 100,
    height: 100,
    speed: 1,
    color: "crimson",
    position : {
        x: 0,
        y: 0
    }
}

const ground = new Ground(canvas.width, canvas.height, "lightblue")
const player = new Player(playerProperty)

ground.create()
player.create()