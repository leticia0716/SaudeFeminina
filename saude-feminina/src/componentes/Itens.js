import React from 'react'
import {StyleSheet, Text} from 'react-native'

export default function Itens({lista}){
    const opcoes = [{text:'ABUSO SEXUAL', id: 1}, {text:'ABUSO VERBAL', id: 2}, {text:'VIOLÊNCIA FÍSICA', id: 3}, {text:'OUTROS', id: 4}]
    return <>
        { lista.map(({tipoDenunciante, nome, tipoAbuso, dataHora}) => {
            
            let text = 'Tipo Denunciante: ' + tipoDenunciante + '\n' + 'Nome Denunciante: ' + nome + '\n'
            + 'Tipo de Abuso: ' + opcoes.at(tipoAbuso).text + '\n' + 'Data\Hora: ' + dataHora + '\n'
            return <Text style = {estilos.text}>{text}</Text>
        }) }
    </>
}

const estilos = StyleSheet.create({
    
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        textAlign:"left",
    }
});
