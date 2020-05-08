function humanReadable(seconds) {
  let hours = seconds/3600;
  let HH = Math.floor(hours);
  let MM = Math.floor((hours%1)*60);
  let SS = Math.round(((hours*60)%1)*60);
  return HH.toString().padStart(2, "0") + ":" + MM.toString().padStart(2, "0") + ":" + SS.toString().padStart(2, "0");
}
