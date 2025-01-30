import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (validate()) {
      onLogin();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={"transparent"}
      />
      <View style={styles.formContainer}>
        <View style={styles.avatarPlaceholder} />

        <TextInput
          style={[
            styles.input,
            { marginBottom: 10 },
            errors.username && { borderColor: "red", borderWidth: 1 },
          ]}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            setErrors((prev) => ({ ...prev, username: "" }));
          }}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}

        <View
          style={[
            styles.passwordContainer,
            errors.password && { borderColor: "red", borderWidth: 1 },
          ]}
        >
          <TextInput
            style={[styles.input, { flex: 1, borderWidth: 0 }]}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/da57/1cfe/1b1a28e4a94545adc350243b4d406713?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2vcvZ7VR5EJCzs-348-Qhhj1lZS9rRMexuU5tHmfZnyJw8Tmoznrw7mHx1c86EgcPy3BHD6wKlXT~Mio1U22lUXHMoSK3q4N0RKra3Y9llY-NM9E4Yt~pXJrtjRSJsUuy1Tn6PoRglctUJxBa3Zbzti066~bo0aJpUPqswypwzGTh~C1xHi4wHUCcyP3jjLxLxR50ot1skDFPzRzUym73CwBz1mUgaL7GFRh9kBTXoI3-atq66QEpGlvG4cN1Ckavl1bYSGkqQKHg7ZHNr-wqZ2JFtKdCEST-ApfRwDElzJoFUU69HxK4w7wI2qW-S~7dOb7ONg57NSAJLun9~KzA__",
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F2",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  formContainer: {
    paddingTop: StatusBar.currentHeight + 30,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 60,
    backgroundColor: "#ccc",
    marginBottom: 80,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 50,
    padding: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#DDD",
    paddingHorizontal: 2,
  },
  button: {
    backgroundColor: "#FFA500",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 400,
  },
});
