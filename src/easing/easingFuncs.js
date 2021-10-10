export function easeIn(delay, callback) {
    setTimeout(() => {
        callback();
    }, delay);
}
