const line1Element = document.getElementById('line1');
const line2Element = document.getElementById('line2');
const evaLineElement = document.getElementById('eva-line');
const nextPageButton = document.getElementById('nextPageButton');

const HAPPY = "HAPPY";
const BIRTHDAY = "BIRTHDAY";
const EVA = "EVA!";
let index1 = 0;
let index2 = 0;
let indexEva = 0;

function typeWriterLine1() {
    if (index1 < HAPPY.length) {
        line1Element.textContent += HAPPY.charAt(index1);
        index1++;
        setTimeout(typeWriterLine1, 200);
    } else {
        typeWriterLine2();
    }
}

function typeWriterLine2() {
    if (index2 < BIRTHDAY.length) {
        line2Element.textContent += BIRTHDAY.charAt(index2);
        index2++;
        setTimeout(typeWriterLine2, 200);
    } else {
        typeWriterEva();
    }
}

function typeWriterEva() {
    if (indexEva < EVA.length) {
        evaLineElement.textContent += EVA.charAt(indexEva);
        indexEva++;
        setTimeout(typeWriterEva, 200);
    } else {
        nextPageButton.style.display = 'block';
    }
}


typeWriterLine1();