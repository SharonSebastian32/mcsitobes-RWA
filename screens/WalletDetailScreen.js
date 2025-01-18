// screens/WalletDetailScreen.js
import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Clipboard} from 'react-native';

const WalletDetailScreen = ({route}) => {
  const {wallet} = route.params;

  const handleCopyAddress = useCallback(async () => {
    await Clipboard.setString(wallet.address);
    alert('Address copied to clipboard');
  }, [wallet.address]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>{wallet.icon}</Text>
        <Text style={styles.title}>{wallet.name}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{wallet.address}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Balance:</Text>
          <Text style={styles.value}>{wallet.balance}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCopyAddress}>
          <Text style={styles.buttonText}>Copy Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  icon: {fontSize: 48, marginBottom: 16},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
  },
  label: {flex: 1, fontSize: 16, color: '#666'},
  value: {flex: 2, fontSize: 16},
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: '500'},
});

export default WalletDetailScreen;
