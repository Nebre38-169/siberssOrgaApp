import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { environment } from 'src/environments/environment';
import { BaseWithDependanceService } from '../base/base-with-dependance.service';
import { BaseService } from '../base/base.service';
import { BoquetteService } from '../boquette/boquette.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseWithDependanceService<Posts>{
  baseUrl = environment.baseUrl.base + environment.baseUrl.posts;
  constructor(protected http: HttpClient,
    private boquette: BoquetteService) {
      super(http);
      boquette.fetch();
    }

  public jsonToObjectConvert(info: any): Posts {
    return new Posts(
      parseInt(info.id,10),
      new Date(info.creationDate),
      new Date(info.updateDate),
      info.titre,
      info.message,
      this.boquette.searchOn(parseInt(info.auteur,10)),
      parseInt(info.channel,10)
    );
  }
  public objectToJsonConvert(obj: Posts) {
    return {
      titre : obj.titre,
      message : obj.message,
      auteur : obj.auteur.getId(),
      channel: obj.channel
    };
  }

  public getLastPosts(c: Channel): Observable<Posts | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/last/${c.getId()}`
    ).pipe(
      map(value =>{
        console.log(value);
        if(value.status==='success'){
          if(value.result.length>0){
            return this.jsonToObjectConvert(value.result[0]);
          } else {
            return null;
          }
        }else{
          return new Error(value.result);
        }
      })
    );
  }

}
