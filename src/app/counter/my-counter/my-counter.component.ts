import { Component} from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement,reset } from './my-counter.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})

// inject the store connect the count$ strem to store's count state,
// and implementing the increment, decrement, reset methods  by dispatching actions to the store

export class MyCounterComponent{
  
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  public onIncrement() {
    this.store.dispatch(increment());
  }

  public onDecrement() {
    this.store.dispatch(decrement());
  }

  public onReset() {
    this.store.dispatch(reset());
  }
}
