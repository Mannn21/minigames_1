class Player {
    constructor(props) {
        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.color = props.color
        this.position = {
            x : props.position.x,
            y: props.position.y
        }

        console.log(props)
        console.log("Player berhasil dibuat")
    }

    create() {
        board.fillStyle = this.color
        board.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}