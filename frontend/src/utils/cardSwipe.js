// Smooth cursor-hover auto scroll utilities for template cards

export function handleCardMouseEnter(img) {
  if (!img) return;
  const shot = img.closest('.device-shot');
  if (!shot) return;
  const scrollDist = img.offsetHeight - shot.offsetHeight;
  if (scrollDist > 0) {
    const duration = Math.max(2.5, Math.min(6.5, scrollDist / 200));
    img.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    img.style.transform = `translateY(-${scrollDist}px)`;
  }
}

export function handleCardMouseLeave(img) {
  if (!img) return;
  img.style.transition = 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)';
  img.style.transform = 'translateY(0px)';
}

export function initCardSwipe() {
  return () => {};
}
