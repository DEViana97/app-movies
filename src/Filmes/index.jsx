import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ModalContent from "../ModalContent";

export default function Filmes({ data }) {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image style={styles.capa} source={{ uri: data.foto }} />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setModal(true)}>
            <Text style={styles.botaoTexto}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={modal}>
        <ModalContent filmes={data} voltar={() => setModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  areaBotao: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: "#09a6ff",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: "#fff",
    textAlign: "center",
  },
});
