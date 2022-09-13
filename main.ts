input.onButtonPressed(Button.A, function () {
    Connor = randint(0, 1)
    if (Connor == 0) {
        basic.showString("Dare")
    } else if (Connor == 1) {
        basic.showString("Truth")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    wingo = randint(0, 3)
    if (wingo == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (wingo == 1) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (wingo == 2) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (wingo == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
let wingo = 0
let Connor = 0
basic.showString("Truth or Dare")
basic.forever(function () {
	
})
