import React, { useState } from "react"
import { Text, TextInput, View, TouchableOpacity, Keyboard, Vibration, Pressable, FlatList } from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"


export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [faixa, setFaixa] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])


    function validationImc(){
        if (peso != null && altura != null) {
            let alturaFormato = altura.replace(",", ".")
            let result = (peso / (alturaFormato * alturaFormato)).toFixed(2);
            setImcList ((arr) => [...arr, {id: new Date().getTime, imc: result}])
            setImc(result);

    
            // Define a faixa com base no valor de IMC calculado
            if (result < 18.5) {
                setFaixa("Abaixo do peso: Menor que 18.5");
            } else if (result >= 18.5 && result < 24.9) {
                setFaixa("Peso normal: Entre 18.5 e 24.9");
            } else if (result >= 25 && result < 29.9) {
                setFaixa("Pré obesidade: Entre 25 e 29.9");
            } else if (result >= 30 && result < 34.9) {
                setFaixa("Obesidade Grau 1: Entre 30 e 34.9");
            } else if (result >= 35 && result < 39.9) {
                setFaixa("Obesidade Grau 2: Entre 35 e 39.9");
            } else {
                setFaixa("Obesidade Grau 3: Maior ou igual a 40");
            }
    
            setAltura(null);
            setPeso(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular novamente");
            Keyboard.dismiss();
            setErrorMessage(null)
        }else {
            verificationImc()
        setImc(null);
        setFaixa("");
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
        }
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setAltura} value={altura}/>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} placeholder="Ex: 75.5" keyboardType="numeric" onChangeText={setPeso} value={peso}/>
                <TouchableOpacity onPress={validationImc} style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                </Pressable>
                :
                <View  style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} numFaixa={faixa}/>
                    <TouchableOpacity onPress={validationImc} style={styles.buttonCalculator}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList style={styles.listImcs} data={imcList.reverse()} renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}> Resultado IMC = 
                        <Text style={styles.textResultImcItemList}> {item.imc}</Text>
                    </Text>
                )
            }} keyExtractor={(item) => {item.id}}>
            </FlatList>
        </View>
    );
}