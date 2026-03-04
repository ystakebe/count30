/**
 * サイドチェンジ
 * 
 * 　LED
 */
function check_count () {
    if (true) {
    	
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    if (side > 0) {
        if (count < count_max) {
            count += 1
            count_up += 1
            check_count()
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (side > 0) {
    	
    } else {
    	
    }
    side = side * -1
})
function reset_game () {
    count_up = 0
    count_max = 3
}
let count_up = 0
let count_max = 0
let count = 0
let side = 0
reset_game()
basic.forever(function () {
    led.plot(0, 0)
})
