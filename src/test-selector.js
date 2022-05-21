export default function (selector, runs = 3) {
  let timeStart;
  let timeEnd;
  let nodeList;
  const times = [];

  for (let n = 0; n < runs; n++) {
    timeStart = new Date();

    for (let i = 0, n = 100; i < n; i++) {
      nodeList = document.querySelectorAll(selector);
    }

    timeEnd = new Date();
    times.push(timeEnd - timeStart);
  }

  const resultsEl = document.getElementById('results');
  const resultEl = document.createElement('p');

  let sum = 0;

  times.forEach((x) => {
    sum += x;
  });

  const average = (sum / times.length).toFixed(2);
  resultEl.classList.add('result');
  resultEl.innerHTML = `<pre class="selector">"${selector}"</pre>Found ${
    nodeList.length
  } nodes: ran ${runs} times, average ${average}ms (${times.join(', ')})`;

  resultsEl.appendChild(resultEl);
}
