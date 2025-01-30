import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router/router";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/componants/pages/auth/Login";

const Stack = createNativeStackNavigator();
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [user, setUser] = useState(false);

  setTimeout(() => {
    setShowSplash(false);
  }, 3000);

  const onLogin = () => {
    setUser(true);
  };

  if (showSplash) {
    return (
      <View style={styles.container}>
        <View
          style={{ width: 200, height: 200, backgroundColor: "gray" }}
        ></View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Router" component={Router} />
        ) : (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={onLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
