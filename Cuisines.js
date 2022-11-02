import { View, Text, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    image: {
        width: '70%',
        height: 250,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }
});


export default function Cuisines(props) {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.data.image}} />
            <Text >{props.data.name}{"\n"}</Text>
            <Text >{props.data.price}{"\n"}</Text>
        </View>
    );
}