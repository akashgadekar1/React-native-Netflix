import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import {ColorTypes, fontTypes, height, width} from '../../config/Config';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Login() {
  const [number, setNumber] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (number && number.length >= 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [number]);
  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    // <ScrollView>
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'black'}}>
      <FastImage
        source={{
          uri: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80',
        }}
        resizeMode="cover"
        style={{
          height: '100%',
        }}>
        <LinearGradient
          colors={['transparent', ColorTypes.black]}
          style={{
            height: 200,
            width: '100%',
            bottom: 0,
            position: 'absolute',
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
          }}>
          <View style={styles.Container}>
            <View style={styles.MainContainer}>
              <View
                style={{
                  width: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="mobile1" size={25} color="white" />
              </View>
              <Text
                style={{
                  color: 'white',
                  marginTop: 11,
                  fontSize: 20,
                  marginLeft: 4,
                }}>
                91+
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                maxLength={10}
                // placeholder="Number > 0"
                style={styles.Textinput}
                value={number}
                onChangeText={text => setNumber(text)}
                placeholderTextColor={'gray'}
              />
            </View>

            <View
              style={{
                width: '95%',
                borderColor: 'white',
                borderRadius: 10,
                padding: 1,
                opacity: disabled ? 0.5 : 1,
                backgroundColor: '#ED2B2A',
                marginBottom: 20,
              }}>
              <Pressable onPress={handleNavigate}>
                <View
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 18,
                      fontFamily: fontTypes.medium,
                    }}>
                    Login
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </FastImage>
    </KeyboardAvoidingView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  MainContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '95%',
    borderColor: 'white',
    borderRadius: 10,
    // padding: 1,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  Textinput: {
    borderRadius: 10,
    width: '80%',
    color: 'white',
    marginLeft: 4,
    justifyContent: 'center',
    fontFamily: fontTypes.medium,
    alignItems: 'center',

    fontSize: 20,
  },
});
