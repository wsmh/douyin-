import { togVoice, videos, togDanmu, changeVoice, voice_num } from "../data/video-data.js";
import { secondsToTime } from "./util/util.js";

function renderPage() {
    //渲染视频
    videos.forEach((v, i) => {
        $('.swiper-wrapper').append(`
        <div class="swiper-slide">
            <div class='swiper-bgc'>

                <div class="video-main-interface">
                    <div class="video-tog" tabindex="0">
                        <video muted src="src/video/video-${v.id}.mp4" height="100%"></video>
                        <div class="video-btn">
                                <div class="video-btn-avatar">
                                    <img src="../src/avatar.JPG">
                                    <div>+</div>
                                </div>
                                <div class="video-btn-item love-shape">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" fill="white" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                </svg>
                                <p>7.7万</p>
                                </div>
                                <div class="video-btn-item comments">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 6H4V36H13V41L23 36H44V6Z" fill="white" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 19.5V22.5" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 19.5V22.5" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 19.5V22.5" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <p>733</p>
                                </div>
                                <div class="video-btn-item">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/></svg>
                                <p>8779</p>
                                </div>
                                <div class="video-btn-item">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 4L44 22L26 39V28C12 28 6 43 6 43C6 26 11 15 26 15V4Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <p>5.7万</p>
                                </div>
                                <div class="video-btn-item">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" fill="#ffffff" stroke="#c9bdbd" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 24V16.2058L25.25 20.1029L32 24L25.25 27.8971L18.5 31.7942V24Z" fill="#020202" stroke="#050505" stroke-width="1" stroke-linejoin="round"/></svg>
                                <p>看相关</p>
                                </div>
                                <div>
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="24" r="3" fill="#ffffff"/><circle cx="24" cy="24" r="3" fill="#ffffff"/><circle cx="36" cy="24" r="3" fill="#ffffff"/></svg>
                                </div>
                        </div>
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
                <div class="comments-con">
                    <div class="comments-items">
                        <div class="comments-item">TA的作品</div>
                        <div class="comments-item comments-text">评论</div>
                        <div class="comments-item">相关推荐</div>
                        <div class="comments-item">合集</div>
                        <div class="comments-item comments-quit"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="DnsmeHpw" viewBox="0 0 36 36"><path d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z" fill="rgba(255,255,255,0.6)"></path></svg></div>
                    </div>
                    <div class="comments-content">
                        <div class="content-all">全部评论(88)</div>

                        <div class="comments-users">
                            <div class="comments-user">
                                <div class="user-avatar">
                                <img src="../src/avatar.JPG" >
                                </div>
                                <div class="user-special">
                                    <div class="user-name">
                                    城北徐公
                                    </div>
                                    <div class="user-content">
                                    芜湖是乾隆改的名吗？西汉时就叫芜湖了。麻烦你不懂，可以不说，但是不要乱说！特别是还想做出“科普”类的视频。
                                    </div>
                                    <div class="user-address">
                                    1周前·安徽                                    
                                    </div>
                                    <div class="user-operates">
                                        <div class="user-operate">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="AB4NKfje" viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 17.617C6 11.561 11.578 7 18 7s12 4.561 12 10.617c0 3.036-1.51 5.529-3.749 7.728-.187.184-.381.364-.58.54-1.925 2.082-3.911 3.417-5.847 3.973-.77.221-1.702.242-2.454-.381-.68-.564-.837-1.361-.878-1.823a3.848 3.848 0 0 1-.01-.136C10.898 26.91 6 23.264 6 17.617zM18 10c-5.177 0-9 3.602-9 7.617 0 3.867 3.794 6.992 9.152 6.992h1.5v1.717l-.06.206c0-.001-.03.104-.06.259 1.155-.46 2.515-1.394 3.984-2.996l.056-.06.063-.055c.182-.16.353-.318.514-.475C26.075 21.312 27 19.543 27 17.617 27 13.602 23.177 10 18 10z" fill="#fff" fill-opacity=".5"></path></svg>
                                            <p>回复</p>
                                        </div>
                                        <div class="user-operate">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="QW9VOhhV" viewBox="0 0 20 20"><path d="M12.066 5.295l-.553.578.553-.578zM10.281 7.3v.8h.8v-.8h-.8zm-.213.002l-.022.8h.035l-.013-.8zM4.823 9.35l.585.545-.585-.545zm-1.821 4.688l.8.024v-.049l-.8.025zm.632.765l-.703-.383.703.383zm6.647-2.056h.8v-.67l-.658-.118-.142.787zm1.754 1.965l.53.6-.53-.6zm4.275-3.776l.53.599-.53-.6zm.03-1.554l.553-.578-.553.578zm-5.259-3.326c0-.224.27-.34.432-.184l1.106-1.156c-1.18-1.13-3.138-.293-3.138 1.34h1.6zm0 1.244V6.057h-1.6v1.244h1.6zm-1 .801l.2-.001V6.5c-.076 0-.152 0-.228.002l.028 1.6zM5.408 9.896c1.605-1.72 3.93-1.813 4.638-1.794l.043-1.6c-.813-.021-3.754.054-5.851 2.303l1.17 1.091zm-1.607 4.118c-.014-.44.096-1.169.373-1.963.275-.79.69-1.572 1.234-2.155l-1.17-1.09c-.738.79-1.25 1.788-1.575 2.718-.322.924-.483 1.853-.461 2.54l1.6-.05zm-.87.407a.463.463 0 0 1 .234-.208.558.558 0 0 1 .485.034c.158.09.187.207.178.177a1.205 1.205 0 0 1-.027-.36l-1.6-.049c-.01.335.02.639.104.9.084.26.247.546.55.72.318.183.66.165.921.056.246-.101.442-.286.56-.504l-1.405-.766zm7.35-1.673l.141-.788h-.002l-.005-.001-.014-.003a3.758 3.758 0 0 0-.232-.034 11.84 11.84 0 0 0-2.684-.053c-1.532.15-3.549.708-4.554 2.552l1.405.766c.61-1.12 1.916-1.59 3.305-1.726a10.234 10.234 0 0 1 2.492.073h.007v.001l.141-.787zm.8 1.174v-1.175h-1.6v1.175h1.6zm.425.192a.255.255 0 0 1-.425-.192h-1.6c0 1.599 1.886 2.449 3.084 1.39l-1.06-1.198zm4.274-3.777l-4.274 3.777 1.059 1.199 4.274-3.777-1.059-1.199zm.007-.376a.255.255 0 0 1-.007.376l1.06 1.199c.813-.72.838-1.98.053-2.731L15.787 9.96zm-4.274-4.088l4.274 4.088 1.106-1.156-4.274-4.088-1.106 1.156z" fill="#fff" fill-opacity=".5"></path></svg>
                                            <p>分享</p>
                                        </div>
                                            
                                        <div class="user-operate">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="LeVwqmMa" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.646 4.168c-2.238 0-4.035 1.919-4.035 4.152l.002.13a.834.834 0 0 0-.001.073c.006.3.075.66.15.962.074.294.178.622.294.86.467 1.004 1.284 1.979 2.071 2.78a23.69 23.69 0 0 0 2.646 2.323l.015.012.012.01c.174.175.543.54 1.2.54h.019c.186 0 .63 0 1.028-.387l.033-.027c.033-.029.08-.067.14-.117l.003-.003c.436-.359 1.456-1.2 2.462-2.214.644-.646 1.312-1.396 1.822-2.17a7.94 7.94 0 0 0 .2-.318.84.84 0 0 0 .063-.13.956.956 0 0 1 .11-.214.835.835 0 0 0 .074-.144c.029-.073.05-.121.066-.154l.003-.007a.832.832 0 0 0 .147-.29c.125-.444.21-.835.219-1.316a.82.82 0 0 0-.002-.067 5.39 5.39 0 0 0 .002-.16c-.015-2.22-1.807-4.124-4.035-4.124-.845 0-1.667.262-2.316.789a4.029 4.029 0 0 0-2.392-.789zm7.076 4.153V8.424l-.002.07c0 .008 0 .022.002.039a3.065 3.065 0 0 1-.121.721 1.9 1.9 0 0 0-.078.144 3.297 3.297 0 0 0-.089.2c-.083.135-.137.24-.193.38a6.64 6.64 0 0 1-.124.195v.001c-.425.644-1.007 1.305-1.613 1.912l-.002.001a31.607 31.607 0 0 1-2.342 2.106l-.032.026-.12.1-.048-.046c-.05-.05-.119-.105-.152-.131l-.006-.005A22.003 22.003 0 0 1 7.32 11.96l-.003-.003c-.747-.76-1.408-1.577-1.753-2.323a3.149 3.149 0 0 1-.185-.555 3.468 3.468 0 0 1-.1-.553.964.964 0 0 0 0-.104V8.42a3.56 3.56 0 0 1-.001-.099c0-1.373 1.11-2.485 2.368-2.485.662 0 1.288.269 1.848.85a.833.833 0 0 0 1.282-.099c.33-.47.892-.751 1.578-.751 1.258 0 2.368 1.113 2.368 2.485z" fill="#fff" fill-opacity=".5" opacity=".9"></path></svg>
                                            <p>998</p>
                                        </div>
                                            
                                        <div class="user-operate"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="LeVwqmMa" viewBox="0 0 20 20"><path d="M15.58 8.58c0 .1 0 .21-.01.31v.13l-.01.06c-.04.44-.13.8-.27 1.22-.02.08-.06.15-.12.21h.01c-.04.07-.07.13-.1.19a.37.37 0 0 1-.05.11c-.07.11-.09.14-.13.23-.01.04-.03.07-.05.1-.67 1.09-1.71 2.14-2.56 2.91-.43.39-.83.72-1.12.97-.13.1-.25.19-.33.26l-.03.03-.11.08h-.01l-.01.02h-.01c-.1.11-.33.33-.67.41h-.01c-.09.04-.19.07-.29.08-.58.08-.95-.23-1.11-.37l-.03-.03c-.64-.45-1.27-.93-1.87-1.43-.98-.83-2.16-1.95-2.84-3.13-.14-.24-.26-.5-.36-.77-.11-.29-.2-.59-.25-.89h-.01v-.06l-.02-.14c-.29-2.05.92-4.16 2.92-4.45.15-.02.29-.03.43-.03.88 0 1.7.36 2.41.99.14.13.23.31.23.5l.02 1.29 1.3.96c.14.1.23.26.26.44.03.17-.01.35-.12.5l-.94 1.32.63 1.34c.07.17.08.35.02.51a.69.69 0 0 1-.35.38c-.16.08-.34.09-.51.03a.67.67 0 0 1-.38-.34l-.81-1.7a.702.702 0 0 1-.06-.35c.01-.12.05-.23.12-.33l.79-1.11-1.02-.76a.55.55 0 0 1-.2-.23.641.641 0 0 1-.08-.3l-.02-1.31c-.43-.32-.86-.47-1.28-.47-.08 0-.17 0-.25.02-1.07.15-1.98 1.39-1.77 2.92l.02.1v.02s.01.05.01.08c.03.14.09.36.18.59.09.26.19.46.24.55h.01c.57.98 1.6 1.98 2.55 2.79.54.45 1.09.87 1.66 1.28l.03.02c.07.06.16.12.2.15.03.03.06.05.09.07.03-.01.07-.02.11-.03l.09-.09c.05-.04.13-.11.2-.16l.02-.02.03-.03.32-.26c.36-.29.72-.6 1.07-.91.81-.74 1.72-1.67 2.29-2.58.06-.13.11-.23.19-.36.03-.06.06-.13.09-.19.02-.04.05-.09.09-.14.09-.31.14-.53.17-.78v-.2c.12-1.49-.85-2.63-1.89-2.7h-.12c-.57 0-1.19.26-1.49.68-.05.07-.11.14-.19.18a.55.55 0 0 1-.25.1c-.09.02-.18.02-.27 0a.545.545 0 0 1-.24-.12.54.54 0 0 1-.18-.19.825.825 0 0 1-.1-.26.576.576 0 0 1 .02-.26c.02-.09.06-.17.11-.24.6-.84 1.67-1.25 2.59-1.25.08 0 .15 0 .22.01 1.87.12 3.16 1.92 3.16 3.83z" fill="#fff" fill-opacity=".5"></path></svg></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="comments-users">
                            <div class="comments-user">
                                <div class="user-avatar">
                                <img src="../src/video-bgc-2.png" >
                                </div>
                                <div class="user-special">
                                    <div class="user-name">
                                    宣兵2003
                                    </div>
                                    <div class="user-content">
                                    作为一个安徽人表示对安徽一点都不了解 
                                    </div>
                                    <div class="user-address">
                                    2周前·安徽                                    
                                    </div>
                                    <div class="user-operates">
                                        <div class="user-operate">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="AB4NKfje" viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 17.617C6 11.561 11.578 7 18 7s12 4.561 12 10.617c0 3.036-1.51 5.529-3.749 7.728-.187.184-.381.364-.58.54-1.925 2.082-3.911 3.417-5.847 3.973-.77.221-1.702.242-2.454-.381-.68-.564-.837-1.361-.878-1.823a3.848 3.848 0 0 1-.01-.136C10.898 26.91 6 23.264 6 17.617zM18 10c-5.177 0-9 3.602-9 7.617 0 3.867 3.794 6.992 9.152 6.992h1.5v1.717l-.06.206c0-.001-.03.104-.06.259 1.155-.46 2.515-1.394 3.984-2.996l.056-.06.063-.055c.182-.16.353-.318.514-.475C26.075 21.312 27 19.543 27 17.617 27 13.602 23.177 10 18 10z" fill="#fff" fill-opacity=".5"></path></svg>
                                            <p>回复</p>
                                        </div>
                                        <div class="user-operate">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="QW9VOhhV" viewBox="0 0 20 20"><path d="M12.066 5.295l-.553.578.553-.578zM10.281 7.3v.8h.8v-.8h-.8zm-.213.002l-.022.8h.035l-.013-.8zM4.823 9.35l.585.545-.585-.545zm-1.821 4.688l.8.024v-.049l-.8.025zm.632.765l-.703-.383.703.383zm6.647-2.056h.8v-.67l-.658-.118-.142.787zm1.754 1.965l.53.6-.53-.6zm4.275-3.776l.53.599-.53-.6zm.03-1.554l.553-.578-.553.578zm-5.259-3.326c0-.224.27-.34.432-.184l1.106-1.156c-1.18-1.13-3.138-.293-3.138 1.34h1.6zm0 1.244V6.057h-1.6v1.244h1.6zm-1 .801l.2-.001V6.5c-.076 0-.152 0-.228.002l.028 1.6zM5.408 9.896c1.605-1.72 3.93-1.813 4.638-1.794l.043-1.6c-.813-.021-3.754.054-5.851 2.303l1.17 1.091zm-1.607 4.118c-.014-.44.096-1.169.373-1.963.275-.79.69-1.572 1.234-2.155l-1.17-1.09c-.738.79-1.25 1.788-1.575 2.718-.322.924-.483 1.853-.461 2.54l1.6-.05zm-.87.407a.463.463 0 0 1 .234-.208.558.558 0 0 1 .485.034c.158.09.187.207.178.177a1.205 1.205 0 0 1-.027-.36l-1.6-.049c-.01.335.02.639.104.9.084.26.247.546.55.72.318.183.66.165.921.056.246-.101.442-.286.56-.504l-1.405-.766zm7.35-1.673l.141-.788h-.002l-.005-.001-.014-.003a3.758 3.758 0 0 0-.232-.034 11.84 11.84 0 0 0-2.684-.053c-1.532.15-3.549.708-4.554 2.552l1.405.766c.61-1.12 1.916-1.59 3.305-1.726a10.234 10.234 0 0 1 2.492.073h.007v.001l.141-.787zm.8 1.174v-1.175h-1.6v1.175h1.6zm.425.192a.255.255 0 0 1-.425-.192h-1.6c0 1.599 1.886 2.449 3.084 1.39l-1.06-1.198zm4.274-3.777l-4.274 3.777 1.059 1.199 4.274-3.777-1.059-1.199zm.007-.376a.255.255 0 0 1-.007.376l1.06 1.199c.813-.72.838-1.98.053-2.731L15.787 9.96zm-4.274-4.088l4.274 4.088 1.106-1.156-4.274-4.088-1.106 1.156z" fill="#fff" fill-opacity=".5"></path></svg>
                                            <p>分享</p>
                                        </div>
                                            
                                        <div class="user-operate">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="LeVwqmMa" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.646 4.168c-2.238 0-4.035 1.919-4.035 4.152l.002.13a.834.834 0 0 0-.001.073c.006.3.075.66.15.962.074.294.178.622.294.86.467 1.004 1.284 1.979 2.071 2.78a23.69 23.69 0 0 0 2.646 2.323l.015.012.012.01c.174.175.543.54 1.2.54h.019c.186 0 .63 0 1.028-.387l.033-.027c.033-.029.08-.067.14-.117l.003-.003c.436-.359 1.456-1.2 2.462-2.214.644-.646 1.312-1.396 1.822-2.17a7.94 7.94 0 0 0 .2-.318.84.84 0 0 0 .063-.13.956.956 0 0 1 .11-.214.835.835 0 0 0 .074-.144c.029-.073.05-.121.066-.154l.003-.007a.832.832 0 0 0 .147-.29c.125-.444.21-.835.219-1.316a.82.82 0 0 0-.002-.067 5.39 5.39 0 0 0 .002-.16c-.015-2.22-1.807-4.124-4.035-4.124-.845 0-1.667.262-2.316.789a4.029 4.029 0 0 0-2.392-.789zm7.076 4.153V8.424l-.002.07c0 .008 0 .022.002.039a3.065 3.065 0 0 1-.121.721 1.9 1.9 0 0 0-.078.144 3.297 3.297 0 0 0-.089.2c-.083.135-.137.24-.193.38a6.64 6.64 0 0 1-.124.195v.001c-.425.644-1.007 1.305-1.613 1.912l-.002.001a31.607 31.607 0 0 1-2.342 2.106l-.032.026-.12.1-.048-.046c-.05-.05-.119-.105-.152-.131l-.006-.005A22.003 22.003 0 0 1 7.32 11.96l-.003-.003c-.747-.76-1.408-1.577-1.753-2.323a3.149 3.149 0 0 1-.185-.555 3.468 3.468 0 0 1-.1-.553.964.964 0 0 0 0-.104V8.42a3.56 3.56 0 0 1-.001-.099c0-1.373 1.11-2.485 2.368-2.485.662 0 1.288.269 1.848.85a.833.833 0 0 0 1.282-.099c.33-.47.892-.751 1.578-.751 1.258 0 2.368 1.113 2.368 2.485z" fill="#fff" fill-opacity=".5" opacity=".9"></path></svg>
                                            <p>68</p>
                                        </div>
                                            
                                        <div class="user-operate"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="LeVwqmMa" viewBox="0 0 20 20"><path d="M15.58 8.58c0 .1 0 .21-.01.31v.13l-.01.06c-.04.44-.13.8-.27 1.22-.02.08-.06.15-.12.21h.01c-.04.07-.07.13-.1.19a.37.37 0 0 1-.05.11c-.07.11-.09.14-.13.23-.01.04-.03.07-.05.1-.67 1.09-1.71 2.14-2.56 2.91-.43.39-.83.72-1.12.97-.13.1-.25.19-.33.26l-.03.03-.11.08h-.01l-.01.02h-.01c-.1.11-.33.33-.67.41h-.01c-.09.04-.19.07-.29.08-.58.08-.95-.23-1.11-.37l-.03-.03c-.64-.45-1.27-.93-1.87-1.43-.98-.83-2.16-1.95-2.84-3.13-.14-.24-.26-.5-.36-.77-.11-.29-.2-.59-.25-.89h-.01v-.06l-.02-.14c-.29-2.05.92-4.16 2.92-4.45.15-.02.29-.03.43-.03.88 0 1.7.36 2.41.99.14.13.23.31.23.5l.02 1.29 1.3.96c.14.1.23.26.26.44.03.17-.01.35-.12.5l-.94 1.32.63 1.34c.07.17.08.35.02.51a.69.69 0 0 1-.35.38c-.16.08-.34.09-.51.03a.67.67 0 0 1-.38-.34l-.81-1.7a.702.702 0 0 1-.06-.35c.01-.12.05-.23.12-.33l.79-1.11-1.02-.76a.55.55 0 0 1-.2-.23.641.641 0 0 1-.08-.3l-.02-1.31c-.43-.32-.86-.47-1.28-.47-.08 0-.17 0-.25.02-1.07.15-1.98 1.39-1.77 2.92l.02.1v.02s.01.05.01.08c.03.14.09.36.18.59.09.26.19.46.24.55h.01c.57.98 1.6 1.98 2.55 2.79.54.45 1.09.87 1.66 1.28l.03.02c.07.06.16.12.2.15.03.03.06.05.09.07.03-.01.07-.02.11-.03l.09-.09c.05-.04.13-.11.2-.16l.02-.02.03-.03.32-.26c.36-.29.72-.6 1.07-.91.81-.74 1.72-1.67 2.29-2.58.06-.13.11-.23.19-.36.03-.06.06-.13.09-.19.02-.04.05-.09.09-.14.09-.31.14-.53.17-.78v-.2c.12-1.49-.85-2.63-1.89-2.7h-.12c-.57 0-1.19.26-1.49.68-.05.07-.11.14-.19.18a.55.55 0 0 1-.25.1c-.09.02-.18.02-.27 0a.545.545 0 0 1-.24-.12.54.54 0 0 1-.18-.19.825.825 0 0 1-.1-.26.576.576 0 0 1 .02-.26c.02-.09.06-.17.11-.24.6-.84 1.67-1.25 2.59-1.25.08 0 .15 0 .22.01 1.87.12 3.16 1.92 3.16 3.83z" fill="#fff" fill-opacity=".5"></path></svg></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="comments-bar">
                        <div class="comments-bar-input">
                            <input type="text" placeholder="留下你的精彩评论吧">
                            <div class="bar-input-images">
                                <div class="bar-input-image"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 10H12a2 2 0 0 0-2 2v8.92l2.738-2.19a2 2 0 0 1 2.53.024l1.738 1.45 4.206-3.442a2 2 0 0 1 2.583.043L26 18.734V12a2 2 0 0 0-2-2zm2 11.071l-.159.182-3.363-2.943-4.206 3.441a2 2 0 0 1-2.546-.011l-1.739-1.449L10 23.481V24a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.929zM12 8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4H12zm4.25 6.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z" fill="rgba(202, 201, 201, 0.705)" fill-opacity="0.8"></path></svg></div>
                                <div class="bar-input-image"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.559 10.14c-2.612 2.392-3.566 5.145-3.566 8.376C6.993 21.817 8.836 29 19.215 29c1.505 0 2.974-.21 4.405-.654 1.57-.487 2.783-1.277 3.798-2.173l.15-.133c.29-.258.606-.537.86-.898.426-.523.71-.905.741-1.198.032-.293.008-.551-.189-.74-.197-.19-.517-.267-.876-.123-.322.129-.663.434-1.02.753l-.125.11c-2.434 2.134-5.158 3.007-7.744 3.007-8.219 0-10.095-5.489-10.095-8.435 0-2.947.856-4.956 2.606-6.798 1.75-1.843 4.62-2.723 7.25-2.723 5.681 0 7.745 4.598 7.745 6.964 0 3.145-1.802 4.54-2.591 5.076-.592.402-1.213.517-1.549.517h-.01c-.365 0-.89 0-1.03-.517-.09-.34.08-1.06.263-1.828.097-.405.197-.824.262-1.207l.94-4.722c.014-.092.021-.177.021-.254 0-.72-.146-1.1-1.103-1.1-.46 0-.77.074-.931.222-.161.148-.274.44-.34.878-.365-.487-.734-.815-1.107-.984-.343-.155-.833-.233-1.468-.233-1.636 0-3.053.783-4.252 2.349-1.103 1.439-1.654 2.977-1.654 4.613 0 1.277.358 2.398 1.074 3.365.796 1.065 1.833 1.597 3.112 1.597 1.095 0 2.147-.366 3.155-1.1.453.74 1.23 1.177 2.323 1.111 5.654-.339 6.962-5.275 6.896-7.783C28.647 12.75 26.288 7 18.976 7c-3.382 0-5.806.747-8.417 3.14zm3.702 9.173c-.068-1.127.093-1.976.814-3.235 1.171-2.046 2.576-2.537 3.502-2.428.898.107 1.128.5 1.27.743l.014.023c.142.24.367.648.367 1.225 0 .938-.292 1.839-.922 3.398-.732 1.84-1.483 2.19-2.4 2.4-1.512.348-2.576-.999-2.645-2.126z" fill="rgba(202, 201, 201, 0.705)" fill-opacity="0.8"></path></svg></div>
                                <div class="bar-input-image"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M27 18a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 11c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-2-13.5c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2zm5.5 2c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2zM18 22.03c-1.657 0-3-.96-3-2.143 0-1.183 6-1.183 6 0 0 1.184-1.343 2.143-3 2.143z" fill="rgba(202, 201, 201, 0.705)" fill-opacity="0.8"></path></svg></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>                  
        </div>
    `)
        // 实时设置背景图,修改css里的变量,使用setProperty方法
        const bgcSwiper = document.querySelectorAll('.swiper-bgc')[i];
        bgcSwiper.style.setProperty('--bgcPath', `url(${v.coverPath})`);
    })

    //防止视频区按钮点击后暂停视频,取消其冒泡
    $('.video-btn').click(function (e) {
        e.stopPropagation();
    })

    let isDraging_prg = false;
    let isDraging_volume = false;
    let isPlay = false;
    const videoTogs = document.querySelectorAll('.video-tog');
    const video_page = document.querySelectorAll('.swiper-wrapper video');
    //获取时长与背景图
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
                                    <div class="text-con-qual">
                                        <p>智能</p>
                                    </div>
                                    <div class="text-con-speed">
                                        <p>倍速</p>
                                        <div class='float-opt speed-times'>
                                            <div>0.75x</div>
                                            <div>1.0x</div>
                                            <div>1.25x</div>
                                            <div>1.5x</div>
                                            <div>1.75x</div>
                                            <div>2.0x</div>
                                            <div>3.0x</div>
                                        </div>
                                        
                                    </div>
                                    <div class="video-set-con">
                                        <div class="video-icon">
                                            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="" viewBox="0 0 32 32">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8.97 8.73C7.882 8.73 7 9.72 7 10.94v10.58c0 1.22.882 2.21 1.97 2.21h8.254A5.5 5.5 0 0 1 23 15.59v-4.65c0-1.22-.882-2.21-1.97-2.21H8.97zm4.723 10.464l3.822-2.451a1.025 1.025 0 0 0 0-1.743l-3.822-2.451c-.724-.464-1.693.035-1.693.871v4.902c0 .837.97 1.336 1.693.872z"
                                                    fill="rgba(255,255,255,0.8)" fill-opacity=".9"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 25a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.4-6a.9.9 0 1 0-1.8 0v2.5a.9.9 0 0 0 .9.9H24a.9.9 0 1 0 0-1.8h-1.6V19z"
                                                    fill="rgba(255,255,255,0.8)" fill-opacity=".9"></path>
                                            </svg>
                                        </div>
                                        <div class="video-icon volume-con">
                                            <svg viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          width="1em" height="1em" focusable="false"
                                           style="font-size:32px"><path d="M9 12C7.89543 12 7 12.8955 7 14V18C7
                                            19.1046 7.89543 20 9 20H10L14.3598 23.6332C15.0111 24.176 16 23.7128 16 22.865V9.13509C16
                                             8.28725 15.0111 7.8241 14.3598 8.36687L10 12H9Z" fill="rgba(255,255,255,0.8)"></path>
                                             <path d="M23.5006 20.5038L21.002 17.5496L18.5034 20.5038L17.0006 19.188L19.6942
                                              16.0033L17 12.8178L18.5028 11.502L21.002 14.457L23.5012 11.502L25.004 12.8178L22.3098
                                               16.0033L25.0034 19.188L23.5006 20.5038Z" fill="rgba(255,255,255,0.8)"></path></svg>
                                            <div class="float-opt-volume">
                                                <div class="volume-num">0</div>
                                                <div class="volume-line">
                                                    <div class="volume-line-active">
                                                    <div class="volume-control"></div>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div class="video-icon"><svg width="32" height="32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 32 32">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"
                                                    fill="rgba(255,255,255,0.8)"></path>
                                            </svg></div>
                                        <div class="video-icon full-screen"><svg viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                focusable="false" style="font-size:32px">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.5 8C8.39543 8 7.5 8.89543 7.5 10V22C7.5 23.1046 8.39543 24 9.5 24H22.5C23.6046 24 24.5 23.1046 24.5 22V10C24.5 8.89543 23.6046 8 22.5 8H9.5ZM19.5 19H17.9986V21H20.5C21.0523 21 21.5 20.5523 21.5 20V17.5H19.5V19ZM12.5 19V17.5H10.5V20C10.5 20.5523 10.9477 21 11.5 21H13.9986V19H12.5ZM12.5 13H13.9986V11H11.5C10.9477 11 10.5 11.4477 10.5 12V14.5H12.5V13ZM19.5 13H17.9986V11H20.5C21.0523 11 21.5 11.4477 21.5 12V14.5H19.5V13Z"
                                                    fill="rgba(255,255,255,0.8)"></path>
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
        })

        $('body').mouseup(function (e) {
            isDraging_prg = false;
            isDraging_volume = false;
            $('.progress-line-con').removeClass('progress-line-con-hover');
        })

        $('.progress-line-con').mousedown(function (e) {
            e.preventDefault();     //记得阻止mousedown事件的冒泡,否则会出bug
            isDraging_prg = true;
            $(this).addClass('progress-line-con-hover');
        })
        $('body').mousemove(function (e) {
            if (isDraging_prg) {
                const progressNum = e.pageX - document.querySelector('.video-con').offsetLeft;
                const totalTime = Number($('.video-tog')[mySwiper.realIndex].dataset.duration)
                const progressTime = totalTime * (progressNum / Number($('.progress-line-con').css('width').replace('px', '')));
                jumpToTime(progressTime);
            }

        })

        //点赞红心显示
        $('.love-shape svg').click(function () {
            if (this.children[0].style.fill === 'rgb(253, 55, 55)') {
                this.children[0].style.fill = 'white';
            }
            else {
                this.children[0].style.fill = 'rgb(253, 55, 55)';
            }

        })

        //倍速播放
        $('.speed-times div').click(function () {
            const times = Number($(this).text().replace('x', ''));
            getVideo().playbackRate = times;
            $('.speed-times div').removeClass('speed-times-active');
            $(this).addClass('speed-times-active');
            $('.speed-times div').css('color', 'rgba(255,255,255,0.6)');
            this.style.color = 'white';
        })

        $('.full-screen').click(function () {

            document.querySelector('.swiper').requestFullscreen();

        })


        //调节音量

        $('.float-opt-volume').mouseup(function (e) {

            isDraging_volume = false;
        })

        $('.float-opt-volume').mousemove(function (e) {
            if (isDraging_volume) {
                const line = document.querySelector('.volume-line');
                const distance = $('.volume-line').height() - (e.clientY - line.getBoundingClientRect().top);
                if (distance <= 130 && distance >= 0) {
                    //调节一个视频,所有视频音量都应改变
                    const volume_num_percent = Math.floor((distance / Number($('.volume-line').height())) * 100);
                    changeVoice(volume_num_percent);
                    document.querySelectorAll('.volume-line').forEach(function (v) {
                        v.firstElementChild.style.height = `${distance}px`;
                    })
                    document.querySelectorAll('.volume-num').forEach(function (v) {
                        v.innerHTML = `${volume_num_percent}`;
                    })
                    document.querySelectorAll('video').forEach(function (v) {
                        v.volume = volume_num_percent / 100;
                    })

                }
            }
        })

        $('.volume-line').click(function (e) {
            const distance = $(this).height() - (e.clientY - this.getBoundingClientRect().top);
            if (distance <= 130 && distance >= 0) {
                //调节一个视频,所有视频音量都应改变
                const volume_num_percent = Math.floor((distance / Number($(this).height())) * 100);
                changeVoice(volume_num_percent);
                document.querySelectorAll('.volume-line').forEach(function (v) {
                    v.firstElementChild.style.height = `${distance}px`;
                })
                document.querySelectorAll('.volume-num').forEach(function (v) {
                    v.innerHTML = `${volume_num_percent}`;
                })
                document.querySelectorAll('.video-tog video').forEach(function (v) {
                    v.volume = volume_num_percent / 100;
                })
            }

        })
        $('.volume-line').mousedown(function (e) {
            isDraging_volume = true;
            document.querySelectorAll('.video-tog video').forEach((v) => {
                v.muted = false;
            })

            $(`<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                width="1em" height="1em" focusable="false" style="font-size:32px">
                <path
                    d="M7 13.8669C7 12.7623 7.89543 11.8669 9 11.8669H10L14.3598 8.23369C15.0111 7.69092 16 8.15407 16 9.00191V22.7318C16 23.5797 15.0111 24.0428 14.3598 23.5L10 19.8669H9C7.89543 19.8669 7 18.9714 7 17.8669V13.8669Z"
                    fill="rgba(255,255,255,0.8)"></path>
                <path
                    d="M18 18.8669L18 12.8669C19.6569 12.8669 21 14.21 21 15.8669C21 17.5237 19.6569 18.8669 18 18.8669Z"
                    fill="rgba(255,255,255,0.8)"></path>
                <path
                    d="M25.25 15.8668C25.25 19.9791 22.0472 23.3432 18 23.601L18 21.0933C20.665 20.8415 22.75 18.5977 22.75 15.8668C22.75 13.136 20.665 10.8921 18 10.6403V8.13269C22.0472 8.3904 25.25 11.7546 25.25 15.8668Z"
                    fill="rgba(255,255,255,0.8)"></path>
            </svg>`).replaceAll('.volume-con svg')


            e.preventDefault(); //修复bug

        })

        $('.volume-line').mouseup(function (e) {
            isDraging_volume = false;
        })

        //显示评论
        $('.comments').click(function () {
            const thisVideo = mySwiper.realIndex;

            if ($('.comments-con')[thisVideo].style.display === 'block') {
                $('.video-main-interface')[thisVideo].style.width = '1430px';
                $('.comments-con')[thisVideo].style.display = 'none';
                $('.video-tog video')[thisVideo].height = "704";
                $('.video-btn')[thisVideo].style.right = '36px';

            }
            else {
                $('.video-main-interface')[thisVideo].style.width = '1030px';
                $('.comments-con')[thisVideo].style.display = 'flex';
                $('.video-tog video')[thisVideo].height = "580";
                $('.video-btn')[thisVideo].style.right = '415px';
            }


        })

        $('.comments-quit').click(function () {
            const thisVideo = mySwiper.realIndex;
            $('.video-main-interface')[thisVideo].style.width = '1430px';
            $('.comments-con')[thisVideo].style.display = 'none';
            $('.video-tog video')[thisVideo].height = "704";
            $('.video-btn')[thisVideo].style.right = '36px';
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






