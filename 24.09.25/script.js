document.write("<table>");

for (let i = 2; i < 10; i++) {
  document.write("<tr>");
  document.write(`<th> ${i}단</th >`);
  for (let k = 1; k < 10; k++) {
    document.write(`<td> ${i} *${k} = ${i * k}</td >`);
  }
  document.write("</tr>");
}
document.write("</table>");
