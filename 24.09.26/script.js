// for (let i = 11; i <= 17; i++) {
//   for (let j = 50; j >= 46; j--) {
//     document.write(`${i}+${j}=${i + j} / `);
//   }
//   document.write("<br />");
// }

// document.write("<table>");
// for (let i = 2; i < 10; i++) {
//   document.write(`<td>${i}단</td>`);
//   for (let j = 1; j < 10; j++) {
//     document.write(`<tr>`);
//     document.write(`<td>${i}*${j}=${j * i}</td>`);
//   }
//   document.write(`</tr>`);
// }
// document.write("</table>");

document.write("<table>");
document.write(`<tr>`);
for (let k = 2; k < 10; k++) {
  document.write(`<td>${k}단</td>`);
}
document.write(`</tr>`);

for (let i = 1; i < 10; i++) {
  document.write(`<tr>`);
  for (let j = 2; j < 10; j++) {
    document.write(`<td>${j}*${i}=${i * j}</td>`);
  }
  document.write(`</tr>`);
}
document.write("</table>");
