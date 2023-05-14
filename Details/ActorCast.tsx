import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetCastDetails} from '../Redux/CastCredit/action';
import {PortraitImageBaseURL, fontTypes} from '../config/Config';
import CastCategory from '../src/ReusableCompoents/CastCategory';
// import CastCategory from '../src/CardCompoent/CastCategory';

export type ActorCastTypes = {
  id: string;
};

const ActorCast: React.FC<ActorCastTypes> = ({id}) => {
  const dispatch = useDispatch();

  const Castdetails = useSelector(state => state.cast.respdata);

  useEffect(() => {
    dispatch(GetCastDetails(id));
  }, []);

  return (
    <View>
      <View
        style={{
          height: 25,
          borderRadius: 10,
          width: 70,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          marginLeft: 12,
          marginTop: 5,
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily: fontTypes.medium,
          }}>
          Cast
        </Text>
        {/* </LinearGradient> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 12,
          marginTop: 12,
        }}>
        {Castdetails &&
          Castdetails.length > 0 &&
          Castdetails.slice(0, 10).map((item, index) => {
            return (
              <CastCategory
                key={index}
                actorName={item.original_name}
                url={PortraitImageBaseURL + item.profile_path}
              />
            );
          })}
      </View>
    </View>
  );
};

export default ActorCast;
