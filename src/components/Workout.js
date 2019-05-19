import React from 'react'


import {
    View,
    Text,
} from 'react-native'

class Workout extends React.Component{
    render(){
        return (
            <View>
                <Text>
                    Hello {this.props.text}
                </Text>
            </View>
        )
    }
}


export default Workout;