let tg = window.Telegram;
if (tg != undefined) {
  if (tg.WebApp != undefined && tg.WebApp.initData != undefined) {
    let safe = tg.WebApp.initData;
    // Получение ID пользователя
    let userId = safe.user.id;
    // Отправка ID пользователя на сайт
    // В этом примере мы будем использовать JavaScript для отправки данных
    // на сервер, где они будут обработаны и отображены
    document.getElementById('userIdDisplay').innerText = `Ваш ID: ${userId}`;
  }
}
