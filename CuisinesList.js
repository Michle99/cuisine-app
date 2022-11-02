import { ScrollView, TextInput } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Cuisines from "./Cuisines"
import { connect } from "react-redux";
import { getCakesThunk, postCakesThunk} from "./reduxStore/thunks"

function CuisinesList(props) {
    // const [cusines, setCuisines] = useState([]);
    useEffect(()=> {
        /** 
        axios({
            method: "get",
            url: "https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response) => {
            console.log("response from cakes api", response.data);
            setCuisines(response.data.data);
        })
        */

        props.dispatch(getCakesThunk());
    }, [])

    /**
     *  Search Functionality
     */
    function searchFilterFunction(text){
        const searchedFilter = props.cakes.filter(item => {
            const itemData = item.name.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData) > -1;
        });
        // create a dispatch function in 
        props.dispatch(getCakesThunk());
    }

    return(
        <ScrollView>
            <TextInput 
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }} 
                placeholder="Search Here"
                onChangeText={text => searchFilterFunction(text)}    
            />
            {
                props.cakes.map((each, index) => {
                    return <Cuisines {...props} data={each} key={index} />
                })
            }
        </ScrollView>
    );

}

export default  connect(function(state, props){
    return {
        cakes: state["cakes"] || []
    }
})(CuisinesList);