export const usePromiseTimeout = (func, ms) => () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Timeout exceeded.');
  }, ms);
  func()
    .then(res => {
      resolve(res)
    })
    .catch(err => reject(err));
})





