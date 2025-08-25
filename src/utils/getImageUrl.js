export let ImagePath;

(function (ImagePath) {
  ImagePath['TESTAMENTS'] = 'testaments';
})(ImagePath || (ImagePath = {}));

export function getImageUrl(name, path) {
  return new URL(`/src/assets/images/${path}/${name}`, import.meta.url).href;
}
