import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cekLogin = () => {
    if (email === 'admin' && password === 'admin') {
      setLogin(true);
    } else {
      Alert.alert('Gagal', 'Email atau password salah');
    }
  };

  const logout = () => {
    setLogin(false);
    setEmail('');
    setPassword('');
  };

  if (login) {
    return (
      <View style={styles.container}>
        <Text style={styles.judul}>HOME PAGE</Text>

        <View style={styles.profil}>
          <Image source={require('./assets/Bamboo_Rain_Icon.png')} style={styles.foto} />
          <Text style={styles.nama}>Angga Wibisana</Text>
        </View>

        <View style={styles.menuBox}>
          <View style={styles.menu}><Text style={styles.teksMenu}>Biodata</Text></View>
          <View style={styles.menu}><Text style={styles.teksMenu}>Nilai</Text></View>
          <View style={styles.menu}><Text style={styles.teksMenu}>Matakuliah</Text></View>
          <View style={styles.menu}><Text style={styles.teksMenu}>Absensi</Text></View>
        </View>

        <TouchableOpacity style={styles.tombol} onPress={logout}>
          <Text style={styles.teksTombol}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      <Text style={styles.judul}>MY UJIAN APP </Text>
      <Text style={[styles.judul, { marginBottom: 40 }]}>UTS MOBILE 1</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.tombol} onPress={cekLogin}>
        <Text style={styles.teksTombol}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006064',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#00BCD4',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  tombol: {
    backgroundColor: '#00BCD4',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  teksTombol: {
    color: 'white',
    fontWeight: 'bold',
  },
  profil: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#00BCD4',
    borderRadius: 8,
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  nama: {
    marginTop: 10,
    fontSize: 16,
    color: '#006064',
  },
  menuBox: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  menu: {
    width: '48%',
    height: 80,
    backgroundColor: '#00BCD4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  teksMenu: {
    color: 'white',
    fontWeight: 'bold',
  },
});
