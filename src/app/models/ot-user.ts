import { Address } from "./address";
import { Meal } from "./meal";
import { Review } from "./review";
import { SaleTransaction } from "./sale-transaction"


export class OTUser {
    userId: number;
    email: string;
    password: string;
    contactNum: number;
    firstname: string;
    lastName: string;
    dob: Date;
    profilePic: string;
    salt: string;

    address: Address[];
    reviews: Review[];
    meals: Meal[];
    saleTransaction: SaleTransaction[];


    constructor(
        userId: number,
        email: string,
        password: string,
        contactNum: number,
        firstname: string,
        lastName: string,
        dob: Date,
        profilePic: string,
        salt: string,
        address: Address[],
        reviews: Review[],
        meals: Meal[],
        saleTransaction: SaleTransaction[]
    ) {
        this.userId = userId
        this.email = email
        this.password = password
        this.contactNum = contactNum
        this.firstname = firstname
        this.lastName = lastName
        this.dob = dob
        this.profilePic = profilePic
        this.salt = salt
        this.address = address
        this.reviews = reviews
        this.meals = meals
        this.saleTransaction = saleTransaction
    }


}
