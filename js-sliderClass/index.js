const leftBtn = document.getElementsByClassName('btn leftBtn')[0]
const rightBtn = document.getElementsByClassName('btn rightBtn')[0]
const swiper = document.getElementsByClassName('swiper')[0]
const sliderIndex = document.getElementsByClassName('sliderIndex')[0]
const length = swiper.childElementCount - 1
let nowIndex = 0
let flag = true
let timer,auto
const width = swiper.children[0].offsetWidth

swiper.style.left = 0 + 'px'

leftBtn.onclick = () => {
    if (flag) {
        flag = false
        nowIndex -= 1
        if (nowIndex == -1) {
            nowIndex = length - 1
            swiper.classList.remove('trans')
            swiper.style.left = length * -width + 'px'
        }
        setTimeout(() => {
            startMove(nowIndex)
        }, 0)
    }
}

const changeActive = () => {
    let active = document.getElementsByClassName('active')[0]
    active = active ? active.classList.remove('active') : active
    sliderIndex.children[nowIndex].classList.add('active')
}

rightBtn.onclick = () => {
    if (flag) {
        flag = false
        nowIndex += 1
        if (nowIndex == length) {
            nowIndex = 0
            startMove(length)
        } else {
            startMove(nowIndex)
        }
    }
}

const startMove = (num) => {
    clearTimeout(timer)
    swiper.classList.add('trans')
    swiper.style.left = num * -width + 'px'
    timer = setTimeout(() => {
        if (num == length) {
            swiper.classList.remove('trans')
            swiper.style.left = 0
        }
        flag = true
    }, 600)
    changeActive()
    autoMove()
}

const autoMove = () => {
    clearTimeout(auto)
    auto = setTimeout(() => {
        rightBtn.onclick()
    },2000)
}

startMove()


