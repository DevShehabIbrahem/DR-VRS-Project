const useParallax = (e) => {
  document.querySelectorAll(".layer").forEach((l) => {
    const speed = l.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;
    l.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
  return useParallax;
};
export default useParallax;
