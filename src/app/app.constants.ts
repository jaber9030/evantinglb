import { HttpHeaders } from '@angular/common/http';
export class AppConstants {
    public static get baseURL(): string { return 'http://www.eventinglb.tv/wp-json/wp/v2/'};
    public static get headers(): HttpHeaders {
      return  new HttpHeaders({
            'Content-Type':  'application/json',
          });
    };

}
