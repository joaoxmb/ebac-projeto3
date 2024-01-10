const validity = (input, setting) => {
  const value = input.value
  const validation = setting.validation(input, value)
      
  if (!validation.valid) {
    input.setCustomValidity(validation.message)
    return;
  }
  input.setCustomValidity("")
}

const formValidation = (form, settings) => {
  const inputs = form.querySelectorAll("input, textarea")

  inputs.forEach((input) => {
    const id = input.getAttribute("id");
    const setting = settings[id]
    const hasValidation = setting?.validation
    const hasMask = setting?.mask
    
    if (hasMask) {
      settings[id].mask(input);
    }
    
    input.addEventListener("input", (event) => {
      const current = event.target;
      const value = current.value
        .trim();

      current.setAttribute("data-has-value", value.length > 0)

      if (!hasValidation) {  
        return;
      }
      validity(current, setting);
    })
  })
}

const formReset = (form) => {
  const inputs = form.querySelectorAll("input, textarea")

  inputs.forEach(input => {
    input.setAttribute("data-has-value", false)
  })

  form.reset()
}

export {formValidation, formReset}