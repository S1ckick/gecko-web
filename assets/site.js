
'use strict';
document.documentElement.classList.add('js');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  menuButton.setAttribute('aria-expanded',String(open));
  nav.classList.toggle('is-open',open);
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menuButton.setAttribute('aria-expanded','false');nav.classList.remove('is-open');
}));
const pilot=window.GECKODOCK_PILOT;
if(pilot){
  let target='hs90a',metric='hits';
  const targetButtons=document.querySelectorAll('[data-target]');
  const metricButtons=document.querySelectorAll('[data-metric]');
  const panels=document.querySelectorAll('.chart-panel');
  const formatAuc=value=>value.toFixed(3).replace('.',',');
  function render(){
    const data=pilot[target];
    panels.forEach(panel=>{panel.hidden=panel.id!=='panel-'+target;});
    targetButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.target===target)));
    metricButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.metric===metric)));
    const panel=document.getElementById('panel-'+target);
    panel.querySelector('.chart-metric').textContent=metric==='hits'?'Активные соединения среди первых 11':'ROC-AUC · общий набор успешных расчётов';
    data.methods.forEach(method=>{
      const row=panel.querySelector('.bar-row.'+method.method);
      const value=metric==='hits'?method.hits:method.auc,maximum=metric==='hits'?11:1;
      row.querySelector('.bar-fill').style.width=(value/maximum*100)+'%';
      row.querySelector('.bar-value').textContent=metric==='hits'?String(value):formatAuc(value);
      row.setAttribute('aria-label',method.label+': '+(metric==='hits'?value+' из 11':formatAuc(value)));
    });
    panel.querySelector('.axis-end').textContent=metric==='hits'?'11 соединений':'1,0 ROC-AUC';
    panel.querySelector('.chart-note').textContent=metric==='hits'?data.note:'Сравнение на '+data.common+' соединениях ('+data.actives+' активных) с успешными расчётами всех трёх методов. ROC-AUC = 0,5 соответствует случайному ранжированию.';
    document.getElementById('metric-explanation').textContent=metric==='hits'?'Первые 11 — это 5% от 220 соединений.':'ROC-AUC показывает разделение активных соединений и decoys во всём списке. Все методы сравниваются на одинаковом наборе; выше — лучше.';
  }
  targetButtons.forEach(button=>button.addEventListener('click',()=>{target=button.dataset.target;render();}));
  metricButtons.forEach(button=>button.addEventListener('click',()=>{metric=button.dataset.metric;render();}));
  render();
}

const screenshotButtons=document.querySelectorAll('[data-shot]');
const screenshotFigures=document.querySelectorAll('.app-shot');
screenshotButtons.forEach(button=>button.addEventListener('click',()=>{
  screenshotButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  screenshotFigures.forEach(figure=>{figure.hidden=figure.id!=='shot-'+button.dataset.shot;});
}));
