import { BankAccount } from 'src/app/modules/user/services/bank-account/models/bank-account.model';
import { ProviderSubscription } from 'src/app/modules/user/services/providers/models/provider-subscription.model';

export class ProfileModel {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  allowedNotifications: boolean; // checkbox which should be used to allow site notifications for promotions, new providers etc.
  bankAccounts: BankAccount[];
  subscriptions: ProviderSubscription[];
  // lastTransactions: AccountTransaction[]; // last 5 transactions
}
