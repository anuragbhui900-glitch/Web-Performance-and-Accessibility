"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  const navLinks = document.querySelectorAll("#primary-navigation a");
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  const yearElement = document.querySelector("#current-year");

  // Update the footer year automatically.
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Accessible mobile navigation.
  if (menuButton && navigation) {
    function closeMenu() {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }

    menuButton.addEventListener("click", function () {
      const isExpanded =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
      );

      navigation.classList.toggle("is-open", !isExpanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 700) {
        closeMenu();
      }
    });
  }

  // Contact form validation.
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      formStatus.textContent = "";

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        formStatus.textContent =
          "Please complete all fields correctly.";
        return;
      }

      formStatus.textContent =
        "Validation successful! This demo does not send your message.";
    });

    contactForm.addEventListener("input", function () {
      formStatus.textContent = "";
    });
  }
});