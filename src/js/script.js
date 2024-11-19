import ready from 'Utils/documentReady.js';

ready(function(){


    const header = document.querySelector(".header");
    const containerBox = document.querySelectorAll(".container-height-js");
    let headerHeight = 0;
    setHeaderHeight();
    function setHeaderHeight() {
        containerBox.forEach(function(container) {
            container.style.setProperty('--header-height', `${headerHeight}px`)
        });
        if (header) {
            headerHeight = header.offsetHeight;
            containerBox.forEach(function(container) {
                container.style.setProperty('--header-height', `${headerHeight}px`)
            });
        }

    }

    window.addEventListener('resize', setHeaderHeight);

        /*maximizing the window*/
    var maximize = 0;

    let maximizeBtn = document.querySelectorAll('.maximize');
    maximizeBtn.forEach(function(el) {
        el.onclick = function() {
            let window = this.closest(".window");
            let windowBody = window.querySelector('.window-body');
            if(maximize == 0){
                window.classList.add('fullScreen');
                // windowBody.style.height = "90vh";
                maximize = 1;
            }
            else{
                window.classList.remove('fullScreen');
                // windowBody.style.height = "";
                maximize = 0;
            }
        };
    });

    // /*closing the window*/
    function close() {
        let closeBtn = document.querySelectorAll('.close-btn');
        closeBtn.forEach(function(el) {
            el.onclick = function() {
                let window = this.closest(".window");
                window.style.display = "none";
            };
        });
    }
    close();



    let folder = document.querySelectorAll('.boxx');

    function openFolderDbl() {
        folder.forEach(function(el) {
            el.ondblclick = function(e) {
                const clickedElement = e.target.closest('[data-btn]');
                if (clickedElement) {
                    let target = clickedElement.dataset.btn;
                    this.modalContainer = document.querySelector(`[data-window="${target}"]`);
                    this.modalContainer.style.display = "block";
                    // this.modalContainer.classList.remove("fullScreen");
                    return;
                }
            };
        });
    }

    function openFolder() {
        folder.forEach(function(el) {
            el.onclick = function(e) {
                const clickedElement = e.target.closest('[data-btn]');
                if (clickedElement) {
                    let target = clickedElement.dataset.btn;
                    this.modalContainer = document.querySelector(`[data-window="${target}"]`);
                    this.modalContainer.style.display = "block";
                    this.modalContainer.classList.add("fullScreen");
                    // this.modalContainer.classList.remove("fullScreen");
                    return;
                }
            };
        });
    }

    if (window.innerWidth > 767) {
        openFolderDbl();
    }

    if (window.innerWidth < 767) {
        openFolder();
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth < 767) {
            folder.forEach(function(el) {
                el.ondblclick = function(e) {
                    return false;
                }
            })

            openFolder();
        } else {
            folder.forEach(function(el) {
                el.onclick = function(e) {
                    return false;
                }
            })
            openFolderDbl();
        }
    })
    // document.addEventListener('click', function(e){
    //     const clickedElement = e.target.closest('[data-btn]');
    //     if (clickedElement) {
    //         let target = clickedElement.dataset.btn;
    //         this.modalContainer = document.querySelector(`[data-window="${target}"]`);
    //         // this.modalContainer.style.display = "block";
    //         this.modalContainer.classList.add("fullScreen");
    //         return;
    //     }
    // }.bind(this));


    // boxes
    const container = document.querySelector(".container");
    let element,startX,startY,bbox;
    container.addEventListener("pointerdown", userPressed, { passive: true });

    function userPressed(event) {
    element = event.target;
    if (element.classList.contains("item")) {
        // element.style.boxShadow = "-8px 8px 22px -8px rgba(0, 0, 0, 0.70)";
        element.style.transform = "scale(1.01)";
        let zIndexes = [];
        document.querySelectorAll(".item").forEach((box) => {
        zIndexes.push(box.style.zIndex);
        });
        element.style.zIndex = Math.max(...zIndexes) + 2;
        startX = event.clientX;
        startY = event.clientY;
        bbox = element.getBoundingClientRect();
        container.addEventListener("pointermove", userMoved, {
        passive: true,
        });
        container.addEventListener("pointerup", userReleased, {
        passive: true,
        });
        container.addEventListener("pointercancel", userReleased, {
        passive: true,
        });
    }
    }

    function userMoved(event) {
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;
    element.style.left = bbox.left + deltaX + "px";
    element.style.top = bbox.top + deltaY - headerHeight + "px";
    element.style.right = "";
    element.style.bottom = "";
    }

    function userReleased(event) {
    // element.style.boxShadow = "-4px 4px 20px -6px rgba(0, 0, 0, 0.75)";
    element.style.transform = "scale(1.00)";
    container.removeEventListener("pointermove", userMoved);
    container.removeEventListener("pointerup", userReleased);
    container.removeEventListener("pointercancel", userReleased);
    }






//Dark mode
const btnDarkMode = document.querySelector('.theme__button-input')
const theme = document.querySelector('.theme')
const currentTheme = localStorage.getItem('theme')
const desktopWindow = document.querySelector('.desktop-window')
const hero = document.querySelector('.hero')

function setTheme(name){
    theme.setAttribute('data-theme', name)
    // localStorage.setItem('theme', name)
}

if (currentTheme) {
    theme.setAttribute('data-theme', currentTheme)
} else {
    setTheme('dark')
    desktopWindow.classList.remove('active');
    hero.classList.add('active');
}

btnDarkMode.addEventListener('click', () => {
    if (theme.getAttribute('data-theme') === 'light') {
        setTheme('dark');
        desktopWindow.classList.remove('active');
        hero.classList.add('active');
    } else {
        setTheme('light')
        hero.classList.remove('active');
        desktopWindow.classList.add('active');
    }
    // desktopWindow.classList.toggle('active');
    // hero.classList.toggle('active');
})

if (theme.getAttribute('data-theme') === 'light') {
    document.querySelector('.theme__button-input').checked = true;
    desktopWindow.classList.add('active');
    hero.classList.remove('active');
} else {
    hero.classList.add('active');
    desktopWindow.classList.remove('active');
}

//time counter to header
let startTime = 540; //9 утра
let endTime = startTime + 540; //6 вечера
let timer;
let timerText = document.querySelector('#countdownText')

setTimer();

function setTimer() {
    let now = String(new Date()).substr(16, 5);

    let time = now.split(':');
    let nowTime = (+time[0]*60) + +time[1];
    let countdownEl = document.querySelector("#countdown");


    if (endTime >  nowTime) {
        timer = endTime - nowTime;
        timerText.innerHTML = 'до конца рабочего дня'
    } else {
        timer = 1440 - nowTime + startTime;
        timerText.innerHTML = 'до начала рабочего дня'
    };

    let hours = Math.floor(timer / 60);
    let minutes = timer % 60;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    countdownEl.innerHTML = `${hours}: ${minutes}`;
};

setInterval(updateCountdown, 60000);
function updateCountdown() {
    timer--;
    if (timer <= 0) {
    setTimer();
    }
}

});
