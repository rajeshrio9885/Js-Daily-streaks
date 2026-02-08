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
