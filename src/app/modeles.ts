
export interface Inscription{

  nom: string,
  prenom: string,
  email: string,
  password: string,
  adresse: string,
  roles?:string[],
  droits?: string[]
}



export interface ConnexionRequest{

  email: string,
  password: string,
}

// reponse avec les champs de retour de l'utilisateur lors de la connexion reussite !
export interface LoginUser{
  email: string,
  token: string,
  prenom:string,
  nom: string,
  roles:string[],
  droits:string[],
  dateExpiration: Date,
  notBefore: Date
}
