import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";

export const logActions: Middleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (actionInfo: AnyAction) => {
    console.log("disparando", actionInfo);
    next(actionInfo);
  };
