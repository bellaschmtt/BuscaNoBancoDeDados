import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";


export default function BuscaFrutaScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarFruta() {
        const frutaRef = collection(db, 'BuscaFruta');
        const BuscaFruta = query(frutaRef, where('NomeDaFruta', '==', busca));
        const resultadoSnapshot = await getDocs(BuscaFruta);
        const listaFruta = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaFruta);
        setResultado(listaFruta);


    }
    useEffect(
        () => {
            buscarFruta();
        }, [busca]

    )

    return (
        <View>
            <Text>Bem-vindo a busca das Frutas</Text>
            <TextInput
                label={"Pesquise"}
                value={busca}
                onChangeText={setBusca}
            />
        </View>
    );
}