import { togVoice, videos, togDanmu } from "../data/video-data.js";
import { secondsToTime } from "./util/util.js";

function renderPage() {
    //渲染视频
    videos.forEach((v) => {
        $('.swiper-wrapper').append(`
        <div class="swiper-slide">
                        <div class="video-tog" tabindex="0"><video muted src="src/video/video-${v.id}.mp4"
                                height="704"></video>
                        </div>
                        <div class="control">
                            <div class="progress-line-con">
                                <div class="progress-line">
                                    <div class="hasPlayed">
                                        <div class="light-circle"> <div></div> </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="control-set"></div>
                        </div>
                    </div>
    `)

    })

    let isDraging = false;
    let isPlay = false;
    const videoTogs = document.querySelectorAll('.video-tog');
    const video_page = document.querySelectorAll('.swiper-wrapper video');
    //获取时长
    const promises = [];    //获取时长需要时间,所以需要异步操作来进行
    document.querySelectorAll('.swiper-wrapper video').forEach((v) => {
        promises.push(new Promise((resolve) => {
            v.addEventListener('loadedmetadata', function () {
                v.parentElement.setAttribute("data-duration", v.duration);
                resolve();
            })
        }))
    })

    Promise.all(promises).then(() => {
        //渲染视频控制栏
        $('.control-set').each(function () {
            $(this).append(`<div class="play-time-con"><svg class="switch-play" viewBox="0 0 32 32" fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" focusable="false" style="font-size:32px">
            <path d="M10 8C9.44772 8 9 8.44772 9 9V23C9 23.5523 9.44772 24 10 
            24H13C13.5523 24 14 23.5523 14 23V9C14 8.44772 13.5523 8 13 8H10Z" 
            fill="white"></path><path d="M19 8C18.4477 8 18 8.44772 18 9V23C18 23.5523 
            18.4477 24 19 24H22C22.5523 24 23 23.5523 23 23V9C23 8.44772 22.5523 8 22 8H19Z" 
            fill="white"></path></svg>
                                    <p class="video-time-text">00:00 / </p> 
                                    <p>${secondsToTime($(this).parent().prev().attr('data-duration'))}</p>
                                </div>
                                <div class="danmuCon">
                                    <div class="danUI">
                                        <div class="danmu-switch"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4.29 6.29a2 2 0 0 1 2-2h10.693a2 2 0 0 1 2 2v5.404a5.55 5.55 0 0 0-2.472-.55V8.274a.6.6 0 0 0-.6-.6h-.771l.321-.478a.6.6 0 1 0-.996-.67l-.771 1.148h-.317l-.772-1.148a.6.6 0 0 0-.996.67l.322.478h-.775a.6.6 0 0 0-.6.6v3.772a.6.6 0 0 0 .6.6h1.609a5.602 5.602 0 0 0-.625.69h-1.463a.6.6 0 1 0 0 1.2h.763a5.554 5.554 0 0 0-.443 2.181c0 .76.152 1.484.428 2.144H6.289a2 2 0 0 1-2-2V6.29zm11.021 4.997a5.525 5.525 0 0 0-.552.158h-.626v-.684h1.178v.526zM6.277 7.332a.6.6 0 0 1 .6-.6h2.378a.6.6 0 0 1 .6.6v2.83a.6.6 0 0 1-.6.6H7.477v1.157h1.778a.6.6 0 0 1 .6.6v3.3a.6.6 0 0 1-.6.6H6.877a.6.6 0 0 1 0-1.2h1.778v-2.1H6.877a.6.6 0 0 1-.6-.6V10.16a.6.6 0 0 1 .6-.6h1.778V7.932H6.877a.6.6 0 0 1-.6-.6zm5.48 4.113v-.684h1.177v.684h-1.178zm0-1.884h1.177v-.688h-1.178v.688zm2.377 0h1.177v-.688h-1.178v.688z"
                                                    fill="#fff"></path>
                                                <path
                                                    d="M20.425 16.713a3.857 3.857 0 1 1-7.714 0 3.857 3.857 0 0 1 7.714 0z"
                                                    fill="#fff"></path>
                                                <path d="M15.258 16.802l1.028 1.079L18 15.859" stroke="#FE2C55"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg></div>
                                        <div><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="_MV8GOoA" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M3.867 6.29a2 2 0 0 1 2-2H16.44a2 2 0 0 1 2 2v5.25l-1.644-.959a1 1 0 0 0-.801-.09V8.272a.6.6 0 0 0-.6-.6h-.76l.32-.48a.6.6 0 0 0-.999-.666l-.764 1.146h-.305l-.764-1.146a.6.6 0 0 0-.998.666l.32.48h-.765a.6.6 0 0 0-.6.6v3.772a.6.6 0 0 0 .6.6h1.57l-.605.353a1 1 0 0 0-.346.337h-1.091a.6.6 0 1 0 0 1.2h.94v4.178c0 .05.005.1.012.147H5.867a2 2 0 0 1-2-2V6.29zm10.927 4.87l-.488.285h-.67v-.684h1.158v.4zM5.836 7.333a.6.6 0 0 1 .6-.6h2.358a.6.6 0 0 1 .6.6v2.83a.6.6 0 0 1-.6.6H7.036v1.157h1.758a.6.6 0 0 1 .6.6v3.3a.6.6 0 0 1-.6.6H6.436a.6.6 0 0 1 0-1.2h1.758v-2.1H6.436a.6.6 0 0 1-.6-.6V10.16a.6.6 0 0 1 .6-.6h1.758V7.932H6.436a.6.6 0 0 1-.6-.6zm5.443 4.113v-.684h1.157v.684h-1.157zm0-1.884h1.157v-.688h-1.157v.688zm2.357 0h1.158v-.688h-1.158v.688z"
                                                    fill="#fff"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16.778 12.703a1 1 0 0 0-.98 0l-2.429 1.366a1 1 0 0 0-.51.871v2.688a1 1 0 0 0 .51.871l2.429 1.366a1 1 0 0 0 .98 0l2.429-1.366a1 1 0 0 0 .51-.871V14.94a1 1 0 0 0-.51-.871l-2.429-1.366zm-.49 2.299a1.286 1.286 0 1 0 0 2.571 1.286 1.286 0 0 0 0-2.571z"
                                                    fill="#fff"></path>
                                            </svg></div>
                                    </div>
                                    <div class="split-con">
                                        <div class="split-v"></div>
                                    </div>
                                    <div class="danText">
                                        <input type="text" placeholder="发一条友好的弹幕吧">
                                    </div>
                                    <div class="danEmoji"><svg viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" focusable="false"
                                            class="SO9gSuwv">
                                            <path
                                                d="M10 10C10 11.1046 9.32843 12 8.5 12C7.67157 12 7 11.1046 7 10C7 8.89543 7.67157 8 8.5 8C9.32843 8 10 8.89543 10 10Z"
                                                fill="white"></path>
                                            <path
                                                d="M15.5 12C16.3284 12 17 11.1046 17 10C17 8.89543 16.3284 8 15.5 8C14.6716 8 14 8.89543 14 10C14 11.1046 14.6716 12 15.5 12Z"
                                                fill="white"></path>
                                            <path
                                                d="M12 16.5303C10.3432 16.5303 9.00004 15.5709 9.00004 14.3874C9.00004 13.2039 15 13.2039 15 14.3874C15 15.5709 13.6569 16.5303 12 16.5303Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                                                fill="white"></path>
                                        </svg></div>
                                </div>

                                <div class="play-set">
                                    <div class="btn-text-con">
                                        <button class="switch-btn">
                                            <div class="circle"></div>
                                        </button>
                                        <p>连播</p>
                                    </div>
                                    <div class="btn-text-con">
                                        <button class="switch-btn">
                                            <div class="circle"></div>
                                        </button>
                                        <p>清屏</p>
                                    </div>
                                    <div class="text-con-qual">智能</div>
                                    <div class="text-con-speed">倍速</div>
                                    <div class="video-set-con">
                                        <div class="video-icon">
                                            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="" viewBox="0 0 32 32">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8.97 8.73C7.882 8.73 7 9.72 7 10.94v10.58c0 1.22.882 2.21 1.97 2.21h8.254A5.5 5.5 0 0 1 23 15.59v-4.65c0-1.22-.882-2.21-1.97-2.21H8.97zm4.723 10.464l3.822-2.451a1.025 1.025 0 0 0 0-1.743l-3.822-2.451c-.724-.464-1.693.035-1.693.871v4.902c0 .837.97 1.336 1.693.872z"
                                                    fill="#fff" fill-opacity=".9"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 25a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.4-6a.9.9 0 1 0-1.8 0v2.5a.9.9 0 0 0 .9.9H24a.9.9 0 1 0 0-1.8h-1.6V19z"
                                                    fill="#fff" fill-opacity=".9"></path>
                                            </svg>
                                        </div>
                                        <div class="video-icon voice">
                                            <svg viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          width="1em" height="1em" focusable="false"
                                           style="font-size:32px"><path d="M9 12C7.89543 12 7 12.8955 7 14V18C7
                                            19.1046 7.89543 20 9 20H10L14.3598 23.6332C15.0111 24.176 16 23.7128 16 22.865V9.13509C16
                                             8.28725 15.0111 7.8241 14.3598 8.36687L10 12H9Z" fill="white"></path>
                                             <path d="M23.5006 20.5038L21.002 17.5496L18.5034 20.5038L17.0006 19.188L19.6942
                                              16.0033L17 12.8178L18.5028 11.502L21.002 14.457L23.5012 11.502L25.004 12.8178L22.3098
                                               16.0033L25.0034 19.188L23.5006 20.5038Z" fill="white"></path></svg>
                                        </div>
                                        <div class="video-icon"><svg width="32" height="32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 32 32">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"
                                                    fill="#fff"></path>
                                            </svg></div>
                                        <div class="video-icon full-screen"><svg viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                focusable="false" style="font-size:32px">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.5 8C8.39543 8 7.5 8.89543 7.5 10V22C7.5 23.1046 8.39543 24 9.5 24H22.5C23.6046 24 24.5 23.1046 24.5 22V10C24.5 8.89543 23.6046 8 22.5 8H9.5ZM19.5 19H17.9986V21H20.5C21.0523 21 21.5 20.5523 21.5 20V17.5H19.5V19ZM12.5 19V17.5H10.5V20C10.5 20.5523 10.9477 21 11.5 21H13.9986V19H12.5ZM12.5 13H13.9986V11H11.5C10.9477 11 10.5 11.4477 10.5 12V14.5H12.5V13ZM19.5 13H17.9986V11H20.5C21.0523 11 21.5 11.4477 21.5 12V14.5H19.5V13Z"
                                                    fill="white"></path>
                                            </svg></div>
                                    </div>

                                </div>`)
        })

        //加载swiper
        var mySwiper = new Swiper('.swiper', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            allowTouchMove: false,      //如果不关闭,movedown/moveup获取不到鼠标左键
            on: {
                slideChangeTransitionStart: function () {
                    danTexts[this.previousIndex].value = '';
                },
            },
        });

        togPlay(getVideo());
        const danTexts = document.querySelectorAll('.danText input')

        // 声音开关
        $('.voice').click(togVoice);    //注意这里不要加括号,否则直接调用

        //滑块开关
        $('.btn-text-con').click(function () {
            $(this).toggleClass('btn-text-con');
            $(this).toggleClass('btn-text-con-active');
        })
        //弹幕开关
        $('.danmu-switch').click(togDanmu);

        //注册事件

        // 鼠标滚轮切换视频
        videoTogs.forEach(function (v) {
            v.addEventListener('wheel', (e) => {
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
                $('.switch-play').html(`<svg class="switch-play" viewBox="0 0 32 32" fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" focusable="false" style="font-size:32px">
            <path d="M10 8C9.44772 8 9 8.44772 9 9V23C9 23.5523 9.44772 24 10 
            24H13C13.5523 24 14 23.5523 14 23V9C14 8.44772 13.5523 8 13 8H10Z" 
            fill="white"></path><path d="M19 8C18.4477 8 18 8.44772 18 9V23C18 23.5523 
            18.4477 24 19 24H22C22.5523 24 23 23.5523 23 23V9C23 8.44772 22.5523 8 22 8H19Z" 
            fill="white"></path></svg>`)
                isPlay = true;
            })
        })
        // 上下键切换视频,空格开关视频
        videoTogs.forEach(function (v) {
            v.addEventListener('keydown', (e) => {
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
                    $('.switch-play').html(`<svg class="switch-play" viewBox="0 0 32 32" fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" height="32" focusable="false" style="font-size:32px">
                <path d="M10 8C9.44772 8 9 8.44772 9 9V23C9 23.5523 9.44772 24 10 
                24H13C13.5523 24 14 23.5523 14 23V9C14 8.44772 13.5523 8 13 8H10Z" 
                fill="white"></path><path d="M19 8C18.4477 8 18 8.44772 18 9V23C18 23.5523 
                18.4477 24 19 24H22C22.5523 24 23 23.5523 23 23V9C23 8.44772 22.5523 8 22 8H19Z" 
                fill="white"></path></svg>`)
                    e.preventDefault();

                    isPlay = true;
                }
                else if (e.key === ' ') {
                    togPlay(video);
                }

            })
        })
        //点击暂停或开始视频
        videoTogs.forEach((videoTog) => {       //不知为何,使用this指针注册该事件的时候点击control的部分也会触发事件???
            videoTog.addEventListener('click', function () {
                togPlay(getVideo());
            })
        })

        $('.switch-play').click(() => {
            togPlay(getVideo());
        });

        //播放时长
        setInterval(() => {     //jquery用索引访问则返回原生dom元素,用eq()访问则返回jquery元素
            const curTime = Number(video_page[mySwiper.realIndex].currentTime);
            const totalTime = Number($('.video-tog')[mySwiper.realIndex].dataset.duration)
            $('.video-time-text')[mySwiper.realIndex].innerHTML = `
            ${secondsToTime(curTime)} / `;
            $('.hasPlayed')[mySwiper.realIndex].style.width = `${(curTime / totalTime) * 1430}px`
        }, 300);

        //进度条事件
        $('.progress-line-con').click(function (e) {
            const progressNum = e.clientX - document.querySelector('.video-con').offsetLeft;
            const totalTime = Number($('.video-tog')[mySwiper.realIndex].dataset.duration)
            const progressTime = totalTime * (progressNum / Number($(this).css('width').replace('px', '')))
            jumpToTime(progressTime);
            console.log((progressNum / Number($(this).css('width').replace('px', ''))));

        })

        $('body').mouseup(function (e) {
            isDraging = false;
            $('.progress-line-con').removeClass('progress-line-con-hover');
        })

        $('.progress-line-con').mousedown(function (e) {
            e.preventDefault();     //记得阻止mousedown事件的冒泡,否则会出bug
            isDraging = true;
            $(this).addClass('progress-line-con-hover');
        })
        $('body').mousemove(function (e) {
            if (isDraging) {
                const progressNum = e.pageX - document.querySelector('.video-con').offsetLeft;
                const totalTime = Number($('.video-tog')[mySwiper.realIndex].dataset.duration)
                const progressTime = totalTime * (progressNum / Number($('.progress-line-con').css('width').replace('px', '')));
                jumpToTime(progressTime);
            }
        })

        function getVideo() {
            return video_page[mySwiper.realIndex];
        }
        function togPlay(video) {
            if (isPlay) {
                video.pause();
                isPlay = false;
                $('.switch-play').html(`<svg class="switch-play" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" focusable="false"
                                        style="font-size:32px">
                                        <path
                                            d="M23.5 15.134C24.1667 15.5189 24.1667 16.4811 23.5 16.866L12.25 23.3612C11.5833 23.7461 10.75 23.265 10.75 22.4952L10.75 9.50481C10.75 8.73501 11.5833 8.25388 12.25 8.63878L23.5 15.134Z"
                                            fill="white"></path>
                                    </svg>`)
            }
            else {
                video.play();
                isPlay = true;
                $('.switch-play').html(`<svg class="switch-play" viewBox="0 0 32 32" fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" focusable="false" style="font-size:32px">
            <path d="M10 8C9.44772 8 9 8.44772 9 9V23C9 23.5523 9.44772 24 10 
            24H13C13.5523 24 14 23.5523 14 23V9C14 8.44772 13.5523 8 13 8H10Z" 
            fill="white"></path><path d="M19 8C18.4477 8 18 8.44772 18 9V23C18 23.5523 
            18.4477 24 19 24H22C22.5523 24 23 23.5523 23 23V9C23 8.44772 22.5523 8 22 8H19Z" 
            fill="white"></path></svg>`)
            }
        }

        function jumpToTime(time) {
            getVideo().currentTime = time;
        }




    })

}
renderPage();






