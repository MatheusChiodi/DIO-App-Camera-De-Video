import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

import { Audio, Video } from 'expo-av';

import { VideoPlayerProps } from './props';
import { styles } from './styles';

export default function VideoPlayer({
  video,
  onShare,
  onSave,
  onDiscard,
}: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />
      <View style={styles.menuButtons}>
        <Button title="Share" onPress={onShare} />
        <Button title="Save" onPress={onSave} />
        <Button title="Discard" onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
}
