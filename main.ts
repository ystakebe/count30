function count_up2 () {
    if (count < count_max) {
        count += 1
        count_up += 1
        if (count_up == 20) {
            finishgame()
            reset_game()
        }
        if (count == count_max) {
            sidechange()
        }
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    reset_game()
})
function sidechange () {
    basic.clearScreen()
    side = side * -1
    if (side > 0) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
    count = 0
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (side > 0) {
        count_up2()
        showcount()
    }
})
function showcount () {
    led_x = (count_up - count_up % 5) / 5
    led_y = count_up % 5
    if (led_x > 0) {
        for (let カウンター = 0; カウンター <= led_x - 1; カウンター++) {
            led.plot(カウンター, 0)
            led.plot(カウンター, 1)
            led.plot(カウンター, 2)
            led.plot(カウンター, 3)
            led.plot(カウンター, 4)
        }
    }
    if (led_y > 0) {
        for (let カウンター2 = 0; カウンター2 <= led_y - 1; カウンター2++) {
            led.plot(led_x, カウンター2)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    showcount()
})
input.onButtonPressed(Button.B, function () {
    if (side < 0) {
        count_up2()
        showcount()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (count == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    } else {
        sidechange()
    }
    showcount()
})
function reset_game () {
    count_up = 0
    count = 0
    if (Math.randomBoolean()) {
        side = 1
        basic.showArrow(ArrowNames.West)
    } else {
        side = -1
        basic.showArrow(ArrowNames.East)
    }
    basic.clearScreen()
}
function finishgame () {
    basic.clearScreen()
    if (side > 0) {
        basic.showString("B Win!")
    } else {
        basic.showString("A Win!")
    }
    basic.clearScreen()
}
let led_y = 0
let led_x = 0
let side = 0
let count_up = 0
let count = 0
let count_max = 0
count_max = 3
reset_game()
