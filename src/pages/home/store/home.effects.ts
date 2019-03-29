
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from './home.actions';
import {HomeService} from './../../../services/home.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Injectable()
export class HomeEffects {

    constructor(private homeService: HomeService, private actions$: Actions) {

    }

    @Effect()
    getItems$: Observable<Action> = this.actions$
    .ofType<HomeActions.GetItemsAction>(
      HomeActions.GET_ITEMS
    )
    .switchMap(action =>
      this.homeService
        .getItems()
        .delay(3000)
        .map(
          response =>
            new HomeActions.GetItemsSuccessAction(response)
        )
        .catch(error => Observable.from([new HomeActions.GetItemsFailAction()])
        )
    );

}