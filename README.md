📌 **Project ini dibuat oleh [Ararya](https://github.com/Araryarch)** – Lihat di GitHub: [Araryarch/BunJS-React-Native](https://github.com/Araryarch)  

---

## **📂 Struktur Proyek**  
```
/expo-bun-template
 ├── assets/           # Folder untuk gambar, ikon, dan font
 ├── src/
 │   ├── components/   # Komponen UI reusable
 │   ├── screens/      # Halaman utama aplikasi
 │   ├── navigation/   # Konfigurasi navigasi
 │   ├── hooks/        # Custom hooks
 │   ├── utils/        # Helper functions
 ├── App.tsx           # Entry point aplikasi
 ├── package.json      # Konfigurasi dependensi
 ├── bun.lockb         # Lockfile untuk BunJS
 ├── app.json          # Konfigurasi Expo
 ├── .gitignore        # File yang diabaikan oleh Git
 ├── .expo/            # Konfigurasi Expo Go
```

---

## **📦 Dependencies (terinstall otomatis dengan BunJS)**  
- **Expo SDK** – Untuk framework React Native  
- **React Navigation** – Untuk navigasi antar halaman  
- **React Native Gesture Handler** – Untuk gesture navigasi  
- **React Native Reanimated** – Untuk animasi performa tinggi  

---

## **🚀 Cara Menggunakan Template Ini**  
Clone repository dan jalankan proyek:  
```sh
git clone https://github.com/Araryarch/BunJS-React-Native my-app
cd my-app

# Install dependencies dengan Bun
bun install

# Jalankan aplikasi
bun run start
```

---

## **📌 Template Expo BunJS (Kode Sumber)**  

### **🟢 `App.tsx` (Entry Point Aplikasi)**  
```tsx
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>🚀 Welcome to Expo + BunJS Template!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
```

---

### **🟠 `package.json` (Konfigurasi Expo dengan BunJS)**
```json
{
  "name": "expo-bun-template",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "^49.0.0",
    "react": "18.2.0",
    "react-native": "0.72.0",
    "@react-navigation/native": "^6.1.1",
    "react-native-gesture-handler": "^2.12.0",
    "react-native-reanimated": "^3.5.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  }
}
```

---

### **🔵 `app.json` (Konfigurasi Expo)**
```json
{
  "expo": {
    "name": "Expo BunJS Template",
    "slug": "expo-bun-template",
    "version": "1.0.0",
    "sdkVersion": "49.0.0",
    "platforms": ["ios", "android", "web"],
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

---

### **🟣 `src/screens/HomeScreen.tsx` (Halaman Utama)**
```tsx
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>🏠 Ini adalah Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
```

---

### **🟡 `src/navigation/AppNavigator.tsx` (Navigasi)**
```tsx
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## **📌 Fitur Unggulan Template Ini**  
✅ **Paket Expo Terbaru** – Menggunakan SDK **49.0.0** untuk performa optimal  
✅ **BunJS** – Instalasi **super cepat** dibanding `npm` atau `yarn`  
✅ **React Navigation** – Navigasi sudah dikonfigurasi  
✅ **Splash Screen & Icon** – Disiapkan otomatis lewat `app.json`  
✅ **Siap untuk Deployment** – Bisa langsung build ke **Android & iOS**  

---

## **📦 Build dan Deploy ke Store**  

### **🔹 Android & iOS Build**  
Jika ingin build ke Play Store/App Store, gunakan:  
```sh
bun run expo build:android
bun run expo build:ios
```

### **🔹 OTA Update (Tanpa Upload ke Store)**  
```sh
bun run expo publish
```

---

## **🔗 Download & Gunakan Template Ini**  
📌 **Project ini dibuat oleh [Ararya](https://github.com/Araryarch)** – Lihat di GitHub: [Araryarch/BunJS-React-Native](https://github.com/Araryarch)  

🚀 **Langsung clone & mulai ngoding!**  
```sh
git clone https://github.com/Araryarch/BunJS-React-Native my-app
cd my-app
bun install
bun run start
```

---