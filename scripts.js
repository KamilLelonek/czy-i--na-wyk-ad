(() => {
  const $textField = document.querySelector("#text");

  const PERIOD_INTERVAL = 50;
  const PERIOD_TIMEOUT  = 2000;

  const shuffleText     = ()     => { return Math.random() > 0.5 ? "TAK" : "NIE"; };
  const setText         = (text) => { $textField.innerText = text; };
  const setShuffledText = ()     => { setText(shuffleText()); };
  const interval        = setInterval(setShuffledText, PERIOD_INTERVAL);

  setTimeout(() => {
    clearInterval(interval);
    $textField.innerText = "NIE";
  }, PERIOD_TIMEOUT);
})();
