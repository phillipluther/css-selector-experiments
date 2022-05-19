import { nanoid } from 'nanoid';

export default function (nodeCount = 10000) {
  const nodeWrapper = window.document.getElementById('nodeWrapper');
  const generatingNodesHandle = 'Generating nodes ...';
  const ids = [];

  nodeWrapper.innerHTML = '';

  console.time(generatingNodesHandle);

  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div');
    const id = `d-${nanoid()}`;

    node.id = id;
    node.innerText = id;
    node.classList.add(id);
    node.classList.add('top-level');

    ids.push(id);

    const p = document.createElement('p');
    const pId = `${id}-p`;

    p.id = pId;
    p.innerText = pId;
    p.classList.add(pId);
    p.classList.add('mid-level');

    const span = document.createElement('span');
    const spanId = `${id}-span`;

    span.id = spanId;
    span.innerText = spanId;
    span.classList.add(spanId);
    span.classList.add('bottom-level');
    span.setAttribute('data-id', spanId);

    p.appendChild(span);
    node.appendChild(p);
    nodeWrapper.appendChild(node);
  }

  console.timeEnd(generatingNodesHandle);

  return ids.sort();
}
