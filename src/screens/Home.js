import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Rangkuman Bulan ini
            </Text>
            <Text style={{ textAlign: "center", color: "green" }}>
              Pemasukan
            </Text>
            <Text style={{ textAlign: "center", color: "red" }}>
              Pengeluaran
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Tambah Pemasukan"
              status="info"
              onPress={() => {
                navigation.navigate("PemasukanScreen");
              }}
            />
            <Button
              text="Tambah Pengeluaran"
              onPress={() => {
                navigation.navigate("PengeluaranScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="Detail Cash Flow"
              status="info"
              onPress={() => {
                navigation.navigate("PengeluaranScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />

            {/* <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            /> */}
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
