export interface User {
	id: number;
	fname: string;
	lname: string;
	username: string;
	address1: string;
	address2: string;
	zipcode: string;
	city: string;
	phonenumber: string;
	email: string;
	password: string;
	company: string;
	cvr: string;
	website: string;
	senderEmail: string;
	notifyEmail: string;
	invoiceEmail: string;
	allowNotify: false;
	spamAmount: string;
	apiCode: string;
	verified: false;
	isAdmin: false;
	rememberMe: false;
	isLoggedIn: boolean;
	termsRead: boolean;
	agreed: boolean;
	termsId: number;
	dpaRead: boolean;
	agreedDpa: boolean;
	dpaId: number;
}