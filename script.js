// JSのメイン機能が有効かどうかを判定するフラグ
let isJsActive = true;
let count = 0;

// 状態を切り替える関数
function changeState(state) {
  const mainCss = document.getElementById('main-css');
  const stateLabel = document.getElementById('current-state-label');

  if (state === 'html') {
    // CSSを無効化、JSのメイン機能も無効化
    mainCss.disabled = true;
    isJsActive = false;
    stateLabel.textContent = '現在の状態: HTMLのみ';
  } else if (state === 'css') {
    // CSSを有効化、JSのメイン機能は無効化
    mainCss.disabled = false;
    isJsActive = false;
    stateLabel.textContent = '現在の状態: HTML + CSS';
  } else if (state === 'js') {
    // CSSもJSも有効化
    mainCss.disabled = false;
    isJsActive = true;
    stateLabel.textContent = '現在の状態: HTML + CSS + JS';
  }
}

// JSのデモ機能: カウンター
document.getElementById('counter-btn').addEventListener('click', () => {
  if (isJsActive) {
    count++;
    document.getElementById('count-display').textContent = count;
  } else {
    // JSが無効化されている状態でのクリック時の挙動
    alert('現在JavaScriptの機能は無効化されています。');
  }
});