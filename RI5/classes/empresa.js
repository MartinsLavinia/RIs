export default class Empresa {
    constructor(funcionarios, razaoSocial, nomeFantasia, cnpj, endereco, telefones) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.funcionarios = funcionarios
        this.telefones = telefones
    }
}