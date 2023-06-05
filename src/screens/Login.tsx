import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import {ColorTypes, fontTypes, height, width} from '../../config/Config';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Login() {
  const [number, setNumber] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [LoginColor, setLoginColor] = useState('red');

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
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'black'}}>
        <FastImage
          source={{
            uri: 'https://t3.ftcdn.net/jpg/03/59/67/36/360_F_359673639_k9QEuA0DxPPUyvEDJccVA9vFMwDpo3JO.jpg',
          }}
          resizeMode="cover"
          style={{
            height: '98%',
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
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -200,
                  width: '90%',
                  marginBottom: 30,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 40,
                    marginHorizontal: 20,
                    fontFamily: fontTypes.medium,

                    alignItems: 'center',
                  }}>
                  Unlimited entertainment, one low price.
                </Text>
                <Text
                  style={{
                    color: '#808080',
                    fontSize: 17,
                    marginTop: 7,
                    fontFamily: fontTypes.medium,
                    alignItems: 'center',
                  }}>
                  All of Netflix,starting at just $149.
                </Text>
              </View>
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
                  backgroundColor: disabled ? LoginColor : 'green',

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
    </>
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
    // marginTop: 20,
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
