import path from 'path';
import { fileURLToPath } from 'url';


export const get__name = (filePath = import.meta.url, dirname = false) => {
  const __filename = fileURLToPath(filePath);
  return dirname ? path.dirname(__filename) : __filename;
}

export const debounce = (func, delay, leading) => {
  let timerId

  return (...args) => {
    if (!timerId && leading) {
      func(...args)
    }
    clearTimeout(timerId)

    timerId = setTimeout(() => func(...args), delay)
  }
}
