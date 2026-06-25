const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll('a[href^="#"]');
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("[data-form-status]");

function setNavState(isOpen) {
    if (!nav || !navToggle) return;

    nav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
}

if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        setNavState(!isOpen);
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        setNavState(false);

        target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
        });
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setNavState(false);
    }
});

document.addEventListener("click", (event) => {
    if (!nav || !navToggle || !nav.classList.contains("is-open")) return;
    if (event.target.closest("[data-nav]") || event.target.closest("[data-nav-toggle]")) return;
    setNavState(false);
});

function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.14,
        rootMargin: "0px 0px -60px"
    });

    document.querySelectorAll(".service-card, .timeline article, .image-slot, .contact-form").forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const project = String(formData.get("project") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !project || message.length < 10) {
            if (formStatus) {
                formStatus.textContent = "Add your contact details, project type, and a brief message.";
            }
            return;
        }

        const subject = encodeURIComponent(`Project brief from ${name} - ${project}`);
        const body = encodeURIComponent([
            `Name: ${name}`,
            `Email: ${email}`,
            `Project type: ${project}`,
            "",
            "Brief:",
            message
        ].join("\n"));

        if (formStatus) {
            formStatus.textContent = "Opening your email app with the project brief prepared.";
        }

        window.location.href = `mailto:huffvisuals@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
    });
}
