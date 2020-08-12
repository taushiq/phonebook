export class Contact {
    id:number;
    firstname: string;
    lastname: string;
    gender: string = 'Male';
    email: string;
    phone: string;
    dob?: string;  //? defines the fields to be optional
    picture?: string;
    city?: string;
    state?: string;
    country?: string;
}
