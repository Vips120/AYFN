export interface IuserLogin {
    UserIdentity?:string;
    FirstName?:string;
    LastName?:string;
    MobileNo?:number;
    EmailId?:string;
    Error?:string;
    UserLogin?:{
        Username:string;
        Password:string;
    }
}