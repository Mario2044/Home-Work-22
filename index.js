function numInPower (num, degree) {
    if (degree == 1) {
        return num;
    } else {
        return num * numInPower(num, degree - 1);
    }
}

alert( numInPower(2, 3) );