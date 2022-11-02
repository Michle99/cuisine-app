import axios from "axios";

export function getCakesThunk(){
    return function(dispatch){
        axios({
            method: "get",
            url: "https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response) => {
            console.log("cakes response ", response.data);
            dispatch({
                type: "GET_CAKES",
                payload:response.data.data
            })
        })
    }
}


export function postCakesThunk(){
    return function(dispatch){
        axios({
            method: "post",
            url: "https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response) => {
            console.log("cakes response ", response.data);
            dispatch({
                type: "POST_CAKES",
                payload:response.data.data
            })
        })
    }
}
