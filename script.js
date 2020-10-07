let darkMode = true;
const elements = document.getElementsByTagName("*");

const checkbox = document.getElementsByClassName("slider")[0];
checkbox.addEventListener("click", () => {
    if (darkMode) {
        darkMode = false;
        document.body.style.background = "hsl(0, 0%, 100%)";
        // document.getElementsByClassName("slider").style.background =
        //     "hsl(0, 0%, 100%)";
    } else {
        darkMode = true;
        document.body.style.background = "hsl(230, 17%, 14%)";
        // document.getElementsByClassName("slider").style.background =
        // "hsl(230, 17%, 14%)";
    }
    console.log(darkMode);
});

// #### Dark Theme

// - Very Dark Blue (BG): hsl(230, 17%, 14%)
// - Very Dark Blue (Top BG Pattern): hsl(232, 19%, 15%)
// - Dark Desaturated Blue (Card BG): hsl(228, 28%, 20%)
// - Desaturated Blue (Text): hsl(228, 34%, 66%)
// - White (Text): hsl(0, 0%, 100%)

// #### Light Theme

// - White (BG): hsl(0, 0%, 100%)
// - Very Pale Blue (Top BG Pattern): hsl(225, 100%, 98%)
// - Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
// - Dark Grayish Blue (Text): hsl(228, 12%, 44%)
// - Very Dark Blue (Text): hsl(230, 17%, 14%)
