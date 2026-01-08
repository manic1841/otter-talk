export const TTSService = {
  speak: (text: string) => {
    if (!("speechSynthesis" in window)) {
      console.warn("TTS not supported");
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW"; // Default to Traditional Chinese
    utterance.rate = 0.5; // Slightly slower for clarity

    // Try to find a Chinese voice
    const voices = window.speechSynthesis.getVoices();

    // set 500 ms timeout
    setTimeout(() => {
      TTSService._window_speak(utterance, voices);
    }, 500);
  },

  _window_speak: (
    utterance: SpeechSynthesisUtterance,
    voices: SpeechSynthesisVoice[]
  ) => {
    // if voices length less than 0, and wait for it
    if (voices.length === 0) {
      setTimeout(() => {
        TTSService._window_speak(utterance, voices);
      }, 100);
      return;
    }

    // Try to find a Chinese voice
    const chineseVoice = voices.find(
      (voice) => voice.lang.includes("zh") || voice.lang.includes("TW")
    );
    if (chineseVoice) {
      utterance.voice = chineseVoice;
    }

    window.speechSynthesis.speak(utterance);
  },
};
