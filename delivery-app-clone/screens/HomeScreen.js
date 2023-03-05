import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

    //change the header
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView>
      <Text className='text-red-500'>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen