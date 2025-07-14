
export interface Inscription{

  nom: string,
  prenom: string,
  email: string,
  password: string,
  adresse: string,
  roles?:string[],
  droits?: string[]
}
