import { useCallback } from 'react';
export default function useDebounceFn(fn, { delay } = { delay: 300 }, deps) {
  let timer;
  return useCallback(function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay, ...arguments);
  }, deps);
}
