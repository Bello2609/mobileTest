import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity  } from "react-native"


const Referral = ()=>{
    return(
        <View style={styles.container}>
          <Image source={require("../assets/ReferralBatches.png")} style={{ width: 100, width: 40 }} />
          <Text style={{ color: "#fff", fontFamily: "sans-serif", fontSize: 24, fontWeight: 500, paddingTop: 20, paddingBottom: 20 }}>Enter referrel code </Text>
          <Text style={{ color: "#A2A3A3", fontFamily: "sans-serif", fontSize: 16, fontWeight: 500 }}>“Skip” if you don't have any code</Text>
          <TextInput style={styles.input} placeholder="CODE" placeholderTextColor="#454647" color="#a2a3a3" />
          <Text style={{ color: "#A2A3A3", fontFamily: "sans-serif", fontSize: 16, fontWeight: 500 }}>TAP to find how they find their code?</Text>
          <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.botton1}>
                    <Text style={styles.text1}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botton2}>
                    <Text style={styles.text2}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: "#000"
        
    },
    input: {
        width: "100%",
        height: 50,
        fontSize: 20,
        marginTop: 40,
        marginBottom: 20
    },
    buttonGroup: {
        flex: 0.5,
        flexDirection: "row", 
        alignContent: "center",
        justifyContent: "space-between",
        marginBottom: 100,
        height: "auto",
        width: "auto",
        marginTop: 100
    },
    botton1: {
        borderRadius: 50,
        height: 45,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1F2021"
        
    },
    text1: {
            color: "#fff",
            fontSize: 17,
            fontStyle: "normal"

    },
    botton2: {
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width: 100,
        backgroundColor: "#6771ff"
        
    },
    text2: {
        color: "#fff",
        fontSize: 17,
        fontStyle: "normal"
},
})
export default Referral;