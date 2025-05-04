export function generateRandomLetters(length = 3) {
  // Generate random letters to imitate a search. We can change the length of the search string
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let randomLetters = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomLetters += alphabet[randomIndex];
  }
  return randomLetters;
}

export function sumOfDurations(duration1, duration2) {
  // Function to sum the durations of two tracks
  const [minutes1, seconds1] = duration1.split(":").map(Number);
  const [minutes2, seconds2] = duration2.split(":").map(Number);
  const totalSeconds = minutes1 * 60 + seconds1 + minutes2 * 60 + seconds2;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${totalMinutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function convertToSeconds(duration) {
  // Function to convert the duration to seconds
  const [minutes, seconds] = duration.split(":").map(Number);
  return minutes * 60 + seconds;
}
