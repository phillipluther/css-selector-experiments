export default function (ids) {
  const results = {};
  const timeStart = new Date();

  for (let i = 0, n = ids.length; i < n; i++) {
    document.querySelector(`[${ids[i]}-span]`);
  }
  results.top = new Date() - timeStart;

  return results;
}
