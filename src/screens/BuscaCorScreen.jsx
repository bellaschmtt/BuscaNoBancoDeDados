import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";


export default function BuscaCorScreen(){
    const [busca, setBusca] = useState ('');
    const [resultado, setResultado] = useState([]);

    async function buscarCor(){
        const corRef = collection(db, 'BuscaCor');
        const BuscaCor = query(corRef, where('NomeDaCor', '==', busca));
        const resultadoSnapshot = await getDocs(BuscaCor);
        const listaCor = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaCor);
        setResultado(listaCor);
    }

    useEffect(
        () => {
            buscarCor();
        }, [busca]
    )

    return(
        <View>
            <Text>Bem-vindo a busca das Cores</Text>
            <TextInput 
                label={"Pesquise"}
                value={busca}
                onChangeText={setBusca}
            />
        </View>
    );
}