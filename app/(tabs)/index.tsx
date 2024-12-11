import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-red-500 font-bold">Home page</Text>
    </SafeAreaView>
  );
}


