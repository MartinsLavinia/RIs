export default class Descritor {

    descrever(empresa) {

        let descricao = ""

        descricao += "Razão Social: " + empresa.razaoSocial + "\n"
        descricao += "Nome Fantasia: " + empresa.nomeFantasia + "\n"
        descricao += "CNPJ: " + empresa.cnpj + "\n"

        descricao += "Endereço:" + "\n"
        descricao += "Rua: " + empresa.endereco.rua
        descricao += " Bairro: " + empresa.endereco.bairro
        descricao += " Cidade: " + empresa.endereco.cidade
        descricao += " Número: " + empresa.endereco.numero + "\n"

        descricao += "\nFuncionários:\n"

        for (let funcionario of empresa.funcionarios) {

            descricao += "Nome: " + funcionario.nome + "\n"
            descricao += "Matrícula: " + funcionario.matricula + "\n"
            descricao += "CPF: " + funcionario.cpf + "\n"

            descricao += "Endereço:" + "\n"
            descricao += "Rua: " + empresa.endereco.rua
            descricao += " Bairro: " + empresa.endereco.bairro
            descricao += " Cidade: " + empresa.endereco.cidade
            descricao += " Número: " + empresa.endereco.numero + "\n"

            descricao += "Telefone: ("
            descricao += funcionario.telefone.ddd + ") "
            descricao += funcionario.telefone.numero + "\n"

            descricao += "\n"
        }

        return descricao
    }
}