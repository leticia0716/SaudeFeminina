import React, {useState} from 'react';
import { StyleSheet, Pressable, Dimensions, View,Text, Button, Alert, ImageBackground, TouchableNativeFeedback} from 'react-native';
import background from '../../assets/background.jpg';
import { TextInput } from 'react-native-paper';
import Checkbox from '../resources/Checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

const opcoes = [{text:'ABUSO SEXUAL', id: 1}, {text:'ABUSO VERBAL', id: 2}, {text:'VIOLÊNCIA FÍSICA', id: 3}, {text:'OUTROS', id: 4}]
const width = Dimensions.get('screen').width;

export default function Formulario(props){

    const [solicitante, setSolicitante] = useState('');
    const [nomeSolicitante, setNomeSolicitante] = useState('');
    const [agressoesRegistradas, setAgressoes] = useState('');
    const [dataAgressao, setDataAgressao] = useState(new Date())
    const [mode, setMode] = useState('date');

        
    return<> 
       
    
        <View style={alignContent="center"}>npm install react-native-paper

        <ImageBackground source={background} resizeMode="cover" style={estilos.image}>

        <Text style={estilos.text}> QUEM ESTÁ DENUNCIANDO? </Text>
        <View style={estilos.botoesVitimas}>
            {['DENUNCIADOR', 'VÍTIMA'].map(denunciante => (
                <View key={denunciante}>
                    <Pressable style={[solicitante === denunciante ? estilos.selecionado : estilos.naoSelectionado]} 
                    onPress={() => setSolicitante(denunciante)}>
                        <Text style={estilos.textDenunciante}>{denunciante}</Text>                        
                    </Pressable>
                </View>
            ))}
            
        </View>

        <TextInput 
            label="Nome:"
            value={nomeSolicitante}
            onChangeText={nomeSolicitante => setNomeSolicitante(nomeSolicitante)}/>
        
 
        <Button
            title={solicitante} 
            style={estilos.text}
        />

        <Button
            title={nomeSolicitante} 
            style={estilos.text}
        />

        <Text style={estilos.text}> TIPO DE ABUSO </Text>

        <Checkbox options = {opcoes} onChange={op=> setAgressoes(op)}></Checkbox>
        <Button
            title={agressoesRegistradas.toString()} 
        />

        <Text style={estilos.text}> DADOS DA DENÚNCIA</Text>

        <DatePicker format="DD/MM/YYYY"
        date = {dataAgressao} onDateChange={setDataAgressao}></DatePicker>
        <TextInput>HORA DA AGRESSÃO</TextInput>
        </ImageBackground>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width
    },
    botoesVitimas: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },   
    image: {
        //flex: 1,
        height: '100%',
        margin: 0
      },
    button: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        backgroundColor: 'black',
        padding: 5,
        marginVertical: 2,
    },
    selecionado: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'red',
        backgroundColor: '#61605e',
        padding: 5,
        marginVertical: 2,
    },
    naoSelectionado: {
        color: 'pink',
        backgroundColor: '#a7a7a9',
        padding: 5,
        marginVertical: 2,
        
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#61605e',
        textAlign:"center",
    }, 
    textDenunciante: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign:'center'
    },

});