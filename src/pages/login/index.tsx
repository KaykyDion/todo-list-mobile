import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./styles";
import logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return Alert.alert("Atenção", "informe os campos obrigatórios");
      }

      setTimeout(() => {
        if (email == "kayky@email.com" && password === "12345678") {
          Alert.alert("Logado com sucesso");
        } else {
          Alert.alert("Usuário não encontrado");
        }
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image style={style.logo} source={logo} />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={(ev) => setEmail(ev)}
          />
          <MaterialIcons name="email" size={20} color={themes.colors.gray} />
        </View>

        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themes.colors.gray}
          />
        </View>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={() => getLogin()}>
          {loading ? (
            <ActivityIndicator color={"#fff"} size="small" />
          ) : (
            <Text style={style.textButton}>Entar</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Não tem conta?{" "}
        <Text style={{ color: themes.colors.primary }}>Crie agora!</Text>
      </Text>
    </View>
  );
}
