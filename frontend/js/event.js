(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,n){"use strict";n.r(t),function(e){t.default=function(){function t(t,n){e("#event-modal-label").html(t),e("#event-modal-body").html(n),e("#event-modal").modal()}"#success"===window.location.hash&&(t("Purchase Successful","Your ticket purchase for <strong>"+window.event.name+"</strong> was successful! You will be e-mailed a receipt for your purchase immediately and details for joining the event will e-mailed 1 week before the event is scheduled to start."),window.location.hash=""),"#canceled"===window.location.hash&&(t("Purchase Failure","Oh no! Your ticket purchase for <strong>"+window.event.name+"</strong> was not successful. Please give it another try."),window.location.hash=""),"#thanks"===window.location.hash&&(t("Event Finished","Thanks for attending <strong>"+window.event.name+"</strong>! Keep your eyes open for more events in the future."),window.location.hash=""),e("#checkout-button").on("click",function(){e(this).addClass("disabled")}),e.getScript("https://js.stripe.com/v3",()=>{var e=Stripe(window.stripePublishableKey);document.getElementById("checkout-button").addEventListener("click",function(){e.redirectToCheckout({items:[{sku:window.event.sku,quantity:1}],successUrl:window.event.url+"#success",cancelUrl:window.event.url+"#canceled"}).then(function(e){e.error&&(document.getElementById("stripe-error-message").textContent=e.error.message)})})})}}.call(this,n(0))}}]);