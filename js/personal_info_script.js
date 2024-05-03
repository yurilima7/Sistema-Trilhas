function formatarCPF(cpf) {
    return cpf.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatarTelefone(telefone) {
    return telefone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cpfInput').addEventListener('input', function() {
        this.value = formatarCPF(this.value);
    });
    
    document.getElementById('telefoneInput').addEventListener('input', function() {
        this.value = formatarTelefone(this.value);
    });
});
