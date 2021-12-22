let LSpeed = 0
let RSpeed = 0
let SpeedDiff = 0
let BasicSpeed = 0
let R = 0
let Y = 0
let X = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P1)
    Y = pins.analogReadPin(AnalogPin.P2)
    R = pins.digitalReadPin(DigitalPin.P15)
    BasicSpeed = Y / 2
    SpeedDiff = (X - 512) / 2
    RSpeed = BasicSpeed - SpeedDiff
    LSpeed = BasicSpeed + SpeedDiff
    if (RSpeed < 0) {
        radio.sendValue("RM", 0)
        led.plot(3, 4)
        led.plot(4, 4)
    } else if (RSpeed > 512) {
        radio.sendValue("RM", 512)
        led.plot(3, 0)
        led.plot(4, 0)
    } else {
        radio.sendValue("RM", RSpeed)
        led.plot(3, 5 - RSpeed / 102)
        led.plot(4, 5 - RSpeed / 102)
    }
    if (LSpeed < 0) {
        radio.sendValue("LM", 0)
        led.plot(0, 4)
        led.plot(1, 4)
    } else if (LSpeed > 512) {
        radio.sendValue("LM", 512)
        led.plot(0, 0)
        led.plot(1, 0)
    } else {
        radio.sendValue("LM", LSpeed)
        led.plot(0, 5 - LSpeed / 102)
        led.plot(1, 5 - LSpeed / 102)
    }
    radio.sendValue("R", R)
    basic.pause(500)
    basic.clearScreen()
})
