let to = document.querySelector(".to");
    let inn = document.querySelector(".inn");
    let in1 = document.querySelector(".in1");
    let in2 = document.querySelector(".in2");
    let lable = document.querySelector(".lable");
    let in3 = document.querySelector(".in3");
    let lable2 = document.querySelector(".lable");
    let in4 = document.querySelector(".in4");
    let lable3 = document.querySelector(".lable");
    let in5 = document.querySelector(".in5");
    let lable4 = document.querySelector(".lable");
    let btn = document.querySelector(".btn");
    let axn = document.querySelector(".axn");

    btn.textContent = "cliak";
    lable.textContent = "you?:";
    lable2.textContent = "max";
    lable3.textContent = "normal";
    lable4.textContent = "min";

    btn.addEventListener("click", function() {
      let v = inn.value / ((in1.value - 100) + (in2.value / 10));

      let v1, v2;

      if (v === 1) {
        v1 = ((in1.value - 100) + (in2.value / 10)) * 0.9;
        v2 = ((in1.value - 100) + (in2.value / 10)) * 1.1;
      } else {
        v1 = ((in1.value - 100) + (in2.value / 10)) * 0.9 * 0.9;
        v2 = ((in1.value - 100) + (in2.value / 10)) * 0.9 * 1.1;
      }
      axn.innerHTML = "Poids idéal: " + v1.toFixed(2) + " kg à " + v2.toFixed(2) + " kg";

    });