/*maximizing the window*/
var maximize = 0;

let maximizeBtn = document.querySelectorAll('.maximize');
maximizeBtn.forEach(function(el) {
    el.onclick = function() {
        let window = this.closest(".window");
        let windowBody = window.querySelector('.window-body');
        if(maximize == 0){
            window.classList.add('fullScreen');
            windowBody.style.height = "80vh";
            maximize = 1;
        }
        else{
            window.classList.remove('fullScreen');
            windowBody.style.height = "50vh";
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
//open folder to click btn
document.addEventListener('dblclick', function(e){
    const clickedElement = e.target.closest('[data-btn]');
    if (clickedElement) {
        // console.log('clicked');
        let target = clickedElement.dataset.btn;
        // let animation = clickedElement.dataset.animation;
        // let speed = clickedElement.dataset.speed;
        // this.animation = animation ? animation : 'fade';
        // this.speed = speed ? parseInt(speed) : 300;
        this.modalContainer = document.querySelector(`[data-window="${target}"]`);
        // this.open();
        this.modalContainer.style.display = "block";
        return;
    }

    // if (e.target.closest('.modal-close')) {
    //     this.close();
    //     return;
    // }
}.bind(this));


// var close = document.querySelector('.close').addEventListener('click',function(){
//   document.querySelector('#window').style.display = "none";
// });
// dragElement(document.getElementById("window"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// function lineBreakCount(){
// 	var str = document.querySelector(".window-body").innerHTML;
//   if(str=="") return 0;
// 	try {
// 		return((str.match(/<div(.*?)>/gi).length))+1;
// 	} catch(e) {
// 		return 1;
// 	}
// }
// function letterCount(){
// 	var str = document.querySelector(".window-body").textContent;
//   if(str=="") return 0;
// 	try {
// 		return str.length;
// 	} catch(e) {
// 		return 1;
// 	}
// }
// var c = lineBreakCount();
// var l = parseInt(letterCount()+c-1);
// document.querySelector(".window-footer").innerHTML = "Lines: "+c+", Characters: "+((l>0)?l:'0');
// document.querySelector('.window-body').addEventListener("keyup",function(){
//   var c = lineBreakCount();
//   var l = parseInt(letterCount()+c-1);
//   document.querySelector(".window-footer").innerHTML = "Lines: "+c+", Characters: "+((l>0)?l:'0');
// });










// boxes
const container = document.querySelector(".container");
container.addEventListener("pointerdown", userPressed, { passive: true });

function userPressed(event) {
  element = event.target;
  if (element.classList.contains("box")) {
    element.style.boxShadow = "-8px 8px 14px -8px rgba(0, 0, 0, 0.70)";
    element.style.transform = "scale(1.05)";
    let zIndexes = [];
    document.querySelectorAll(".box").forEach((box) => {
      zIndexes.push(box.style.zIndex);
    });
    element.style.zIndex = Math.max(...zIndexes) + 1;
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
  element.style.top = bbox.top + deltaY + "px";
}

function userReleased(event) {
  element.style.boxShadow = "-4px 4px 12px -6px rgba(0, 0, 0, 0.75)";
  element.style.transform = "scale(1.00)";
  container.removeEventListener("pointermove", userMoved);
  container.removeEventListener("pointerup", userReleased);
  container.removeEventListener("pointercancel", userReleased);
}
