import { IAction, IActionCreator, IActionCreators, IActionEpic, IActionTypes, IReducer, IReducers, ISelectors, IService } from "./IService";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/shareReplay";
export declare abstract class BaseService<S> implements IService<S> {
    abstract readonly name: string;
    protected static dispatch: (action: IAction) => void;
    protected static state$: any;
    protected internalReducers?: IReducers<S>;
    protected internalEpics?: IActionEpic[];
    protected internalActions?: IActionCreators;
    protected internalSelectors?: ISelectors;
    protected internalTypes: IActionTypes;
    abstract getDefaultState(): S;
    makeActionType(type: string): string;
    static registerDispatch(dispatch: any): void;
    static setStateObservable(state$: Observable<any>): void;
    static getStateObservable(): Observable<any>;
    makeActionCreator<T extends object = any, M = any>(type: string, defaultMeta?: any): IActionCreator;
    protected createTypes(): IActionTypes;
    protected createActions(): IActionCreators;
    protected createReducers(): IReducers<S>;
    protected createEpics(): IActionEpic[];
    protected createSelectors(): ISelectors;
    protected readonly reducers: IReducers<S>;
    readonly reducer: IReducer<S>;
    readonly types: IActionTypes;
    readonly actions: IActionCreators;
    readonly selectors: ISelectors;
    readonly epics: IActionEpic[];
}
