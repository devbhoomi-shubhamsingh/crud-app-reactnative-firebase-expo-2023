import { ScrollView } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import Toast from "react-native-toast-message";
import AddPost from "./src/components/main/AddPost";
import ViewPosts from "./src/components/main/ViewPosts";
// -----------------------------------------------------------------
export default function App() {
  return (
    <>
      <View>
        <ScrollView>
          <Text style={styles.header}>CRUD App 2023</Text>
          <ViewPosts />
          <AddPost />
        </ScrollView>
      </View>
      <Toast />
    </>
  );
}

// --------------------------------------------------------
const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    marginBottom: 30,
    textTransform: "uppercase",
  },
});
