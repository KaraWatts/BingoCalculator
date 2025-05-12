import { Text, View } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GameSetup from "./components/gameSetup";

export default function Index() {
  return (
    <GestureHandlerRootView>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, alignItems: "center", flexWrap:"wrap", padding: 20 }}>
          <Text style={{fontSize: 40, fontWeight: 900, textAlign:'center'}}>BINGO Calculator</Text>
        <GameSetup />
      </SafeAreaView>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
