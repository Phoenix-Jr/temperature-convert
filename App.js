import { View, ImageBackground } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { InputTemperature } from "./component/inputTemperature/inputTemperature";
import { TemperatureDisplay } from "./component/TemperatureDisplay/TemperatureDisplay";
import {
  convertTemperaTo,
  getOppositeUnit,
  isIceTemperature,
} from "./services/temperature-service";
import { useState, useEffect } from "react";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import { ButtonConvert } from "./component/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState("");

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue]);

  function getConvertedTemperaure() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperaTo(oppositeUnit, valueAsFloat).toFixed(1);
  }
  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperaure()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <ButtonConvert
          unit={currentUnit}
          onPress={() => {
            setCurrentUnit(oppositeUnit);
          }}
        />
      </View>
    </ImageBackground>
  );
}
