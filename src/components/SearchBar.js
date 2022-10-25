import React from 'react';
import { View, TextInput,Text, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {

    return (
        <View style = {styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
            style={styles.inputStyle} 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search' 
            onEndEditing={onTermSubmit}
            onChangeText={onTermChange}
            value = {term}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop:10,
        backgroundColor: '#F0EEEE',
        borderRadius : 5,
        height : 50,
        marginHorizontal: 15,
        flexDirection : 'row',
        marginBottom:10
    },
    inputStyle : {
        flex : 1,
        fontSize:18
    },
    iconStyle : {

        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }

});

export default SearchBar;