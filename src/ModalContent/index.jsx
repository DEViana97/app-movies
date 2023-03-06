import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ModalContent({ voltar, filmes }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>{filmes.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{filmes.sinopse}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignContent: "center",
    justifyContent: "flex-end",
  },
  modalContainer: {
    height: "80%",
    backgroundColor: "#121212",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: "#e52246",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo: {
    textAlign: "center",
    color: "#fff",
    padding: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  sinopse: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  descricao: {
    color: "#fff",
    marginLeft: 10,
    marginRight: 10,
  },
});
