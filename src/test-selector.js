export default function (selector) {
  let timeStart;
  let timeEnd;
  let nodeList;

  timeStart = new Date();
  nodeList = document.querySelectorAll(selector);
  timeEnd = new Date();

  const results = document.getElementById('results');
  const result = document.createElement('p');

  result.classList.add('result');
  result.innerText = `"${selector}" found ${nodeList.length} nodes in ${timeEnd - timeStart}ms`;

  results.appendChild(result);
}
