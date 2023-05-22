import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { TextInput, Text} from "react-native-paper";
import { View } from "react-native";
import { db } from "../config/firebase";

export default function BuscaAnimalScreen(){
    const [busca, setBusca] = useState ('');
    const [resultado, setResultado] = useState([]);

    async function buscarAnimal(){
        const animalRef = collection(db, 'animais');
        const BuscaAnimal = query(animalRef, where('NomeDoAnimal', '==', busca));
        const resultadoSnapshot = await getDocs(BuscaAnimal);
        const listaAnimal = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaAnimal);
        setResultado(listaAnimal);
    }

    useEffect(
        () => {
            buscarAnimal();
        }, [busca]
    )

    return(
        <View>
            <Text>Bem-vindo a busca dos Animais</Text>
            <TextInput 
                label={"Pesquise"}
                value={busca}
                onChangeText={setBusca}
            />
        </View>
    );
}


