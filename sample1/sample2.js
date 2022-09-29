// my solution

const theOneFunc = after => {
    if (setTimeout = 4*1000) {
        console.log('Hello ' + after)
    }
    else if (setTimeout = 8*1000) {
        console.log('Hello ' + after)
    }
};
setTimeout(theOneFunc, 4*1000, 'after 4 seconds');
setTimeout(theOneFunc, 8*1000, 'after 8 seconds');

// pluralsight solution

const theOneFunc = delay => {
    console.log('Hello after ' + delay + ' seconds');
};

setTimeout(theOneFunc, 4*1000, 4);
setTimeout(theOneFunc, 8*1000, 8);
