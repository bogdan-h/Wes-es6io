function tap(x) {
    console.log(x);
    return x;
}

function tap(x, fn = x => x) {
    console.log(fn(x));
    return x;
}