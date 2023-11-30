import React, { useEffect, useState } from 'react'
import {Text, View, Pressable, StyleSheet, Button} from 'react-native';

export default function Checkbox({options = [], onChange}){
    const [selected, setSelected] = useState([]);
    function toggle(id){
        let index = selected.findIndex((i)=> i === id)
        let arrSelecteds = [...selected]
        if(index != -1){
            arrSelecteds.splice(index, 1)
        }else{
            arrSelecteds.push(id)
        }
        setSelected(arrSelecteds)
    }

    useEffect(() => onChange(selected), [selected])

    return (
        <View>
            {options.map((op, index) => (
                <View key={index}>
                    <Pressable style = {selected.findIndex(i => i === op.id) !== -1 ? estilos.selecionado : estilos.naoSelectionado}
                    onPress={() => toggle(op?.id)}>
                        <Text>{op?.text}</Text>                        
                    </Pressable>
                </View>
            ))}

        </View>
    );   
}


const estilos = StyleSheet.create({
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