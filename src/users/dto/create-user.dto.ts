import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export interface CreateUsersDto {
    uid: number,
    name: string,
    email: string,
    password: string,
    access: number,
    token: string,
    img: string,
    tag: string,
    gender: string,
    created: string,
    first_access: number,
    last_login: string,
    compliance_approved: number,
    address: string,
    rg: string,
    cpf: string,
    doc_front: string,
    doc_back: string,
    doc_rendimento: string
}
