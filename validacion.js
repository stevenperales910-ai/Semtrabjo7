function validarCampo(valor) {
    if (valor === null || valor.trim() === "") {
        console.log("El campo está vacío");
        return false;
    }

    console.log("Validación correcta");
    return true;
}

module.exports = validarCampo;

