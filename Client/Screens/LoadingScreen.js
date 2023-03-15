import React, {useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, Button, Image, View, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Rect } from 'react-native-svg';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Info');
    }, 2000); // navigate to the new screen after 2 seconds

    // cleanup function to clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);
                //! SVG is notmotion => check for motion!!!
  return (
    <SafeAreaView style={styles.layout}>
     
     <Svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="116" height="116" rx="20" fill="#E3C3FF"/>
<Path d="M108 58C108 85.6142 85.6142 108 58 108C30.3858 108 8 85.6142 8 58C8 30.3858 30.3858 8 58 8C85.6142 8 108 30.3858 108 58Z" fill="white"/>
<Path d="M103.082 58C103.082 82.8981 82.8981 103.082 58 103.082C33.1019 103.082 12.918 82.8981 12.918 58C12.918 33.1019 33.1019 12.918 58 12.918C82.8981 12.918 103.082 33.1019 103.082 58Z" fill="#E3C3FF"/>
<Path d="M27.6721 58C27.6721 61.6215 24.7363 64.5574 21.1148 64.5574C17.4932 64.5574 14.5574 61.6215 14.5574 58C14.5574 54.3785 17.4932 51.4426 21.1148 51.4426C24.7363 51.4426 27.6721 54.3785 27.6721 58Z" fill="white"/>
<Path d="M101.443 58C101.443 61.6215 98.5068 64.5574 94.8852 64.5574C91.2637 64.5574 88.3279 61.6215 88.3279 58C88.3279 54.3785 91.2637 51.4426 94.8852 51.4426C98.5068 51.4426 101.443 54.3785 101.443 58Z" fill="white"/>
<Path d="M73.1639 84.2647C76.3003 82.4539 80.3107 83.5285 82.1215 86.6649C83.9322 89.8012 82.8576 93.8117 79.7213 95.6224C76.5849 97.4332 72.5745 96.3586 70.7638 93.2223C68.953 90.0859 70.0276 86.0755 73.1639 84.2647Z" fill="white"/>
<Path d="M36.2787 20.3776C39.415 18.5668 43.4254 19.6414 45.2362 22.7778C47.047 25.9141 45.9724 29.9245 42.836 31.7353C39.6997 33.5461 35.6893 32.4715 33.8785 29.3351C32.0677 26.1988 33.1423 22.1884 36.2787 20.3776Z" fill="white"/>
<Path d="M42.836 84.2647C45.9724 86.0755 47.047 90.0859 45.2362 93.2223C43.4254 96.3586 39.415 97.4332 36.2787 95.6224C33.1423 93.8117 32.0677 89.8012 33.8785 86.6649C35.6893 83.5285 39.6997 82.4539 42.836 84.2647Z" fill="white"/>
<Path d="M79.7213 20.3776C82.8576 22.1884 83.9322 26.1988 82.1215 29.3351C80.3107 32.4715 76.3003 33.5461 73.1639 31.7353C70.0276 29.9245 68.953 25.9141 70.7638 22.7778C72.5745 19.6414 76.5849 18.5668 79.7213 20.3776Z" fill="white"/>
<Path d="M86.6885 58C86.6885 73.8442 73.8442 86.6885 58 86.6885C42.1558 86.6885 29.3115 73.8442 29.3115 58C29.3115 42.1558 42.1558 29.3115 58 29.3115C73.8442 29.3115 86.6885 42.1558 86.6885 58Z" fill="white"/>
</Svg>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#111111",
  },
});
