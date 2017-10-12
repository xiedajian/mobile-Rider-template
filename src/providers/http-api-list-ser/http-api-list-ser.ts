import { Injectable } from '@angular/core';
import { HttpserProvider } from '../httpser/httpser';


/*
  Generated class for the HttpApiListSerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * 接口Api列表     统一管理
 */
@Injectable()
export class HttpApiListSerProvider {

  constructor(public httpser: HttpserProvider) {
    console.log('Hello HttpApiListSerProvider Provider');
  }

}
