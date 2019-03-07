import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class Profile extends Component {
    render() {
        const styles = StyleSheet.create({
            title: {
                textAlign: 'center',
                fontSize: 30,
                marginBottom: 15
            }
        })

        const { navigate } = this.props.navigation;


        return (
            <View>
                <Text style={styles.title}>Bill Sheng Love Mujtaba Big Profile</Text>
                <Button title="Sign Out" onPress={() => navigate('Welcome')}></Button>
            </View>
        )
    }
}