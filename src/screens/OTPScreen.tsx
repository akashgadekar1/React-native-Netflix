import React from 'react';

import {View, Text} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {ColorTypes, fontTypes, height} from '../../config/Config';
export default function OTPScreen() {
  return (
    <View style={{flex: 1, backgroundColor: ColorTypes.black}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <OTPTextInput
          textInputStyle={{
            height: 50,
            width: 50,
            backgroundColor: '#2C3333',
            color: ColorTypes.white,
            fontFamily: fontTypes.medium,
            borderRadius: 70,
          }}
          tintColor={'red'}
          offTintColor={ColorTypes.black}
        />
      </View>
    </View>
  );
}
