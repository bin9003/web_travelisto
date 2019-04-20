import $ from 'my-webpack-zepto'
function orient () {
  if (window.orientation === 0 || window.orientation === 180) {
    $('body').attr('class', 'portrait') // 当竖屏的时候为body增加一个class
    window.orientation = 'portrait'
    return false
  } else if (window.orientation === 90 || window.orientation === -90) {
    $('body').attr('class', 'landscape') // 当横屏的时候为body移除这个class
    window.orientation = 'landscape'
    return false
  }
}

$(function () {
  orient()
})

$(window).bind('orientationchange', function (e) {
  orient()
})
