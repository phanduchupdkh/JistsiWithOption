import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { JitsiMeetExtended, JitsiMeetView } from 'react-native-jitsi-meet-extended';

export default function App() {

  const [showMeet, setShowMeet] = React.useState(false);


  function conferenceTerminated(nativeEvent) {
    console.log(nativeEvent)
  }

 const runMeet = () => {
    setShowMeet(true);
  }

  return (
    <View style={styles.container}>
     
    {showMeet && (
        <JitsiMeetView
          style={{
            flex: 10,
            height: '100%',
            width: '100%',
          }}
          options={{
            roomId: "randomfox895678dc5d6",
            chatEnabled: false,
            inviteEnabled: false,
            meetingNameEnabled: false,
            userInfo: {
              displayName: "Nikola Tesla"
            }
          }}
        
          onConferenceTerminated={(e) => conferenceTerminated(e)}
        />
      )}

      <TouchableOpacity onPress={runMeet} style={styles.button}>
        <Text>Start meet as view inside app</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: 250,
    height: 50,
    padding:10,
    margin:10,
    borderWidth:2,
    borderColor: "gray",
    justifyContent:"center",
    alignItems:"center",
  }
});