const connectBtn = document.querySelector(".connect-btn");
connectBtn === null || connectBtn === void 0 ? void 0 : connectBtn.addEventListener("click", () => {
    const formSection = document.querySelector("#contact");
    formSection === null || formSection === void 0 ? void 0 : formSection.scrollIntoView({
        behavior: "smooth"
    });
});
const form = document.querySelector(".contact-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
    }
    alert("Message submitted successfully");
    form.reset();
});
export {};
//# sourceMappingURL=main.js.map