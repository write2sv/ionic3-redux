import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../app/app.reducer';
import * as HomeActions from './store/home.actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  public items$ = this.store.select(fromRoot.getItems);
  public isLoading$ = this.store.select(fromRoot.isLoadingItems);

  constructor(public store: Store<fromRoot.State>) {
  }

  ionViewWillEnter() {
    this.store.dispatch(new HomeActions.GetItemsAction());
  }
  
}