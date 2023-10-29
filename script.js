const navbar = document.querySelector("#navbar");
const navbarBtn = document.querySelector("#menu");
const collasibleBtn1 = document.querySelector("#collapsible-header1");
const collasible1 = document.querySelector("#collapsible-body1")
const collasibleBtn2 = document.querySelector("#collapsible-header2");
const collasible2 = document.querySelector("#collapsible-body2")
const collasibleBtn3 = document.querySelector("#collapsible-header3");
const collasible3 = document.querySelector("#collapsible-body3")

navbarBtn.addEventListener("click", () => {
    console.log(navbar);
    navbar.style.top === "-155px" || navbar.style.top === "" 
        ? navbar.style.top = "80px" 
            : navbar.style.top = "-155px";
});

let visible = false;

collasibleBtn1.addEventListener("click", () => {
    console.log(visible);
    if (visible === false) {
        collasible1.style.display = 'block';
        collasible2.style.display = 'none';
        collasible3.style.display = 'none';
        visible = true;
    } else if (visible === true) {
        collasible1.style.display = 'none';
        visible = false;
    }
});

collasibleBtn2.addEventListener("click", () => {
    console.log(visible);
    if (visible === false) {
        collasible2.style.display = 'block';
        collasible1.style.display = 'none';
        collasible3.style.display = 'none';
        visible = true;
    } else if (visible === true) {
        collasible2.style.display = 'none';
        visible = false;
    }
});

collasibleBtn3.addEventListener("click", () => {
    console.log(visible);
    if (visible === false) {
        collasible3.style.display = 'block';
        collasible1.style.display = 'none';
        collasible2.style.display = 'none';
        visible = true;
    } else if (visible === true) {
        collasible3.style.display = 'none';
        visible = false;
    }
});