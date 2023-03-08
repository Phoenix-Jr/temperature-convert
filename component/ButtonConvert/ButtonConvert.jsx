import { s } from "./ButtonConvert.style";
import { TouchableOpacity, Text } from "react-native";

export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convertir en {unit} </Text>
    </TouchableOpacity>
  );
}
