const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');

passwordInput.addEventListener('input');
confirmPasswordInput.addEventListener('input');

function verifyInputs() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password.length < 8 || confirmPassword.length < 8) {
        alert('Senha e confimação de senha devem ter pelo menos 8 caracteres!');
        return false;
    } else if (password != confirmPassword) {
        alert('Confirmação de senha diferente de senha');
        return false;
    }

    return true;
}

