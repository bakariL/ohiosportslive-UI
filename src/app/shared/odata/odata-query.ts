

import { 
    State as KendoState, 
     } from '@progress/kendo-data-query';
import { SortDescriptor as KendoSortDescriptor} from '@progress/kendo-data-query/dist/npm/sort-descriptor';
import  cloneDeep  from 'lodash-es/cloneDeep'

import { from, observable, Observable } from 'rxjs';



export interface ODataStoreState<T>{
        odataState: FluxState<T>;
        isFiltersApplied: boolean;
}
export interface SortDescriptor<T> extends KendoSortDescriptor {
        field: Extract<keyof T, string>;
}

// export interface FilterDescriptor<T> extends KendoFilterDescriptor {
//     field?: Extract<keyof T, string>;
// }

// export interface FluxCompositeFilterDescriptor<T> extends KendoCompositeFilterDescriptor {
//     filters: ( FilterDescriptor<T> | FluxCompositeFilterDescriptor<T>)[];
// }

export interface FluxState<T> extends KendoState {
        select?: Extract<keyof T, string>[];
        sort: SortDescriptor<T>[];
        // filter: CompositeFilterDescriptor<T>;
}

// export interface ODataResponse<T> extends ODataSelectResponse<T> {
//         value: T[];
// }

export interface ODataSelectResponse<T>{
        '@odata.context': string;
        '@odata.count': number;
        value: Partial<T>;
}


/** 
 *  @param source
 * */
export const mapToOdataState = <T>(
                source: Observable<ODataStoreState<T>>,
                ) :Observable<ODataStoreState<T>> => 
        new Observable<ODataStoreState<T>>(observer => 
          source.subscribe({
                next: response =>
                observer.next({
                        ...response,
                        odataState: cloneDeep(response.odataState),
                }),
                error: err => observer.error(err),
                complete: () => observer.complete(),          
        }),
        );

