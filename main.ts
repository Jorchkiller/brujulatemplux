let Rumbo = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . # #
        # # . # #
        # . . . .
        # . . . .
        # # . . .
        `)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . # . #
        # . . # .
        # # # . #
        `)
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    Rumbo = input.compassHeading()
    if (Rumbo < 10 || Rumbo > 350) {
        basic.showString("N")
    }
    if (Rumbo < 95 && Rumbo > 85) {
        basic.showString("E")
    }
    if (Rumbo < 185 && Rumbo > 175) {
        basic.showString("S")
    }
    if (Rumbo < 275 && Rumbo > 265) {
        basic.showString("O")
    }
    basic.showString(" ")
})
