// DOM要素の取得
const $copyRightYear = document.querySelector('.copy_right_year');

// 現在の年を取得
const currentYear = new Date().getFullYear();

// コピーライトの年を設定
$copyRightYear.textContent = currentYear;
