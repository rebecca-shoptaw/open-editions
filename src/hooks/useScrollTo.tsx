export const useScrollTo = () => {
  const scrollToElement = (id: string) => {
    let element = document.getElementById(id);
    if (element) element.scrollIntoView();
  };

  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, "", "/");
    });
  };

  return { scrollToElement, resetUrl };
};
