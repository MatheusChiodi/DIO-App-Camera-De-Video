import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { CameraViewProps } from './props';
import { styles } from './styles';
import { Camera } from 'expo-camera';

export default function CameraView({
  cameraRef,
  isRecording,
  onRecord,
  onStopRecording,
}: CameraViewProps) {
  return (
    <Camera ref={cameraRef} style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={isRecording ? onStopRecording : onRecord}
          style={styles.buttonRecord}
        >
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
