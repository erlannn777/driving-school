const decode = (html: any) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};
export default decode;
