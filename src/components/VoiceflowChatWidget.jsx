import { useEffect } from 'react';

const VoiceflowChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '65e9b811b3dbfa124bb7a70c' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };

    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); 

  return null; 
};

export default VoiceflowChatWidget;
