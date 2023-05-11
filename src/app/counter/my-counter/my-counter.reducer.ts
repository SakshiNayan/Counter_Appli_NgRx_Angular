// defining te reducer function to handle changes in the counter value based on the provided action

import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./my-counter.action";
//import { state } from "@angular/animations";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement , (state) => state - 1),
    on(reset, (state) => 0)
);