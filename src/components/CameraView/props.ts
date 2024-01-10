import { Camera } from 'expo-camera';

export interface CameraViewProps {
  cameraRef: React.RefObject<Camera>;
  isRecording: boolean;
  onRecord: () => void;
  onStopRecording: () => void;
}
