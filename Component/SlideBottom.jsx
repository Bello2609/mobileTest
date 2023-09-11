import { useRef, useEffect } from "react";
import { Text, Animated, StyleSheet, View, Image, TouchableOpacity } from "react-native";



const SlideBottom = ({ isVisible, onClose, link })=>{
    const slideAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        if(isVisible){
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 300, 
                useNativeDriver: false,
            }).start();
        }else{
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300, 
                useNativeDriver: false,
            }).start();
        }
    }, [isVisible])
    return(
        <Animated.View style={[styles.container, {
            transform: [
                {
                    translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [300, 0],
                    })
                }
            ]
        }]}>
            <View style={styles.header}>
                <Text style={{ color: "#fff", fontSize: 22, fontWeight: 500, fontStyle: "normal" }}>Important Notice</Text>
                <TouchableOpacity onPress={onClose}>
                    <Image source={require("../assets/cancel.png")} />
                </TouchableOpacity>
                
                {/* <Text style={{ color: "#6F6F6F", fontSize: 22, fontWeight: 500, fontStyle: "normal" }}><Icon name="times-circle" /></Text> */}
            </View>
            <View style={{ paddingTop: 10}}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500, fontStyle: "normal" }}>
                    All interactions and transitions across the span of this flow are 
                    intentional, important and mandatory to follow. All
                    <Text style={{ color: "#4B92F7", fontSize: 16, fontWeight: 500, fontStyle: "normal", marginLeft: 5 }}>
                        Active CTA “buttons”
                    </Text>
                    should have a short zoom in effect when tapped on
                </Text>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500, fontStyle: "normal", paddingTop: 20 }}>Use the <Text style={{ color: "#4B92F7" }}>Preview</Text> feature on Figma to view the prototype</Text>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500, fontStyle: "normal", paddingTop: 20 }}>Best of Luck!</Text>
            </View>
            <View style={styles.understand}>
                <TouchableOpacity style={styles.botton1} onPress={link}>
                    <Text style={styles.text1}>I Understand</Text>
                </TouchableOpacity>
            </View>
            
        </Animated.View>
       
    );
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "#10120F",
        elevation: 50,
        width: "100%",
        height: "50%",
        padding: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    header: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    understand: {
        width: "100%",
        height: "45",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30
    },
    botton1: {
        height: 45,
        width: 300,
        backgroundColor: "#F6BE2C",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        
    },
    text1: {
        fontSize: 18,
        borderRadius: 100,
        color: "#fff",
        fontWeight: "bold"
    }
});
export default SlideBottom;