var countOfBoxes = +prompt("Введите кол-во коробок");
var catIndex = +prompt("Введите начальную точку кота");
var step = +prompt("Введите размер шага кота");
const countOfTrying = 3;



var image = document.createElement('img');
var button = document.getElementById('button')
var button2 = document.getElementById('button2'); 
image.src = "Images/2022-03-07_15-38-49.png";

var images = [];
var boxes = [];
image.style.width = '150px';
image.style.height = '150px';


    moveCatToRandomSide(step);

    for (let i = 0; i < +countOfBoxes; i++) {
        fillArray(i);
        image = document.createElement('img');
        image.src = "Images/2022-03-07_15-38-49.png";
        image.style.width = '150px';
        image.style.height = '150px';
        images[i] = image;
    }

    for (let j = 0; j < countOfBoxes; j++){
        images[j].classList.toggle("align-right");
        document.querySelector('.container').appendChild(images[j]);
    }

    imgClick();
    openAllBox()
    backToStart();


function fillArray(i) {
    if(checkCatInBox(i) === true) {
        boxes.push(true);
    } else {
        boxes.push(false);
    }
}

function backToStart() {
    button2.onclick = function(event) {
        for(let i = 0; i < countOfBoxes; i++) {
            images[i].src = "Images/2022-03-07_15-38-49.png";
        }
    };
}


function imgClick() {
    for(let i = 0; i < countOfBoxes; i++) {
        let countOfClicks = 0;
            images[i].onclick = function(event) {
                if(countOfClicks != countOfTrying) {
                    if (checkCatInBox(i) === false) {
                        images[i].src = "Images/openBox.png";
                    } else {
                        images[i].src = "Images/2022-03-07_15-37-37.png";
                    } 
                    countOfClicks++;  
            } else {
                alert("You lose!")
            }
        };
    }
}

function openAllBox() {
    button.onclick = function(event) 
    {
        for(let i = 0; i < countOfBoxes; i++) {
                 if (checkCatInBox(i) === false) {
                    images[i].src = "Images/openBox.png";
                 } else if (checkCatInBox(i) === true) {
                    images[i].src = "Images/2022-03-07_15-37-37.png";
                }
        }
    };
    
}

function getRandomSide(step) {
    let randomSide = Math.random() > 0.5;
    let left = false;
    let right = true;
    console.log(randomSide);
    if (randomSide) {
        if(this.catIndex > step) {
            return left;
        } else if(+catIndex < boxes.length - step) {
            return right;
        } else {
            return null;
        }
    } else {
        if (+catIndex < boxes.length - step) {
            return right;
        } else if(+catIndex > step) {
            return left;
        } else {
            return null;
        }
    }
}

function moveCatToRandomSide(step) {
    let randomSide = getRandomSide(step)
    if (randomSide) {
        boxes[+catIndex] = false;
        catIndex -= step;
        console.log("2." + catIndex);
        boxes[+catIndex] = true; 
    } else {
        boxes[+catIndex] = false;
        catIndex += step;
        console.log("1." + catIndex);
        boxes[+catIndex] = true;
    }
    console.log("3." + catIndex);
}

function checkCatInBox(boxIndex) {
    if(catIndex != boxes.length - 1) {
        return boxIndex == +catIndex + 1;
    } else {
        return boxIndex == catIndex;
    }
}

function checkCatIsNear(boxIndex) {
    let catIsInLeftBox = boxIndex == this.catIndex - 1;
    let catIsInRightBox = boxIndex == this.catIndex + 1;
    return catIsInLeftBox || catIsInRightBox;
}    