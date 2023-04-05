import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const ScrollArea = ({ children, ...props }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  view: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
});

export default ScrollArea;
