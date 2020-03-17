import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.view}>
      <Text>PROFILE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
