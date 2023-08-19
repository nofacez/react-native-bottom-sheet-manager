import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

const BottomSheet = () => {
  const modalizeRef = useRef<Modalize>(null);

  return (
    <Modalize ref={modalizeRef}>
      <View>
        <Text>Test</Text>
      </View>
    </Modalize>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
