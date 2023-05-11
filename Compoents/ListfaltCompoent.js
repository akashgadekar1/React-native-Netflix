import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function ListfaltCompoent() {
  // const user = [
  //   {
  //     id: 1,
  //     name: 'anil gadekar I  Amm',
  //   },
  //   {
  //     id: 2,
  //     name: 'sanket',
  //   },
  //   {
  //     id: 3,
  //     name: 'Vaibahv Hii',
  //   },
  //   {
  //     id: 4,
  //     name: 'Kailas',
  //   },
  //   {
  //     id: 1,
  //     name: 'anil',
  //   },
  //   {
  //     id: 1,
  //     name: 'anil',
  //   },
  //   {
  //     id: 2,
  //     name: 'sanket',
  //   },
  //   {
  //     id: 3,
  //     name: 'Vaibahv',
  //   },
  //   {
  //     id: 4,
  //     name: 'Kailas',
  //   },
  //   {
  //     id: 1,
  //     name: 'anil',
  //   },
  //   {
  //     id: 2,
  //     name: 'sanket',
  //   },
  //   {
  //     id: 3,
  //     name: 'Vaibahv',
  //   },
  //   {
  //     id: 4,
  //     name: 'Kailas',
  //   },
  //   {
  //     id: 3,
  //     name: 'Vaibahv',
  //   },
  //   {
  //     id: 4,
  //     name: 'Kailas',
  //   },
  // ];
  const [data, setData] = useState();
  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getData();
  });
  return (
    <View>
      <Text style={{fontSize: 32}}>List Of flat List</Text>
      {data && data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                margin: 10,
              }}>
              <Text style={{fontSize: 30}}>{item.id}</Text>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <Text>{item.address.city}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}
// const Userdata = props => {
//   return (
//     <View>
//       <Text style={{fontSize: 30, fontStyle: 'italic', padding: 12}}>
//         <Text style={{marginRight: 21}}>{props.item.id}.</Text>
//         <Text style={{marginRight: 21}}>{props.item.name}</Text>
//       </Text>
//     </View>
//   );
// };
