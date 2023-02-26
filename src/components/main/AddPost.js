import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { db } from "../../../firebase-config";
import { ref, set } from "firebase/database";
import Loader from "../common/Loader";
import { showSuccessToast } from "../../utils/showToast";
// -------------------------------------------------------------------------

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  // This method is used to add data in firebase realtime database.
  const addDataToFirebaseRTD = async () => {
    if (!title || !body) {
      Alert.alert("Validation Failed", "Title and Body is required");
      return;
    } else if ((title && title.length < 3) || (body && body.length < 3)) {
      Alert.alert(
        "Validation Failed",
        "Title and Body minimum length should be 3 characters"
      );
      return;
    }

    try {
      setShowLoader(true);
      await set(ref(db, "posts/" + title), {
        title: title,
        body: body,
      });

      showSuccessToast("Posts created successfully");

      setTitle("");
      setBody("");
    } catch (error) {
      console.log(
        "Getting error while adding a new post:: ",
        error?.message ? error?.message : error
      );
    } finally {
      setShowLoader(false);
    }
  };
  return (
    <View>
      {showLoader ? <Loader /> : null}

      <Text style={styles.addPostHeading}>Add New Post</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(val) => setTitle(val)}
        style={styles.input}
        autoFocus
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={(val) => setBody(val)}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button
          title="Add Data"
          color={"green"}
          onPress={addDataToFirebaseRTD}
        />
      </View>
    </View>
  );
};

export default AddPost;

// --------------------------------------------------------
const styles = StyleSheet.create({
  addPostHeading: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "brown",
    textDecorationLine: "underline",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
});
