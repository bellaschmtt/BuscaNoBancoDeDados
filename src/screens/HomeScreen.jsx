// import React from "react";
import { Button } from "react-native-paper"
import {View, Text} from 'react-native';

import styles from '../utils/styles';



const HomeScreen = ({navigation}) => {
    return(
        <View style={style.container}>
            <Text style={[styles.title, styles.bold]}>Páginas de Procura</Text>
            <View styles={styles.content}>
                <Button styles={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar animal')}>Procurar Animal</Button>
            </View>

        </View>
    );
};

export default HomeScreen;