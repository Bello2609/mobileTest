import { useState } from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text} from "react-native";
import SlideBottom from "../Component/SlideBottom";
const Welcome = ({navigation})=>{
    const [ visible, setVisible ] = useState(false);

    const toggleVisibility = ()=>{
        setVisible(!visible);
        console.log(visible);
    }
    return (
        <>
            <View style={styles.conatainer}>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.botton1} onPress={()=> navigation.navigate("Referral")}>
                        <Text style={styles.text1}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton2} onPress={()=> setVisible(!visible)}>
                        <Text style={styles.text2}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                visible && (<SlideBottom isVisible={visible} onClose={toggleVisibility} link={()=> navigation.navigate("Referral")} />)
            }
        </>
    )
}
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        backgroundColor: "#000"
    },
    buttonGroup: {
        // flex: 0.5,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 100,
        height: "auto",
        width: "auto",
    },
    botton1: {
        borderRadius: 50,
        borderColor: "#fff",
        borderStyle: "solid",
        borderWidth: 2,
        height: 45,
        width: 245,
        alignItems: "center",
        justifyContent: "center",
        
    },
    text1: {
            color: "#fff",
            fontSize: 17,
            fontStyle: "normal"

    },
    botton2: {
        backgroundColor: "#fff",
        borderRadius: 50,
        borderColor: "#fff",
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width: 245,
        marginTop: 20
    },
    text2: {
        color: "#000",
        fontSize: 17,
        fontStyle: "normal"
},
})
export default Welcome;