export default function (ids) {
  const results = {};
  let timeStart;

  //
  // top level
  //
  timeStart = new Date();
  for (let i = 0, n = ids.length; i < n; i++) {
    document.querySelector(`#${ids[i]}`);
  }
  results.top = new Date() - timeStart;

  //
  // mid level
  //
  timeStart = new Date();
  for (let i = 0, n = ids.length; i < n; i++) {
    document.querySelector(`#${ids[i]}-p`);
  }
  results.mid = new Date() - timeStart;

  //
  // bottom level
  //
  timeStart = new Date();
  for (let i = 0, n = ids.length; i < n; i++) {
    document.querySelector(`#${ids[i]}-span`);
  }
  results.bot = new Date() - timeStart;

  return results;
}
