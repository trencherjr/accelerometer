let x = 0
let y = 0
basic.forever(function () {
    led.unplot(x, y)
    y = Math.round(input.acceleration(Dimension.Y) / 512) + 2
    x = Math.round(input.acceleration(Dimension.X) / 512) + 2
    led.plot(x, y)
})
