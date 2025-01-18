// screens/WalletScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const wallets = [
  {
    id: '1',
    name: 'Main Wallet',
    address: '0x742d...44e',
    balance: '2.5 ETH',
    icon: '💼',
  },
  {
    id: '2',
    name: 'Savings Wallet',
    address: '0x123d...123',
    balance: '1.8 ETH',
    icon: '🏦',
  },
  {
    id: '3',
    name: 'Trading Wallet',
    address: '0x456d...456',
    balance: '0.5 ETH',
    icon: '💱',
  },
];

const WalletScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const filteredWallets = wallets.filter(wallet =>
    wallet.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderWalletItem = ({item}) => (
    <TouchableOpacity
      style={styles.walletCard}
      onPress={() => navigation.navigate('Details', {wallet: item})}>
      <Text style={styles.icon}>{item.icon}</Text>
      <View style={styles.walletInfo}>
        <Text style={styles.walletName}>{item.name}</Text>
        <Text style={styles.walletAddress}>{item.address}</Text>
        <Text style={styles.walletBalance}>{item.balance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>My Wallets</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Wallets"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredWallets}
        renderItem={renderWalletItem}
        keyExtractor={item => item.id}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  header: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  searchBar: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  walletCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  icon: {fontSize: 30, marginRight: 16},
  walletInfo: {flex: 1},
  walletName: {fontSize: 18, fontWeight: 'bold'},
  walletAddress: {color: '#666', marginVertical: 4},
  walletBalance: {fontSize: 16, color: '#2ecc71', fontWeight: '500'},
});

export default WalletScreen;
