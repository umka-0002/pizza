import Api  from "../api/Api"
import { SET_NEW_PIZZA, SET_PENDING, SET_PIZZA, SET_PIZZAS } from "./actionType"

export const ACsetPizzas = (data) => ({
    type: SET_PIZZAS,
    data: data
})

export const setPizzaAC = (data) => ({
    type: SET_PIZZA,
    payload: data
})

export const ACsetPending = () => ({
    type: SET_PENDING
})


export const ACsetNewPizza = (data) => ({
    type: SET_NEW_PIZZA,
    data: data
})
    

export const getPizzaAC = () => {
    return async (dispatch) => {
        const res = await Api.getPizzas()
        dispatch(ACsetPending())    // .finally(()=>{dispatch(ACsetPending())})
        if(res.status === 200){
            dispatch(ACsetPizzas(res.data));    // .then((response) => { dispatch(ACsetPizza(response.data));});
        }
    }
}
