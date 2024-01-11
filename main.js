import {formValidation, formReset} from "./components/formValidation.js"
import parallax from "./components/parallax.js"

new parallax('.about-image', (element, progress) => {
  element
    .style = `
      opacity: ${progress};
    `
})
new parallax('.about-text', (element, progress) => {
  const texts = element.querySelectorAll('p, h2, button')

  texts.forEach((t, i) => {
    t
      .style = `
        opacity: ${progress};
        transform: translateY(${((i + 1) * 3) - (progress * ((i + 1) * 3))}rem);
      `
  })
})

document.querySelectorAll('#gallery img')
  .forEach(img => {
    new parallax(img, (element, progress) => {
      element
        .style = `opacity: ${progress} !important`
    })
  })

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("#contact-form")
//   const settings = {
//     name: {
//       validation: (input, value) => {
//         // Detect Full Name
//         const splited = value.split(" ")
//         const isFullName = splited.length >= 2
//         const isValidName = splited
//           .map(names => {
//             if (names.length >= 2) {
//               return true;
//             }
//             return false;
//           })
//           .includes(false) ? false : true
        
//         if (isFullName && isValidName) {
//           return {valid: true}
//         }
  
//         return {valid: false, message: "O seu nome está incompleto!"}
//       }
//     },
//     tel: {
//       validation: (input, value) => {
//         if (value.length === 15 ) {
//           return {valid: true}
//         }
//         return {valid: false, message: "O seu número de celular está incompleto!"}
//       },
//       mask: (input) => {
//         $(input).mask("(99) 99999-9999")
//       }
//     },
//     email: {
//       validation: (input, value) => {
//         if (value.includes(".")) {
//           return {valid: true}
//         }
//         return {valid: false, message: "Este e-mail não é válido!"}
//       }
//     },
//     msg: {
//       validation: (input, value) => {
//         if (value.length > 50) {
//           return {valid: true}
//         }
//         return {valid: false, message: "Mensagem muito pequena!"}
//       }
//     }
//   }  
//   formValidation(form, settings);
//   form.addEventListener("submit", (e) => {
//       e.preventDefault();

//       alert("Mensagem enviada com sucesso! Entraremos em contato assim que possivel.")
//       formReset(form);
//   })

// })