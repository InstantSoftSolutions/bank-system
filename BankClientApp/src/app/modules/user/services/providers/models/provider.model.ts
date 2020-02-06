import { ProviderServiceTypes } from 'src/app/utilities/enums/provider-service-types.enum';

export class ProviderModel {
  name: string;
  typeOfService: ProviderServiceTypes;
  chargePrice: number;
  monthlySubscription: boolean;
}
