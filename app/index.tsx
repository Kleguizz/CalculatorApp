import { globalStyles } from "@/styles/global-styles";
import { LogBox, View } from "react-native";
import ThemeText from "./components/ThemeText";
import CalculatorButton from "./components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,

    divideOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 30 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="c"
          blackText
          color={Colors.lightGrey}
          onPress={clean}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGrey}
          onPress={toggleSign}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGrey}
          onPress={deleteLast}
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => console.log("x")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton label="." onPress={() => buildNumber(".")} />

        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
