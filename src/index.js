import {smsLink} from "./device";
const args = new URLSearchParams(window.location.search)

function doRedirect() {
  const msg = args.get('m');
  if (msg === null) {
    document.querySelector('body').innerHTML = `<p>Please provide <i>m</i> query param with a message</p>`;
    return;
  }
  const link = smsLink(msg);
  location.href = link;
}

doRedirect();
