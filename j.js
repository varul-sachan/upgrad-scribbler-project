const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});











const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
} );

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#ffe44d";
} );