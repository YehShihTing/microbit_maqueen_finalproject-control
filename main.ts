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
    } else if (pins.digitalReadPin(DigitalPin.P2) > 550 && (pins.digitalReadPin(DigitalPin.P1) > 400 && pins.digitalReadPin(DigitalPin.P1) < 600)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P2) < 450 && (pins.digitalReadPin(DigitalPin.P1) > 400 && pins.digitalReadPin(DigitalPin.P1) < 600)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P1) < 450 && (pins.digitalReadPin(DigitalPin.P2) > 400 && pins.digitalReadPin(DigitalPin.P2) < 600)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P1) > 550 && (pins.digitalReadPin(DigitalPin.P2) > 400 && pins.digitalReadPin(DigitalPin.P2) < 600)) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P1) > 400 && pins.digitalReadPin(DigitalPin.P1) < 600 && (pins.digitalReadPin(DigitalPin.P2) > 400 && pins.digitalReadPin(DigitalPin.P2) < 600)) {
        radio.sendNumber(5)
        basic.clearScreen()
    }
})
