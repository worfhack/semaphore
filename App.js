// App.js
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';
export default class App extends Component {
    // initial state
    state = {
        isVisible: false
    };
    // hide show modal
    displayModal(show){
        this.setState({isVisible: show})
    }
    render() {
        return (
            <View style = { styles.container }>
                <Modal
                    animationType = {"slide"}
                    transparent={false}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.');
                    }}>

                    <View style={styles.container}>
                        <View style={styles.group}>
                            <Image
                                source={require("./assets/a.png")}
                                resizeMode="contain"
                                style={styles.image}
                            ></Image>
                            <Image
                                source={require("./assets/a.png")}
                                resizeMode="contain"
                                style={styles.image1}
                            ></Image>
                            <Image
                                source={require("./assets/a.png")}
                                resizeMode="contain"
                                style={styles.image2}
                            ></Image>
                        </View>
                        <View style={styles.group1}>
                            <Image
                                source={require("./assets/a.png")}
                                resizeMode="contain"
                                style={styles.image3}
                            ></Image>
                            <Image
                                source={require("./assets/b.png")}
                                resizeMode="contain"
                                style={styles.image4}
                            ></Image>
                            <Image
                                source={require("./assets/c.png")}
                                resizeMode="contain"
                                style={styles.image5}
                            ></Image>
                        </View>
                        <View style={styles.group2}>
                            <Image
                                source={require("./assets/d.png")}
                                resizeMode="contain"
                                style={styles.image6}
                            ></Image>
                            <Image
                                source={require("./assets/a.png")}
                                resizeMode="contain"
                                style={styles.image7}
                            ></Image>
                            <Image
                                source={require("./assets/a.png")}
                                resizeMode="contain"
                                style={styles.image8}
                            ></Image>
                        </View>
                    </View>



                </Modal>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.displayModal(true);
                    }}>
                    <Text style={styles.buttonText}>Show Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    group: {
        width: 351,
        height: 112,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 57,
        alignSelf: "center"
    },
    image: {
        width: 112,
        height: 106
    },
    image1: {
        width: 112,
        height: 106
    },
    image2: {
        width: 112,
        height: 106
    },
    group1: {
        width: 351,
        height: 112,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 31,
        alignSelf: "center"
    },
    image3: {
        width: 112,
        height: 106
    },
    image4: {
        width: 112,
        height: 106
    },
    image5: {
        width: 112,
        height: 106
    },
    group2: {
        width: 351,
        height: 112,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 38,
        alignSelf: "center"
    },
    image6: {
        width: 112,
        height: 106
    },
    image7: {
        width: 112,
        height: 106
    },
    image8: {
        width: 112,
        height: 106
    }
});
