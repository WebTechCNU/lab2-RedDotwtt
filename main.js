const nodes = [
    {
        source: "./left.jpg",
        alt: '',
        description: '',
        price: 300,
        filter_settings: '',
    },
    {
        source: "./left.jpg",
        alt: '',
        description: '',
        price: 300,
        filter_settings: '',
    },
    {
        source: "./left.jpg",
        alt: '',
        description: '',
        price: 300,
        filter_settings: '',
    },
    {
        source: "./left.jpg",
        alt: '',
        description: '',
        price: 300,
        filter_settings: '',
    }
]

function add_nodes() {
    const container = document.getElementById("container");
    let str = "";
    for (let i = 0; i < 5; i++) {
        for (let index = 0; index < nodes.length; index++) {
            const element = nodes[index];
            str += `<div class="node"><img src="${element.source}" alt="${element.alt}" class="img">
            <span class="node-text text">${element.description} ${element.price} BUCKS</span>
            </div>`;
        }
    }
    container.innerHTML += str;
}

// AD
setTimeout(function () {
    let modal = document.getElementById("modal");
    let span = document.getElementById("close");
    let timer = document.getElementById("timer");
    let count = 5;
  
    modal.style.display = "block";
    const interval = setInterval(function () {
      count--;
  
      if (count >= 0) {
        timer.innerHTML = "Зачекайте " + count + " секунд, щоб закрити рекламу";
      } else {
        ///clearInterval(interval);
        timer.innerHTML = "Ви можете закрити рекламу";
  
        span.classList.add("close-hover");
        span.onclick = function () {
          modal.style.display = "none";
        };
  
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    }, 1000);
  }, 10000);
  
  // SUBSCRIBE
  setTimeout(function () {
    let modal = document.getElementById("subcribe");
    let span = document.getElementById("close-sub");
    let sub_span = document.getElementById("sub-span");
    let reject_span = document.getElementById("reject-span");
  
    if (localStorage.getItem("subscribed") === "true") {
      return;
    }
  
    modal.style.display = "block";
    span.classList.add("close-hover");
  
    //SUB
    sub_span.onclick = function () {
      localStorage.setItem("subscribed", "true");
      modal.style.display = "none";
      alert("Дякуємо за підписку!");
    };
  
    // CLOSE
    reject_span.onclick = function () {
      modal.style.display = "none";
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }, 5000);
  

add_nodes();