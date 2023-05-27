import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import { useState, useEffect } from 'react';
import oBar from '../../../assets/imgs/OBar.png';
import closeButton from '../../../assets/imgs/CloseButton.png';
import { width, height } from '../../global/dimension';
import * as Font from 'expo-font';

const OBar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      locus_sangsang: require('../../../assets/fonts/locus_sangsang.ttf'),
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator while the fonts are being loaded
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Image source={oBar} style={styles.container} />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Image source={closeButton} />
          </TouchableOpacity>
          <Text style={styles.nickname}> ${'{보낸사람닉네임}'}</Text>
          <Image source={oBar} style={styles.modalImage} />
          <View style={styles.textarea}>
            <Text style={styles.message}>
              내용 입력 .... 내가 만든 쿠키~ 사실 아니고 아이스크림이야
              친구야... 사실 이거 내가 만든 것도 아니야 다 거짓말이야 .....
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.19,
    height: height * 0.12,
    resizeMode: 'contain',
  },

  modalContainer: {
    width: width * 0.846,
    height: height * 0.6,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: height * 0.155,
    backgroundColor: '#FFDDDD',
    borderRadius: 15,
  },
  nickname: {
    marginTop: height * 0.05,
    fontSize: 20,
  },
  modalImage: {
    width: width * 0.2,
    height: height * 0.16,
    resizeMode: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#FF6969',
    marginTop: height * 0.025,
  },
  textarea: {
    width: width * 0.816 * 0.9,
    height: (height * 0.47) / 2,
    marginTop: height * 0.018,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  message: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'locus_sangsang',
  },
  closeButton: {
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 16,
    left: 16,
  },
});

export default OBar;
