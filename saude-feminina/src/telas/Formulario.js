import React, {useState} from 'react';
import {StyleSheet, Pressable, View,Text, Button, Alert, ImageBackground, Platform, ScrollView} from 'react-native';
import background from '../../assets/background.jpeg';
import { TextInput } from 'react-native-paper';
import Checkbox from '../resources/Checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

import Dados from '../mocks/dados'
import Itens from '../componentes/Itens';


const opcoes = [{text:'ABUSO SEXUAL', id: 1}, {text:'ABUSO VERBAL', id: 2}, {text:'VIOLÊNCIA FÍSICA', id: 3}, {text:'OUTROS', id: 4}]

export default function Formulario(props){

    const [solicitante, setSolicitante] = useState('');
    const [nomeSolicitante, setNomeSolicitante] = useState('');
    const [agressoesRegistradas, setAgressoes] = useState('');
    const [mode, setMode] = useState('date');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dataHora, setDataHora] = useState('Empty');

    const [listaDenuncias, setList] = React.useState(Dados);

    let fDate= ''

    let fTime = ''

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        fTime ='Horário: ' + tempDate.getHours().toString() + ' : ' + tempDate.getMinutes().toString();
        setDataHora(fDate + '\n' + fTime)

    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    function salvar(denuncia){
        let listaTemp =  listaDenuncias
        console.log("teste")
        listaTemp.lista.concat(denuncia)
        console.log(denuncia)

        setList(listaTemp)
    }
 
        
    return<> 
       
    
        <ScrollView style={alignContent="center"}>

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

        <Pressable style={estilos.naoSelectionado} onPress={()=> showMode('date')}>
        <Text style={estilos.textDenunciante}>DATA DA AGRESSÃO</Text>                        
        </Pressable>

        <Pressable style={estilos.naoSelectionado} onPress={()=> showMode('time')}>
        <Text style={estilos.textDenunciante}>HORA DA AGRESSÃO</Text>                        
        </Pressable>

        {show &&(
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
            />
        )     

        }
        <Button
            title={dataHora} 
        />

        <Pressable 
            style={estilos.naoSelectionado} onPress={()=> Alert.alert(nomeSolicitante +', sua denuncia será enviada para análise' )}
        >
            <Text>SALVAR</Text>
        </Pressable>

        <Text  style={estilos.text}>DENÚNCIAS REALIZADAS</Text>

        <Itens {...Dados}/>
           
        </ImageBackground>
        </ScrollView>
    </>
}

const estilos = StyleSheet.create({
   
    botoesVitimas: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },   
    image: {
        height: '100%',
        margin: 0
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