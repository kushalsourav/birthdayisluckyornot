const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector("#check-number");
const output = document.querySelector('#output');
function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        output.innerText = "your bithday is lucky";
    } else {
        output.innerText = "your birthday is not lucky";
    }
}

function checkBirthDateisLucky() {
    const dob = dateOfBirth.value;
    // console.log(dob)
    var sum = calculateSum(dob);
    if (sum && dob) {
        console.log(sum);
        compareValues(sum, luckyNumber.value);
    } else {
        output.innerText = "please enter both the fields";
    }

}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;

}

checkButton.addEventListener('click', checkBirthDateisLucky);