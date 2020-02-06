export class BankAccount {
  iban: string;
  employerId: string; // Created by employer ...
  employerName: string; // Employer's names
  bankOffice: string; // Office of creation / requested card
  creatDate: Date; // Creation date
  expDate: Date; // Expiration date
  isCardBankAccount: boolean; // disabled checkbox - which shows the user if given bank account is related with debit/credit card or not.
}
