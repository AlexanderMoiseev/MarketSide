// import $ from "jquery"
// import { TRIGGER_LOADER, CHANGE_TAB, ACTIVE_POLL } from './actionList';

export function getCurrencyData(currency) {
    return (dispatch, getState) => {
        console.log('start getCurrencyData');
        const state = getState();
        console.log(state);

        fetch('https://api.cryptonator.com/api/full/xmr-usd')
            .then(response => response.json())
            .then(json => console.log(json))
            .then(json => {
                dispatch({
                    type: 'UPDATE_CURRENCIES',
                    payload: 'new valueee'
                });
            })

        console.log('end getCurrencyData');

    }
    //   return (dispatch, getState) => {
    //     dispatch({
    //       type: TRIGGER_LOADER,
    //       payload: true
    //     });
    //     const state =  getState();
    //     const importPath = state.get('routing').get('productsImportPath');
    //     const data = new FormData();
    //     data.append('file', csvFile);
    //     $.ajax({
    //       method: 'POST',
    //       url: importPath,
    //       enctype: 'multipart/form-data',
    //       data: data,
    //       processData: false,
    //       contentType: false,
    //       cache: false,
    //       success: (data) => {
    //         dispatch({
    //           type: TRIGGER_LOADER,
    //           payload: false
    //         });
    //        dispatch({
    //           type: CHANGE_TAB,
    //           payload: 1
    //         });

    //         dispatch({
    //           type: ACTIVE_POLL,
    //           payload: true
    //         });

    //         console.log(data);
    //       },
    //       error: (req) => {

    //         dispatch({
    //           type: TRIGGER_LOADER,
    //           payload: false
    //         });
    //         console.log(req);
    //       }
    //     });
    //   }
}
