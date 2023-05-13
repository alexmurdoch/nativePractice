import { View, Text , ScrollView, SafeAreaView} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, FONTS, SIZES, images} from '../constants'
import { useState } from "react";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Homme</Text>
    </View>
  );
}