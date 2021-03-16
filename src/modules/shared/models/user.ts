export class User {
  public id: string | undefined;
  public username!: string;
  public password!: string;
  public role!: string;
}
export class UserLogin{
  public username!: string;
  public password!: string;
}