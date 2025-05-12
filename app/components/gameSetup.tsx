import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function GameSetup() {
    const [pricePerCard, setPricePerCard] = useState("");
    const [numberOfCardsSold, setNumberOfCardsSold] = useState("");
    const [initialPot, setInitialPot] = useState("");

    useEffect(() => {
        const price = parseInt(pricePerCard);
        const number = parseInt(numberOfCardsSold);

        if (!isNaN(price) && !isNaN(number)) {
            const pot = price * number;
            setInitialPot(`Initial Pot: $${pot}`);
        } else {
            setInitialPot("");
        }
    }, [pricePerCard, numberOfCardsSold]);

    return (
        <View style={{ flex: 1, alignItems: "center", flexWrap:"wrap", padding: 20 }}>
        <Text style={{fontSize: 20, fontWeight: 900, textAlign:'center'}}>Game Setup</Text>
        <Text style={{fontSize: 15, fontWeight: 700, textAlign:'center', marginTop:10}}>Enter price per card:</Text>
        <TextInput
            placeholder="Price per card"
            onChangeText={setPricePerCard}
            value={pricePerCard}
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 20,
            }}
        />
        <Text style={{fontSize: 15, fontWeight: 700, textAlign:'center'}}>Enter the number of cards sold:</Text>
        <TextInput
            placeholder="Number of cards sold"
            onChangeText={setNumberOfCardsSold}
            value={numberOfCardsSold}
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 20,
            }}
        />
        <Text style={{fontSize: 30, fontWeight: 700, textAlign:'center', color:'green'}}>{initialPot}</Text>
        <Button
        title="Lets Play Bingo!"
        onPress={() => setInitialPot('GET TO THE GAME!')}
        style={{ marginTop: 20, backgroundColor: 'blue', color: 'white' }}
          />        
          <Text style={{fontSize: 15, fontWeight: 400, textAlign:'center', marginTop:10}}>Note: The initial pot is calculated as price per card multiplied by the number of cards sold.</Text>
        </View>
    );
}