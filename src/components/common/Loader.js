import React from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <>
      <Text style={styles.loaderText}>Please wait...</Text>
      <ActivityIndicator size={35} />
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
