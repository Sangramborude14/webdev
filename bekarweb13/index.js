let timer;

search.addEventListener("input",() => {
    clearTimeout(timer);

    timer = setTimeout(() =>
    console.log(`API Call`),500);
})



const searchHandler = debounce((e) => {
    console.log(e.target.value);
},500);

search.addEventListener("input",searchHandler)

function debounce(fn,delay) {
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        },500);
    }
}

function throttle(fn,delay) {
    let shouldWait = false;

    return (...args) => {
        if (shouldWait) return;

        fn(...args);

        shouldWait = true;
        
        setTimeout(() => {
            shouldWait = false;
        },delay);
    }
}