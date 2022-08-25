import { Colaborador } from './Colaborador';
export class Empresa {
    public id: number
    public cnpj: string
    public nome: string
    public email: string
	public foto: string
	public telefone: string
	public endereco: string
    public colaborador: Colaborador[]
}