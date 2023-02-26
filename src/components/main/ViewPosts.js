import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Loader from "../common/Loader";
import { db } from "../../../firebase-config";
import { ref, onValue } from "firebase/database";
import { showSuccessToast } from "../../utils/showToast";
// ------------------------------------------------------------------

const ViewPosts = () => {
  const [postsList, setPostsList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  // This method is used to fetch posts list from firebase realtime database.
  const fetchPostsFromFirebaseRTD = () => {
    try {
      setShowLoader(true);
      const startCountRef = ref(db, "posts/");
      onValue(startCountRef, (snapshot) => {
        const data = snapshot.val();
        const newPost = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log("newPost::: ", newPost);

        showSuccessToast("Posts fetched successfully");
        setPostsList(newPost);
      });
    } catch (error) {
      console.log(
        "Getting error while fetching posts:: ",
        error?.message ? error?.message : error
      );
    } finally {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    fetchPostsFromFirebaseRTD();
  }, []);

  return (
    <View>
      {showLoader ? <Loader /> : null}

      <Text style={styles.postListHeading}>Posts List</Text>

      {postsList.length > 0 &&
        postsList.map((post, i) => {
          return (
            <View key={i}>
              <Text>{post?.title}</Text>
              <Text>{post?.body}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default ViewPosts;

// --------------------------------------------------------
const styles = StyleSheet.create({
  postListHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    marginBottom: 50,
  },
});
