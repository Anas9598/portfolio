import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl, ResponseOptions, STATUS } from 'angular-in-memory-web-api';

export interface IDocument {
    id: number;
    name: string;
    data: any;
    createDateTime: Date,
    updateDateTime: Date
}

export class InMemDocService implements InMemoryDbService {
  createDb() {

    const documentList: IDocument[] = [
        {
            id: 1001,
            name: 'Test Document',
            data: 'Test',
            createDateTime: new Date(),
            updateDateTime: new Date()
        }
    ];

    return {
      documentList,
    };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    let changeUrl = url.split('?')[0];
    switch (changeUrl) {
      case '/api/customer/schema/search':
        changeUrl = '/api/customerSearchSearch/search';
        break;
      case '/api/customer/search/lookupdata':
        changeUrl = '/api/customerSearchLookup/lookupdata';
        break;
      case '/api/customer/search/model':
        changeUrl = '/api/customerSearchModel/model';
        break;
      case '/api/typeahead/search':
        changeUrl = '/api/typeaheadmodel';
      case 'api/taxsolution/historysearch':
        changeUrl = '/api/historysearchResults';
        break;
      default:
        break;
    }
    const parsed = utils.parseRequestUrl(changeUrl);
    console.log(`parseRequestUrl override of '${url}':`, parsed);
    return parsed;
  }

  // HTTP POST interceptor
  post(requestInfo: RequestInfo) {
    const collectionName = requestInfo['collectionName'];
    if (collectionName === 'SearchResults' || collectionName === 'SelectBasket' || collectionName === 'historysearchResults') {
      // Intercept POST calls to the 'somedatatype' collection:
      // E.g. add some fields to our entity that would be set in the backend,
      // const data = requestInfo['utils'].getJsonBody(requestInfo['req']);
      const collection = requestInfo['collection'];

      // forge the response
      const options: ResponseOptions = {
        body: collection,
        status: STATUS.OK,
        headers: requestInfo['headers'],
        url: requestInfo['url']
      };

      // use createResponse$ to return proper response
      return requestInfo['utils'].createResponse$(() => options);
    }
    // let the default POST handle all other collections by returning undefined
    return undefined;
  }
}
