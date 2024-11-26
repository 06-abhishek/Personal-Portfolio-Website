1.
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        const arrCopy = [];
        obj.forEach((item, index) => {
            arrCopy[index] = deepClone(item);
        });
        return arrCopy;
    }

    const objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}

2.
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Example usage
function slowAdd(a, b) {
    for (let i = 0; i < 1e9; i++) {} // Simulate a slow operation
    return a + b;
}

const memoizedAdd = memoize(slowAdd);
console.log(memoizedAdd(5, 10)); // Runs slowAdd
console.log(memoizedAdd(5, 10)); // Returns cached result

3.
function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Example usage
const log = () => console.log('Throttled');
const throttledLog = throttle(log, 2000);

window.addEventListener('scroll', throttledLog);

4.
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(result => {
                results[index] = result;
                completedPromises++;

                if (completedPromises === promises.length) {
                    resolve(results);
                }
            }).catch(error => reject(error));
        });
    });
}

// Example usage
const p1 = Promise.resolve(3);
const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
const p3 = Promise.reject("An error occurred");

promiseAll([p1, p2, p3])
    .then(values => console.log(values))
    .catch(error => console.log(error));