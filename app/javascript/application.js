// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@hotwired/turbo-rails"

document.addEventListener("turbo:submit-end", function(event) {
  const form = event.target;
  
  // Only target the message form
  if (form.id === "message-form") {
    const input = form.querySelector("#chat-text");
    if (input) {
      input.value = "";
    }
  }

  const submitBtn = form.querySelector("input[type=submit], button[type=submit]");
  if (submitBtn) submitBtn.disabled = false;
});

document.addEventListener("turbo:after-stream-render", (event) => {
  const chatMessages = document.getElementById("chat-messages");
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

document.addEventListener("turbo:load", () => {
  const chatMessages = document.getElementById("chat-messages");
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

document.addEventListener("turbo:submit-start", (event) => {
  const form = event.target;
  const submitBtn = form.querySelector("input[type=submit], button[type=submit]");
  if (submitBtn) submitBtn.disabled = true;
});
