document.addEventListener("DOMContentLoaded", async () => {
  const stripe = Stripe("api key from stripe");

  var elements = stripe.elements();
  var cardElement = elements.create("card");
  cardElement.mount("#card-element");
});

const addMessage = (message) => {
  const messagesDiv = document.querySelector("#messages");
  messagesDiv.style.display = "block";
  messagesDiv.innerHTML += ">" + message + "<br>";
  console.log("StripeSampleDebug:", message);
};
