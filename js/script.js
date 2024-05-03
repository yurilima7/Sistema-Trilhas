const inputNumber = document.getElementById('inputNumber');

inputNumber.addEventListener('input', function() {
    if (inputNumber.value < 0) {
        inputNumber.value = '';
    }
});

function validateForm() {
    let options = document.getElementsByName('option');
    let isOptionSelected = false;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            isOptionSelected = true;
            break;
        }
    }

    if (!isOptionSelected) {
        alert("Por favor, selecione uma opção!");
        return false;
    }

    return true;
}

function validateCod() {
    const inputs = document.querySelectorAll('.sectionFormStyleNumbers input');

    const filledInputs = Array.from(inputs).filter(input => input.value.length === 1);
    
    if (filledInputs.length !== 6) {
        alert('Por favor, preencha todos os 6 dígitos.');
        return false;
    }
    
    return true;
}

function moveToNextInput(input) {
    let maxLength = parseInt(input.getAttribute("maxlength"));
    let currentLength = input.value.length;

    limitToOneDigit(input);

    if (currentLength === maxLength) {
        let nextInput = input.nextElementSibling;

        if (nextInput && nextInput.type === "number") {
            nextInput.focus();
        }
    }
}

function limitToOneDigit(input) {
    if (parseInt(input.value) > 9) {
        input.value = input.value.slice(0, 1);
    }
}
