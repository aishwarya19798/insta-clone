const heart = document.querySelector(".heart");
const save = document.querySelector(".onSave");
const like = document.querySelector(".like-counter p span");
const comment = document.querySelector(".view-comment p span");
const commentInput = document.querySelector(".comment input");

let likeCounter = parseInt((like.textContent));
let commentCounter = parseInt((comment.textContent));

heart.addEventListener('click',(e)=>{
    heart.classList.toggle("active");
    if(e.currentTarget.classList.value=="heart active"){
        likeCounter += 1;
        like.innerHTML = likeCounter;
    }
    else{
        likeCounter -= 1;
        like.innerHTML = likeCounter;
    };
})

save.addEventListener('click',()=>{
    save.classList.toggle("active");
})

commentInput.addEventListener("keyup",(event)=>{
    if (event.keyCode === 13){
        commentInput.value = "";
        commentCounter += 1;
        comment.innerHTML = commentCounter;
    }
})