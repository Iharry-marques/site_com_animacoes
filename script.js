let list = document.querySelectorAll(".item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let count = list.length;
let active = 0;

next.onclick = () => {
  let activeOld = document.querySelector(".active");
  activeOld.classList.remove("active");

  if (active >= count - 1) {
    active = 0;
  } else{
    active += 1
  }
  list[active].classList.add('active')

};
prev.onclick = () => {
  let activeOld = document.querySelector(".active");
  activeOld.classList.remove("active");

  if (active <= 0) {
    active = count - 1;
  } else{
    active -= 1
  }
  list[active].classList.add('active')
};
