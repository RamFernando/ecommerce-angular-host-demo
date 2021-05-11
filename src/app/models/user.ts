
export class User {
    constructor(
        fname: string,
        lname: string,
        email: string,
        password: string,
        imageUrl:string
    ) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.imageUrl = imageUrl;
    }

    fname: string;
    lname: string;
    email: string;
    telephone: number;
    password: string;
    imageUrl:string
}