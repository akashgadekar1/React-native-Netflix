// import React, {useState, useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';

// import {View, Text, StatusBar, TextBase, Image, Pressable} from 'react-native';
// import OTPTextInput from 'react-native-otp-textinput';
// import {ColorTypes, fontTypes} from '../../config/Config';

// export default function OTPScreen() {
//   const [seconds, setSeconds] = useState(59);
//   const [minutes, setMinutes] = useState(2);

//   const navigation = useNavigation();

//   const handleNavigate = () => {
//     navigation.navigate('Home');
//   };

//   let timer: number = 0;
//   useEffect(() => {
//     timer = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//         setMinutes(2);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   });

//   return (
//     <>
//       <StatusBar backgroundColor="black" />
//       <View style={{flex: 1, backgroundColor: ColorTypes.black}}>
//         <Image
//           source={require('')}
//           resizeMode="contain"
//           style={{
//             height: 300,
//             width: '100%',
//             marginRight: 10,
//             borderRadius: 6,
//           }}></Image>
//         <View style={{marginLeft: 12, marginRight: 12, marginTop: 22}}>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 24,
//               fontFamily: fontTypes.medium,
//               marginBottom: 8,
//             }}>
//             OTP Authentication
//           </Text>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 18,
//               fontFamily: fontTypes.medium,
//               marginBottom: 8,
//             }}>
//             An authentication code has been send to your email
//           </Text>
//         </View>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <OTPTextInput
//             inputCount={6}
//             textInputStyle={{
//               height: 50,
//               width: 50,
//               backgroundColor: '#2C3333',
//               color: ColorTypes.white,
//               fontFamily: fontTypes.medium,
//               borderRadius: 70,
//               marginTop: 16,
//             }}
//             tintColor={'red'}
//             offTintColor={ColorTypes.black}
//           />
//           <Text
//             style={{
//               color: 'skyblue',
//               marginTop: 3,
//               fontFamily: fontTypes.medium,
//               marginLeft: 5,
//             }}>
//             Resend Authorization Code in
//             {seconds > 0 ? (
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   color: 'red',
//                   marginLeft: 5,
//                 }}>
//                 {'  '}
//                 {minutes}:{seconds} {' seconds'}
//               </Text>
//             ) : (
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   color: 'blue',
//                 }}>
//                 Resend
//               </Text>
//             )}
//           </Text>
//         </View>

//         <View
//           style={{
//             width: '100%',
//             borderColor: 'white',
//             borderRadius: 10,
//             position: 'absolute',
//             bottom: 0,
//             padding: 1,
//             opacity: 2,
//             backgroundColor: '# ',
//             marginBottom: 20,
//           }}>
//           <Pressable onPress={handleNavigate}>
//             <View
//               style={{
//                 height: 50,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{
//                   color: 'white',
//                   textAlign: 'center',
//                   fontSize: 18,
//                   fontFamily: fontTypes.medium,
//                 }}>
//                 Verify
//               </Text>
//             </View>
//           </Pressable>
//         </View>
//       </View>
//     </>
//   );
// }

import {View, Text} from 'react-native';
import React from 'react';

export default function OTPScreen() {
  return (
    <View>
      <Text>OTPScreen</Text>
    </View>
  );
}
