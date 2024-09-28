let voiceIsOpen = false;
let danmuSwitch = true;
export let voice_num = 0;


export function changeVoice(num) {
    voice_num = num;
}

export const videos = [
    {
        name: 'video1',
        id: '1',
        coverPath: '../src/video-bgc-1.png'
    }, {
        name: 'video2',
        id: '2',
        coverPath: '../src/video-bgc-2.png'
    }, {
        name: 'video3',
        id: '3',
        coverPath: '../src/video-bgc-3.png'
    }, {
        name: 'video4',
        id: '4',
        coverPath: '../src/video-bgc-4.png'
    }, {
        name: 'video5',
        id: '5',
        coverPath: '../src/video-bgc-5.png'
    },
]


export function togVoice() {

    const voice = document.querySelectorAll('.volume-con')
    if (voiceIsOpen) {

        voiceIsOpen = false;
        document.querySelectorAll('.video-tog video').forEach((v) => {
            v.muted = true;
        })
        voice.forEach((v) => {
            v.innerHTML = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" 
            height="1em" focusable="false" style="font-size:32px"><path d="M9 12C7.89543 12 7 12.8955 7 14V18C7 19.1046 
            7.89543 20 9 20H10L14.3598 23.6332C15.0111 24.176 16 23.7128 16 22.865V9.13509C16 8.28725 15.0111 7.8241 14.3598 
            8.36687L10 12H9Z" fill="rgba(255,255,255,0.8)"></path><path d="M23.5006 20.5038L21.002 17.5496L18.5034 20.5038L17.0006 
            19.188L19.6942 16.0033L17 12.8178L18.5028 11.502L21.002 14.457L23.5012 11.502L25.004 12.8178L22.3098 
            16.0033L25.0034 19.188L23.5006 20.5038Z" fill="rgba(255,255,255,0.8)"></path></svg>
            <div class="float-opt-volume">
                <div class="volume-num">${voice_num}</div>
                <div class="volume-line">
                    <div class="volume-line-active">
                    <div class="volume-control"></div>
                    </div>
                </div>  
            </div>
            `
        })
    }
    else {

        voiceIsOpen = true;
        document.querySelectorAll('.video-tog video').forEach((v) => {
            v.muted = false;
        })
        voice.forEach((v) => {
            v.innerHTML = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" 
            width="1em" height="1em" focusable="false" style="font-size:32px"><path d="M9 12C7.89543 12 7 12.8955 7 
            14V18C7 19.1046 7.89543 20 9 20H10L14.3598 23.6332C15.0111 24.176 16 23.7128 16 22.865V9.13509C16 8.28725
             15.0111 7.8241 14.3598 8.36687L10 12H9Z" fill="rgba(255,255,255,0.8)"></path><path d="M18 13.0001L18 19C19.6569 
             19 21 17.6569 21 16.0001C21 14.3432 19.6569 13.0001 18 13.0001Z" fill="rgba(255,255,255,0.8)"></path><path 
             opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M18 8.26587C22.0472 8.52358 25.25 11.8878 
             25.25 16C25.25 20.1122 22.0472 23.4764 18 23.7341V21.2265C20.665 20.9747 22.75 18.7309 22.75 16C22.75 
             13.2691 20.665 11.0253 18 10.7735V8.26587Z" fill="rgba(255,255,255,0.8)"></path></svg>
             <div class="float-opt-volume">
                <div class="volume-num">${voice_num}</div>
                <div class="volume-line">
                    <div class="volume-line-active">
                    <div class="volume-control"></div>
                    </div>
                </div>  
            </div>
             `
        })
    }
}

export function togDanmu() {
    if (danmuSwitch) {
        document.querySelectorAll('.danmu-switch').forEach((v) => {
            v.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" 
            class="" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" 
            d="M4.29 6.29a2 2 0 0 1 2-2h10.693a2 2 0 0 1 2 2v5.404a5.55 5.55 0 0 0-2.472-.55V8.274a.6.6 0 0 
            0-.6-.6h-.771l.321-.478a.6.6 0 1 0-.996-.67l-.771 1.148h-.317l-.772-1.148a.6.6 0 0 
            0-.996.67l.322.478h-.775a.6.6 0 0 0-.6.6v3.772a.6.6 0 0 0 .6.6h1.609a5.602 5.602 0 0 
            0-.625.69h-1.463a.6.6 0 1 0 0 1.2h.763a5.554 5.554 0 0 0-.443 2.181c0 .76.152 1.484.428 
            2.144H6.289a2 2 0 0 1-2-2V6.29zm11.021 4.997a5.525 5.525 0 0 0-.552.158h-.626v-.684h1.178v.526zM6.277 
            7.332a.6.6 0 0 1 .6-.6h2.378a.6.6 0 0 1 .6.6v2.83a.6.6 0 0 1-.6.6H7.477v1.157h1.778a.6.6 0 
            0 1 .6.6v3.3a.6.6 0 0 1-.6.6H6.877a.6.6 0 0 1 0-1.2h1.778v-2.1H6.877a.6.6 0 0 1-.6-.6V10.16a.6.6 
            0 0 1 .6-.6h1.778V7.932H6.877a.6.6 0 0 1-.6-.6zm5.48 4.113v-.684h1.177v.684h-1.178zm0-1.884h1.177v-.688h-1.178v.688zm2.377 0h1.177v-.688h-1.178v.688z" fill="#fff"></path><circle cx="16.566" cy="16.714" r="3.855" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M17.613 18.824a2.355 2.355 0 0 1-3.157-3.157l3.157 3.157zm1.061-1.06l-3.158-3.158a2.355 2.355
             0 0 1 3.158 3.158zm1.747-1.05a3.855 3.855 0 1 1-7.71 0 3.855 3.855 0 0 1 7.71 0z" fill="#FE2C55"></path></svg>`
            danmuSwitch = false;
        })
    }
    else {
        document.querySelectorAll('.danmu-switch').forEach((v) => {
            v.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
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
                                            </svg>`
        })
        danmuSwitch = true;
    }
}