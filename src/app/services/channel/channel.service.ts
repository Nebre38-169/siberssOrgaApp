import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService extends BaseService<Channel>{
  baseUrl = environment.baseUrl.base+environment.baseUrl.channel;

  constructor(
    protected http: HttpClient,
    protected router: Router
  ) {
    super(http,router);
   }

  public jsonToObjectConvert(info: any): Channel {
    return new Channel(
      parseInt(info.id,10),
      new Date(info.creationDate),
      new Date(info.updateDate),
      info.nom,
      info.boquettes
    );
  }
  public objectToJsonConvert(obj: Channel) {
    return {
      nom : obj.nom,
      boquettes : obj.boquettes
    };
  }

  public getChannelOf(b: Boquette): Observable<Channel[] | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/of/${b.getId()}`
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          const r = [];
          for(const i of value.result){
            r.push(this.jsonToObjectConvert(i));
          }
          return r;
        } else {
          if(value.result.includes('internal error')){
            this.errorRedirect();
          } else {
            return new Error(value.result);
          }
        }
      })
    );
  }
}
