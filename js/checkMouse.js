function checkMouse() {
    //console.log(mouseX)
    if (mouseY > dHeight*.625 - 130 && mouseY < dHeight*.625) {
        if (mouseX > dWidth/2 - 125 && mouseX < dWidth/2 - 80) {
            letters[0] = true;
        }
        if (mouseX > dWidth/2 - 80 && mouseX < dWidth/2 - 45) {
            letters[1] = true;
        }
        if (mouseX > dWidth/2 - 45 && mouseX < dWidth/2 - 5) {
            letters[2] = true;
        }
        if (mouseX > dWidth/2 - 5 && mouseX < dWidth/2 + 20) {
            letters[3] = true;
        }
        if (mouseX > dWidth/2 + 20 && mouseX < dWidth/2 + 50) {
            letters[4] = true;
        }
        if (mouseX > dWidth/2 + 50 && mouseX < dWidth/2 + 120) {
            letters[5] = true;
        }
        if (mouseX > dWidth/2 + 120 && mouseX < dWidth/2 + 135) {
            letters[6] = true;
        }
        if (mouseX > dWidth/2 + 135 && mouseX < dWidth/2 + 170) {
            letters[7] = true;
        }
        if (mouseX > dWidth/2 + 170 && mouseX < dWidth/2 + 205) {
            letters[8] = true;
        }
        if (mouseX > dWidth/2 + 205 && mouseX < dWidth/2 + 240) {
            letters[9] = true;
        }
        if (mouseX > dWidth/2 + 240 && mouseX < dWidth/2 + 270) {
            letters[10] = true;
        }
        if (mouseX > dWidth/2 + 270 && mouseX < dWidth/2 + 300) {
            letters[11] = true;
        }
        if (mouseX > dWidth/2 + 300 && mouseX < dWidth/2 + 330) {
            letters[12] = true;
        }
    }
}