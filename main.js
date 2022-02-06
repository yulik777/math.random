function random() {
    document.getElementById('result').innerHTML = getRnd();
}

function getRnd() {

    let min = -10;
    let max = 10;

    const generateArray = (length, max) => (
        [...new Array(10)]
        .map(() => min + Math.round(Math.random() * (max - min))));
    const numbers = generateArray(-10, 10);
    console.log(numbers);

    let minnumber = Math.min.apply(null, numbers);
    console.log(Math.min(minnumber));

    let maxnumber = Math.max.apply(null, numbers);
    console.log(Math.min(maxnumber));

    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i], 10);
    }
    let avg = sum / numbers.length;
    console.log(sum);
    console.log(avg);

    let result = 1;
    for (i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    console.log(result);

    return numbers;
}