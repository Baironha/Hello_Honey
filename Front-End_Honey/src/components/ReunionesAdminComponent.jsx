import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const ReunionesAdminComponent = ({ roomName }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <JitsiMeeting
        roomName={roomName}
        domain="meet.jit.si"
        configOverwrite={{
          startWithAudioMuted: true,
          startWithVideoMuted: true,
          disableDeepLinking: true,
          prejoinPageEnabled: false, // entra directo a la reunión
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
          DEFAULT_BACKGROUND: "#000000",
        }}
        userInfo={{
          displayName: "Admin"
        }}
        getIFrameRef={(iframeRef) => {
          if (iframeRef) {
            iframeRef.style.height = "100%";
            iframeRef.style.width = "100%";
            iframeRef.style.border = "none";
          }
        }}
        onApiReady={(externalApi) => {
          console.log("Jitsi Meet API Ready");

          externalApi.addEventListeners({
            videoConferenceJoined: () => {
              console.log("Te uniste a la reunión.");
            },
            videoConferenceLeft: () => {
              console.log("Saliste de la reunión.");
            },
            readyToClose: () => {
              console.log("Reunión cerrada.");
            },
            error: (e) => {
              console.error("Error de Jitsi:", e);
            }
          });
        }}
        style={{ height: "100%", width: "100%", border: "none" }}
      />
    </div>
  );
};

export default ReunionesAdminComponent;
