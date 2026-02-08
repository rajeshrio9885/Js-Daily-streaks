/*Debounce is a technique to delay function execution until the user stops triggering 
the event for a specified time. It is used to optimize performance and reduce unnecessary API calls. 
It uses closures and setTimeout to reset the timer on each call.
 */

const debounceFn = (fn, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const searchApi = (text) => {
  console.log("Api triggered");
};

const debounced = debounceFn(searchApi, 1000);

debounced("H");
debounced("He");
debounced("Hel");
debounced("Hell");
debounced("Hello");
