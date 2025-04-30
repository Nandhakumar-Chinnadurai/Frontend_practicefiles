// Canvas Graphics

let c = document.getElementById("txtnamegrap");
let ctx = c.getContext("2d");
ctx.fillStyle = "lime";
ctx.fillRect(0,0, 300, 150);
ctx.font = "italic 50px Time";
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.strokeText("Nandhakumar", 7, 85);

// ------------------------------------------------