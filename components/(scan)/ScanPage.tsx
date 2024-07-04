import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import ScanButton from "./ScanButton";
import { useGetProductInformation } from "../../hooks/useGetProductInformation";

type ScanProps = {
  type: string;
  data: string;
};

const ScanPage = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(true);
  const [ean, setEan] = useState<string | null>(null);
  // const productInfo = useGetProductInformation(ean);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const resetScanner = () => {
    setEan(null);
    setScanned(false);
  };

  const handleBarCodeScanned = ({ type, data }: ScanProps) => {
    setEan(data);
    setScanned(true);
  };



  if (hasPermission === null) {
    return <Text>Ber om kamera tilgang</Text>;
  }
  if (hasPermission === false) {
    return <Text>Mangler Kamera tilgang</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["ean13"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.buttonContainer}>
        {scanned ? (
          <ScanButton buttonText="Skan" action={() => resetScanner()} />
        ) : (
          <ScanButton buttonText="Skanner..." action={() => setScanned(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default ScanPage;
