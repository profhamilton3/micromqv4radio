radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 110)
        basic.showIcon(IconNames.Heart)
    } else if (receivedNumber == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 110)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.LeftTriangle)
    if (receivedString == "UP") {
        maqueen.servoRun(maqueen.Servos.S1, 45)
    } else if (receivedString == "DN") {
        maqueen.servoRun(maqueen.Servos.S1, 0)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Silly)
    if (name == "speed") {
        basic.showIcon(IconNames.Snake)
    } else if (name == "vx") {
        x = value
    } else if (name == "vy") {
        y = value
        if (y < 500) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 99)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
        }
    } else {
        basic.showIcon(IconNames.StickFigure)
    }
})
let y = 0
let x = 0
radio.setGroup(1)
radio.setFrequencyBand(16)
basic.showIcon(IconNames.Fabulous)
