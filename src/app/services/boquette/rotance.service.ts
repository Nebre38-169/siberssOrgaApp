import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { Header } from 'src/app/class/header/header';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { environment } from 'src/environments/environment';
import { BaseWithDependanceService } from '../base/base-with-dependance.service';
import { BaseService } from '../base/base.service';
import { BoquetteService } from './boquette.service';

@Injectable({
  providedIn: 'root'
})
export class RotanceService extends BaseWithDependanceService<Rotance> {
  baseUrl = environment.baseUrl.base+environment.baseUrl.rotance;
  constructor(
    protected http: HttpClient,
    protected router: Router,
    private boquette: BoquetteService
  ) {
    super(http,router);
    boquette.fetch();
   }

  public jsonToObjectConvert(info: any): Rotance {
    return new Rotance(
      parseInt(info.id,10),
      new Date(info.creationDate),
      new Date(info.updateDate),
      this.boquette.searchOn(parseInt(info.boquette,10)),
      info.lieu,
      info.info,
      new Date(info.date),
      info.commencer,
      info.fini
    );
  }
  public objectToJsonConvert(obj: Rotance) {
    console.log(this.getDateStr(obj.date));
    return {
      boquette : obj.boquette.getId(),
      lieu : obj.lieu,
      info : obj.info,
      date : this.getDateStr(obj.date),
      commencer : (obj.commencer) ? 'Y' : 'N',
      fini : (obj.fini) ? 'Y' : 'N'
    };
  }

  public getNextRotance(b: Boquette): Observable<Rotance | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/next/${b.getId()}`,
      { headers : Header.getHeader()}
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          if(value.result.length>0){
            return this.jsonToObjectConvert(value.result[0]);
          } else {
            return null;
          }
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
