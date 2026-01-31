const params = new URLSearchParams(window.location.search);
const type =params.get("type") || "contact";

const allForms = document.querySelectorAll(".form-section");
allForms.forEach(section => {
    section.style.display = section.id === type ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});

function searchAddress() {
  const zip1 = document.getElementById("entry-postal1").value;
  const zip2 = document.getElementById("entry-postal2").value;
  const zipcode = zip1 + zip2;
  const error = document.getElementById("zipError");
  error.style.display = "none";

  if (!/^\d{3}$/.test(zip1) || !/^\d{4}$/.test(zip2)) {
    error.textContent = "郵便番号は「3桁 - 4桁」の数字で入力してください。";
    error.style.display = "block";
    return;
  }

  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.results) {
        const result = data.results[0];
        document.getElementById("entry-prefecture").value = result.address1;
        document.getElementById("entry-city").value = result.address2;
        document.getElementById("entry-address").value = result.address3;
      } else {
        error.textContent = "該当する住所が見つかりませんでした。";
        error.style.display = "block";
      }
    })
    .catch(() => {
      error.textContent = "通信エラーが発生しました。";
      error.style.display = "block";
    });
}

const emailInput = document.getElementById('contact-email');
const telInput = document.getElementById('contact-tel');
const emailCheck = document.getElementById('reply-email');
const telCheck = document.getElementById('reply-tel');
const replyError = document.getElementById('replyError');
const form = document.getElementById('contact');

function updateRequiredFields() {
    // メールチェックに応じて required を設定
    if (emailCheck.checked) {
        emailInput.setAttribute('required', 'required');
    }else {
        emailInput.removeAttribute('required');
    }

    // 電話チェックに応じて required を設定
    if (telCheck.checked) {
        telInput.setAttribute('required', 'required');
    } else {
        telInput.removeAttribute('required');
    }
}

// フォーム送信前に「どちらかチェックされているか」を検証
form.addEventListener('submit', function (e) {
    updateRequiredFields(); // 念のため実行

    if (!emailCheck.checked && !telCheck.checked) {
        e.preventDefault(); // 送信をブロック
        replyError.style.display = 'block';
    } else {
        replyError.style.display = 'none';
    }

    if (!form.reportValidity()) {
        e.preventDefault(); // バリデーションNGなら送信中止
    }
});

// チェックボックス変更時にrequired更新
emailCheck.addEventListener('change', updateRequiredFields);
telCheck.addEventListener('change', updateRequiredFields);

// ページ読み込み時に初期状態設定
window.addEventListener('DOMContentLoaded', updateRequiredFields);