let userinput = document.querySelector("#userinput"); 
let result = document.querySelector("#result"); 
let cong = document.querySelector(".congmssg");
let check = document.querySelector("#checking");


result.classList.add("hide"); 

userinput.addEventListener("input", () => {
    let userValue = Number(userinput.value);
    if (userValue === 67) {
    } else if (userValue < 67) {
    } else if (userValue > 67) {
    }
});

check.addEventListener("click", () => {
    let userValue = Number(userinput.value);  
    if (userValue === 67) {
        result.innerText = `Congratulations, you guessed it right!`;
    } else if (userValue < 67) {
        result.innerText = `You guessed low`;
    } else if (userValue > 67) {
        result.innerText = `You guessed high`;
    }
    result.classList.remove("hide"); 
});


