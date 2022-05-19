import { nanoid } from 'nanoid';

export default function () {
  const nodeWrapper = window.document.getElementById('nodeWrapper');
  const generatingNodesHandle = 'Generating nodes ...';
  const ids = [];

  nodeWrapper.innerHTML = '';

  console.time(generatingNodesHandle);

  for (let i = 0, n = 1000; i < n; i++) {
    const node = document.createElement('div');
    const id = `d-${nanoid()}`;

    node.id = id;
    node.innerText = id;
    node.className = id;

    ids.push(id);

    const p = document.createElement('p');
    const pId = `${id}-p`;

    p.id = pId;
    p.innerText = pId;
    p.className = pId;

    const span = document.createElement('span');
    const spanId = `${id}-span`;

    span.id = spanId;
    span.innerText = spanId;
    span.className = spanId;
    span.setAttribute('data-id', spanId);

    p.appendChild(span);
    node.appendChild(p);
    nodeWrapper.appendChild(node);
  }

  console.timeEnd(generatingNodesHandle);

  return ids.sort();
}
