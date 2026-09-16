const connectBtn = document.querySelector(".connect-btn");

connectBtn?.addEventListener("click", () => {
  const formSection = document.querySelector("#contact");

  formSection?.scrollIntoView({
    behavior: "smooth"
  });
});
const form = document.querySelector(".contact-form") as HTMLFormElement;

form?.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = (document.querySelector('input[type="text"]') as HTMLInputElement).value;
  const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
  const message = (document.querySelector('textarea') as HTMLTextAreaElement).value;

  if(!name || !email || !message){
    alert("Please fill all fields");
    return;
  }

  alert("Message submitted successfully");

  form.reset();
});
