export class UserRegx {
    static Username(control){
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {username:true}
    };
    static Password(control){
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {password:true}
    };
    static Email(control){
        let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {email:true}
    }
}