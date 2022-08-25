import { Colaborador } from './Colaborador';
export class User {
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public colaborador: Colaborador[]
}