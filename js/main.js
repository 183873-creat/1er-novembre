// يستعمل العلم المحلي أولاً، وإذا لم يوجد يحمّله من ويكيميديا كومنز
document.querySelectorAll('img[data-fallback]').forEach(function (img) {
  img.addEventListener('error', function () {
    if (img.dataset.tried) return;
    img.dataset.tried = '1';
    img.src = img.dataset.fallback;
  });
});

// إذا لم توجد صورة قائد، تظهر بطاقة بديلة بدل الصورة المكسورة
document.querySelectorAll('.card img').forEach(function (img) {
  function mark() { img.closest('.card').classList.add('missing'); }
  img.addEventListener('error', mark);
  if (img.complete && img.naturalWidth === 0) mark();
});
