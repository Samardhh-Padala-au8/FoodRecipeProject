import axios from "axios"
import {APP_ID,APP_KEY} from "../config"
import {SET_ITEMS,SET_ISLOADING}from "./actionname"
export const setitems = (name="veg") => async (dispatch) => {
    try {

        dispatch({ type: SET_ITEMS, payload: null })
        dispatch({ type: SET_ISLOADING })
        const { data } = await axios(`https://api.edamam.com/search?q=${name}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=24`)
        console.log(data)
         dispatch({ type: SET_ITEMS, payload: data.hits})
    }
    catch (err) {
        console.error(err)
    }
    finally {
        dispatch({ type: SET_ISLOADING})
    }
}