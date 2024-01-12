const today = new Date()
const day = today.getDay();

document.querySelector('#opening-hours')
  .innerHTML = `
    <h3 class="fs-4">Horários de funcionamento</h3>
    ${day > 1 && day < 4 ? '<p class="mb-3 colored-text">Hoje nos não funcionamos!</p>' : ''}
    <ul>
      <li class="${day === 4 ? 'colored-text' : ''}">
        <h4 class="fs-6">Quarta e Quinta-feira</h4>
        <p class="ms-2">16h - 0h</p>
      </li>
      <li class="${day === 5 ? 'colored-text' : ''}">
        <h4 class="fs-6">Sexta-feira</h4>
        <p class="ms-2">16h - 1h</p>
      </li>
      <li class="${day === 6 ? 'colored-text' : ''}">
        <h4 class="fs-6">Sábado</h4>
        <p class="ms-2">14h - 1h</p>
      </li>
      <li class="${day === 1 ? 'colored-text' : ''}">
        <h4 class="fs-6">Domingo</h4>
        <p class="ms-2">14h - 20h</p>
      </li>
    </ul>
  `