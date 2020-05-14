export class Login{
 
  userEmail: string; 
  userId: number;
  userName: string;
 userPassword:string;
 confirmPassword:string

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}