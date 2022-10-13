import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export type IAnimationDemoScreenProps = {};

export default function AnimationDemoScreen() {
  const navigation: any = useNavigation();

  // const [startTime, setStartTime] = useState(0);
  // const [endTime, setEndTime] = useState(0);
  const [showOrHideList, setShowOrHideList] = useState(false);

  const calculateApiResponseTime = () => {
    // const time = new Date().getTime();
    // setStartTime(time);
    setShowOrHideList(!showOrHideList);
    navigation.navigate('animation');
  };

  return (
    <View style={styles.container}>
      {/* <Text>{`The time taken: ${
          endTime - startTime > 0 ? endTime - startTime : 0
        } ms`}</Text> */}
      <View style={styles.buttonContainer}>
        <Button
          onPress={calculateApiResponseTime}
          title="Load Animation"
          color="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 8,
  },
  buttonContainer: {backgroundColor: '#2596be', borderRadius: 4},
  imageListContainer: {flexDirection: 'row'},
  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  imageContainer: {flexDirection: 'row', margin: 4},
});
