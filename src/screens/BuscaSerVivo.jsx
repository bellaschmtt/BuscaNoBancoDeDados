import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";



export default function BuscaSerVivoScreen(){

    const [busca, setBusca] = useState ('');
    const [resultado, setResultado] = useState([]);

    async function buscarSerVivo(){
        const serVivoRef = collection(db, 'BuscaSerVivo');
        const BuscaSerVivo = query(serVivoRef, where('NomeDoSerVivo', '==', busca));
        const resultadoSnapshot = await getDocs(BuscaSerVivo);
        const listaSerVivo = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaSerVivo);
        setResultado(listaSerVivo);
    }

    useEffect(
        () => {
            buscarSerVivo();
        }, [busca]
    )

    return(
        <View>
            <Text>Bem-vindo a busca dos Seres Vivos</Text>
            <TextInput
                label={"Pesquise"}
                value={busca}
                onChangeText={setBusca}
            />
        </View>    
    )

}