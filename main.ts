radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P2) > 600 && (pins.analogReadPin(AnalogPin.P1) > 450 && pins.analogReadPin(AnalogPin.P1) < 550)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P2) < 400 && (pins.analogReadPin(AnalogPin.P1) > 450 && pins.analogReadPin(AnalogPin.P1) < 550)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) < 400 && (pins.analogReadPin(AnalogPin.P2) > 450 && pins.analogReadPin(AnalogPin.P2) < 550)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 600 && (pins.analogReadPin(AnalogPin.P2) > 450 && pins.analogReadPin(AnalogPin.P2) < 550)) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        radio.sendNumber(5)
        basic.clearScreen()
    }
})
