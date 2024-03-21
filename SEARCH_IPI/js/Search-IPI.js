

//1
const inp = document.getElementById("inp");
const box = document.getElementById("box");

let arr = [];
let ob = {};

//2
async function f1() {
  const a1 = await fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
  );
  
  const data = await a1.json();
  arr = [...data];
}
 //3
inp.addEventListener("input", () => {
  box.innerHTML = "";
  ob = {};
  arr.forEach((item) => {
    const city = item.city.toLowerCase();
    if (city.includes(inp.value.toLowerCase())) {
      if (!(item.state in ob)) {
        ob[item.state] = [item];
        box.appendChild(f2(item.state, "state"));
      } else {
        ob[item.state].push(item);
      }
    }
  });
});
//4
function f2(txt, cl) {
  const li = document.createElement("li");
  li.innerHTML = txt;
  li.className = cl;
  li.addEventListener("click", () => {

    function f3() {
            let x = Math.floor(Math.random() * 520)
            let y = Math.floor(Math.random() * 320)
            box.style.left = x + "px"
            box.style.top = y + "px"
        }
        setTimeout(f3, 55)
        setInterval(f3, 115)


    inp.value = txt;
    box.innerHTML = "";
    ob[txt].forEach((item) => {
      box.appendChild(f2(
        `<b>City</b>: ${item.city}, <b>State</b>: ${item.state}`,
        "city"
      ));
    });
  });
  return li;
}





f1();





