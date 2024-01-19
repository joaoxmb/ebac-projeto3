import "./lib/jquery.v3.7.1.min.js";
import "./lib/jquery.mask.v0.9.0.min.js";
import "./lib/bootstrap.bundle.v5.3.2.min.js";

import { formValidation, formReset } from "./components/formValidation.js"
import parallax from "./components/parallax.js"
import "./components/openingHours.js"

document.addEventListener("DOMContentLoaded", () => {
  // Form Validation
  const form = document.querySelector("#contact-form")
  const settings = {
    fullName: {
      validation: (input, value) => {
        // Detect Full Name
        const splited = value.split(" ")
        const isFullName = splited.length >= 2
        const isValidName = splited
          .map(names => {
            if (names.length >= 2) {
              return true;
            }
            return false;
          })
          .includes(false) ? false : true

        if (isFullName && isValidName) {
          return { valid: true }
        }

        return { valid: false, message: "O seu nome está incompleto!" }
      }
    },
    tel: {
      validation: (input, value) => {
        if (value.length === 15) {
          return { valid: true }
        }
        return { valid: false, message: "O seu número de celular está incompleto!" }
      },
      mask: (input) => {
        $(input).mask("(99) 99999-9999")
      }
    },
    email: {
      validation: (input, value) => {
        if (value.includes(".")) {
          return { valid: true }
        }
        return { valid: false, message: "Este e-mail não é válido!" }
      }
    },
    message: {
      validation: (input, value) => {
        if (value.length > 50) {
          return { valid: true }
        }
        return { valid: false, message: `Mensagem muito pequena! Escreva mais ${51 - value.length} caracteres.` }
      }
    }
  }

  formValidation(form, settings);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato assim que possivel.")
    formReset(form);
  })

  // Parallax Effect
  new parallax('.about-image', (element, progress) => {
    element
      .style = `
        opacity: ${progress} !important;
      `
  })
  new parallax('.about-text', (element, progress) => {
    element.querySelectorAll('p, h2, button')
      .forEach((e, i) => {
        e.style = `
          opacity: ${progress} !important;
          transform: translateY(${((i + 1) * 3) - (progress * ((i + 1) * 3))}rem) !important;
        `
      })
  }, 1.1)
  new parallax('#location .location-text', (element, progress) => {
    document.querySelector('#location')
      .querySelectorAll('address, #location .col-12 > p, h2, #opening-hours')
      .forEach((e, i) => {
        e.style = `
            opacity: ${progress} !important;
            transform: translateY(${((i + 1) * 3) - (progress * ((i + 1) * 3))}rem) !important;
          `
      })
  })
  new parallax('.menu-transition-image', (element, progress) => {
    element
      .style = `
        opacity: ${progress} !important;
        transform: translateY(${5 - (progress * 5)}rem) !important;
      `
  }, 0.8)
  new parallax('#location iframe', (element, progress) => {
    element
      .style = `opacity: ${progress * 0.7} !important;`
  })
  document.querySelectorAll('#gallery img')
    .forEach(img => {
      new parallax(img, (element, progress) => {
        element
          .style = `opacity: ${progress} !important`
      }, 0.7)
    })

  // Warning Modal
  new bootstrap.Modal('#warning-modal').show()
})