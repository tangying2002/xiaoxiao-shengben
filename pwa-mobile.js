(function(){
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function(){ navigator.serviceWorker.register('./service-worker.js').catch(function(){}); });
  }
  function isIos(){ return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); }
  function isStandalone(){ return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches; }
  if (!isIos() || isStandalone() || localStorage.getItem('xiaoxiao-pwa-tip-hidden') === '1') return;
  var bar=document.createElement('div');
  bar.id='pwa-install-tip';
  bar.innerHTML='<div><strong>添加到苹果主屏幕</strong><span>在 Safari 点击“分享”按钮，再选择“添加到主屏幕”。</span></div><button type="button" aria-label="关闭">×</button>';
  var style=document.createElement('style');
  style.textContent='#pwa-install-tip{position:fixed;z-index:10000;left:12px;right:12px;bottom:12px;display:flex;justify-content:space-between;gap:12px;padding:12px 14px;border-radius:14px;background:#173c77;color:#fff;box-shadow:0 10px 30px rgba(15,35,70,.3);font-size:13px}#pwa-install-tip div{display:grid;gap:2px}#pwa-install-tip span{opacity:.86}#pwa-install-tip button{width:30px;height:30px;border:0;border-radius:50%;background:rgba(255,255,255,.16);color:#fff;font-size:22px;line-height:1}';
  document.head.appendChild(style);
  document.body.appendChild(bar);
  bar.querySelector('button').addEventListener('click',function(){ localStorage.setItem('xiaoxiao-pwa-tip-hidden','1'); bar.remove(); });
})();