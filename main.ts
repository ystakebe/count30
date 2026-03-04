input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
/**
 * サイドチェンジ
 * 
 * 　LED
 */
input.onButtonPressed(Button.A, function () {
    if (side > 0) {
        if (count < count_max) {
            count += 1
            count_up += 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (side > 0) {
    	
    } else {
    	
    }
    side = side * -1
})
let count = 0
let side = 0
let count_max = 0
let count_up = 0
count_max = 3
basic.forever(function () {
    basic.showNumber(count_up)
})
