//logic for our custom contact form

const businessAccount = document.querySelector('#businessAccount');
const companyInfo = document.querySelector('#companyInfo');

businessAccount.addEventListener('change', (event) => {
    businessAccount.checked ? companyInfo.classList.remove('hidden') : companyInfo.classList.add('hidden');
});

const contactReason = document.querySelector('#contactReason');
const productNameField = document.querySelector('#productNameField');
const orderNumberField = document.querySelector('#orderNumberField');

contactReason.addEventListener('change', (event) => {
    orderNumberField.classList.add('hidden');
    productNameField.classList.add('hidden');

    if (contactReason.value === 'product') {
        productNameField.classList.remove('hidden');
    } else if (contactReason.value === 'order') {
        orderNumberField.classList.remove('hidden');
    }
});