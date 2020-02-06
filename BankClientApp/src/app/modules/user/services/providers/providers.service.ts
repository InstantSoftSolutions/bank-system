import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProviderModel } from './models/provider.model';
import { ProviderSubscription } from './models/provider-subscription.model';

const PROVIDER_URL = '/api/provider/';

@Injectable()
export class ProvidersService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<ProviderModel[]> {
    return this.httpClient.get<ProviderModel[]>('' + PROVIDER_URL + 'getAll')
  }

  getDetails(subscriptionId: number): Observable<ProviderSubscription> {
    return this.httpClient.get<ProviderSubscription>('' + PROVIDER_URL + 'subscription/' + subscriptionId);
  }

  addSubscription(model: ProviderSubscription): Observable<ProviderSubscription> {
    return this.httpClient.post<ProviderSubscription>('' + PROVIDER_URL + 'subscription/add', model);
  }

  /*
   Successfull message: Your subscription was successfully removed.
   Failure message: Something went wrong.
  */
  deleteSubscription(subscriptionId: number): Observable<string> {
    return this.httpClient.delete<string> ('' + PROVIDER_URL + 'subscription/' + subscriptionId);
  }
}
