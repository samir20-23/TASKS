
let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let allbox = document.getElementById("allbox");
      let inn1 = document.getElementById("inn1");
      let btn3 = document.getElementById("btn3");
      let p1 = document.getElementById("p1");
      let box = document.getElementById("p2");
      //date
      let datee = new Date();
      let hourss = datee.getHours();
      let minutes = datee.getMinutes();
      let hours = hourss + ":" + minutes;
      
      //nots
      let not1 = document.getElementById("not1");
      let not2 = document.getElementById("not2");
      //localstorage 
      box.innerHTML = localStorage.getItem("loca");
      // persons
      btn1.addEventListener("click", function () {
        btn2.style.padding="30px";
        btn1.style.padding="10px";
        btn1.style.background="#5991b4";
        btn2.style.background="rgb(40, 90, 169)";


        p1.textContent = "Jhon:";
        x = 0;
        not1.innerHTML = "";
      });
      btn2.addEventListener("click", function () {
        btn1.style.padding="30px"
        btn2.style.padding="10px";
        btn2.style.background="#5991b4";
        btn1.style.background="rgb(40, 90, 169)";
        p1.textContent = "don:";
        x = 0;
        not2.innerHTML = "";

      });
      let x = 0;
      //message
      btn3.addEventListener("click", function () {
       
        if (inn1.value !== "") {
          if (p1.textContent == "Jhon:") {
            //nots
            x++;
            not2.innerHTML = x;
            let p = document.createElement("p");
            p.innerHTML = `${inn1.value} ${hours}`;
            p.style.backgroundColor = "red";
            p.style.boxShadow = "1px 1px 2px 2px red";
            p.style.borderBottomLeftRadius = "90px";
            p.style.height = "20px";
            box.appendChild(p);
            let vall = inn1.value;
          } else if (p1.textContent == "don:") {
            //notes
            x++;
            not1.innerHTML = x;
            let p = document.createElement("p");
            p.innerHTML = `${inn1.value} ${hours}`;
            p.style.backgroundColor = "blue";
            p.style.boxShadow = "1px 1px 2px 2px blue";
            p.style.borderBottomRightRadius = "90px";
            p.style.height = "20px";
            box.appendChild(p);
          }
        }
   //localstorage
        localStorage.setItem("loca", box.innerHTML);
      });