// 🔼 ページトップへ戻るボタン
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // 📸 写真を選択 → confirm.html へ遷移 & 保存
  function selectPhoto(photoNumber) {
    const list = [
      "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩",
      "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳",
      "㉑", "㉒", "㉓", "㉔", "㉕", "㉖"
    ];
    const photoName = list[photoNumber - 1];
    const photoPath = `menu-images/写真${photoName}.jpg`;
    localStorage.setItem("selectedImage", photoPath);
    window.location.href = "confirm.html";
  }
  
  // 🔙 戻るボタンでトップページに戻る
  function goBack() {
    window.location.href = "index.html";
  }
  
  // 🧠 確認画面の内容を初期化・反映
  window.addEventListener("DOMContentLoaded", () => {
    const selectedImage = localStorage.getItem("selectedImage");
  
    // 画像を表示
    const imgEl = document.getElementById("selectedImage");
    if (selectedImage && imgEl) {
      imgEl.src = selectedImage;
    }
  
    // hidden input に画像パスを入れる
    const hiddenMenu = document.getElementById("selectedMenu");
    if (selectedImage && hiddenMenu) {
      hiddenMenu.value = selectedImage;
    }
  
    // 入力欄（textarea）の内容を hidden に転送
    const visibleTextarea = document.getElementById("userRequest");
    const hiddenRequest = document.getElementById("hiddenRequest");
    if (visibleTextarea && hiddenRequest) {
      visibleTextarea.addEventListener("input", () => {
        hiddenRequest.value = visibleTextarea.value;
      });
    }
  });
  