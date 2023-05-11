import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function ApiCompoent() {
  const [data, setData] = useState();
  const getData = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/550/recommendations?api_key=2321281208f9b141fc735aa7047d4892&page=2';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    console.warn(result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      {data && data.length
        ? data.map((item, index) => (
            <View style={{fontSize: 20, padding: 20}}>
              <Text style={{fontSize: 20}}>id:{item.results.title}</Text>
              {/* <Text style={{fontSize: 20}}>name:{item.title}</Text>     */}
            </View>
          ))
        : null}
    </ScrollView>
  );
}
