function even(start, end) {
    if (start > end) {
        return;
    }
    if (start % 2 == 0) {
        console.log(start);
        start++;
    } 
}
even(1, 6)