// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
var stripe = Stripe(
  "pk_test_51HmMK1Dkg1t2kwCzxIRkeqPinebEjxpF6l8hBMkzgL3j7gGeP2maiStsALetWRL7F8gOHV36BpdreHGKZVt3BPyH005XtY8vBm"
);
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: "16px",
    color: "#32325d",
  },
};

// Create an instance of the card Element.
var card = elements.create("card", { style: style });

// Add an instance of the card Element into the `card-element` <div>.
card.mount("#card-element");

// Create a token or display an error when the form is submitted.
var form = document.getElementById("payment-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  stripe.createToken(card).then(function (result) {
    if (result.error) {
      // Inform the customer that there was an error.
      var errorElement = document.getElementById("card-errors");
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});
