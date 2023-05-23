import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";


export default function BuscaTransformersScreen(){
    const [busca, setBusca] = useState ('');
    const [resultado, setResultado] = useState([]);

    async function buscarTransformers(){
        const transformersRef = collection(db, 'Transformers');
        const transformers = query(transformersRef, where('NomeDoTransformer', '==', busca));
        const resultadoSnapshot = await getDocs(transformers);
        const listaTransformers = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaTransformers);
        setResultado(listaTransformers);
    }

    useEffect(
        () => {
            buscarTransformers();
        }
    )

    return(
        <View>
            <Text>Bem-vindo a busca dos Transformers</Text>
            <TextInput
                label={"Pesquise"}
                value={busca}
                onChangeText={setBusca}
            />
        </View>
    )
}