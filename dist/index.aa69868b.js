// functions
const showResult = (show)=>{
    console.log("ok");
    if (show) {
        resultSection.style.display = "flex";
        choiceSection.style.display = "none";
    } else {
        resultSection.style.display = "none";
        choiceSection.style.display = "block";
    }
};
const setRate = (number)=>{
    let ratingElement = document.querySelector("span");
    ratingElement.innerHTML = number;
};
// take all elements
let resultSection = document.querySelector(".result");
let choiceSection = document.querySelector(".choices");
// set elements
showResult(false);
resultSection.addEventListener("click", ()=>{
    showResult(false);
});

//# sourceMappingURL=index.aa69868b.js.map
