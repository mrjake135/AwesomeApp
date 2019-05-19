import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux'

class Home extends React.Component{
    state = {
        inputText: '',
    }
    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Enter Your Name :
                </Text>
                <TextInput 
                    style = {styles.nameInput}
                    placeholder = 'Big Money'
                    onChangeText = {(text) => {
                        this.setState({
                            inputText: text,
                        });
                    }}
                    value = {this.state.name}
                />
                <TouchableOpacity onPress = {() =>
                {
                    Actions.workout({
                        text: this.state.inputText,
                    });
                }}>
                    <Text style = {styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin:20,
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
    },
    container: 
    {
        backgroundColor: 'rgba(0, 191, 255, 0.3)',
        flex: 0.8,
    },
});
export default Home;