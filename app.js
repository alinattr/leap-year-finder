const input = document.querySelector("input");
const checkBtn = document.querySelector("button");
const result = document.querySelector("#result");


checkBtn.addEventListener('click', e => {
    const year = input.value;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result.innerText = year + " is a Leap Year";
            } else {
                result.innerText = year + " is not a Leap Year";
            }
        } else {
            result.innerText = year + " is a Leap Year ";
        }
    } else {
        result.innerText = year + " is not a Leap Year";
    }
})
























//
// if ((0 === year % 4) && (0 != year % 100) || (0 === year % 400)) {
//   result.innerText = year + " is a Leap Year";
// } else {
//   result.innerText = year + " is not a Leap Year";
// }

