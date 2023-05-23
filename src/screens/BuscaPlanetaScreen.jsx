import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

 
 
export default function BuscaPlanetaScreen(){

    const [busca, setBusca] = useState ('');
    const [resultado, setResultado] = useState([]);

    async function buscarPlaneta(){
        const planetaRef = collection(db, 'Planetas');
        const planetas = query(planetaRef, where('NomeDoPlaneta', '==', busca));
        const resultadoSnapshot = await getDocs(planetas);
        const listaPlanetas = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaPlanetas);
        setResultado(listaPlanetas);
    }

    useEffect(
        () => {
            buscarPlaneta();
        }
    )

    return(
        <View>
            <Text>Bem-vindo a busca dos Planetas</Text>
            <TextInput  
                label={"Pesquise"}
                value={busca}
                onChangeText={setBusca}
            />
        </View>
    )
}