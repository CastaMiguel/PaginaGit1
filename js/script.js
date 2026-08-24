const modal = document.querySelector('#booking-modal');
const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');

openButtons.forEach((button) => {
  button.addEventListener('click', () => modal.showModal());
});

closeButton.addEventListener('click', () => modal.close());

modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

document.querySelector('#city-select').addEventListener('change', (event) => {
  const cityNames = { medellin: 'Medellín', envigado: 'Envigado', sabaneta: 'Sabaneta' };
  document.querySelectorAll('.station-card p').forEach((description) => {
    description.textContent = `${cityNames[event.target.value]} · disponibilidad en tiempo real`;
  });
});
