export class ValidationService {

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Campo obrigatório',
            'invalidEmailAddress': 'Email inválido',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    static emailValidator(email) {
        if (email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return true;
        } else {
            return false;
        }
    }

    static passwordValidator(senha) {
        // {6,10}           - Assert password is between 6 and 10 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (senha.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
            return true;
        } else {
            return false;
        }
    }

    static cpfValidator(stg) {
        var cpf = stg;
        for (let index = 0; index < stg.length; index++) {
            cpf = cpf.replace(".", "");
            cpf = cpf.replace("-", "");
            cpf = cpf.replace(",", "");
        }
        console.log(cpf)

        if (!cpf || cpf.length != 11
            || cpf == "00000000000"
            || cpf == "11111111111"
            || cpf == "22222222222"
            || cpf == "33333333333"
            || cpf == "44444444444"
            || cpf == "55555555555"
            || cpf == "66666666666"
            || cpf == "77777777777"
            || cpf == "88888888888"
            || cpf == "99999999999")
            return false
        var soma = 0
        var resto
        for (var i = 1; i <= 9; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(cpf.substring(9, 10))) return false
        soma = 0
        for (var i = 1; i <= 10; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(cpf.substring(10, 11))) return false
        return true
    }
}