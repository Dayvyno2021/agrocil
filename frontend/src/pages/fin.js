const paymentForm = document.getElementById('payment-form');
     paymentForm.addEventListener("submit", payFincra, false);
function payFincra(e) {
     e.preventDefault();
       Fincra.initialize({
         key: "pk_##########",
         amount: document.getElementById("amount").value,
         currency: "NGN",
         customer: {
             name: document.getElementById("name").value,
             email: document.getElementById("email").value,
             phoneNumber: document.getElementById("phoneNumber").value,
           },
        //Kindly chose the bearer of the fees
        feeBearer: "business" || "customer",
 
         onClose: function () {
           alert("Transaction was not completed, window closed.");
         },
         onSuccess: function (data) {
           const reference = data.reference;
    alert("Payment complete! Reference: " + reference);
         },
       });
     }