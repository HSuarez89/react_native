import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return (
        <View style={{marginLeft:20}}>
            <View>
                <Text>Davi Dias</Text>
                <Text>Telefone: (31) 99898-1717</Text>
                <Text onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Davi Dias Lourenço',
                        telefone: '(31) 99898-1717',
                        endereco: 'Rua Indiana 1330 - Jardim América',
                        profissao: 'Médico',
                        email: 'davidiaslourenco@gmail.com'
                    }
                )}style={{backgroundColor: "blue", color: "white", margin: "auto", padding: 10, borderRadius: 20, fontWeight: "bold", marginTop: 10}}>Information</Text>
            </View>
            <View style={{marginTop:50}}>
                <Text>Henrique Suarez</Text>
                <Text>Telefone: (31) 99120-9350</Text>
                <Text onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Henrique Suarez Siqueira',
                        telefone: '(31) 99120-9350',
                        endereco: 'Rua Queluzita 614 ap 203 - Fernão Dias',
                        profissao: 'Desenvolvedor',
                        email: 'henriquesuarez89@gmail.com'
                    }
                )} style={{backgroundColor: "blue", color: "white", margin: "auto", padding: 10, borderRadius: 20, fontWeight: "bold", marginTop: 10}}>Information</Text>
            </View>
        </View>
    )
}