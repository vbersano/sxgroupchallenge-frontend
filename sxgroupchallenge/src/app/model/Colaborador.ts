import { Empresa } from './Empresa';
import { User } from './User';
export class Colaborador {
    public id: number
    public cpf: string
    public nome: string
    public email: string
	public foto: string
	public telefone: string
	public endereco: string
    public usuario: User
    public empresa: Empresa
}