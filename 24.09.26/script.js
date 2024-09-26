const gugudan = document.querySelector("#gugudan");

for (let i = 2; i < 10; i++) {
  const td = document.createElement("td");
  td.innerText = `${i}단`;
  for (let j = 1; j < 10; j++) {
    const tr = document.createElement("tr");
    td.appendChild(tr);
    tr.innerText = `${i}*${j}=${i * j}`;
  }
  gugudan.appendChild(td);
}
