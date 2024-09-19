const swiper = document.querySelectorAll('.swiper-slide');
const videos = document.querySelectorAll('.swiper-wrapper video');
let isPlay = true;

function togPlay(video) {
    if (isPlay) {
        video.pause();
        isPlay = false;
    }
    else {
        video.play();
        isPlay = true;
    }
}

function getVideo() {
    return videos[mySwiper.realIndex];
}
// 鼠标滚轮切换视频

swiper.forEach(function () {
    this.addEventListener('wheel', (e) => {
        let video = getVideo();
        video.pause();
        if (e.deltaY > 0) {
            mySwiper.slideNext();
        }
        else if (e.deltaY < 0) {
            mySwiper.slidePrev();
        }
        video = getVideo();
        video.play();
        isPlay = true;
    })
})
// 上下键切换视频,空格开关视频
swiper.forEach(function () {
    this.addEventListener('keydown', (e) => {
        let video = getVideo();
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            video.pause();
            if (e.key === 'ArrowDown') {
                mySwiper.slideNext();
            }
            else if (e.key === 'ArrowUp') {
                mySwiper.slidePrev();
            }
            video = getVideo();
            video.play();
            isPlay = true;
        }
        else if (e.key === ' ') {
            togPlay(video);
        }
        e.preventDefault();

    })
})
swiper.forEach(function () {
    this.addEventListener('click', function () {
        togPlay(getVideo());
    })
})

$('.control-set').each(function () {
    $(this).append(`<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32"
                                    height="32" focusable="false" style="font-size:32px">
                                    <path
                                        d="M23.5 15.134C24.1667 15.5189 24.1667 16.4811 23.5 16.866L12.25 23.3612C11.5833 23.7461 10.75 23.265 10.75 22.4952L10.75 9.50481C10.75 8.73501 11.5833 8.25388 12.25 8.63878L23.5 15.134Z"
                                        fill="white"></path>
                                </svg>`)
})
