const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e)=>{
    btn_clicked = e.target;
    console.log(btn_clicked);

    p_btn.forEach((curElem) =>
        curElem.classList.remove("p-btn-active"));

    
        btn_clicked.classList.add("p-btn-active");

        // to find the number in data attr
        const btn_num = btn_clicked.dataset.btnNum;
        console.log(btn_num);

        const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
        //p_img_elem;
        //p-btn--1

        p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

        img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));



});