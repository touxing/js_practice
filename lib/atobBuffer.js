/**
 * dataURI to blob
 */
function dataURItoBuffer(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Uint8Array(buffer);
  for(var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return buffer;
}

function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], {type: mimeString});
}

function dataRUItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], {type: mimeString});
}











function dataURItoBuffer(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Unit8Array(buffer);
  for(var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return buffer;
}

function dataURItoBuffer(dataURI) {
  var byteString = atob(dataRUI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Unit8Array(buffer);
  for(var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return buffer;
}




function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], {type: mimeString});
}



function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], {type: mimeString});
}