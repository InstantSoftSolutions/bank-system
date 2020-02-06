export class RegisterModel {
  email: string; // input:text, required
  firstName: string; // input:text, required
  middleName: string; // input:text, required
  lastName: string; // input:text, required
  city: string; // input:text, required
  dateofBirth: Date; // datepicker, optional
  isAdult: boolean; // checkbox, required
  isBankClient: boolean; // checkbox, required If true - show additional field for IBAN.
  iban: string; // input:text disabled by default, optional
  agreeTerms: boolean; // checkbox, required
}
