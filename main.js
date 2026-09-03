document.addEventListener("DOMContentLoaded", function () {

    const buttons =
        document.querySelectorAll(".category-btn");

    const products =
        document.querySelectorAll(".product-card");

    const grid =
        document.querySelector(".products-grid");


    function showProducts(category) {

        let count = 0;


        /* ================= ALL PRODUCTS ================= */

        if (category === "all") {

            grid.classList.remove("category-view");


            products.forEach(function (product) {

                const productCategory =
                    product.getAttribute("data-category");


                if (
                    productCategory === "all" &&
                    count < 6
                ) {

                    product.classList.add("show");

                    count++;

                } else {

                    product.classList.remove("show");

                }

            });

        }


        /* ================= CATEGORY PRODUCTS ================= */

        else {

            grid.classList.add("category-view");


            products.forEach(function (product) {

                const productCategory =
                    product.getAttribute("data-category");


                if (
                    productCategory === category &&
                    count < 4
                ) {

                    product.classList.add("show");

                    count++;

                } else {

                    product.classList.remove("show");

                }

            });

        }

    }


    /* ================= FIRST LOAD ================= */

    showProducts("all");


    /* ================= BUTTON CLICK ================= */

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            buttons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            const category =
                this.getAttribute("data-category");


            showProducts(category);

        });

    });

});
// ==========================================
// CHECKOUT & ORDER SUMMARY PROCESSING
// ==========================================

// Page Load అయ్యేటప్పుడు Summary ని సిద్ధం చేయడం
document.addEventListener("DOMContentLoaded", () => {
  renderCheckoutSummary();
});

// 1. Cart డేటాను బట్టి Checkout బిల్ అమౌంట్ కాలిక్యులేట్ చేయడం
function renderCheckoutSummary() {
  const summaryBox = document.querySelector(".summary-card");
  if (!summaryBox) return; // Checkout page కాకపోతే ఇక్కడితో ఆగుతుంది

  // LocalStorage నుండి కార్ట్ డేటాను తెచ్చుకోవడం
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let subtotal = 0;
  cart.forEach((item) => {
    // ధర నుండి కరెన్సీ గుర్తును తొలగించి నంబర్‌గా మార్చడం
    const price = Number(item.price.toString().replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = item.quantity || 1;
    subtotal += price * quantity;
  });

  const totalAmount = subtotal;

  // Checkout సమ్మరీ UI డిజైన్‌ను Dynamic గా అప్‌డేట్ చేయడం
  summaryBox.innerHTML = `
    <h3>ORDER SUMMARY</h3>
    <hr style="border: none; border-top: 1px solid #334155; margin-bottom: 15px;">
    
    <div style="display:flex; justify-content:space-between; margin-bottom:10px; color:#94a3b8;">
      <span>Total Items:</span>
      <span style="color:#ffffff; font-weight:bold;">${cart.length}</span>
    </div>

    <div style="display:flex; justify-content:space-between; margin-bottom:10px; color:#94a3b8;">
      <span>Subtotal:</span>
      <span style="color:#ffffff;">₹${subtotal.toLocaleString("en-IN")}</span>
    </div>

    <div style="display:flex; justify-content:space-between; margin-bottom:10px; color:#94a3b8;">
      <span>Delivery Charge:</span>
      <span style="color:#22c55e; font-weight:bold;">FREE</span>
    </div>

    <hr style="border: none; border-top: 1px solid #334155; margin: 15px 0;">

    <div style="display:flex; justify-content:space-between; margin-bottom:20px; color:#ffffff; font-size:1.1rem; font-weight:bold;">
      <span>Total Payable:</span>
      <span style="color:#f59e0b;">₹${totalAmount.toLocaleString("en-IN")}</span>
    </div>

    <button type="submit" class="btn-place-order">
      PLACE ORDER NOW <i class="fa-solid fa-circle-check"></i>
    </button>
  `;
}

// 2. Place Order క్లిక్ చేసినప్పుడు ప్లేస్‌మెంట్ ప్రాసెస్
function handlePlaceOrder(event) {
  event.preventDefault();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("⚠️ Your cart is empty! Please add products before placing an order.");
    window.location.href = "products.html";
    return;
  }

  // Success Confirmation Pop-up
  alert("🎉 Order Placed Successfully at Mamatha Electronics!\n\nThank you for shopping with us. We will deliver your products soon.");

  // Order పూర్తయ్యాక కార్ట్ క్లియర్ చేయడం
  localStorage.removeItem("cart");

  // హోమ్ పేజీకి రీడైరెక్ట్ చేయడం
  window.location.href = "index.html";
}
// ==========================================
// CONTACT FORM SUBMISSION HANDLER
// ==========================================
function handleContactSubmit(event) {
  event.preventDefault(); // ఫారమ్ రీలోడ్ అవ్వకుండా ఆపుతుంది

  // మెసేజ్ పాప్-అప్
  alert("📩 Thank you for reaching out to Mamatha Electronics!\n\nWe have received your message and will get back to you shortly.");

  // ఫారమ్ ఖాళీ చేయడం
  event.target.reset();
}