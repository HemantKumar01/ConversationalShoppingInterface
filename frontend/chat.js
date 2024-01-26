userMessageContainer = document.querySelector("#chat-body .user-message");
aiResponseContainer = document.querySelector("#chat-body .ai-response");
promptInput = document.querySelector("input#text-input");
chatBody = document.querySelector("#chat-body");
productView = document.querySelector("#product-view");

async function getResponse(message) {
  return new Promise((resolve, reject) => {
    if (message == "...") {
      resolve({
        text: `Welcome Back <b>${config.username}</b>! What do you want to order today?`,
        type: "text",
      });
    }
    resolve({
      text: `Here are the search results for Blue Shoes`,
      type: "search",
      data: [
        {
          image: "demo.jpeg",
          name: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        },
        {
          image: "demo.jpeg",
          name: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        },
        {
          image: "demo.jpeg",
          name: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        },
        {
          image: "demo.jpeg",
          name: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        },
        {
          image: "demo.jpeg",
          name: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        },
        {
          image: "demo.jpeg",
          name: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        },
      ],
    });
  });
}

async function sendMessage(message = "...") {
  userMessageContainer.innerText = message;
  aiResponseContainer.innerHTML = "...";
  res = await getResponse(message);

  // aiResponseContainer.innerHTML = res.text;
  var typed = new Typed(".ai-response", {
    strings: [res.text],
    typeSpeed: 25,
    showCursor: false,
  });

  chatBody.scrollTo(0, aiResponseContainer.scrollHeight);

  chatBody.classList.remove("half");
  if (res.type != "text") {
    chatBody.classList.add("half");
    productView.style.display = "block";

    let productInnerHTML = "";
    if (res.type == "search") {
      for (let product of res.data) {
        productInnerHTML += `<div class="product">
          <img src="${product.image}" alt="">
          <p class="product-name">${product.name}</p>
        </div>`;
      }
    }
    productView.innerHTML = ` <div class="flexbox main">
        ${productInnerHTML}
    </div>
    `;
  }
}

promptInput.onchange = () => {
  sendMessage(promptInput.value);
  promptInput.value = "";
};
