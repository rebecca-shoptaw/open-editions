//Note: New feature in progress, to be incorporated hwen auido player is rebuilt.

export const useBookmarks = (bookId: string) => {
  let track = document.querySelector("audio") as HTMLAudioElement;

  const storeTimeData = () => {
    let timeCode = 0;
    let chapter = "";

    const bookMark = { chapter: chapter, timeCode: timeCode };
    localStorage.setItem(bookId, JSON.stringify(bookMark));

    return true;
  };

  const seekStoredTime = () => {
    let storedTime = localStorage.getItem(bookId);
    if (storedTime == null) return false;
    let { chapter, timeCode } = JSON.parse(storedTime);
    let chapterBtn = document.querySelector(
      `[data-idx=${chapter}]`
    ) as HTMLElement;
    chapterBtn.click();
    track.currentTime = timeCode;
  };

  const clearStoredTime = () => {
    localStorage.removeItem(bookId);
  };

  return { storeTimeData, seekStoredTime, clearStoredTime };
};
