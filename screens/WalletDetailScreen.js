import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WalletDetailScreen = ({route}) => {
  const {wallet} = route.params;
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  const handleCopyAddress = useCallback(async () => {
    try {
      await Clipboard.setString(wallet.address);
      setCopyMessageVisible(true);
      setTimeout(() => setCopyMessageVisible(false), 2000);
    } catch (error) {
      console.error('Error copying address to clipboard', error);
    }
  }, [wallet.address]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#020e03', '#3def50']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.card}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{wallet.icon}</Text>
          <Text style={styles.title}>{wallet.name}</Text>
        </View>

        <DetailRow label="Address:" value={wallet.address} />
        <DetailRow
          label="Balance:"
          value={wallet.balance}
          style={styles.balance}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleCopyAddress}
          accessibilityLabel=" ✔️ Copy Wallet Address">
          <Text style={styles.buttonText}>Copy Address</Text>
        </TouchableOpacity>

        {copyMessageVisible && (
          <Animated.View style={styles.copyMessageContainer}>
            <Text style={styles.copyMessageText}>
              Address copied to clipboard
            </Text>
          </Animated.View>
        )}
      </LinearGradient>
    </View>
  );
};

// Reusable Detail Row Component
const DetailRow = ({label, value, style}) => (
  <View style={styles.detailRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, style]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 45,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: '95%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 35,
  },
  icon: {
    fontSize: 36,
    color: '#fff',
    marginRight: 10,
  },
  title: {
    fontSize: 31,
    fontWeight: '500',
    color: '#fff',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    fontSize: 20,
    color: '#fff',
    textAlign: 'right',
    marginRight: 10,
  },
  value: {
    flex: 2,
    fontSize: 19,
    fontWeight: '500',
    color: '#2ecc71',
    textAlign: 'left',
  },
  balance: {
    color: '#ffd449',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  copyMessageContainer: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    opacity: 0.9,
  },
  copyMessageText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WalletDetailScreen;
