// import React from "react";
import { Button } from "react-native-paper"
import {View, Text} from 'react-native';
import { styles } from "../utils/styles";


const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Páginas de Procura</Text>
            <View styles={styles.content}>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar animal')}>Procurar Animal</Button>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar cor')}>Procurar Cor</Button>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar fruta')}>Procurar Fruta</Button>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar ser vivo')}>Procurar seres Vivos</Button>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Transformers')}>Procurar Transformers</Button>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Planetas')}>Procurar Planetas</Button>
            </View>

        </View>
    );
};

export default HomeScreen;