(self["webpackChunk_lenna_project_lenna_web"] = self["webpackChunk_lenna_project_lenna_web"] || []).push([[699],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ 733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.7.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(t){if(true)module.exports=t();else {}}(function(){return function s(a,o,h){function u(r,t){if(!o[r]){if(!a[r]){var e=undefined;if(!t&&e)return require(r,!0);if(l)return l(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var n=o[r]={exports:{}};a[r][0].call(n.exports,function(t){var e=a[r][1][t];return u(e||t)},n,n.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,r){"use strict";var c=t("./utils"),d=t("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(t){for(var e,r,i,n,s,a,o,h=[],u=0,l=t.length,f=l,d="string"!==c.getTypeOf(t);u<t.length;)f=l-u,i=d?(e=t[u++],r=u<l?t[u++]:0,u<l?t[u++]:0):(e=t.charCodeAt(u++),r=u<l?t.charCodeAt(u++):0,u<l?t.charCodeAt(u++):0),n=e>>2,s=(3&e)<<4|r>>4,a=1<f?(15&r)<<2|i>>6:64,o=2<f?63&i:64,h.push(p.charAt(n)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(t){var e,r,i,n,s,a,o=0,h=0,u="data:";if(t.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(t.charAt(t.length-1)===p.charAt(64)&&f--,t.charAt(t.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=d.uint8array?new Uint8Array(0|f):new Array(0|f);o<t.length;)e=p.indexOf(t.charAt(o++))<<2|(n=p.indexOf(t.charAt(o++)))>>4,r=(15&n)<<4|(s=p.indexOf(t.charAt(o++)))>>2,i=(3&s)<<6|(a=p.indexOf(t.charAt(o++))),l[h++]=e,64!==s&&(l[h++]=r),64!==a&&(l[h++]=i);return l}},{"./support":30,"./utils":32}],2:[function(t,e,r){"use strict";var i=t("./external"),n=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),a=t("./stream/DataLengthProbe");function o(t,e,r,i,n){this.compressedSize=t,this.uncompressedSize=e,this.crc32=r,this.compression=i,this.compressedContent=n}o.prototype={getContentWorker:function(){var t=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),e=this;return t.on("end",function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),t},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(t,e,r){return t.pipe(new s).pipe(new a("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",e)},e.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,e,r){"use strict";var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(t){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,e,r){"use strict";var i=t("./utils");var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==i.getTypeOf(t)?function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}(0|e,t,t.length,0):function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e.charCodeAt(a))];return-1^t}(0|e,t,t.length,0):0}},{"./utils":32}],5:[function(t,e,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,e,r){"use strict";var i=null;i="undefined"!=typeof Promise?Promise:t("lie"),e.exports={Promise:i}},{lie:37}],7:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=t("pako"),s=t("./utils"),a=t("./stream/GenericWorker"),o=i?"uint8array":"array";function h(t,e){a.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,t.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},r.compressWorker=function(t){return new h("Deflate",t)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){"use strict";function A(t,e){var r,i="";for(r=0;r<e;r++)i+=String.fromCharCode(255&t),t>>>=8;return i}function i(t,e,r,i,n,s){var a,o,h=t.file,u=t.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),d=I.transformTo("string",O.utf8encode(h.name)),c=h.comment,p=I.transformTo("string",s(c)),m=I.transformTo("string",O.utf8encode(c)),_=d.length!==h.name.length,g=m.length!==c.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};e&&!r||(x.crc32=t.crc32,x.compressedSize=t.compressedSize,x.uncompressedSize=t.uncompressedSize);var S=0;e&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===n?(C=798,z|=function(t,e){var r=t;return t||(r=e?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(t){return 63&(t||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+d,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(i,4)+f+b+p}}var I=t("../utils"),n=t("../stream/GenericWorker"),O=t("../utf8"),B=t("../crc32"),R=t("../signature");function s(t,e,r,i){n.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,n),s.prototype.push=function(t){var e=t.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,n.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:r?(e+100*(r-i-1))/r:100}}))},s.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var r=i(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,r=i(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),e)this.push({data:function(t){return R.DATA_DESCRIPTOR+A(t.crc32,4)+A(t.compressedSize,4)+A(t.uncompressedSize,4)}(t),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var r=this.bytesWritten-t,i=function(t,e,r,i,n){var s=I.transformTo("string",n(i));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(t,2)+A(t,2)+A(e,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,t,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()}),t.on("error",function(t){e.error(t)}),this},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(t){var e=this._sources;if(!n.prototype.error.call(this,t))return!1;for(var r=0;r<e.length;r++)try{e[r].error(t)}catch(t){}return!0},s.prototype.lock=function(){n.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,e,r){"use strict";var u=t("../compressions"),i=t("./ZipFileWorker");r.generateWorker=function(t,a,e){var o=new i(a.streamFiles,e,a.platform,a.encodeFileName),h=0;try{t.forEach(function(t,e){h++;var r=function(t,e){var r=t||e,i=u[r];if(!i)throw new Error(r+" is not a valid compression method !");return i}(e.options.compression,a.compression),i=e.options.compressionOptions||a.compressionOptions||{},n=e.dir,s=e.date;e._compressWorker(r,i).withStreamInfo("file",{name:t,dir:n,date:s,comment:e.comment||"",unixPermissions:e.unixPermissions,dosPermissions:e.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(t){o.error(t)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,e,r){"use strict";function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var t=new i;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.7.1",i.loadAsync=function(t,e){return(new i).loadAsync(t,e)},i.external=t("./external"),e.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,e,r){"use strict";var i=t("./utils"),n=t("./external"),o=t("./utf8"),h=t("./zipEntries"),s=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function l(i){return new n.Promise(function(t,e){var r=i.decompressed.getContentWorker().pipe(new s);r.on("error",function(t){e(t)}).on("end",function(){r.streamInfo.crc32!==i.decompressed.crc32?e(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}e.exports=function(t,s){var a=this;return s=i.extend(s||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(t)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",t,!0,s.optimizedBinaryString,s.base64).then(function(t){var e=new h(s);return e.load(t),e}).then(function(t){var e=[n.Promise.resolve(t)],r=t.files;if(s.checkCRC32)for(var i=0;i<r.length;i++)e.push(l(r[i]));return n.Promise.all(e)}).then(function(t){for(var e=t.shift(),r=e.files,i=0;i<r.length;i++){var n=r[i];a.file(n.fileNameStr,n.decompressed,{binary:!0,optimizedBinaryString:!0,date:n.date,dir:n.dir,comment:n.fileCommentStr.length?n.fileCommentStr:null,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions,createFolders:s.createFolders})}return e.zipComment.length&&(a.comment=e.zipComment),a})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../stream/GenericWorker");function s(t,e){n.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}i.inherits(s,n),s.prototype._bindStream=function(t){var e=this;(this._stream=t).pause(),t.on("data",function(t){e.push({data:t,meta:{percent:0}})}).on("error",function(t){e.isPaused?this.generatedError=t:e.error(t)}).on("end",function(){e.isPaused?e._upstreamEnded=!0:e.end()})},s.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,e,r){"use strict";var n=t("readable-stream").Readable;function i(t,e,r){n.call(this,e),this._helper=t;var i=this;t.on("data",function(t,e){i.push(t)||i._helper.pause(),r&&r(e)}).on("error",function(t){i.emit("error",t)}).on("end",function(){i.push(null)})}t("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},e.exports=i},{"../utils":32,"readable-stream":16}],14:[function(t,e,r){"use strict";e.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(t,e){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(t,e);if("number"==typeof t)throw new Error('The "data" argument must not be a number');return new Buffer(t,e)},allocBuffer:function(t){if(Buffer.alloc)return Buffer.alloc(t);var e=new Buffer(t);return e.fill(0),e},isBuffer:function(t){return Buffer.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){"use strict";function s(t,e,r){var i,n=u.getTypeOf(e),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(t=g(t)),s.createFolders&&(i=_(t))&&b.call(this,i,!0);var a="string"===n&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(e instanceof d&&0===e.uncompressedSize||s.dir||!e||0===e.length)&&(s.base64=!1,s.binary=!0,e="",s.compression="STORE",n="string");var o=null;o=e instanceof d||e instanceof l?e:p.isNode&&p.isStream(e)?new m(t,e):u.prepareContent(t,e,s.binary,s.optimizedBinaryString,s.base64);var h=new c(t,o,s);this.files[t]=h}var n=t("./utf8"),u=t("./utils"),l=t("./stream/GenericWorker"),a=t("./stream/StreamHelper"),f=t("./defaults"),d=t("./compressedObject"),c=t("./zipObject"),o=t("./generate"),p=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),_=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return 0<e?t.substring(0,e):""},g=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},b=function(t,e){return e=void 0!==e?e:f.createFolders,t=g(t),this.files[t]||s.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var i={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,r,i;for(e in this.files)i=this.files[e],(r=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(r,i)},filter:function(r){var i=[];return this.forEach(function(t,e){r(t,e)&&i.push(e)}),i},file:function(t,e,r){if(1!==arguments.length)return t=this.root+t,s.call(this,t,e,r),this;if(h(t)){var i=t;return this.filter(function(t,e){return!e.dir&&i.test(t)})}var n=this.files[this.root+t];return n&&!n.dir?n:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(t,e){return e.dir&&r.test(t)});var t=this.root+r,e=b.call(this,t),i=this.clone();return i.root=e.name,i},remove:function(r){r=this.root+r;var t=this.files[r];if(t||("/"!==r.slice(-1)&&(r+="/"),t=this.files[r]),t&&!t.dir)delete this.files[r];else for(var e=this.filter(function(t,e){return e.name.slice(0,r.length)===r}),i=0;i<e.length;i++)delete this.files[e[i].name];return this},generate:function(t){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,r={};try{if((r=u.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";e=o.generateWorker(this,r,i)}catch(t){(e=new l("error")).error(t)}return new a(e,r.type||"string",r.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=i},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,e,r){e.exports=t("stream")},{stream:void 0}],17:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===e&&this.data[s+1]===r&&this.data[s+2]===i&&this.data[s+3]===n)return s-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.readData(4);return e===s[0]&&r===s[1]&&i===s[2]&&n===s[3]},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],18:[function(t,e,r){"use strict";var i=t("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e);return this.index+=t,r},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readAndCheckSignature:function(t){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=n},{"../utils":32}],19:[function(t,e,r){"use strict";var i=t("./Uint8ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],21:[function(t,e,r){"use strict";var i=t("./ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../support"),s=t("./ArrayReader"),a=t("./StringReader"),o=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");e.exports=function(t){var e=i.getTypeOf(t);return i.checkSupport(e),"string"!==e||n.uint8array?"nodebuffer"===e?new o(t):n.uint8array?new h(i.transformTo("uint8array",t)):new s(i.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,e,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../utils");function s(t){i.call(this,"ConvertWorker to "+t),this.destType=t}n.inherits(s,i),s.prototype.processChunk=function(t){this.push({data:n.transformTo(this.destType,t.data),meta:t.meta})},e.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,i),s.prototype.processChunk=function(t){this.streamInfo.crc32=n(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}i.inherits(s,n),s.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}n.prototype.processChunk.call(this,t)},e.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then(function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=i.getTypeOf(t),e.isPaused||e._tickAndRepeat()},function(t){e.error(t)})}i.inherits(s,n),s.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,e,r){"use strict";function i(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.end()}),t.on("error",function(t){e.error(t)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var t=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=i},{}],29:[function(t,e,r){"use strict";var h=t("../utils"),n=t("./ConvertWorker"),s=t("./GenericWorker"),u=t("../base64"),i=t("../support"),a=t("../external"),o=null;if(i.nodestream)try{o=t("../nodejs/NodejsStreamOutputAdapter")}catch(t){}function l(t,o){return new a.Promise(function(e,r){var i=[],n=t._internalType,s=t._outputType,a=t._mimeType;t.on("data",function(t,e){i.push(t),o&&o(e)}).on("error",function(t){i=[],r(t)}).on("end",function(){try{var t=function(t,e,r){switch(t){case"blob":return h.newBlob(h.transformTo("arraybuffer",e),r);case"base64":return u.encode(e);default:return h.transformTo(t,e)}}(s,function(t,e){var r,i=0,n=null,s=0;for(r=0;r<e.length;r++)s+=e[r].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(n=new Uint8Array(s),r=0;r<e.length;r++)n.set(e[r],i),i+=e[r].length;return n;case"nodebuffer":return Buffer.concat(e);default:throw new Error("concat : unsupported type '"+t+"'")}}(n,i),a);e(t)}catch(t){r(t)}i=[]}).resume()})}function f(t,e,r){var i=e;switch(e){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string"}try{this._internalType=i,this._outputType=e,this._mimeType=r,h.checkSupport(i),this._worker=t.pipe(new n(i)),t.lock()}catch(t){this._worker=new s("error"),this._worker.error(t)}}f.prototype={accumulate:function(t){return l(this,t)},on:function(t,e){var r=this;return"data"===t?this._worker.on(t,function(t){e.call(r,t.data,t.meta)}):this._worker.on(t,function(){h.delay(e,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,e,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=0===new Blob([i],{type:"application/zip"}).size}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch(t){r.nodestream=!1}},{"readable-stream":16}],31:[function(t,e,s){"use strict";for(var o=t("./utils"),h=t("./support"),r=t("./nodejsUtils"),i=t("./stream/GenericWorker"),u=new Array(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;u[254]=u[254]=1;function a(){i.call(this,"utf-8 decode"),this.leftOver=null}function l(){i.call(this,"utf-8 encode")}s.utf8encode=function(t){return h.nodebuffer?r.newBufferFrom(t,"utf-8"):function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=h.uint8array?new Uint8Array(o):new Array(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e}(t)},s.utf8decode=function(t){return h.nodebuffer?o.transformTo("nodebuffer",t).toString("utf-8"):function(t){var e,r,i,n,s=t.length,a=new Array(2*s);for(e=r=0;e<s;)if((i=t[e++])<128)a[r++]=i;else if(4<(n=u[i]))a[r++]=65533,e+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&e<s;)i=i<<6|63&t[e++],n--;1<n?a[r++]=65533:i<65536?a[r++]=i:(i-=65536,a[r++]=55296|i>>10&1023,a[r++]=56320|1023&i)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(t=o.transformTo(h.uint8array?"uint8array":"array",t))},o.inherits(a,i),a.prototype.processChunk=function(t){var e=o.transformTo(h.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=e;(e=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),e.set(r,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var i=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}(e),n=e;i!==e.length&&(h.uint8array?(n=e.subarray(0,i),this.leftOver=e.subarray(i,e.length)):(n=e.slice(0,i),this.leftOver=e.slice(i,e.length))),this.push({data:s.utf8decode(n),meta:t.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,i),l.prototype.processChunk=function(t){this.push({data:s.utf8encode(t.data),meta:t.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,e,a){"use strict";var o=t("./support"),h=t("./base64"),r=t("./nodejsUtils"),i=t("set-immediate-shim"),u=t("./external");function n(t){return t}function l(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r);return e}a.newBlob=function(e,r){a.checkSupport("blob");try{return new Blob([e],{type:r})}catch(t){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(e),i.getBlob(r)}catch(t){throw new Error("Bug : can't construct the Blob.")}}};var s={stringifyByChunk:function(t,e,r){var i=[],n=0,s=t.length;if(s<=r)return String.fromCharCode.apply(null,t);for(;n<s;)"array"===e||"nodebuffer"===e?i.push(String.fromCharCode.apply(null,t.slice(n,Math.min(n+r,s)))):i.push(String.fromCharCode.apply(null,t.subarray(n,Math.min(n+r,s)))),n+=r;return i.join("")},stringifyByChar:function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(t){return!1}}()}};function f(t){var e=65536,r=a.getTypeOf(t),i=!0;if("uint8array"===r?i=s.applyCanBeUsed.uint8array:"nodebuffer"===r&&(i=s.applyCanBeUsed.nodebuffer),i)for(;1<e;)try{return s.stringifyByChunk(t,r,e)}catch(t){e=Math.floor(e/2)}return s.stringifyByChar(t)}function d(t,e){for(var r=0;r<t.length;r++)e[r]=t[r];return e}a.applyFromCharCode=f;var c={};c.string={string:n,array:function(t){return l(t,new Array(t.length))},arraybuffer:function(t){return c.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,r.allocBuffer(t.length))}},c.array={string:f,array:n,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(t)}},c.arraybuffer={string:function(t){return f(new Uint8Array(t))},array:function(t){return d(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:n,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(new Uint8Array(t))}},c.uint8array={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:n,nodebuffer:function(t){return r.newBufferFrom(t)}},c.nodebuffer={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return c.nodebuffer.uint8array(t).buffer},uint8array:function(t){return d(t,new Uint8Array(t.length))},nodebuffer:n},a.transformTo=function(t,e){if(e=e||"",!t)return e;a.checkSupport(t);var r=a.getTypeOf(e);return c[r][t](e)},a.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&r.isBuffer(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(t){var e,r,i="";for(r=0;r<(t||"").length;r++)i+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase();return i},a.delay=function(t,e,r){i(function(){t.apply(r||null,e||[])})},a.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.prototype=new r},a.extend=function(){var t,e,r={};for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e]);return r},a.prepareContent=function(r,t,i,n,s){return u.Promise.resolve(t).then(function(i){return o.blob&&(i instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(i)))&&"undefined"!=typeof FileReader?new u.Promise(function(e,r){var t=new FileReader;t.onload=function(t){e(t.target.result)},t.onerror=function(t){r(t.target.error)},t.readAsArrayBuffer(i)}):i}).then(function(t){var e=a.getTypeOf(t);return e?("arraybuffer"===e?t=a.transformTo("uint8array",t):"string"===e&&(s?t=h.decode(t):i&&!0!==n&&(t=function(t){return l(t,o.uint8array?new Uint8Array(t.length):new Array(t.length))}(t))),t):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),n=t("./utils"),s=t("./signature"),a=t("./zipEntry"),o=(t("./utf8"),t("./support"));function h(t){this.files=[],this.loadOptions=t}h.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(e)+", expected "+n.pretty(t)+")")}},isSignature:function(t,e){var r=this.reader.index;this.reader.setIndex(t);var i=this.reader.readString(4)===e;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=o.uint8array?"uint8array":"array",r=n.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,r,i=this.zip64EndOfCentralSize-44;0<i;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(t=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(t<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(t);var e=t;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=e-r;if(0<i)this.isSignature(e,s.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(t){this.reader=i(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),s=t("./utils"),n=t("./compressedObject"),a=t("./crc32"),o=t("./utf8"),h=t("./compressions"),u=t("./support");function l(t,e){this.options=t,this.loadOptions=e}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(t){var e,r;if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=function(t){for(var e in h)if(h.hasOwnProperty(e)&&h[e].magic===t)return h[e];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==t&&(this.dosPermissions=63&this.externalFileAttributes),3==t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=i(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,i,n=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<n;)e=t.readInt(2),r=t.readInt(2),i=t.readData(r),this.extraFields[e]={id:e,length:r,value:i};t.setIndex(n)},handleUTF8:function(){var t=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var r=s.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var n=s.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,e,r){"use strict";function i(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=e,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=t("./stream/StreamHelper"),n=t("./stream/DataWorker"),a=t("./utf8"),o=t("./compressedObject"),h=t("./stream/GenericWorker");i.prototype={internalStream:function(t){var e=null,r="string";try{if(!t)throw new Error("No output type specified.");var i="string"===(r=t.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),e=this._decompressWorker();var n=!this._dataBinary;n&&!i&&(e=e.pipe(new a.Utf8EncodeWorker)),!n&&i&&(e=e.pipe(new a.Utf8DecodeWorker))}catch(t){(e=new h("error")).error(t)}return new s(e,r,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof o&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,t,e)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new n(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)i.prototype[u[f]]=l;e.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,l,e){(function(e){"use strict";var r,i,t=e.MutationObserver||e.WebKitMutationObserver;if(t){var n=0,s=new t(u),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var o=new e.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var t,e;i=!0;for(var r=h.length;r;){for(e=h,h=[],t=-1;++t<r;)e[t]();r=h.length}i=!1}l.exports=function(t){1!==h.push(t)||i||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){"use strict";var n=t("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],i=["PENDING"];function o(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=i,this.queue=[],this.outcome=void 0,t!==u&&c(this,t)}function h(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(e,r,i){n(function(){var t;try{t=r(i)}catch(t){return l.reject(e,t)}t===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,t)})}function d(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function c(e,t){var r=!1;function i(t){r||(r=!0,l.reject(e,t))}function n(t){r||(r=!0,l.resolve(e,t))}var s=p(function(){t(n,i)});"error"===s.status&&i(s.value)}function p(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}(e.exports=o).prototype.finally=function(e){if("function"!=typeof e)return this;var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})},o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){if("function"!=typeof t&&this.state===a||"function"!=typeof e&&this.state===s)return this;var r=new this.constructor(u);this.state!==i?f(r,this.state===a?t:e,this.outcome):this.queue.push(new h(r,t,e));return r},h.prototype.callFulfilled=function(t){l.resolve(this.promise,t)},h.prototype.otherCallFulfilled=function(t){f(this.promise,this.onFulfilled,t)},h.prototype.callRejected=function(t){l.reject(this.promise,t)},h.prototype.otherCallRejected=function(t){f(this.promise,this.onRejected,t)},l.resolve=function(t,e){var r=p(d,e);if("error"===r.status)return l.reject(t,r.value);var i=r.value;if(i)c(t,i);else{t.state=a,t.outcome=e;for(var n=-1,s=t.queue.length;++n<s;)t.queue[n].callFulfilled(e)}return t},l.reject=function(t,e){t.state=s,t.outcome=e;for(var r=-1,i=t.queue.length;++r<i;)t.queue[r].callRejected(e);return t},o.resolve=function(t){if(t instanceof this)return t;return l.resolve(new this(u),t)},o.reject=function(t){var e=new this(u);return l.reject(e,t)},o.all=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var i=t.length,n=!1;if(!i)return this.resolve([]);var s=new Array(i),a=0,e=-1,o=new this(u);for(;++e<i;)h(t[e],e);return o;function h(t,e){r.resolve(t).then(function(t){s[e]=t,++a!==i||n||(n=!0,l.resolve(o,s))},function(t){n||(n=!0,l.reject(o,t))})}},o.race=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,i=!1;if(!r)return this.resolve([]);var n=-1,s=new this(u);for(;++n<r;)a=t[n],e.resolve(a).then(function(t){i||(i=!0,l.resolve(s,t))},function(t){i||(i=!0,l.reject(s,t))});var a;return s}},{immediate:36}],38:[function(t,e,r){"use strict";var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,e,r){"use strict";var a=t("./zlib/deflate"),o=t("./utils/common"),h=t("./utils/strings"),n=t("./zlib/messages"),s=t("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,d=0,c=8;function p(t){if(!(this instanceof p))return new p(t);this.options=o.assign({level:f,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==l)throw new Error(n[r]);if(e.header&&a.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(i="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=a.deflateSetDictionary(this.strm,i))!==l)throw new Error(n[r]);this._dict_set=!0}}function i(t,e){var r=new p(e);if(r.push(t,!0),r.err)throw r.msg||n[r.err];return r.result}p.prototype.push=function(t,e){var r,i,n=this.strm,s=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===u.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new o.Buf8(s),n.next_out=0,n.avail_out=s),1!==(r=a.deflate(n,i))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(n.output,n.next_out))):this.onData(o.shrinkBuf(n.output,n.next_out)))}while((0<n.avail_in||0===n.avail_out)&&1!==r);return 4===i?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==i||(this.onEnd(l),!(n.avail_out=0))},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=p,r.deflate=i,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,i(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,i(t,e)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,e,r){"use strict";var d=t("./zlib/inflate"),c=t("./utils/common"),p=t("./utils/strings"),m=t("./zlib/constants"),i=t("./zlib/messages"),n=t("./zlib/zstream"),s=t("./zlib/gzheader"),_=Object.prototype.toString;function a(t){if(!(this instanceof a))return new a(t);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&0<=e.windowBits&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(0<=e.windowBits&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),15<e.windowBits&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new n,this.strm.avail_out=0;var r=d.inflateInit2(this.strm,e.windowBits);if(r!==m.Z_OK)throw new Error(i[r]);this.header=new s,d.inflateGetHeader(this.strm,this.header)}function o(t,e){var r=new a(e);if(r.push(t,!0),r.err)throw r.msg||i[r.err];return r.result}a.prototype.push=function(t,e){var r,i,n,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof t?h.input=p.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?h.input=new Uint8Array(t):h.input=t,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new c.Buf8(u),h.next_out=0,h.avail_out=u),(r=d.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=d.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||i!==m.Z_FINISH&&i!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(n=p.utf8border(h.output,h.next_out),s=h.next_out-n,a=p.buf2string(h.output,n),h.next_out=s,h.avail_out=u-s,s&&c.arraySet(h.output,h.output,n,s,0),this.onData(a)):this.onData(c.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(i=m.Z_FINISH),i===m.Z_FINISH?(r=d.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):i!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(t){this.chunks.push(t)},a.prototype.onEnd=function(t){t===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,o(t,e)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){var e,r,i,n,s,a;for(e=i=0,r=t.length;e<r;e++)i+=t[e].length;for(a=new Uint8Array(i),e=n=0,r=t.length;e<r;e++)s=t[e],a.set(s,n),n+=s.length;return a}},s={arraySet:function(t,e,r,i,n){for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(i)},{}],42:[function(t,e,r){"use strict";var h=t("./common"),n=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var u=new h.Buf8(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;function l(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&n))return String.fromCharCode.apply(null,h.shrinkBuf(t,e));for(var r="",i=0;i<e;i++)r+=String.fromCharCode(t[i]);return r}u[254]=u[254]=1,r.string2buf=function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=new h.Buf8(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e},r.buf2binstring=function(t){return l(t,t.length)},r.binstring2buf=function(t){for(var e=new h.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r);return e},r.buf2string=function(t,e){var r,i,n,s,a=e||t.length,o=new Array(2*a);for(r=i=0;r<a;)if((n=t[r++])<128)o[i++]=n;else if(4<(s=u[n]))o[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&r<a;)n=n<<6|63&t[r++],s--;1<s?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return l(o,i)},r.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}},{"./common":41}],43:[function(t,e,r){"use strict";e.exports=function(t,e,r,i){for(var n=65535&t|0,s=t>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(n=n+e[i++]|0)|0,--a;);n%=65521,s%=65521}return n|s<<16|0}},{}],44:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,e,r){"use strict";var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}},{}],46:[function(t,e,r){"use strict";var h,d=t("../utils/common"),u=t("./trees"),c=t("./adler32"),p=t("./crc32"),i=t("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,n=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(t,e){return t.msg=i[e],e}function T(t){return(t<<1)-(4<t?9:0)}function D(t){for(var e=t.length;0<=--e;)t[e]=0}function F(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(d.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function N(t,e){u._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,F(t.strm)}function U(t,e){t.pending_buf[t.pending++]=e}function P(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function L(t,e){var r,i,n=t.max_chain_length,s=t.strstart,a=t.prev_length,o=t.nice_match,h=t.strstart>t.w_size-z?t.strstart-(t.w_size-z):0,u=t.window,l=t.w_mask,f=t.prev,d=t.strstart+S,c=u[s+a-1],p=u[s+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(u[(r=e)+a]===p&&u[r+a-1]===c&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<d);if(i=S-(d-s),s=d-S,a<i){if(t.match_start=e,o<=(a=i))break;c=u[s+a-1],p=u[s+a]}}}while((e=f[e&l])>h&&0!=--n);return a<=t.lookahead?a:t.lookahead}function j(t){var e,r,i,n,s,a,o,h,u,l,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-z)){for(d.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=r=t.hash_size;i=t.head[--e],t.head[e]=f<=i?i-f:0,--r;);for(e=r=f;i=t.prev[--e],t.prev[e]=f<=i?i-f:0,--r;);n+=f}if(0===t.strm.avail_in)break;if(a=t.strm,o=t.window,h=t.strstart+t.lookahead,u=n,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,d.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=c(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),t.lookahead+=r,t.lookahead+t.insert>=x)for(s=t.strstart-t.insert,t.ins_h=t.window[s],t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+x-1])&t.hash_mask,t.prev[s&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=s,s++,t.insert--,!(t.lookahead+t.insert<x)););}while(t.lookahead<z&&0!==t.strm.avail_in)}function Z(t,e){for(var r,i;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r)),t.match_length>=x)if(i=u._tr_tally(t,t.strstart-t.match_start,t.match_length-x),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=x){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function W(t,e){for(var r,i,n;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=x-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r),t.match_length<=5&&(1===t.strategy||t.match_length===x&&4096<t.strstart-t.match_start)&&(t.match_length=x-1)),t.prev_length>=x&&t.match_length<=t.prev_length){for(n=t.strstart+t.lookahead-x,i=u._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-x),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=x-1,t.strstart++,i&&(N(t,!1),0===t.strm.avail_out))return A}else if(t.match_available){if((i=u._tr_tally(t,0,t.window[t.strstart-1]))&&N(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return A}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=u._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function M(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*w),this.dyn_dtree=new d.Buf16(2*(2*a+1)),this.bl_tree=new d.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(k+1),this.heap=new d.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=n,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?C:E,t.adler=2===e.wrap?0:1,e.last_flush=l,u._tr_init(e),m):R(t,_)}function K(t){var e=G(t);return e===m&&function(t){t.window_size=2*t.w_size,D(t.head),t.max_lazy_match=h[t.level].max_lazy,t.good_match=h[t.level].good_length,t.nice_match=h[t.level].nice_length,t.max_chain_length=h[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=x-1,t.match_available=0,t.ins_h=0}(t.state),e}function Y(t,e,r,i,n,s){if(!t)return _;var a=1;if(e===g&&(e=6),i<0?(a=0,i=-i):15<i&&(a=2,i-=16),n<1||y<n||r!==v||i<8||15<i||e<0||9<e||s<0||b<s)return R(t,_);8===i&&(i=9);var o=new H;return(t.state=o).strm=t,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new d.Buf8(2*o.w_size),o.head=new d.Buf16(o.hash_size),o.prev=new d.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new d.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=r,K(t)}h=[new M(0,0,0,0,function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(j(t),0===t.lookahead&&e===l)return A;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,N(t,!1),0===t.strm.avail_out))return A;if(t.strstart-t.block_start>=t.w_size-z&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):(t.strstart>t.block_start&&(N(t,!1),t.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(t,e){return Y(t,e,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?_:(t.state.gzhead=e,m):_},r.deflate=function(t,e){var r,i,n,s;if(!t||!t.state||5<e||e<0)return t?R(t,_):_;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||666===i.status&&e!==f)return R(t,0===t.avail_out?-5:_);if(i.strm=t,r=i.last_flush,i.last_flush=e,i.status===C)if(2===i.wrap)t.adler=0,U(i,31),U(i,139),U(i,8),i.gzhead?(U(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),U(i,255&i.gzhead.time),U(i,i.gzhead.time>>8&255),U(i,i.gzhead.time>>16&255),U(i,i.gzhead.time>>24&255),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(U(i,255&i.gzhead.extra.length),U(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=p(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(U(i,0),U(i,0),U(i,0),U(i,0),U(i,0),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,3),i.status=E);else{var a=v+(i.w_bits-8<<4)<<8;a|=(2<=i.strategy||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(a|=32),a+=31-a%31,i.status=E,P(i,a),0!==i.strstart&&(P(i,t.adler>>>16),P(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending!==i.pending_buf_size));)U(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(t),i.pending+2<=i.pending_buf_size&&(U(i,255&t.adler),U(i,t.adler>>8&255),t.adler=0,i.status=E)):i.status=E),0!==i.pending){if(F(t),0===t.avail_out)return i.last_flush=-1,m}else if(0===t.avail_in&&T(e)<=T(r)&&e!==f)return R(t,-5);if(666===i.status&&0!==t.avail_in)return R(t,-5);if(0!==t.avail_in||0!==i.lookahead||e!==l&&666!==i.status){var o=2===i.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(j(t),0===t.lookahead)){if(e===l)return A;break}if(t.match_length=0,r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):3===i.strategy?function(t,e){for(var r,i,n,s,a=t.window;;){if(t.lookahead<=S){if(j(t),t.lookahead<=S&&e===l)return A;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=x&&0<t.strstart&&(i=a[n=t.strstart-1])===a[++n]&&i===a[++n]&&i===a[++n]){s=t.strstart+S;do{}while(i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&n<s);t.match_length=S-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=x?(r=u._tr_tally(t,1,t.match_length-x),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):h[i.level].func(i,e);if(o!==O&&o!==B||(i.status=666),o===A||o===O)return 0===t.avail_out&&(i.last_flush=-1),m;if(o===I&&(1===e?u._tr_align(i):5!==e&&(u._tr_stored_block(i,0,0,!1),3===e&&(D(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),F(t),0===t.avail_out))return i.last_flush=-1,m}return e!==f?m:i.wrap<=0?1:(2===i.wrap?(U(i,255&t.adler),U(i,t.adler>>8&255),U(i,t.adler>>16&255),U(i,t.adler>>24&255),U(i,255&t.total_in),U(i,t.total_in>>8&255),U(i,t.total_in>>16&255),U(i,t.total_in>>24&255)):(P(i,t.adler>>>16),P(i,65535&t.adler)),F(t),0<i.wrap&&(i.wrap=-i.wrap),0!==i.pending?m:1)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==C&&69!==e&&73!==e&&91!==e&&103!==e&&e!==E&&666!==e?R(t,_):(t.state=null,e===E?R(t,-3):m):_},r.deflateSetDictionary=function(t,e){var r,i,n,s,a,o,h,u,l=e.length;if(!t||!t.state)return _;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(t.adler=c(t.adler,e,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new d.Buf8(r.w_size),d.arraySet(u,e,l-r.w_size,r.w_size,0),e=u,l=r.w_size),a=t.avail_in,o=t.next_in,h=t.input,t.avail_in=l,t.next_in=0,t.input=e,j(r);r.lookahead>=x;){for(i=r.strstart,n=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+x-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++,--n;);r.strstart=i,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,t.next_in=o,t.input=h,t.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,e,r){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,e,r){"use strict";e.exports=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C;r=t.state,i=t.next_in,z=t.input,n=i+(t.avail_in-5),s=t.next_out,C=t.output,a=s-(e-t.avail_out),o=s+(t.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,d=r.window,c=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;t:do{p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=m[c&g];e:for(;;){if(c>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(c&(1<<y)-1)];continue e}if(32&y){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}w=65535&v,(y&=15)&&(p<y&&(c+=z[i++]<<p,p+=8),w+=c&(1<<y)-1,c>>>=y,p-=y),p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=_[c&b];r:for(;;){if(c>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(c&(1<<y)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(k=65535&v,p<(y&=15)&&(c+=z[i++]<<p,(p+=8)<y&&(c+=z[i++]<<p,p+=8)),h<(k+=c&(1<<y)-1)){t.msg="invalid distance too far back",r.mode=30;break t}if(c>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(S=d,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=d[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=d[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(i<n&&s<o);i-=w=p>>3,c&=(1<<(p-=w<<3))-1,t.next_in=i,t.next_out=s,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=s<o?o-s+257:257-(s-o),r.hold=c,r.bits=p}},{}],49:[function(t,e,r){"use strict";var I=t("../utils/common"),O=t("./adler32"),B=t("./crc32"),R=t("./inffast"),T=t("./inftrees"),D=1,F=2,N=0,U=-2,P=1,i=852,n=592;function L(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=P,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new I.Buf32(i),e.distcode=e.distdyn=new I.Buf32(n),e.sane=1,e.back=-1,N):U}function o(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,a(t)):U}function h(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||15<e)?U:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,o(t))):U}function u(t,e){var r,i;return t?(i=new s,(t.state=i).window=null,(r=h(t,e))!==N&&(t.state=null),r):U}var l,f,d=!0;function j(t){if(d){var e;for(l=new I.Buf32(512),f=new I.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(T(D,t.lens,0,288,l,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;T(F,t.lens,0,32,f,0,t.work,{bits:5}),d=!1}t.lencode=l,t.lenbits=9,t.distcode=f,t.distbits=5}function Z(t,e,r,i){var n,s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),i>=s.wsize?(I.arraySet(s.window,e,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(i<(n=s.wsize-s.wnext)&&(n=i),I.arraySet(s.window,e,r-i,n,s.wnext),(i-=n)?(I.arraySet(s.window,e,r-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(t){return u(t,15)},r.inflateInit2=u,r.inflate=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return U;12===(r=t.state).mode&&(r.mode=13),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,f=o,d=h,x=N;t:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){t.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){t.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){t.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,t.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(c=r.length)&&(c=o),c&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,i,s,c,k)),512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,r.length-=c),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(65535&r.check)){t.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}t.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,2;t.adler=r.check=1,r.mode=12;case 12:if(5===e||6===e)break t;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==e)break;u>>>=2,l-=2;break t;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){t.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(c=r.length){if(o<c&&(c=o),h<c&&(c=h),0===c)break t;I.arraySet(n,i,s,c,a),o-=c,s+=c,h-=c,a+=c,r.length-=c;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){t.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){t.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],c=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+c>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=30;break}for(;c--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){t.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(6<=o&&258<=h){t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,R(t,d),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){t.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){t.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break t;if(c=d-h,r.offset>c){if((c=r.offset-c)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=30;break}p=c>r.wnext?(c-=r.wnext,r.wsize-c):r.wnext-c,c>r.length&&(c=r.length),m=r.window}else m=n,p=a-r.offset,c=r.length;for(h<c&&(c=h),h-=c,r.length-=c;n[a++]=m[p++],--c;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break t;n[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break t;o--,u|=i[s++]<<l,l+=8}if(d-=h,t.total_out+=d,r.total+=d,d&&(t.adler=r.check=r.flags?B(r.check,n,d,a-d):O(r.check,n,d,a-d)),d=h,(r.flags?u:L(u))!==r.check){t.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break t;case 30:x=-3;break t;case 31:return-4;case 32:default:return U}return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,(r.wsize||d!==t.avail_out&&r.mode<30&&(r.mode<27||4!==e))&&Z(t,t.output,t.next_out,d-t.avail_out)?(r.mode=31,-4):(f-=t.avail_in,d-=t.avail_out,t.total_in+=f,t.total_out+=d,r.total+=d,r.wrap&&d&&(t.adler=r.check=r.flags?B(r.check,n,d,t.next_out-d):O(r.check,n,d,t.next_out-d)),t.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===d||4===e)&&x===N&&(x=-5),x)},r.inflateEnd=function(t){if(!t||!t.state)return U;var e=t.state;return e.window&&(e.window=null),t.state=null,N},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?U:((r.head=e).done=!1,N):U},r.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,e,i,0)!==r.check?-3:Z(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,e,r){"use strict";var D=t("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,i,n,s,a,o){var h,u,l,f,d,c,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<i;v++)O[e[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===t||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<i;v++)0!==e[r+v]&&(a[B[e[r+v]]++]=v);if(c=0===t?(A=R=a,19):1===t?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,d=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===t&&852<C||2===t&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<c?(m=0,a[v]):a[v]>c?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;n[d+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=e[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),d+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===t&&852<C||2===t&&592<C)return 1;n[l=E&f]=k<<24|x<<16|d-s|0}}return 0!==E&&(n[d+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,e,r){"use strict";var n=t("../utils/common"),o=0,h=1;function i(t){for(var e=t.length;0<=--e;)t[e]=0}var s=0,a=29,u=256,l=u+1+a,f=30,d=19,_=2*l+1,g=15,c=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));i(z);var C=new Array(2*f);i(C);var E=new Array(512);i(E);var A=new Array(256);i(A);var I=new Array(a);i(I);var O,B,R,T=new Array(f);function D(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function F(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function N(t){return t<256?E[t]:E[256+(t>>>7)]}function U(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function P(t,e,r){t.bi_valid>c-r?(t.bi_buf|=e<<t.bi_valid&65535,U(t,t.bi_buf),t.bi_buf=e>>c-t.bi_valid,t.bi_valid+=r-c):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function L(t,e,r){P(t,r[2*e],r[2*e+1])}function j(t,e){for(var r=0;r|=1&t,t>>>=1,r<<=1,0<--e;);return r>>>1}function Z(t,e,r){var i,n,s=new Array(g+1),a=0;for(i=1;i<=g;i++)s[i]=a=a+r[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=j(s[o]++,o))}}function W(t){var e;for(e=0;e<l;e++)t.dyn_ltree[2*e]=0;for(e=0;e<f;e++)t.dyn_dtree[2*e]=0;for(e=0;e<d;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*m]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8<t.bi_valid?U(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function H(t,e,r,i){var n=2*e,s=2*r;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[r]}function G(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&H(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!H(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function K(t,e,r){var i,n,s,a,o=0;if(0!==t.last_lit)for(;i=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?L(t,n,e):(L(t,(s=A[n])+u+1,e),0!==(a=w[s])&&P(t,n-=I[s],a),L(t,s=N(--i),r),0!==(a=k[s])&&P(t,i-=T[s],a)),o<t.last_lit;);L(t,m,e)}function Y(t,e){var r,i,n,s=e.dyn_tree,a=e.stat_desc.static_tree,o=e.stat_desc.has_stree,h=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(t.heap[++t.heap_len]=u=r,t.depth[r]=0):s[2*r+1]=0;for(;t.heap_len<2;)s[2*(n=t.heap[++t.heap_len]=u<2?++u:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=a[2*n+1]);for(e.max_code=u,r=t.heap_len>>1;1<=r;r--)G(t,s,r);for(n=h;r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],G(t,s,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,s[2*n]=s[2*r]+s[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,s[2*r+1]=s[2*i+1]=n,t.heap[1]=n++,G(t,s,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,s,a,o,h=e.dyn_tree,u=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,m=0;for(s=0;s<=g;s++)t.bl_count[s]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<_;r++)p<(s=h[2*h[2*(i=t.heap[r])+1]+1]+1)&&(s=p,m++),h[2*i+1]=s,u<i||(t.bl_count[s]++,a=0,c<=i&&(a=d[i-c]),o=h[2*i],t.opt_len+=o*(s+a),f&&(t.static_len+=o*(l[2*i+1]+a)));if(0!==m){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(i=t.bl_count[s];0!==i;)u<(n=t.heap[--r])||(h[2*n+1]!==s&&(t.opt_len+=(s-h[2*n+1])*h[2*n],h[2*n+1]=s),i--)}}(t,e),Z(s,u,t.bl_count)}function X(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=a,a=e[2*(i+1)+1],++o<h&&n===a||(o<u?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[2*b]++):o<=10?t.bl_tree[2*v]++:t.bl_tree[2*y]++,s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4))}function V(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),i=0;i<=r;i++)if(n=a,a=e[2*(i+1)+1],!(++o<h&&n===a)){if(o<u)for(;L(t,n,t.bl_tree),0!=--o;);else 0!==n?(n!==s&&(L(t,n,t.bl_tree),o--),L(t,b,t.bl_tree),P(t,o-3,2)):o<=10?(L(t,v,t.bl_tree),P(t,o-3,3)):(L(t,y,t.bl_tree),P(t,o-11,7));s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4)}}i(T);var q=!1;function J(t,e,r,i){P(t,(s<<1)+(i?1:0),3),function(t,e,r,i){M(t),i&&(U(t,r),U(t,~r)),n.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r,!0)}r._tr_init=function(t){q||(function(){var t,e,r,i,n,s=new Array(g+1);for(i=r=0;i<a-1;i++)for(I[i]=r,t=0;t<1<<w[i];t++)A[r++]=i;for(A[r-1]=i,i=n=0;i<16;i++)for(T[i]=n,t=0;t<1<<k[i];t++)E[n++]=i;for(n>>=7;i<f;i++)for(T[i]=n<<7,t=0;t<1<<k[i]-7;t++)E[256+n++]=i;for(e=0;e<=g;e++)s[e]=0;for(t=0;t<=143;)z[2*t+1]=8,t++,s[8]++;for(;t<=255;)z[2*t+1]=9,t++,s[9]++;for(;t<=279;)z[2*t+1]=7,t++,s[7]++;for(;t<=287;)z[2*t+1]=8,t++,s[8]++;for(Z(z,l+1,s),t=0;t<f;t++)C[2*t+1]=5,C[2*t]=j(t,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,d,p)}(),q=!0),t.l_desc=new F(t.dyn_ltree,O),t.d_desc=new F(t.dyn_dtree,B),t.bl_desc=new F(t.bl_tree,R),t.bi_buf=0,t.bi_valid=0,W(t)},r._tr_stored_block=J,r._tr_flush_block=function(t,e,r,i){var n,s,a=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return o;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return h;for(e=32;e<u;e++)if(0!==t.dyn_ltree[2*e])return h;return o}(t)),Y(t,t.l_desc),Y(t,t.d_desc),a=function(t){var e;for(X(t,t.dyn_ltree,t.l_desc.max_code),X(t,t.dyn_dtree,t.d_desc.max_code),Y(t,t.bl_desc),e=d-1;3<=e&&0===t.bl_tree[2*S[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=n&&(n=s)):n=s=r+5,r+4<=n&&-1!==e?J(t,e,r,i):4===t.strategy||s===n?(P(t,2+(i?1:0),3),K(t,z,C)):(P(t,4+(i?1:0),3),function(t,e,r,i){var n;for(P(t,e-257,5),P(t,r-1,5),P(t,i-4,4),n=0;n<i;n++)P(t,t.bl_tree[2*S[n]+1],3);V(t,t.dyn_ltree,e-1),V(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),K(t,t.dyn_ltree,t.dyn_dtree)),W(t),i&&M(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(A[r]+u+1)]++,t.dyn_dtree[2*N(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){P(t,2,3),L(t,m,z),function(t){16===t.bi_valid?(U(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":41}],53:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,e,r){"use strict";e.exports="function"==typeof setImmediate?setImmediate:function(){var t=[].slice.apply(arguments);t.splice(1,0,0),setTimeout.apply(null,t)}},{}]},{},[10])(10)});

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ VueDraggableNext)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/*!
  * vue-draggable-next v2.0.0
  * (c) 2021 Anish George
  * @license MIT
  */


/**!
 * Sortable 1.13.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var version = "1.13.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

function getConsole() {
    if (typeof window !== 'undefined') {
        return window.console;
    }
    return __webpack_require__.g.console;
}
const console = getConsole();
function cached(fn) {
    const cache = Object.create(null);
    return function cachedFn(str) {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
const regex = /-(\w)/g;
const camelize = cached((str) => str.replace(regex, (_, c) => (c ? c.toUpperCase() : '')));
function removeNode(node) {
    if (node.parentElement !== null) {
        node.parentElement.removeChild(node);
    }
}
function insertNodeAt(fatherNode, node, position) {
    const refNode = position === 0
        ? fatherNode.children[0]
        : fatherNode.children[position - 1].nextSibling;
    fatherNode.insertBefore(node, refNode);
}

function computeVmIndex(vnodes, element) {
    return Object.values(vnodes).indexOf(element);
}
function computeIndexes(slots, children, isTransition, footerOffset) {
    if (!slots) {
        return [];
    }
    const elmFromNodes = Object.values(slots);
    const footerIndex = children.length - footerOffset;
    const rawIndexes = [...children].map((elt, idx) => idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt));
    return rawIndexes;
}
function emit(evtName, evtData) {
    //@ts-ignore
    this.$nextTick(() => this.$emit(evtName.toLowerCase(), evtData));
}
function delegateAndEmit(evtName) {
    //@ts-ignore
    return evtData => {
        //@ts-ignore
        if (this.realList !== null) {
            //@ts-ignore
            this['onDrag' + evtName](evtData);
        }
        //@ts-ignore
        emit.call(this, evtName, evtData);
    };
}
function isTransitionName(name) {
    return ['transition-group', 'TransitionGroup'].includes(name);
}
function isTransition(slots) {
    if (!slots || slots.length !== 1) {
        return false;
    }
    // @ts-ignore
    const [{ type }] = slots;
    if (!type) {
        return false;
    }
    //@ts-ignore
    return isTransitionName(type.name);
}
function getComponentAttributes($attrs, componentData) {
    if (!componentData) {
        return $attrs;
    }
    return { ...componentData.props, ...componentData.attrs };
}
const eventsListened = ['Start', 'Add', 'Remove', 'Update', 'End'];
const eventsToEmit = ['Choose', 'Unchoose', 'Sort', 'Filter', 'Clone'];
const readonlyProperties = ['Move', ...eventsListened, ...eventsToEmit].map(evt => 'on' + evt);
// @ts-ignore
let draggingElement = null;
const props = {
    options: Object,
    list: {
        type: Array,
        required: false,
        default: null,
    },
    noTransitionOnDrag: {
        type: Boolean,
        default: false,
    },
    clone: {
        type: Function,
        default: (original) => {
            return original;
        },
    },
    tag: {
        type: String,
        default: 'div',
    },
    move: {
        type: Function,
        default: null,
    },
    componentData: {
        type: Object,
        required: false,
        default: null,
    },
    component: {
        type: String,
        default: null,
    },
    modelValue: {
        type: Array,
        required: false,
        default: null,
    },
};
const VueDraggableNext = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'VueDraggableNext',
    inheritAttrs: false,
    emits: [
        'update:modelValue',
        'move',
        'change',
        ...eventsListened.map(s => s.toLowerCase()),
        ...eventsToEmit.map(s => s.toLowerCase()),
    ],
    props,
    data() {
        return {
            transitionMode: false,
            noneFunctionalComponentMode: false,
            headerOffset: 0,
            footerOffset: 0,
            _sortable: {},
            visibleIndexes: [],
            context: {},
        };
    },
    render() {
        const slots = this.$slots.default ? this.$slots.default() : null;
        const attrs = getComponentAttributes(this.$attrs, this.componentData);
        if (!slots)
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(this.getTag(), attrs, []);
        this.transitionMode = isTransition(slots);
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(this.getTag(), attrs, slots);
    },
    created() {
        if (this.list !== null && this.modelValue !== null) {
            console.error('list props are mutually exclusive! Please set one.');
        }
    },
    mounted() {
        const optionsAdded = {};
        eventsListened.forEach(elt => {
            optionsAdded['on' + elt] = delegateAndEmit.call(this, elt);
        });
        eventsToEmit.forEach(elt => {
            optionsAdded['on' + elt] = emit.bind(this, elt);
        });
        const attributes = Object.keys(this.$attrs).reduce((res, key) => {
            res[camelize(key)] = this.$attrs[key];
            return res;
        }, {});
        const options = Object.assign({}, attributes, optionsAdded, {
            onMove: (evt, originalEvent) => {
                return this.onDragMove(evt, originalEvent);
            },
        });
        !('draggable' in options) && (options.draggable = '>*');
        this._sortable = new Sortable(this.$el, options);
        this.computeIndexes();
    },
    beforeUnmount() {
        try {
            if (this._sortable !== undefined)
                this._sortable.destroy();
        }
        catch (error) { }
    },
    computed: {
        realList() {
            return this.list ? this.list : this.modelValue;
        },
    },
    watch: {
        $attrs: {
            handler(newOptionValue) {
                this.updateOptions(newOptionValue);
            },
            deep: true,
        },
        realList() {
            this.computeIndexes();
        },
    },
    methods: {
        getTag() {
            return this.component ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(this.component) : this.tag;
        },
        updateOptions(newOptionValue) {
            for (var property in newOptionValue) {
                const value = camelize(property);
                if (readonlyProperties.indexOf(value) === -1) {
                    this._sortable.option(value, newOptionValue[property]);
                }
            }
        },
        getChildrenNodes() {
            return this.$el.children;
        },
        computeIndexes() {
            this.$nextTick(() => {
                this.visibleIndexes = computeIndexes(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
            });
        },
        getUnderlyingVm(htmlElt) {
            const index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);
            if (index === -1) {
                //Edge case during move callback: related element might be
                //an element different from collection
                return null;
            }
            //@ts-ignore
            const element = this.realList[index];
            return { index, element };
        },
        emitChanges(evt) {
            this.$nextTick(() => {
                this.$emit('change', evt);
            });
        },
        alterList(onList) {
            if (this.list) {
                onList(this.list);
                return;
            }
            const newList = [...this.modelValue];
            onList(newList);
            this.$emit('update:modelValue', newList);
        },
        spliceList() {
            const spliceList = (list) => list.splice(...arguments);
            this.alterList(spliceList);
        },
        updatePosition(oldIndex, newIndex) {
            const updatePosition = (list) => list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
            this.alterList(updatePosition);
        },
        getVmIndex(domIndex) {
            const indexes = this.visibleIndexes;
            const numberIndexes = indexes.length;
            return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
        },
        getComponent() {
            return this.$slots.default
                ? //@ts-ignore
                    this.$slots.default()[0].componentInstance
                : null;
        },
        resetTransitionData(index) {
            if (!this.noTransitionOnDrag || !this.transitionMode) {
                return;
            }
            var nodes = this.getChildrenNodes();
            nodes[index].data = null;
            const transitionContainer = this.getComponent();
            transitionContainer.children = [];
            transitionContainer.kept = undefined;
        },
        onDragStart(evt) {
            this.context = this.getUnderlyingVm(evt.item);
            if (!this.context)
                return;
            evt.item._underlying_vm_ = this.clone(this.context.element);
            draggingElement = evt.item;
        },
        onDragAdd(evt) {
            const element = evt.item._underlying_vm_;
            if (element === undefined) {
                return;
            }
            removeNode(evt.item);
            const newIndex = this.getVmIndex(evt.newIndex);
            //@ts-ignore
            this.spliceList(newIndex, 0, element);
            this.computeIndexes();
            const added = { element, newIndex };
            this.emitChanges({ added });
        },
        onDragRemove(evt) {
            insertNodeAt(this.$el, evt.item, evt.oldIndex);
            if (evt.pullMode === 'clone') {
                removeNode(evt.clone);
                return;
            }
            if (!this.context)
                return;
            const oldIndex = this.context.index;
            //@ts-ignore
            this.spliceList(oldIndex, 1);
            const removed = { element: this.context.element, oldIndex };
            this.resetTransitionData(oldIndex);
            this.emitChanges({ removed });
        },
        onDragUpdate(evt) {
            removeNode(evt.item);
            insertNodeAt(evt.from, evt.item, evt.oldIndex);
            //@ts-ignore
            const oldIndex = this.context.index;
            const newIndex = this.getVmIndex(evt.newIndex);
            this.updatePosition(oldIndex, newIndex);
            //@ts-ignore
            const moved = { element: this.context.element, oldIndex, newIndex };
            this.emitChanges({ moved });
        },
        updateProperty(evt, propertyName) {
            evt.hasOwnProperty(propertyName) &&
                (evt[propertyName] += this.headerOffset);
        },
        onDragMove(evt, originalEvent) {
            const onMove = this.move;
            if (!onMove || !this.realList) {
                return true;
            }
            const relatedContext = this.getRelatedContextFromMoveEvent(evt);
            const draggedContext = this.context;
            const futureIndex = this.computeFutureIndex(relatedContext, evt);
            Object.assign(draggedContext, { futureIndex });
            const sendEvt = Object.assign({}, evt, {
                relatedContext,
                draggedContext,
            });
            return onMove(sendEvt, originalEvent);
        },
        onDragEnd() {
            this.computeIndexes();
            draggingElement = null;
        },
        getRelatedContextFromMoveEvent({ to, related }) {
            const component = this;
            if (!component) {
                return { component };
            }
            const list = component.realList;
            const context = { list, component };
            if (to !== related && list && component.getUnderlyingVm) {
                const destination = component.getUnderlyingVm(related);
                if (destination) {
                    return Object.assign(destination, context);
                }
            }
            return context;
        },
        computeFutureIndex(relatedContext, evt) {
            if (!relatedContext.element) {
                return 0;
            }
            const domChildren = [...evt.to.children].filter(el => el.style['display'] !== 'none');
            const currentDOMIndex = domChildren.indexOf(evt.related);
            const currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
            const draggedInList = domChildren.indexOf(draggingElement) !== -1;
            return draggedInList || !evt.willInsertAfter
                ? currentIndex
                : currentIndex + 1;
        },
    },
});




/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
var d=function(t){try{return!!t()}catch(t){return!0}},v=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function b(t){var e={exports:{}};return t(e,e.exports),e.exports}var m=function(t){return t&&t.Math==Math&&t},h=m("object"==typeof globalThis&&globalThis)||m("object"==typeof window&&window)||m("object"==typeof self&&self)||m("object"==typeof g&&g)||function(){return this}()||Function("return this")(),y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=h.document,x=y(w)&&y(w.createElement),_=function(t){return x?w.createElement(t):{}},S=!v&&!d((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),k=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},L=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},z=Object.defineProperty,E={f:v?z:function(t,e,n){if(k(t),e=L(e,!0),k(n),S)try{return z(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},M=E.f,O=Function.prototype,T=O.toString,C=/^\s*function ([^ (]*)/;function j(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}v&&!("name"in O)&&M(O,"name",{configurable:!0,get:function(){try{return T.call(this).match(C)[1]}catch(t){return""}}});j(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{position:relative;display:block}.vel-modal{z-index:9998;position:fixed;top:0;left:0;right:0;bottom:0;margin:0;background:rgba(0,0,0,.5)}.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;will-change:transform opacity}.vel-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:80vw;max-height:80vh;display:block;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out;-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);background-color:rgba(0,0,0,.7)}@media (max-width:750px){.vel-img{max-width:85vw;max-height:95vh}}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;opacity:.6;font-size:32px;color:#fff;-webkit-transition:.15s linear;transition:.15s linear;-webkit-tap-highlight-color:transparent;outline:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{top:24px;right:10px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}");j('.vel-loading{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;width:64px;height:64px}.vel-loading .ring:after{content:" ";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border-color:hsla(0,0%,100%,.7) transparent;border-style:solid;border-width:5px;-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}');j(".vel-on-error{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{font-size:80px;color:#aaa}");j(".vel-img-title{overflow:hidden;position:absolute;left:50%;bottom:60px;-webkit-transform:translate(-50%);transform:translate(-50%);max-width:80%;font-size:12px;line-height:1;text-align:center;text-overflow:ellipsis;color:#ccc;opacity:.8;white-space:nowrap;cursor:default;-webkit-transition:opacity .15s;transition:opacity .15s}.vel-img-title:hover{opacity:1}");j(".vel-icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}");j(".vel-toolbar{position:absolute;overflow:hidden;bottom:8px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);opacity:.9;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px;padding:0}.vel-toolbar,.vel-toolbar .toolbar-btn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#2d2d2d}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;flex-shrink:0;cursor:pointer;padding:6px 10px;font-size:20px;color:#fff;-webkit-tap-highlight-color:transparent;outline:none}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}");var A=/#|\.prototype\./,N=function(t,e){var n=D[I(t)];return n==P||n!=Y&&("function"==typeof e?d(e):!!e)},I=N.normalize=function(t){return String(t).replace(A,".").toLowerCase()},D=N.data={},Y=N.NATIVE="N",P=N.POLYFILL="P",X=N,F=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},B=v?function(t,e,n){return E.f(t,e,F(1,n))}:function(t,e,n){return t[e]=n,t},R={}.hasOwnProperty,V=function(t,e){return R.call(t,e)},H=function(t,e){try{B(h,t,e)}catch(n){h[t]=e}return e},G=h["__core-js_shared__"]||H("__core-js_shared__",{}),U=Function.toString;"function"!=typeof G.inspectSource&&(G.inspectSource=function(t){return U.call(t)});var W,q,K,$=G.inspectSource,J=h.WeakMap,Q="function"==typeof J&&/native code/.test($(J)),Z=b((function(t){(t.exports=function(t,e){return G[t]||(G[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),tt=0,et=Math.random(),nt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++tt+et).toString(36)},rt=Z("keys"),ot=function(t){return rt[t]||(rt[t]=nt(t))},it={},at=h.WeakMap;if(Q){var lt=G.state||(G.state=new at),ct=lt.get,ut=lt.has,st=lt.set;W=function(t,e){return e.facade=t,st.call(lt,t,e),e},q=function(t){return ct.call(lt,t)||{}},K=function(t){return ut.call(lt,t)}}else{var ft=ot("state");it[ft]=!0,W=function(t,e){return e.facade=t,B(t,ft,e),e},q=function(t){return V(t,ft)?t[ft]:{}},K=function(t){return V(t,ft)}}var pt,dt={set:W,get:q,has:K,enforce:function(t){return K(t)?q(t):W(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=q(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},vt=b((function(t){var e=dt.get,n=dt.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var a,l=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,u=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||V(o,"name")||B(o,"name",e),(a=n(o)).source||(a.source=r.join("string"==typeof e?e:""))),t!==h?(l?!u&&t[e]&&(c=!0):delete t[e],c?t[e]=o:B(t,e,o)):c?t[e]=o:H(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||$(this)}))})),gt={}.toString,bt=function(t){return gt.call(t).slice(8,-1)},mt=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return k(n),function(t){if(!y(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),ht=function(t,e,n){var r,o;return mt&&"function"==typeof(r=e.constructor)&&r!==n&&y(o=r.prototype)&&o!==n.prototype&&mt(t,o),t},yt="".split,wt=d((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==bt(t)?yt.call(t,""):Object(t)}:Object,xt=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},_t=function(t){return wt(xt(t))},St=Math.ceil,kt=Math.floor,Lt=function(t){return isNaN(t=+t)?0:(t>0?kt:St)(t)},zt=Math.min,Et=function(t){return t>0?zt(Lt(t),9007199254740991):0},Mt=Math.max,Ot=Math.min,Tt=function(t,e){var n=Lt(t);return n<0?Mt(n+e,0):Ot(n,e)},Ct=function(t){return function(e,n,r){var o,i=_t(e),a=Et(i.length),l=Tt(r,a);if(t&&n!=n){for(;a>l;)if((o=i[l++])!=o)return!0}else for(;a>l;l++)if((t||l in i)&&i[l]===n)return t||l||0;return!t&&-1}},jt={includes:Ct(!0),indexOf:Ct(!1)}.indexOf,At=function(t,e){var n,r=_t(t),o=0,i=[];for(n in r)!V(it,n)&&V(r,n)&&i.push(n);for(;e.length>o;)V(r,n=e[o++])&&(~jt(i,n)||i.push(n));return i},Nt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],It=Object.keys||function(t){return At(t,Nt)},Dt=v?Object.defineProperties:function(t,e){k(t);for(var n,r=It(e),o=r.length,i=0;o>i;)E.f(t,n=r[i++],e[n]);return t},Yt=h,Pt=function(t){return"function"==typeof t?t:void 0},Xt=function(t,e){return arguments.length<2?Pt(Yt[t])||Pt(h[t]):Yt[t]&&Yt[t][e]||h[t]&&h[t][e]},Ft=Xt("document","documentElement"),Bt=ot("IE_PROTO"),Rt=function(){},Vt=function(t){return"<script>"+t+"<\/script>"},Ht=function(){try{pt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Ht=pt?function(t){t.write(Vt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(pt):((e=_("iframe")).style.display="none",Ft.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Vt("document.F=Object")),t.close(),t.F);for(var n=Nt.length;n--;)delete Ht.prototype[Nt[n]];return Ht()};it[Bt]=!0;var Gt=Object.create||function(t,e){var n;return null!==t?(Rt.prototype=k(t),n=new Rt,Rt.prototype=null,n[Bt]=t):n=Ht(),void 0===e?n:Dt(n,e)},Ut=Nt.concat("length","prototype"),Wt={f:Object.getOwnPropertyNames||function(t){return At(t,Ut)}},qt={}.propertyIsEnumerable,Kt=Object.getOwnPropertyDescriptor,$t={f:Kt&&!qt.call({1:2},1)?function(t){var e=Kt(this,t);return!!e&&e.enumerable}:qt},Jt=Object.getOwnPropertyDescriptor,Qt={f:v?Jt:function(t,e){if(t=_t(t),e=L(e,!0),S)try{return Jt(t,e)}catch(t){}if(V(t,e))return F(!$t.f.call(t,e),t[e])}},Zt="[\t\n\v\f\r                　\u2028\u2029\ufeff]",te=RegExp("^"+Zt+Zt+"*"),ee=RegExp(Zt+Zt+"*$"),ne=function(t){return function(e){var n=String(xt(e));return 1&t&&(n=n.replace(te,"")),2&t&&(n=n.replace(ee,"")),n}},re={start:ne(1),end:ne(2),trim:ne(3)},oe=Wt.f,ie=Qt.f,ae=E.f,le=re.trim,ce=h.Number,ue=ce.prototype,se="Number"==bt(Gt(ue)),fe=function(t){var e,n,r,o,i,a,l,c,u=L(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=le(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(a=(i=u.slice(2)).length,l=0;l<a;l++)if((c=i.charCodeAt(l))<48||c>o)return NaN;return parseInt(i,r)}return+u};if(X("Number",!ce(" 0o1")||!ce("0b1")||ce("+0x1"))){for(var pe,de=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof de&&(se?d((function(){ue.valueOf.call(n)})):"Number"!=bt(n))?ht(new ce(fe(e)),n,de):fe(e)},ve=v?oe(ce):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),ge=0;ve.length>ge;ge++)V(ce,pe=ve[ge])&&!V(de,pe)&&ae(de,pe,ie(ce,pe));de.prototype=ue,ue.constructor=de,vt(h,"Number",de)}var be,me,he={f:Object.getOwnPropertySymbols},ye=Xt("Reflect","ownKeys")||function(t){var e=Wt.f(k(t)),n=he.f;return n?e.concat(n(t)):e},we=function(t,e){for(var n=ye(e),r=E.f,o=Qt.f,i=0;i<n.length;i++){var a=n[i];V(t,a)||r(t,a,o(e,a))}},xe=Qt.f,_e=function(t,e){var n,r,o,i,a,l=t.target,c=t.global,u=t.stat;if(n=c?h:u?h[l]||H(l,{}):(h[l]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=xe(n,r))&&a.value:n[r],!X(c?r:l+(u?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;we(i,o)}(t.sham||o&&o.sham)&&B(i,"sham",!0),vt(n,r,i,t)}},Se=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},ke=function(t){return Object(xt(t))},Le=Array.isArray||function(t){return"Array"==bt(t)},ze="process"==bt(h.process),Ee=Xt("navigator","userAgent")||"",Me=h.process,Oe=Me&&Me.versions,Te=Oe&&Oe.v8;Te?me=(be=Te.split("."))[0]+be[1]:Ee&&(!(be=Ee.match(/Edge\/(\d+)/))||be[1]>=74)&&(be=Ee.match(/Chrome\/(\d+)/))&&(me=be[1]);var Ce=me&&+me,je=!!Object.getOwnPropertySymbols&&!d((function(){return!Symbol.sham&&(ze?38===Ce:Ce>37&&Ce<41)})),Ae=je&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ne=Z("wks"),Ie=h.Symbol,De=Ae?Ie:Ie&&Ie.withoutSetter||nt,Ye=function(t){return V(Ne,t)&&(je||"string"==typeof Ne[t])||(je&&V(Ie,t)?Ne[t]=Ie[t]:Ne[t]=De("Symbol."+t)),Ne[t]},Pe=Ye("species"),Xe=function(t,e){var n;return Le(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Le(n.prototype)?y(n)&&null===(n=n[Pe])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Fe=[].push,Be=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,a=7==t,l=5==t||i;return function(c,u,s,f){for(var p,d,v=ke(c),g=wt(v),b=Se(u,s,3),m=Et(g.length),h=0,y=f||Xe,w=e?y(c,m):n||a?y(c,0):void 0;m>h;h++)if((l||h in g)&&(d=b(p=g[h],h,v),t))if(e)w[h]=d;else if(d)switch(t){case 3:return!0;case 5:return p;case 6:return h;case 2:Fe.call(w,p)}else switch(t){case 4:return!1;case 7:Fe.call(w,p)}return i?-1:r||o?o:w}},Re={forEach:Be(0),map:Be(1),filter:Be(2),some:Be(3),every:Be(4),find:Be(5),findIndex:Be(6),filterOut:Be(7)},Ve=Ye("species"),He=function(t){return Ce>=51||!d((function(){var e=[];return(e.constructor={})[Ve]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Ge=Re.filter;_e({target:"Array",proto:!0,forced:!He("filter")},{filter:function(t){return Ge(this,t,arguments.length>1?arguments[1]:void 0)}});var Ue=Re.map;_e({target:"Array",proto:!0,forced:!He("map")},{map:function(t){return Ue(this,t,arguments.length>1?arguments[1]:void 0)}});var We=function(t,e,n){var r=L(e);r in t?E.f(t,r,F(0,n)):t[r]=n},qe=Ye("isConcatSpreadable"),Ke=Ce>=51||!d((function(){var t=[];return t[qe]=!1,t.concat()[0]!==t})),$e=He("concat"),Je=function(t){if(!y(t))return!1;var e=t[qe];return void 0!==e?!!e:Le(t)};_e({target:"Array",proto:!0,forced:!Ke||!$e},{concat:function(t){var e,n,r,o,i,a=ke(this),l=Xe(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Je(i=-1===e?a:arguments[e])){if(c+(o=Et(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&We(l,c,i[n])}else{if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");We(l,c++,i)}return l.length=c,l}});var Qe,Ze,tn=Re.forEach,en=!!(Ze=[]["forEach"])&&d((function(){Ze.call(null,Qe||function(){throw 1},1)}))?[].forEach:function(t){return tn(this,t,arguments.length>1?arguments[1]:void 0)};for(var nn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var rn=h[nn],on=rn&&rn.prototype;if(on&&on.forEach!==en)try{B(on,"forEach",en)}catch(t){on.forEach=en}}var an={};an[Ye("toStringTag")]="z";var ln="[object z]"===String(an),cn=Ye("toStringTag"),un="Arguments"==bt(function(){return arguments}()),sn=ln?bt:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),cn))?n:un?bt(e):"Object"==(r=bt(e))&&"function"==typeof e.callee?"Arguments":r},fn=ln?{}.toString:function(){return"[object "+sn(this)+"]"};ln||vt(Object.prototype,"toString",fn,{unsafe:!0}),function(){if("undefined"!=typeof window){var t,e=window,n='<svg><symbol id="icon-rotate-right" viewBox="0 0 1024 1024"><path d="M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z" fill="" ></path></symbol><symbol id="icon-rotate-left" viewBox="0 0 1024 1024"><path d="M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z" fill="" ></path></symbol><symbol id="icon-resize" viewBox="0 0 1024 1024"><path d="M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"  ></path></symbol><symbol id="icon-img-broken" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"  ></path></symbol><symbol id="icon-zoomin" viewBox="0 0 1024 1024"><path d="M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"  ></path><path d="M235.712 369.92h390.72v127.104H235.712z"  ></path><path d="M367.488 238.144h127.104v390.72H367.488z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"  ></path></symbol><symbol id="icon-zoomout" viewBox="0 0 1024 1024"><path d="M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"  ></path><path d="M235.712 369.92h390.72v127.104H235.712z"  ></path></symbol></svg>';if((t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss")&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()}),!1)}else document.attachEvent&&(r=t,o=e.document,i=!1,(a=function(){try{o.documentElement.doScroll("left")}catch(t){return void setTimeout(a,50)}n()})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,n())});function n(){i||(i=!0,r())}var r,o,i,a}((function(){var t,e,r,o,i,a;(t=document.createElement("div")).innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",r=e,(o=document.body).firstChild?(i=r,(a=o.firstChild).parentNode.insertBefore(i,a)):o.appendChild(r))}))}}();var pn=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({props:{type:{type:String,default:""}},setup:function(t){return function(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg",{class:"".concat("vel","-icon icon"),"aria-hidden":"true"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("use",{"xlink:href":"#icon-".concat(t.type)},null)])}}}),dn=He("slice"),vn=Ye("species"),gn=[].slice,bn=Math.max;_e({target:"Array",proto:!0,forced:!dn},{slice:function(t,e){var n,r,o,i=_t(this),a=Et(i.length),l=Tt(t,a),c=Tt(void 0===e?a:e,a);if(Le(i)&&("function"!=typeof(n=i.constructor)||n!==Array&&!Le(n.prototype)?y(n)&&null===(n=n[vn])&&(n=void 0):n=void 0,n===Array||void 0===n))return gn.call(i,l,c);for(r=new(void 0===n?Array:n)(bn(c-l,0)),o=0;l<c;l++,o++)l in i&&We(r,o,i[l]);return r.length=o,r}});var mn="undefined"!=typeof window,hn=function(){},yn=!1;if(mn)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){yn=!0}}),window.addEventListener("test-passive",hn,wn)}catch(t){}var xn=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];mn&&t.addEventListener(e,n,!!yn&&{capture:!1,passive:r})},_n=function(t,e,n){mn&&t.removeEventListener(e,n)},Sn=function(t){t.preventDefault()},kn=Object.prototype.toString,Ln=function(t){return function(e){return kn.call(e).slice(8,-1)===t}};function zn(t){return Ln("Array")(t)}var En=function(t){return!!t&&Ln("String")(t)};function Mn(t){return null!=t}var On=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({props:{zoomIn:{type:Function,default:hn},zoomOut:{type:Function,default:hn},rotateLeft:{type:Function,default:hn},rotateRight:{type:Function,default:hn},resize:{type:Function,default:hn}},setup:function(t){return function(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"".concat("vel","-toolbar")},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__zoomin",onClick:t.zoomIn},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"zoomin"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__zoomout",onClick:t.zoomOut},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"zoomout"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__resize",onClick:t.resize},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"resize"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__rotate",onClick:t.rotateLeft},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"rotate-left"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__rotate",onClick:t.rotateRight},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"rotate-right"},null)])])}}}),Tn=function(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"".concat("vel","-loading")},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"ring"},null)])},Cn=function(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"".concat("vel","-on-error")},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"ring"},null),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"img-broken"},null)])},jn=function(t,n){var r=n.slots;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"".concat("vel","-img-title")},[r.default?r.default():""])},An=mn?window:__webpack_require__.g,Nn=Date.now();function In(t){var e=Date.now(),n=Math.max(0,16-(e-Nn)),r=setTimeout(t,n);return Nn=e+n,r}function Dn(t){return(An.requestAnimationFrame||In).call(An,t)}function Yn(t){(An.cancelAnimationFrame||An.clearTimeout).call(An,t)}function Pn(t,e){var n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(n*n+r*r)}function Xn(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!(0,vue__WEBPACK_IMPORTED_MODULE_0__.isVNode)(t)}function Fn(t){return function(t){return!!t&&Ln("Object")(t)}(t)&&En(t.src)}var Bn=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:function(){return""}},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!1},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1}},emits:["hide","on-error","on-prev","on-next","on-prev-click","on-next-click","on-index-change"],setup:function(t,f){var d=f.emit,v=f.slots,g=function(){var t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(),e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({width:0,height:0,maxScale:1});return{imgRef:t,imgState:e,setImgSize:function(){if(t.value){var n=t.value,r=n.width,o=n.height,i=n.naturalWidth;e.maxScale=i/r,e.width=r,e.height=o}}}}(),b=g.imgRef,m=g.imgState,h=g.setImgSize,y=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0),w=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""),x=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({scale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),_=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({loadError:!1,loading:!1,dragging:!1,gesturing:!1}),S=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){return zn(t.imgs)?t.imgs.map((function(t){return"string"==typeof t?{src:t}:Fn(t)?t:void 0})).filter(Mn):En(t.imgs)?[{src:t.imgs}]:[]})),k=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){var t;return null===(t=S.value[y.value])||void 0===t?void 0:t.src})),L=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){var t;return null===(t=S.value[y.value])||void 0===t?void 0:t.title})),z=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){return{cursor:_.loadError?"default":t.moveDisabled?_.dragging?"grabbing":"grab":"move",top:"calc(50% + ".concat(x.top,"px)"),left:"calc(50% + ".concat(x.left,"px)"),transition:_.dragging||_.gesturing?"none":"",transform:"translate(-50%, -50%) scale(".concat(x.scale,") rotate(").concat(x.rotateDeg,"deg)")}})),E=function(){d("hide")},M=function(){x.scale=1,x.rotateDeg=0,x.top=0,x.left=0,_.loadError=!1,_.dragging=!1,_.loading=!0},O=function(e,n){var r=y.value;M(),y.value=e,S.value[y.value]===S.value[e]&&(0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)((function(){_.loading=!1})),t.visible&&r!==e&&(n&&(zn(n)?n.forEach((function(t){d(t,r,e)})):d(n,r,e)),d("on-index-change",r,e))},T=function(){var e=y.value,n=t.loop?(e+1)%S.value.length:e+1;!t.loop&&n>S.value.length-1||O(n,["on-next","on-next-click"])},C=function(){var e=y.value,n=e-1;if(0===e){if(!t.loop)return;n=S.value.length-1}O(n,["on-prev","on-prev-click"])},j=function(){var t=x.scale+.2;t<3*m.maxScale&&(x.scale=t)},A=function(){var t=x.scale-.2;t>.1&&(x.scale=t)},N=function(){x.rotateDeg-=90},I=function(){x.rotateDeg+=90},D=function(){x.scale=1,x.top=0,x.left=0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return!t.moveDisabled&&0===e},P=function(t,e,n){var r,o=!1;return{onMouseDown:function(n){t.initX=t.lastX=n.clientX,t.initY=t.lastY=n.clientY,e.dragging=!0,o=!1,n.stopPropagation()},onMouseUp:function(t){n(t.button)&&Yn(r),e.dragging=!1,o=!1},onMouseMove:function(i){if(e.dragging)if(n(i.button)){if(o)return;o=!0,r=Dn((function(){var e=t.top,n=t.left,r=t.lastY,a=t.lastX;t.top=e-r+i.clientY,t.left=n-a+i.clientX,t.lastX=i.clientX,t.lastY=i.clientY,o=!1}))}else t.lastX=i.clientX,t.lastY=i.clientY;i.stopPropagation()}}}(x,_,Y),X=P.onMouseDown,F=P.onMouseMove,B=P.onMouseUp,R=function(t,e,n,r){var o,i=!1;return{onTouchStart:function(t){var r=t.touches;r.length>1?(n.gesturing=!0,e.touches=r):(e.initX=e.lastX=r[0].clientX,e.initY=e.lastY=r[0].clientY,n.dragging=!0),t.stopPropagation()},onTouchMove:function(a){if(!i){var l=a.touches,c=e.lastX,u=e.lastY,s=e.left,f=e.top,p=e.scale;if(!n.gesturing&&n.dragging){if(!l[0])return;var d=l[0],v=d.clientX,g=d.clientY;r()?o=Dn((function(){e.lastX=v,e.lastY=g,e.top=f-u+g,e.left=s-c+v,i=!1})):(e.lastX=v,e.lastY=g)}else n.gesturing&&e.touches.length>1&&l.length>1&&(o=Dn((function(){var n=(Pn(e.touches[0],e.touches[1])-Pn(l[0],l[1]))/t.width;e.touches=l;var r=p-1.3*n;r>.5&&r<1.5*t.maxScale&&(e.scale=r),i=!1})))}},onTouchEnd:function(){Yn(o),n.dragging=!1,n.gesturing=!1,i=!1}}}(m,x,_,Y),V=R.onTouchStart,H=R.onTouchMove,G=R.onTouchEnd,U=function(e){var n=e;t.visible&&(!t.escDisabled&&"Escape"===n.key&&t.visible&&E(),"ArrowLeft"===n.key&&C(),"ArrowRight"===n.key&&T())},W=function(){h()},q=function(){_.loading=!1},K=function(t){_.loading=!1,_.loadError=!0,d("on-error",t)},$=function(){t.visible&&h()};(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((function(){return t.index}),(function(t){t<0||t>=S.value.length||O(t)})),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((function(){return _.dragging}),(function(e,n){var r=!e&&n;if(!Y()&&r){var o=x.lastX-x.initX,i=x.lastY-x.initY,a=t.swipeTolerance;Math.abs(o)>Math.abs(i)&&(o<-1*a?T():o>a&&C())}})),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((function(){return t.visible}),(function(e){if(e){M();var n=S.value.length;if(0===n)return y.value=0,_.loading=!1,void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)((function(){return _.loadError=!0}));y.value=t.index>=n?n-1:t.index<0?0:t.index,t.scrollDisabled&&J()}else t.scrollDisabled&&Q()}));var J=function(){document&&(w.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},Q=function(){document&&(document.body.style.overflowY=w.value)};(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)((function(){xn(document,"keydown",U),xn(window,"resize",$)})),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)((function(){_n(document,"keydown",U),_n(window,"resize",$)}));var Z=function(){return _.loading?v.loading?v.loading({key:"loading"}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Tn,{key:"img-loading"},null):_.loadError?v.onerror?v.onerror({key:"onerror"}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Cn,{key:"img-on-error"},null):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"".concat("vel","-img-wrapper"),style:z.value,key:"img-wrapper"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img",{ref:b,draggable:"false",class:"".concat("vel","-img"),src:k.value,onMousedown:X,onMouseup:B,onMousemove:F,onTouchstart:V,onTouchmove:H,onTouchend:G,onLoad:W},null)])},tt=function(){if(v["prev-btn"])return v["prev-btn"]({prev:C});if(!(S.value.length<=1)){var n=!t.loop&&y.value<=0;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"btn__prev ".concat(n?"disable":""),onClick:C},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"prev"},null)])}},et=function(){if(v["next-btn"])return v["next-btn"]({next:T});if(!(S.value.length<=1)){var n=!t.loop&&y.value>=S.value.length-1;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"btn__next ".concat(n?"disable":""),onClick:T},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"next"},null)])}},nt=function(){if(L.value&&!t.titleDisabled&&!_.loading&&!_.loadError)return v.title?v.title():(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(jn,null,{default:function(){return[L.value]}})},rt=function(){var n;if(t.visible)return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{onTouchmove:Sn,class:["".concat("vel","-img-modal"),"".concat("vel","-modal")],onClick:(0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(E,["self"])},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition,{name:"".concat("vel","-fade"),mode:"out-in"},Xn(n=Z())?n:{default:function(){return[n]}}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img",{style:"display:none;",src:k.value,onError:K,onLoad:q},null),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"".concat("vel","-btns-wrapper")},[tt(),et(),nt(),v["close-btn"]?v["close-btn"]({close:E}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"btn__close",onClick:E},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(pn,{type:"close"},null)]),v.toolbar?v.toolbar({zoomOut:A,rotate:N,rotateLeft:N,rotateRight:I,resize:D}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(On,{zoomIn:j,zoomOut:A,resize:D,rotateLeft:N,rotateRight:I},null)])])};return function(){var n,r;return t.teleport?(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport,{to:t.teleport},{default:function(){return[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition,{name:"".concat("vel","-fade")},Xn(r=rt())?r:{default:function(){return[r]}})]}}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition,{name:"".concat("vel","-fade")},Xn(n=rt())?n:{default:function(){return[n]}})}}}),Rn=Bn;Rn.install=function(t){t.component(Bn.name,Bn)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rn);


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Vr": () => (/* binding */ POSITION),
/* harmony export */   "pm": () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony exports EventBus, TYPE, createToastInterface, globalEventBus, provideToast, toastInjectionKey */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const isFunction = value => typeof value === "function";

const isString = value => typeof value === "string";

const isNonEmptyString = value => isString(value) && value.trim().length > 0;

const isNumber = value => typeof value === "number";

const isUndefined = value => typeof value === "undefined";

const isObject = value => typeof value === "object" && value !== null;

const isJSX = obj => hasProp(obj, "tag") && isNonEmptyString(obj.tag);

const isTouchEvent = event => window.TouchEvent && event instanceof TouchEvent;

const isToastComponent = obj => hasProp(obj, "component") && isToastContent(obj.component);

const isVueComponent = c => isFunction(c) || isObject(c);

const isToastContent = obj => // Ignore undefined
!isUndefined(obj) && ( // Is a string
isString(obj) || // Regular Vue component
isVueComponent(obj) || // Nested object
isToastComponent(obj));

const isDOMRect = obj => isObject(obj) && ["height", "width", "right", "left", "top", "bottom"].every(p => isNumber(obj[p]));

const hasProp = (obj, propKey) => (isObject(obj) || isFunction(obj)) && propKey in obj;
/**
 * ID generator
 */


const getId = (i => () => i++)(0);

function getX(event) {
  return isTouchEvent(event) ? event.targetTouches[0].clientX : event.clientX;
}

function getY(event) {
  return isTouchEvent(event) ? event.targetTouches[0].clientY : event.clientY;
}

const removeElement = el => {
  if (!isUndefined(el.remove)) {
    el.remove();
  } else if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

const getVueComponentFromObj = obj => {
  if (isToastComponent(obj)) {
    // Recurse if component prop
    return getVueComponentFromObj(obj.component);
  }

  if (isJSX(obj)) {
    // Create render function for JSX
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
      render() {
        return obj;
      }

    });
  } // Return regular string or raw object


  return typeof obj === "string" ? obj : (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(obj));
};

const normalizeToastComponent = obj => {
  if (typeof obj === "string") {
    return obj;
  }

  const props = hasProp(obj, "props") && isObject(obj.props) ? obj.props : {};
  const listeners = hasProp(obj, "listeners") && isObject(obj.listeners) ? obj.listeners : {};
  return {
    component: getVueComponentFromObj(obj),
    props,
    listeners
  };
};

const isBrowser = () => typeof window !== "undefined";

class EventBus {
  constructor() {
    this.allHandlers = {};
  }

  getHandlers(eventType) {
    return this.allHandlers[eventType] || [];
  }

  on(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.push(handler);
    this.allHandlers[eventType] = handlers;
  }

  off(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
  }

  emit(eventType, event) {
    const handlers = this.getHandlers(eventType);
    handlers.forEach(handler => handler(event));
  }

}
const isEventBusInterface = e => ["on", "off", "emit"].every(f => hasProp(e, f) && isFunction(e[f]));

var TYPE;

(function (TYPE) {
  TYPE["SUCCESS"] = "success";
  TYPE["ERROR"] = "error";
  TYPE["WARNING"] = "warning";
  TYPE["INFO"] = "info";
  TYPE["DEFAULT"] = "default";
})(TYPE || (TYPE = {}));

var POSITION;

(function (POSITION) {
  POSITION["TOP_LEFT"] = "top-left";
  POSITION["TOP_CENTER"] = "top-center";
  POSITION["TOP_RIGHT"] = "top-right";
  POSITION["BOTTOM_LEFT"] = "bottom-left";
  POSITION["BOTTOM_CENTER"] = "bottom-center";
  POSITION["BOTTOM_RIGHT"] = "bottom-right";
})(POSITION || (POSITION = {}));

var EVENTS;

(function (EVENTS) {
  EVENTS["ADD"] = "add";
  EVENTS["DISMISS"] = "dismiss";
  EVENTS["UPDATE"] = "update";
  EVENTS["CLEAR"] = "clear";
  EVENTS["UPDATE_DEFAULTS"] = "update_defaults";
})(EVENTS || (EVENTS = {}));

const VT_NAMESPACE = "Vue-Toastification";

const COMMON = {
  type: {
    type: String,
    default: TYPE.DEFAULT
  },
  classNames: {
    type: [String, Array],
    default: () => []
  },
  trueBoolean: {
    type: Boolean,
    default: true
  }
};
const ICON = {
  type: COMMON.type,
  customIcon: {
    type: [String, Boolean, Object, Function],
    default: true
  }
};
const CLOSE_BUTTON = {
  component: {
    type: [String, Object, Function, Boolean],
    default: "button"
  },
  classNames: COMMON.classNames,
  showOnHover: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: "close"
  }
};
const PROGRESS_BAR = {
  timeout: {
    type: [Number, Boolean],
    default: 5000
  },
  hideProgressBar: {
    type: Boolean,
    default: false
  },
  isRunning: {
    type: Boolean,
    default: false
  }
};
const TRANSITION = {
  transition: {
    type: [Object, String],
    default: `${VT_NAMESPACE}__bounce`
  }
};
const CORE_TOAST = {
  position: {
    type: String,
    default: POSITION.TOP_RIGHT
  },
  draggable: COMMON.trueBoolean,
  draggablePercent: {
    type: Number,
    default: 0.6
  },
  pauseOnFocusLoss: COMMON.trueBoolean,
  pauseOnHover: COMMON.trueBoolean,
  closeOnClick: COMMON.trueBoolean,
  timeout: PROGRESS_BAR.timeout,
  hideProgressBar: PROGRESS_BAR.hideProgressBar,
  toastClassName: COMMON.classNames,
  bodyClassName: COMMON.classNames,
  icon: ICON.customIcon,
  closeButton: CLOSE_BUTTON.component,
  closeButtonClassName: CLOSE_BUTTON.classNames,
  showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
  accessibility: {
    type: Object,
    default: () => ({
      toastRole: "alert",
      closeButtonLabel: "close"
    })
  },
  rtl: {
    type: Boolean,
    default: false
  },
  eventBus: {
    type: Object,
    required: true,
    default: new EventBus()
  }
};
const TOAST = {
  id: {
    type: [String, Number],
    required: true,
    default: 0
  },
  type: COMMON.type,
  content: {
    type: [String, Object, Function],
    required: true,
    default: ""
  },
  onClick: {
    type: Function,
    default: () => {}
  },
  onClose: {
    type: Function,
    default:
    /* istanbul ignore next */
    () => {}
  }
};
const CONTAINER = {
  container: {
    type: [Object, Function],
    default: () => document.body
  },
  newestOnTop: COMMON.trueBoolean,
  maxToasts: {
    type: Number,
    default: 20
  },
  transition: TRANSITION.transition,
  toastDefaults: Object,
  filterBeforeCreate: {
    type: Function,
    default: toast => toast
  },
  filterToasts: {
    type: Function,
    default: toasts => toasts
  },
  containerClassName: COMMON.classNames,
  onMounted: Function
};
var PROPS = {
  CORE_TOAST,
  TOAST,
  CONTAINER,
  PROGRESS_BAR,
  ICON,
  TRANSITION,
  CLOSE_BUTTON
};

var script = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "VtProgressBar",
  props: PROPS.PROGRESS_BAR,

  // TODO: The typescript compiler is not playing nice with emit types
  // Rollback this change once ts is able to infer emit types
  // emits: ["close-toast"],
  data() {
    return {
      hasClass: true
    };
  },

  computed: {
    style() {
      return {
        animationDuration: `${this.timeout}ms`,
        animationPlayState: this.isRunning ? "running" : "paused",
        opacity: this.hideProgressBar ? 0 : 1
      };
    },

    cpClass() {
      return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
    }

  },
  watch: {
    timeout() {
      this.hasClass = false;
      this.$nextTick(() => this.hasClass = true);
    }

  },

  mounted() {
    this.$el.addEventListener("animationend", this.animationEnded);
  },

  beforeUnmount() {
    this.$el.removeEventListener("animationend", this.animationEnded);
  },

  methods: {
    animationEnded() {
      // See TODO on line 16
      // eslint-disable-next-line vue/require-explicit-emits
      this.$emit("close-toast");
    }

  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    style: _ctx.style,
    class: _ctx.cpClass
  }, null, 6 /* CLASS, STYLE */))
}

script.render = render;
script.__file = "src/components/VtProgressBar.vue";

var script$1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "VtCloseButton",
  props: PROPS.CLOSE_BUTTON,
  computed: {
    buttonComponent() {
      if (this.component !== false) {
        return getVueComponentFromObj(this.component);
      }

      return "button";
    },

    classes() {
      const classes = [`${VT_NAMESPACE}__close-button`];

      if (this.showOnHover) {
        classes.push("show-on-hover");
      }

      return classes.concat(this.classNames);
    }

  }
});

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" × ");

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.buttonComponent), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "aria-label": _ctx.ariaLabel,
    class: _ctx.classes
  }, _ctx.$attrs), {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      _hoisted_1
    ]),
    _: 1
  }, 16 /* FULL_PROPS */, ["aria-label", "class"]))
}

script$1.render = render$1;
script$1.__file = "src/components/VtCloseButton.vue";

var script$2 = {};

const _hoisted_1$1 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "check-circle",
  class: "svg-inline--fa fa-check-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "currentColor",
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
}, null, -1 /* HOISTED */);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$1, [
    _hoisted_2
  ]))
}

script$2.render = render$2;
script$2.__file = "src/components/icons/VtSuccessIcon.vue";

var script$3 = {};

const _hoisted_1$2 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "info-circle",
  class: "svg-inline--fa fa-info-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "currentColor",
  d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
}, null, -1 /* HOISTED */);

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$2, [
    _hoisted_2$1
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/icons/VtInfoIcon.vue";

var script$4 = {};

const _hoisted_1$3 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "exclamation-circle",
  class: "svg-inline--fa fa-exclamation-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2$2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "currentColor",
  d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
}, null, -1 /* HOISTED */);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$3, [
    _hoisted_2$2
  ]))
}

script$4.render = render$4;
script$4.__file = "src/components/icons/VtWarningIcon.vue";

var script$5 = {};

const _hoisted_1$4 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "exclamation-triangle",
  class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
};
const _hoisted_2$3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "currentColor",
  d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
}, null, -1 /* HOISTED */);

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$4, [
    _hoisted_2$3
  ]))
}

script$5.render = render$5;
script$5.__file = "src/components/icons/VtErrorIcon.vue";

var script$6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "VtIcon",
  props: PROPS.ICON,
  computed: {
    customIconChildren() {
      return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
    },

    customIconClass() {
      if (isString(this.customIcon)) {
        return this.trimValue(this.customIcon);
      } else if (hasProp(this.customIcon, "iconClass")) {
        return this.trimValue(this.customIcon.iconClass);
      }

      return "";
    },

    customIconTag() {
      if (hasProp(this.customIcon, "iconTag")) {
        return this.trimValue(this.customIcon.iconTag, "i");
      }

      return "i";
    },

    hasCustomIcon() {
      return this.customIconClass.length > 0;
    },

    component() {
      if (this.hasCustomIcon) {
        return this.customIconTag;
      }

      if (isToastContent(this.customIcon)) {
        return getVueComponentFromObj(this.customIcon);
      }

      return this.iconTypeComponent;
    },

    iconTypeComponent() {
      const types = {
        [TYPE.DEFAULT]: script$3,
        [TYPE.INFO]: script$3,
        [TYPE.SUCCESS]: script$2,
        [TYPE.ERROR]: script$5,
        [TYPE.WARNING]: script$4
      };
      return types[this.type];
    },

    iconClasses() {
      const classes = [`${VT_NAMESPACE}__icon`];

      if (this.hasCustomIcon) {
        return classes.concat(this.customIconClass);
      }

      return classes;
    }

  },
  methods: {
    trimValue(value, empty = "") {
      return isNonEmptyString(value) ? value.trim() : empty;
    }

  }
});

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.component), { class: _ctx.iconClasses }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.customIconChildren), 1 /* TEXT */)
    ]),
    _: 1
  }, 8 /* PROPS */, ["class"]))
}

script$6.render = render$6;
script$6.__file = "src/components/VtIcon.vue";

var script$7 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "VtToast",
  components: {
    ProgressBar: script,
    CloseButton: script$1,
    Icon: script$6
  },
  inheritAttrs: false,
  props: Object.assign({}, PROPS.CORE_TOAST, PROPS.TOAST),

  data() {
    const data = {
      isRunning: true,
      disableTransitions: false,
      beingDragged: false,
      dragStart: 0,
      dragPos: {
        x: 0,
        y: 0
      },
      dragRect: {}
    };
    return data;
  },

  computed: {
    classes() {
      const classes = [`${VT_NAMESPACE}__toast`, `${VT_NAMESPACE}__toast--${this.type}`, `${this.position}`].concat(this.toastClassName);

      if (this.disableTransitions) {
        classes.push("disable-transition");
      }

      if (this.rtl) {
        classes.push(`${VT_NAMESPACE}__toast--rtl`);
      }

      return classes;
    },

    bodyClasses() {
      const classes = [`${VT_NAMESPACE}__toast-${isString(this.content) ? "body" : "component-body"}`].concat(this.bodyClassName);
      return classes;
    },

    /* istanbul ignore next */
    draggableStyle() {
      if (this.dragStart === this.dragPos.x) {
        return {};
      } else if (this.beingDragged) {
        return {
          transform: `translateX(${this.dragDelta}px)`,
          opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
        };
      } else {
        return {
          transition: "transform 0.2s, opacity 0.2s",
          transform: "translateX(0)",
          opacity: 1
        };
      }
    },

    dragDelta() {
      return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
    },

    removalDistance() {
      if (isDOMRect(this.dragRect)) {
        return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
      }

      return 0;
    }

  },

  mounted() {
    if (this.draggable) {
      this.draggableSetup();
    }

    if (this.pauseOnFocusLoss) {
      this.focusSetup();
    }
  },

  beforeUnmount() {
    if (this.draggable) {
      this.draggableCleanup();
    }

    if (this.pauseOnFocusLoss) {
      this.focusCleanup();
    }
  },

  methods: {
    getVueComponentFromObj,

    closeToast() {
      this.eventBus.emit(EVENTS.DISMISS, this.id);
    },

    clickHandler() {
      if (this.onClick) {
        this.onClick(this.closeToast);
      }

      if (this.closeOnClick) {
        if (!this.beingDragged || this.dragStart === this.dragPos.x) {
          this.closeToast();
        }
      }
    },

    timeoutHandler() {
      this.closeToast();
    },

    hoverPause() {
      if (this.pauseOnHover) {
        this.isRunning = false;
      }
    },

    hoverPlay() {
      if (this.pauseOnHover) {
        this.isRunning = true;
      }
    },

    focusPause() {
      this.isRunning = false;
    },

    focusPlay() {
      this.isRunning = true;
    },

    focusSetup() {
      addEventListener("blur", this.focusPause);
      addEventListener("focus", this.focusPlay);
    },

    focusCleanup() {
      removeEventListener("blur", this.focusPause);
      removeEventListener("focus", this.focusPlay);
    },

    draggableSetup() {
      const element = this.$el;
      element.addEventListener("touchstart", this.onDragStart, {
        passive: true
      });
      element.addEventListener("mousedown", this.onDragStart);
      addEventListener("touchmove", this.onDragMove, {
        passive: false
      });
      addEventListener("mousemove", this.onDragMove);
      addEventListener("touchend", this.onDragEnd);
      addEventListener("mouseup", this.onDragEnd);
    },

    draggableCleanup() {
      const element = this.$el;
      element.removeEventListener("touchstart", this.onDragStart);
      element.removeEventListener("mousedown", this.onDragStart);
      removeEventListener("touchmove", this.onDragMove);
      removeEventListener("mousemove", this.onDragMove);
      removeEventListener("touchend", this.onDragEnd);
      removeEventListener("mouseup", this.onDragEnd);
    },

    onDragStart(event) {
      this.beingDragged = true;
      this.dragPos = {
        x: getX(event),
        y: getY(event)
      };
      this.dragStart = getX(event);
      this.dragRect = this.$el.getBoundingClientRect();
    },

    onDragMove(event) {
      if (this.beingDragged) {
        event.preventDefault();

        if (this.isRunning) {
          this.isRunning = false;
        }

        this.dragPos = {
          x: getX(event),
          y: getY(event)
        };
      }
    },

    onDragEnd() {
      if (this.beingDragged) {
        if (Math.abs(this.dragDelta) >= this.removalDistance) {
          this.disableTransitions = true;
          this.$nextTick(() => this.closeToast());
        } else {
          setTimeout(() => {
            this.beingDragged = false;

            if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) {
              this.isRunning = false;
            } else {
              this.isRunning = true;
            }
          });
        }
      }
    }

  }
});

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");
  const _component_CloseButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CloseButton");
  const _component_ProgressBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProgressBar");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    class: _ctx.classes,
    style: _ctx.draggableStyle,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.clickHandler(...args))),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => (_ctx.hoverPause(...args))),
    onMouseleave: _cache[3] || (_cache[3] = (...args) => (_ctx.hoverPlay(...args)))
  }, [
    (_ctx.icon)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Icon, {
          key: 0,
          "custom-icon": _ctx.icon,
          type: _ctx.type
        }, null, 8 /* PROPS */, ["custom-icon", "type"]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      role: _ctx.accessibility.toastRole || 'alert',
      class: _ctx.bodyClasses
    }, [
      (typeof _ctx.content === 'string')
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.content), 1 /* TEXT */)
          ], 64 /* STABLE_FRAGMENT */))
        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.getVueComponentFromObj(_ctx.content)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            key: 1,
            "toast-id": _ctx.id
          }, _ctx.content.props, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(_ctx.content.listeners), { onCloseToast: _ctx.closeToast }), null, 16 /* FULL_PROPS */, ["toast-id", "onCloseToast"]))
    ], 10 /* CLASS, PROPS */, ["role"]),
    (!!_ctx.closeButton)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CloseButton, {
          key: 1,
          component: _ctx.closeButton,
          "class-names": _ctx.closeButtonClassName,
          "show-on-hover": _ctx.showCloseButtonOnHover,
          "aria-label": _ctx.accessibility.closeButtonLabel,
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(_ctx.closeToast, ["stop"])
        }, null, 8 /* PROPS */, ["component", "class-names", "show-on-hover", "aria-label", "onClick"]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (_ctx.timeout)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ProgressBar, {
          key: 2,
          "is-running": _ctx.isRunning,
          "hide-progress-bar": _ctx.hideProgressBar,
          timeout: _ctx.timeout,
          onCloseToast: _ctx.timeoutHandler
        }, null, 8 /* PROPS */, ["is-running", "hide-progress-bar", "timeout", "onCloseToast"]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$7.render = render$7;
script$7.__file = "src/components/VtToast.vue";

// Transition methods taken from https://github.com/BinarCode/vue2-transitions
var script$8 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "VtTransition",
  props: PROPS.TRANSITION,
  emits: ["leave"],
  methods: {
    leave(el) {
      el.style.left = el.offsetLeft + "px";
      el.style.top = el.offsetTop + "px";
      el.style.width = getComputedStyle(el).width;
      el.style.position = "absolute";
    }

  }
});

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup, {
    tag: "div",
    "enter-active-class": 
      _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`
    ,
    "move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
    "leave-active-class": 
      _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`
    ,
    onLeave: _ctx.leave
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8 /* PROPS */, ["enter-active-class", "move-class", "leave-active-class", "onLeave"]))
}

script$8.render = render$8;
script$8.__file = "src/components/VtTransition.vue";

var script$9 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "VueToastification",
  components: {
    Toast: script$7,
    VtTransition: script$8
  },
  props: Object.assign({}, PROPS.CORE_TOAST, PROPS.CONTAINER, PROPS.TRANSITION),

  data() {
    const data = {
      count: 0,
      positions: Object.values(POSITION),
      toasts: {},
      defaults: {}
    };
    return data;
  },

  computed: {
    toastArray() {
      return Object.values(this.toasts);
    },

    filteredToasts() {
      return this.defaults.filterToasts(this.toastArray);
    }

  },

  beforeMount() {
    const events = this.eventBus;
    events.on(EVENTS.ADD, this.addToast);
    events.on(EVENTS.CLEAR, this.clearToasts);
    events.on(EVENTS.DISMISS, this.dismissToast);
    events.on(EVENTS.UPDATE, this.updateToast);
    events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
    this.defaults = this.$props;
  },

  mounted() {
    this.setup(this.container);
  },

  methods: {
    async setup(container) {
      if (isFunction(container)) {
        container = await container();
      }

      removeElement(this.$el);
      container.appendChild(this.$el);
    },

    setToast(props) {
      if (!isUndefined(props.id)) {
        this.toasts[props.id] = props;
      }
    },

    addToast(params) {
      params.content = normalizeToastComponent(params.content);
      const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
      const toast = this.defaults.filterBeforeCreate(props, this.toastArray);
      toast && this.setToast(toast);
    },

    dismissToast(id) {
      const toast = this.toasts[id];

      if (!isUndefined(toast) && !isUndefined(toast.onClose)) {
        toast.onClose();
      }

      delete this.toasts[id];
    },

    clearToasts() {
      Object.keys(this.toasts).forEach(id => {
        this.dismissToast(id);
      });
    },

    getPositionToasts(position) {
      const toasts = this.filteredToasts.filter(toast => toast.position === position).slice(0, this.defaults.maxToasts);
      return this.defaults.newestOnTop ? toasts.reverse() : toasts;
    },

    updateDefaults(update) {
      // Update container if changed
      if (!isUndefined(update.container)) {
        this.setup(update.container);
      }

      this.defaults = Object.assign({}, this.defaults, update);
    },

    updateToast({
      id,
      options,
      create
    }) {
      if (this.toasts[id]) {
        // If a timeout is defined, and is equal to the one before, change it
        // a little so the progressBar is reset
        if (options.timeout && options.timeout === this.toasts[id].timeout) {
          options.timeout++;
        }

        this.setToast(Object.assign({}, this.toasts[id], options));
      } else if (create) {
        this.addToast(Object.assign({}, {
          id
        }, options));
      }
    },

    getClasses(position) {
      const classes = [`${VT_NAMESPACE}__container`, position];
      return classes.concat(this.defaults.containerClassName);
    }

  }
});

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toast = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toast");
  const _component_VtTransition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VtTransition");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.positions, (pos) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", { key: pos }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VtTransition, {
          transition: _ctx.defaults.transition,
          class: _ctx.getClasses(pos)
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.getPositionToasts(pos), (toast) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Toast, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                key: toast.id
              }, toast), null, 16 /* FULL_PROPS */))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          _: 2
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["transition", "class"])
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$9.render = render$9;
script$9.__file = "src/components/VtToastContainer.vue";

const buildInterface = (globalOptions = {}, mountContainer = true) => {
  const events = globalOptions.eventBus = globalOptions.eventBus || new EventBus();

  if (mountContainer) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(script$9, Object.assign({}, globalOptions));
      const component = app.mount(document.createElement("div"));
      const onMounted = globalOptions.onMounted;

      if (!isUndefined(onMounted)) {
        onMounted(component, app);
      }
    });
  }
  /**
   * Display a toast
   */


  const toast = (content, options) => {
    const props = Object.assign({}, {
      id: getId(),
      type: TYPE.DEFAULT
    }, options, {
      content
    });
    events.emit(EVENTS.ADD, props);
    return props.id;
  };
  /**
   * Clear all toasts
   */


  toast.clear = () => events.emit(EVENTS.CLEAR, undefined);
  /**
   * Update Plugin Defaults
   */


  toast.updateDefaults = update => {
    events.emit(EVENTS.UPDATE_DEFAULTS, update);
  };
  /**
   * Dismiss toast specified by an id
   */


  toast.dismiss = id => {
    events.emit(EVENTS.DISMISS, id);
  };

  function updateToast(id, {
    content,
    options
  }, create = false) {
    const opt = Object.assign({}, options, {
      content
    });
    events.emit(EVENTS.UPDATE, {
      id,
      options: opt,
      create
    });
  }

  toast.update = updateToast;
  /**
   * Display a success toast
   */

  toast.success = (content, options) => toast(content, Object.assign({}, options, {
    type: TYPE.SUCCESS
  }));
  /**
   * Display an info toast
   */


  toast.info = (content, options) => toast(content, Object.assign({}, options, {
    type: TYPE.INFO
  }));
  /**
   * Display an error toast
   */


  toast.error = (content, options) => toast(content, Object.assign({}, options, {
    type: TYPE.ERROR
  }));
  /**
   * Display a warning toast
   */


  toast.warning = (content, options) => toast(content, Object.assign({}, options, {
    type: TYPE.WARNING
  }));

  return toast;
};

const createMockToastInterface = () => {
  const toast = () => console.warn("[Vue Toastification] This plugin does not support SSR!");

  return new Proxy(toast, {
    get() {
      return toast;
    }

  });
};

function createToastInterface(optionsOrEventBus) {
  if (!isBrowser()) {
    return createMockToastInterface();
  }

  if (isEventBusInterface(optionsOrEventBus)) {
    return buildInterface({
      eventBus: optionsOrEventBus
    }, false);
  }

  return buildInterface(optionsOrEventBus, true);
}

const toastInjectionKey = Symbol("VueToastification");
const globalEventBus = new EventBus();

const VueToastificationPlugin = (App, options) => {
  const inter = createToastInterface(Object.assign({
    eventBus: globalEventBus
  }, options));
  App.provide(toastInjectionKey, inter);
};

const provideToast = options => {
  const toast = createToastInterface(options);
  provide(toastInjectionKey, toast);
};

const useToast = eventBus => {
  if (eventBus) {
    return createToastInterface(eventBus);
  }

  const toast = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)() ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(toastInjectionKey) : undefined;
  return toast ? toast : createToastInterface(globalEventBus);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VueToastificationPlugin);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 Name: vue-upload-component 
Component URI: https://github.com/lian-yue/vue-upload-component#readme 
Version: 3.0.49 
Author: LianYue 
License: Apache-2.0 
Description: Vue.js file upload component, Multi-file upload, Upload directory, Drag upload, Drag the directory, Upload multiple files at the same time, html4 (IE 9), `PUT` method, Customize the filter 
 */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(214)) :
  0;
}(this, (function (vue) { 'use strict';

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }
  /**
   * Creates a XHR request
   *
   * @param {Object} options
   */


  var createRequest = function createRequest(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', options.url);
    xhr.responseType = 'json';

    if (options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }

    return xhr;
  };
  /**
   * Sends a XHR request with certain body
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} body
   */


  var sendRequest = function sendRequest(xhr, body) {
    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;

          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }

          resolve(response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = function () {
        return reject(xhr.response);
      };

      xhr.send(JSON.stringify(body));
    });
  };
  /**
   * Sends a XHR request with certain form data
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} data
   */


  var sendFormRequest = function sendFormRequest(xhr, data) {
    var body = new FormData();

    for (var name in data) {
      body.append(name, data[name]);
    }

    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;

          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }

          resolve(response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = function () {
        return reject(xhr.response);
      };

      xhr.send(body);
    });
  };
  /**
   * Creates and sends XHR request
   *
   * @param {Object} options
   *
   * @returns Promise
   */


  function request(options) {
    var xhr = createRequest(options);
    return sendRequest(xhr, options.body);
  }

  var ChunkUploadHandler = /*#__PURE__*/function () {
    /**
     * Constructor
     *
     * @param {File} file
     * @param {Object} options
     */
    function ChunkUploadHandler(file, options) {
      _classCallCheck(this, ChunkUploadHandler);

      this.file = file;
      this.options = options;
      this.chunks = [];
      this.sessionId = null;
      this.chunkSize = null;
      this.speedInterval = null;
    }
    /**
     * Gets the max retries from options
     */


    _createClass(ChunkUploadHandler, [{
      key: "createChunks",

      /**
       * Creates all the chunks in the initial state
       */
      value: function createChunks() {
        this.chunks = [];
        var start = 0;
        var end = this.chunkSize;

        while (start < this.fileSize) {
          this.chunks.push({
            blob: this.file.file.slice(start, end),
            startOffset: start,
            active: false,
            retries: this.maxRetries
          });
          start = end;
          end = start + this.chunkSize;
        }
      }
      /**
       * Updates the progress of the file with the handler's progress
       */

    }, {
      key: "updateFileProgress",
      value: function updateFileProgress() {
        this.file.progress = this.progress;
      }
      /**
       * Paues the upload process
       * - Stops all active requests
       * - Sets the file not active
       */

    }, {
      key: "pause",
      value: function pause() {
        this.file.active = false;
        this.stopChunks();
      }
      /**
       * Stops all the current chunks
       */

    }, {
      key: "stopChunks",
      value: function stopChunks() {
        this.chunksUploading.forEach(function (chunk) {
          chunk.xhr.abort();
          chunk.active = false;
        });
        this.stopSpeedCalc();
      }
      /**
       * Resumes the file upload
       * - Sets the file active
       * - Starts the following chunks
       */

    }, {
      key: "resume",
      value: function resume() {
        this.file.active = true;
        this.startChunking();
      }
      /**
       * Starts the file upload
       *
       * @returns Promise
       * - resolve  The file was uploaded
       * - reject   The file upload failed
       */

    }, {
      key: "upload",
      value: function upload() {
        var _this = this;

        this.promise = new Promise(function (resolve, reject) {
          _this.resolve = resolve;
          _this.reject = reject;
        });
        this.start();
        return this.promise;
      }
      /**
       * Start phase
       * Sends a request to the backend to initialise the chunks
       */

    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        request({
          method: 'POST',
          headers: _objectSpread2(_objectSpread2({}, this.headers), {}, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.startBody, {
            phase: 'start',
            mime_type: this.fileType,
            size: this.fileSize,
            name: this.fileName
          })
        }).then(function (res) {
          if (res.status !== 'success') {
            _this2.file.response = res;
            return _this2.reject('server');
          }

          _this2.sessionId = res.data.session_id;
          _this2.chunkSize = res.data.end_offset;

          _this2.createChunks();

          _this2.startChunking();
        }).catch(function (res) {
          _this2.file.response = res;

          _this2.reject('server');
        });
      }
      /**
       * Starts to upload chunks
       */

    }, {
      key: "startChunking",
      value: function startChunking() {
        for (var i = 0; i < this.maxActiveChunks; i++) {
          this.uploadNextChunk();
        }

        this.startSpeedCalc();
      }
      /**
       * Uploads the next chunk
       * - Won't do anything if the process is paused
       * - Will start finish phase if there are no more chunks to upload
       */

    }, {
      key: "uploadNextChunk",
      value: function uploadNextChunk() {
        if (this.file.active) {
          if (this.hasChunksToUpload) {
            return this.uploadChunk(this.chunksToUpload[0]);
          }

          if (this.chunksUploading.length === 0) {
            return this.finish();
          }
        }
      }
      /**
       * Uploads a chunk
       * - Sends the chunk to the backend
       * - Sets the chunk as uploaded if everything went well
       * - Decreases the number of retries if anything went wrong
       * - Fails if there are no more retries
       *
       * @param {Object} chunk
       */

    }, {
      key: "uploadChunk",
      value: function uploadChunk(chunk) {
        var _this3 = this;

        chunk.progress = 0;
        chunk.active = true;
        this.updateFileProgress();
        chunk.xhr = createRequest({
          method: 'POST',
          headers: this.headers,
          url: this.action
        });
        chunk.xhr.upload.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            chunk.progress = Math.round(evt.loaded / evt.total * 100);
          }
        }, false);
        sendFormRequest(chunk.xhr, Object.assign(this.uploadBody, {
          phase: 'upload',
          session_id: this.sessionId,
          start_offset: chunk.startOffset,
          chunk: chunk.blob
        })).then(function (res) {
          chunk.active = false;

          if (res.status === 'success') {
            chunk.uploaded = true;
          } else {
            if (chunk.retries-- <= 0) {
              _this3.stopChunks();

              return _this3.reject('upload');
            }
          }

          _this3.uploadNextChunk();
        }).catch(function () {
          chunk.active = false;

          if (chunk.retries-- <= 0) {
            _this3.stopChunks();

            return _this3.reject('upload');
          }

          _this3.uploadNextChunk();
        });
      }
      /**
       * Finish phase
       * Sends a request to the backend to finish the process
       */

    }, {
      key: "finish",
      value: function finish() {
        var _this4 = this;

        this.updateFileProgress();
        this.stopSpeedCalc();
        request({
          method: 'POST',
          headers: _objectSpread2(_objectSpread2({}, this.headers), {}, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.finishBody, {
            phase: 'finish',
            session_id: this.sessionId
          })
        }).then(function (res) {
          _this4.file.response = res;

          if (res.status !== 'success') {
            return _this4.reject('server');
          }

          _this4.resolve(res);
        }).catch(function (res) {
          _this4.file.response = res;

          _this4.reject('server');
        });
      }
      /**
       * Sets an interval to calculate and
       * set upload speed every 3 seconds
       */

    }, {
      key: "startSpeedCalc",
      value: function startSpeedCalc() {
        var _this5 = this;

        this.file.speed = 0;
        var lastUploadedBytes = 0;

        if (!this.speedInterval) {
          this.speedInterval = window.setInterval(function () {
            var uploadedBytes = _this5.progress / 100 * _this5.fileSize;
            _this5.file.speed = uploadedBytes - lastUploadedBytes;
            lastUploadedBytes = uploadedBytes;
          }, 1000);
        }
      }
      /**
       * Removes the upload speed interval
       */

    }, {
      key: "stopSpeedCalc",
      value: function stopSpeedCalc() {
        this.speedInterval && window.clearInterval(this.speedInterval);
        this.speedInterval = null;
        this.file.speed = 0;
      }
    }, {
      key: "maxRetries",
      get: function get() {
        return parseInt(this.options.maxRetries, 10);
      }
      /**
       * Gets the max number of active chunks being uploaded at once from options
       */

    }, {
      key: "maxActiveChunks",
      get: function get() {
        return parseInt(this.options.maxActive, 10);
      }
      /**
       * Gets the file type
       */

    }, {
      key: "fileType",
      get: function get() {
        return this.file.type;
      }
      /**
       * Gets the file size
       */

    }, {
      key: "fileSize",
      get: function get() {
        return this.file.size;
      }
      /**
       * Gets the file name
       */

    }, {
      key: "fileName",
      get: function get() {
        return this.file.name;
      }
      /**
       * Gets action (url) to upload the file
       */

    }, {
      key: "action",
      get: function get() {
        return this.options.action || null;
      }
      /**
       * Gets the body to be merged when sending the request in start phase
       */

    }, {
      key: "startBody",
      get: function get() {
        return this.options.startBody || {};
      }
      /**
       * Gets the body to be merged when sending the request in upload phase
       */

    }, {
      key: "uploadBody",
      get: function get() {
        return this.options.uploadBody || {};
      }
      /**
       * Gets the body to be merged when sending the request in finish phase
       */

    }, {
      key: "finishBody",
      get: function get() {
        return this.options.finishBody || {};
      }
      /**
       * Gets the headers of the requests from options
       */

    }, {
      key: "headers",
      get: function get() {
        return this.options.headers || {};
      }
      /**
       * Whether it's ready to upload files or not
       */

    }, {
      key: "readyToUpload",
      get: function get() {
        return !!this.chunks;
      }
      /**
       * Gets the progress of the chunk upload
       * - Gets all the completed chunks
       * - Gets the progress of all the chunks that are being uploaded
       */

    }, {
      key: "progress",
      get: function get() {
        var _this6 = this;

        var completedProgress = this.chunksUploaded.length / this.chunks.length * 100;
        var uploadingProgress = this.chunksUploading.reduce(function (progress, chunk) {
          return progress + (chunk.progress | 0) / _this6.chunks.length;
        }, 0);
        return Math.min(completedProgress + uploadingProgress, 100);
      }
      /**
       * Gets all the chunks that are pending to be uploaded
       */

    }, {
      key: "chunksToUpload",
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !chunk.active && !chunk.uploaded;
        });
      }
      /**
       * Whether there are chunks to upload or not
       */

    }, {
      key: "hasChunksToUpload",
      get: function get() {
        return this.chunksToUpload.length > 0;
      }
      /**
       * Gets all the chunks that are uploading
       */

    }, {
      key: "chunksUploading",
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.xhr && !!chunk.active;
        });
      }
      /**
       * Gets all the chunks that have finished uploading
       */

    }, {
      key: "chunksUploaded",
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.uploaded;
        });
      }
    }]);

    return ChunkUploadHandler;
  }();

  var CHUNK_DEFAULT_OPTIONS = {
    headers: {},
    action: '',
    minSize: 1048576,
    maxActive: 3,
    maxRetries: 5,
    handler: ChunkUploadHandler
  };
  var script = vue.defineComponent({
    props: {
      inputId: {
        type: String
      },
      name: {
        type: String,
        default: 'file'
      },
      accept: {
        type: String
      },
      capture: {},
      disabled: {
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      maximum: {
        type: Number
      },
      addIndex: {
        type: [Boolean, Number]
      },
      directory: {
        type: Boolean
      },
      createDirectory: {
        type: Boolean,
        default: false
      },
      postAction: {
        type: String
      },
      putAction: {
        type: String
      },
      customAction: {
        type: Function
      },
      headers: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      data: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      timeout: {
        type: Number,
        default: 0
      },
      drop: {
        default: false
      },
      dropDirectory: {
        type: Boolean,
        default: true
      },
      size: {
        type: Number,
        default: 0
      },
      extensions: {
        type: [RegExp, String, Array],
        default: function _default() {
          return [];
        }
      },
      modelValue: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      thread: {
        type: Number,
        default: 1
      },
      // Chunk upload enabled
      chunkEnabled: {
        type: Boolean,
        default: false
      },
      // Chunk upload properties
      chunk: {
        type: Object,
        default: function _default() {
          return CHUNK_DEFAULT_OPTIONS;
        }
      }
    },
    emits: ['update:modelValue', 'input-filter', 'input-file'],
    data: function data() {
      return {
        files: this.modelValue,
        features: {
          html5: true,
          directory: false,
          drop: false
        },
        active: false,
        dropActive: false,
        uploading: 0,
        destroy: false,
        maps: {},
        dropElement: null,
        reload: false
      };
    },

    /**
     * mounted
     * @return {[type]} [description]
     */
    mounted: function mounted() {
      var _this7 = this;

      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = true; // html5 特征

      if (window.FormData && input.files) {
        // 上传目录特征
        // @ts-ignore
        if (typeof input.webkitdirectory === 'boolean' || typeof input.directory === 'boolean') {
          this.features.directory = true;
        } // 拖拽特征


        if (this.features.html5 && typeof input.ondrop !== 'undefined') {
          this.features.drop = true;
        }
      } else {
        this.features.html5 = false;
      } // files 定位缓存


      this.maps = {};

      if (this.files) {
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }
      } // @ts-ignore


      this.$nextTick(function () {
        // 更新下父级
        if (_this7.$parent) {
          _this7.$parent.$forceUpdate(); // 拖拽渲染


          _this7.$parent.$nextTick(function () {
            _this7.watchDrop(_this7.drop);
          });
        } else {
          // 拖拽渲染
          _this7.watchDrop(_this7.drop);
        }
      });
    },

    /**
     * beforeUnmount
     * @return {[type]} [description]
     */
    beforeUnmount: function beforeUnmount() {
      // 已销毁
      this.destroy = true; // 设置成不激活

      this.active = false; // 销毁拖拽事件

      this.watchDrop(false); // 销毁不激活

      this.watchActive(false);
    },
    computed: {
      /**
       * uploading 正在上传的线程
       * @return {[type]} [description]
       */

      /**
       * uploaded 文件列表是否全部已上传
       * @return {[type]} [description]
       */
      uploaded: function uploaded() {
        var file;

        for (var i = 0; i < this.files.length; i++) {
          file = this.files[i];

          if (file.fileObject && !file.error && !file.success) {
            return false;
          }
        }

        return true;
      },
      chunkOptions: function chunkOptions() {
        return Object.assign(CHUNK_DEFAULT_OPTIONS, this.chunk);
      },
      className: function className() {
        return ['file-uploads', this.features.html5 ? 'file-uploads-html5' : 'file-uploads-html4', this.features.directory && this.directory ? 'file-uploads-directory' : undefined, this.features.drop && this.drop ? 'file-uploads-drop' : undefined, this.disabled ? 'file-uploads-disabled' : undefined];
      },
      forId: function forId() {
        return this.inputId || this.name;
      },
      iMaximum: function iMaximum() {
        if (this.maximum === undefined) {
          return this.multiple ? 0 : 1;
        }

        return this.maximum;
      },
      iExtensions: function iExtensions() {
        if (!this.extensions) {
          return;
        }

        if (this.extensions instanceof RegExp) {
          return this.extensions;
        }

        if (!this.extensions.length) {
          return;
        }

        var exts = [];

        if (typeof this.extensions === 'string') {
          exts = this.extensions.split(',');
        } else {
          exts = this.extensions;
        }

        exts = exts.map(function (value) {
          return value.trim();
        }).filter(function (value) {
          return value;
        });
        return new RegExp('\\.(' + exts.join('|').replace(/\./g, '\\.') + ')$', 'i');
      }
    },
    watch: {
      active: function active(_active) {
        this.watchActive(_active);
      },
      dropActive: function dropActive() {
        if (this.$parent) {
          this.$parent.$forceUpdate();
        }
      },
      drop: function drop(value) {
        this.watchDrop(value);
      },
      modelValue: function modelValue(files) {
        if (this.files === files) {
          return;
        }

        this.files = files;
        var oldMaps = this.maps; // 重写 maps 缓存

        this.maps = {};

        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        } // add, update


        for (var key in this.maps) {
          var newFile = this.maps[key];
          var oldFile = oldMaps[key];

          if (newFile !== oldFile) {
            this.emitFile(newFile, oldFile);
          }
        } // delete


        for (var _key in oldMaps) {
          if (!this.maps[_key]) {
            this.emitFile(undefined, oldMaps[_key]);
          }
        }
      }
    },
    methods: {
      newId: function newId() {
        return Math.random().toString(36).substr(2);
      },
      // 清空
      clear: function clear() {
        if (this.files.length) {
          var files = this.files;
          this.files = []; // 定位

          this.maps = {}; // 事件

          this.emitInput();

          for (var i = 0; i < files.length; i++) {
            this.emitFile(undefined, files[i]);
          }
        }

        return true;
      },
      // 选择
      get: function get(id) {
        if (!id) {
          return false;
        }

        if (_typeof(id) === 'object') {
          return this.maps[id.id || ''] || false;
        }

        return this.maps[id] || false;
      },
      // 添加
      add: function add(_files, index) {
        // 不是数组整理成数组
        var files;

        if (_files instanceof Array) {
          files = _files;
        } else {
          files = [_files];
        }

        if (index === undefined) {
          // eslint-disable-next-line
          index = this.addIndex;
        } // 遍历规范对象


        var addFiles = [];

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          if (this.features.html5 && file instanceof Blob) {
            file = {
              id: '',
              file: file,
              size: file.size,
              // @ts-ignore
              name: file.webkitRelativePath || file.relativePath || file.name || 'unknown',
              type: file.type
            };
          }

          file = file;
          var fileObject = false;
          if (file.fileObject === false) ;else if (file.fileObject) {
            fileObject = true;
          } else if (typeof Element !== 'undefined' && file.el instanceof HTMLInputElement) {
            fileObject = true;
          } else if (typeof Blob !== 'undefined' && file.file instanceof Blob) {
            fileObject = true;
          }

          if (fileObject) {
            file = _objectSpread(_objectSpread({
              fileObject: true,
              size: -1,
              name: 'Filename',
              type: '',
              active: false,
              error: '',
              success: false,
              putAction: this.putAction,
              postAction: this.postAction,
              timeout: this.timeout
            }, file), {}, {
              response: {},
              progress: '0.00',
              speed: 0
            });
            file.data = _objectSpread(_objectSpread({}, this.data), file.data ? file.data : {});
            file.headers = _objectSpread(_objectSpread({}, this.headers), file.headers ? file.headers : {});
          } // 必须包含 id


          if (!file.id) {
            file.id = this.newId();
          }

          if (this.emitFilter(file, undefined)) {
            continue;
          } // 最大数量限制


          if (this.iMaximum > 1 && addFiles.length + this.files.length >= this.iMaximum) {
            break;
          }

          addFiles.push(file); // 最大数量限制

          if (this.iMaximum === 1) {
            break;
          }
        } // 没有文件


        if (!addFiles.length) {
          return;
        } // 如果是 1 清空


        if (this.iMaximum === 1) {
          this.clear();
        } // 添加进去 files


        var newFiles;

        if (index === true || index === 0) {
          newFiles = addFiles.concat(this.files);
        } else if (index) {
          var _newFiles;

          newFiles = this.files.concat([]);

          (_newFiles = newFiles).splice.apply(_newFiles, [index, 0].concat(addFiles));
        } else {
          newFiles = this.files.concat(addFiles);
        }

        this.files = newFiles; // 定位

        for (var _i = 0; _i < addFiles.length; _i++) {
          var _file = addFiles[_i];
          this.maps[_file.id] = _file;
        } // 事件


        this.emitInput();

        for (var _i2 = 0; _i2 < addFiles.length; _i2++) {
          this.emitFile(addFiles[_i2], undefined);
        }

        return _files instanceof Array ? addFiles : addFiles[0];
      },
      // 添加表单文件
      addInputFile: function addInputFile(el) {
        var _this8 = this;

        var files = [];
        var maximumValue = this.iMaximum; // @ts-ignore

        var entrys = el.webkitEntries || el.entries || undefined;

        if (entrys !== null && entrys !== void 0 && entrys.length) {
          return this.getFileSystemEntry(entrys).then(function (files) {
            return _this8.add(files);
          });
        }

        if (el.files) {
          for (var i = 0; i < el.files.length; i++) {
            var file = el.files[i];
            files.push({
              id: '',
              size: file.size,
              // @ts-ignore
              name: file.webkitRelativePath || file.relativePath || file.name,
              type: file.type,
              file: file
            });
          }
        } else {
          var names = el.value.replace(/\\/g, '/').split('/');

          if (!names || !names.length) {
            names = [el.value];
          } // @ts-ignore


          delete el.__vuex__;
          files.push({
            id: '',
            name: names[names.length - 1],
            el: el
          });
        }

        return Promise.resolve(this.add(files));
      },
      // 添加 DataTransfer
      addDataTransfer: function addDataTransfer(dataTransfer) {
        var _dataTransfer$items,
            _this9 = this;

        // dataTransfer.items 支持
        if (dataTransfer !== null && dataTransfer !== void 0 && (_dataTransfer$items = dataTransfer.items) !== null && _dataTransfer$items !== void 0 && _dataTransfer$items.length) {
          var entrys = []; // 遍历出所有 dataTransferVueUploadItem

          for (var i = 0; i < dataTransfer.items.length; i++) {
            var dataTransferTtem = dataTransfer.items[i];
            var entry = void 0; // @ts-ignore

            if (dataTransferTtem.getAsEntry) {
              // @ts-ignore
              entry = dataTransferTtem.getAsEntry() || dataTransferTtem.getAsFile();
            } else if (dataTransferTtem.webkitGetAsEntry) {
              entry = dataTransferTtem.webkitGetAsEntry() || dataTransferTtem.getAsFile();
            } else {
              entry = dataTransferTtem.getAsFile();
            }

            if (entry) {
              entrys.push(entry);
            }
          }

          return this.getFileSystemEntry(entrys).then(function (files) {
            return _this9.add(files);
          });
        } // dataTransfer.files 支持


        var maximumValue = this.iMaximum;
        var files = [];

        if (dataTransfer.files.length) {
          for (var _i3 = 0; _i3 < dataTransfer.files.length; _i3++) {
            files.push(dataTransfer.files[_i3]);

            if (maximumValue > 0 && files.length >= maximumValue) {
              break;
            }
          }

          return Promise.resolve(this.add(files));
        }

        return Promise.resolve([]);
      },
      // 获得 entrys    
      getFileSystemEntry: function getFileSystemEntry(entry) {
        var _this10 = this;

        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return new Promise(function (resolve) {
          var maximumValue = _this10.iMaximum;

          if (!entry) {
            resolve([]);
            return;
          }

          if (entry instanceof Array) {
            // 多个
            var uploadFiles = [];

            var forEach = function forEach(i) {
              var v = entry[i];

              if (!v || maximumValue > 0 && uploadFiles.length >= maximumValue) {
                return resolve(uploadFiles);
              }

              _this10.getFileSystemEntry(v, path).then(function (results) {
                uploadFiles.push.apply(uploadFiles, _toConsumableArray(results));
                forEach(i + 1);
              });
            };

            forEach(0);
            return;
          }

          if (entry instanceof Blob) {
            resolve([{
              id: '',
              size: entry.size,
              name: path + entry.name,
              type: entry.type,
              file: entry
            }]);
            return;
          }

          if (entry.isFile) {
            entry.file(function (file) {
              resolve([{
                id: '',
                size: file.size,
                name: path + file.name,
                type: file.type,
                file: file
              }]);
            });
            return;
          }

          if (entry.isDirectory && _this10.dropDirectory) {
            var _uploadFiles = []; // 目录也要添加到文件列表

            if (_this10.createDirectory) {
              _uploadFiles.push({
                id: '',
                name: path + entry.name,
                size: 0,
                type: 'text/directory',
                file: new File([], path + entry.name, {
                  type: 'text/directory'
                })
              });
            }

            var dirReader = entry.createReader();

            var readEntries = function readEntries() {
              dirReader.readEntries(function (entries) {
                var forEach = function forEach(i) {
                  if (!entries[i] && i === 0 || maximumValue > 0 && _uploadFiles.length >= maximumValue) {
                    return resolve(_uploadFiles);
                  }

                  if (!entries[i]) {
                    return readEntries();
                  }

                  _this10.getFileSystemEntry(entries[i], path + entry.name + '/').then(function (results) {
                    _uploadFiles.push.apply(_uploadFiles, _toConsumableArray(results));

                    forEach(i + 1);
                  });
                };

                forEach(0);
              });
            };

            readEntries();
            return;
          }

          resolve([]);
        });
      },
      // 替换
      replace: function replace(id1, id2) {
        var file1 = this.get(id1);
        var file2 = this.get(id2);

        if (!file1 || !file2 || file1 === file2) {
          return false;
        }

        var files = this.files.concat([]);
        var index1 = files.indexOf(file1);
        var index2 = files.indexOf(file2);

        if (index1 === -1 || index2 === -1) {
          return false;
        }

        files[index1] = file2;
        files[index2] = file1;
        this.files = files;
        this.emitInput();
        return true;
      },
      // 移除
      remove: function remove(id) {
        var file = this.get(id);

        if (file) {
          if (this.emitFilter(undefined, file)) {
            return false;
          }

          var files = this.files.concat([]);
          var index = files.indexOf(file);

          if (index === -1) {
            console.error('remove', file);
            return false;
          }

          files.splice(index, 1);
          this.files = files; // 定位

          delete this.maps[file.id]; // 事件

          this.emitInput();
          this.emitFile(undefined, file);
        }

        return file;
      },
      // 更新
      update: function update(id, data) {
        var file = this.get(id);

        if (file) {
          var newFile = _objectSpread(_objectSpread({}, file), data); // 停用必须加上错误


          if (file.fileObject && file.active && !newFile.active && !newFile.error && !newFile.success) {
            newFile.error = 'abort';
          }

          if (this.emitFilter(newFile, file)) {
            return false;
          }

          var files = this.files.concat([]);
          var index = files.indexOf(file);

          if (index === -1) {
            console.error('update', file);
            return false;
          }

          files.splice(index, 1, newFile);
          this.files = files; // 删除  旧定位 写入 新定位 （已便支持修改id)

          delete this.maps[file.id];
          this.maps[newFile.id] = newFile; // 事件

          this.emitInput();
          this.emitFile(newFile, file);
          return newFile;
        }

        return false;
      },
      // 预处理 事件 过滤器
      emitFilter: function emitFilter(newFile, oldFile) {
        var isPrevent = false;
        this.$emit('input-filter', newFile, oldFile, function () {
          var prevent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          isPrevent = prevent;
          return isPrevent;
        });
        return isPrevent;
      },
      // 处理后 事件 分发
      emitFile: function emitFile(newFile, oldFile) {
        var _newFile,
            _this11 = this;

        this.$emit('input-file', newFile, oldFile);

        if ((_newFile = newFile) !== null && _newFile !== void 0 && _newFile.fileObject && newFile.active && (!oldFile || !oldFile.active)) {
          this.uploading++; // 激活
          // @ts-ignore

          this.$nextTick(function () {
            setTimeout(function () {
              newFile && _this11.upload(newFile).then(function () {
                var _newFile2;

                if (newFile) {
                  // eslint-disable-next-line
                  newFile = _this11.get(newFile) || undefined;
                }

                if ((_newFile2 = newFile) !== null && _newFile2 !== void 0 && _newFile2.fileObject) {
                  _this11.update(newFile, {
                    active: false,
                    success: !newFile.error
                  });
                }
              }).catch(function (e) {
                newFile && _this11.update(newFile, {
                  active: false,
                  success: false,
                  error: e.code || e.error || e.message || e
                });
              });
            }, Math.ceil(Math.random() * 50 + 50));
          });
        } else if ((!newFile || !newFile.fileObject || !newFile.active) && oldFile && oldFile.fileObject && oldFile.active) {
          // 停止
          this.uploading--;
        } // 自动延续激活
        // @ts-ignore


        if (this.active && (Boolean(newFile) !== Boolean(oldFile) || newFile.active !== oldFile.active)) {
          this.watchActive(true);
        }
      },
      emitInput: function emitInput() {
        this.$emit('update:modelValue', this.files);
      },
      // 上传
      upload: function upload(id) {
        var file = this.get(id); // 被删除

        if (!file) {
          return Promise.reject(new Error('not_exists'));
        } // 不是文件对象


        if (!file.fileObject) {
          return Promise.reject(new Error('file_object'));
        } // 有错误直接响应


        if (file.error) {
          if (file.error instanceof Error) {
            return Promise.reject(file.error);
          }

          return Promise.reject(new Error(file.error));
        } // 已完成直接响应


        if (file.success) {
          return Promise.resolve(file);
        } // 后缀


        if (file.name && this.iExtensions) {
          if (file.name.search(this.iExtensions) === -1) {
            return Promise.reject(new Error('extension'));
          }
        } // 大小


        if (this.size > 0 && file.size !== undefined && file.size >= 0 && file.size > this.size) {
          return Promise.reject(new Error('size'));
        }

        if (this.customAction) {
          return this.customAction(file, this);
        }

        if (this.features.html5) {
          if (this.shouldUseChunkUpload(file)) {
            return this.uploadChunk(file);
          }

          if (file.putAction) {
            return this.uploadPut(file);
          }

          if (file.postAction) {
            return this.uploadHtml5(file);
          }
        }

        if (file.postAction) {
          return this.uploadHtml4(file);
        }

        return Promise.reject(new Error('No action configured'));
      },

      /**
       * Whether this file should be uploaded using chunk upload or not
       *
       * @param Object file
       */
      shouldUseChunkUpload: function shouldUseChunkUpload(file) {
        return this.chunkEnabled && !!this.chunkOptions.handler && file.size && file.size > this.chunkOptions.minSize;
      },

      /**
       * Upload a file using Chunk method
       *
       * @param File file
       */
      uploadChunk: function uploadChunk(file) {
        var HandlerClass = this.chunkOptions.handler;
        file.chunk = new HandlerClass(file, this.chunkOptions);
        return file.chunk.upload().then(function (res) {
          return file;
        });
      },
      uploadPut: function uploadPut(file) {
        var querys = [];
        var value;

        for (var key in file.data) {
          value = file.data[key];

          if (value !== null && value !== undefined) {
            querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        }

        var putAction = file.putAction || '';
        var queryString = querys.length ? (putAction.indexOf('?') === -1 ? '?' : '&') + querys.join('&') : '';
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', putAction + queryString);
        return this.uploadXhr(xhr, file, file.file);
      },
      uploadHtml5: function uploadHtml5(file) {
        var form = new window.FormData();
        var value;

        for (var key in file.data) {
          value = file.data[key];

          if (value && _typeof(value) === 'object' && typeof value.toString !== 'function') {
            if (value instanceof File) {
              form.append(key, value, value.name);
            } else {
              form.append(key, JSON.stringify(value));
            }
          } else if (value !== null && value !== undefined) {
            form.append(key, value);
          }
        } // @ts-ignore


        form.append(this.name, file.file, file.file.name || file.file.filename || file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', file.postAction || '');
        return this.uploadXhr(xhr, file, form);
      },
      uploadXhr: function uploadXhr(xhr, ufile, body) {
        var _this12 = this;

        var file = ufile;
        var speedTime = 0;
        var speedLoaded = 0; // 进度条

        xhr.upload.onprogress = function (e) {
          // 还未开始上传 已删除 未激活
          if (!file) {
            return;
          }

          file = _this12.get(file);

          if (!e.lengthComputable || !file || !file.fileObject || !file.active) {
            return;
          } // 进度 速度 每秒更新一次


          var speedTime2 = Math.round(Date.now() / 1000);

          if (speedTime2 === speedTime) {
            return;
          }

          speedTime = speedTime2;
          file = _this12.update(file, {
            progress: (e.loaded / e.total * 100).toFixed(2),
            speed: e.loaded - speedLoaded
          });
          speedLoaded = e.loaded;
        }; // 检查激活状态


        var interval = window.setInterval(function () {
          if (file) {
            if (file = _this12.get(file)) {
              var _file2;

              if ((_file2 = file) !== null && _file2 !== void 0 && _file2.fileObject && !file.success && !file.error && file.active) {
                return;
              }
            }
          }

          if (interval) {
            clearInterval(interval);
            interval = undefined;
          }

          try {
            xhr.abort();
            xhr.timeout = 1;
          } catch (e) {}
        }, 100);
        return new Promise(function (resolve, reject) {
          if (!file) {
            reject(new Error('not_exists'));
            return;
          }

          var complete;

          var fn = function fn(e) {
            // 已经处理过了
            if (complete) {
              return;
            }

            complete = true;

            if (interval) {
              clearInterval(interval);
              interval = undefined;
            }

            if (!file) {
              return reject(new Error('not_exists'));
            }

            file = _this12.get(file); // 不存在直接响应

            if (!file) {
              return reject(new Error('not_exists'));
            } // 不是文件对象


            if (!file.fileObject) {
              return reject(new Error('file_object'));
            } // 有错误自动响应


            if (file.error) {
              if (file.error instanceof Error) {
                return reject(file.error);
              }

              return reject(new Error(file.error));
            } // 未激活


            if (!file.active) {
              return reject(new Error('abort'));
            } // 已完成 直接相应


            if (file.success) {
              return resolve(file);
            }

            var data = {};

            switch (e.type) {
              case 'timeout':
              case 'abort':
                data.error = e.type;
                break;

              case 'error':
                if (!xhr.status) {
                  data.error = 'network';
                } else if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                }

                break;

              default:
                if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                } else {
                  data.progress = '100.00';
                }

            }

            if (xhr.responseText) {
              var contentType = xhr.getResponseHeader('Content-Type');

              if (contentType && contentType.indexOf('/json') !== -1) {
                data.response = JSON.parse(xhr.responseText);
              } else {
                data.response = xhr.responseText;
              }
            } // 更新
            // @ts-ignore


            file = _this12.update(file, data);

            if (!file) {
              return reject(new Error('abort'));
            } // 有错误自动响应


            if (file.error) {
              if (file.error instanceof Error) {
                return reject(file.error);
              }

              return reject(new Error(file.error));
            } // 响应


            return resolve(file);
          }; // 事件


          xhr.onload = fn;
          xhr.onerror = fn;
          xhr.onabort = fn;
          xhr.ontimeout = fn; // 超时

          if (file.timeout) {
            xhr.timeout = file.timeout;
          } // headers


          for (var key in file.headers) {
            xhr.setRequestHeader(key, file.headers[key]);
          } // 更新 xhr
          // @ts-ignore


          file = _this12.update(file, {
            xhr: xhr
          }); // 开始上传

          file && xhr.send(body);
        });
      },
      uploadHtml4: function uploadHtml4(ufile) {
        var _this13 = this;

        var file = ufile;

        if (!file) {
          return Promise.reject(new Error('not_exists'));
        }

        var onKeydown = function onKeydown(e) {
          if (e.keyCode === 27) {
            e.preventDefault();
          }
        };

        var iframe = document.createElement('iframe');
        iframe.id = 'upload-iframe-' + file.id;
        iframe.name = 'upload-iframe-' + file.id;
        iframe.src = 'about:blank';
        iframe.setAttribute('style', 'width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;');
        var form = document.createElement('form');
        form.setAttribute('action', file.postAction || '');
        form.name = 'upload-form-' + file.id;
        form.setAttribute('method', 'POST');
        form.setAttribute('target', 'upload-iframe-' + file.id);
        form.setAttribute('enctype', 'multipart/form-data');

        for (var key in file.data) {
          var value = file.data[key];

          if (value && _typeof(value) === 'object' && typeof value.toString !== 'function') {
            value = JSON.stringify(value);
          }

          if (value !== null && value !== undefined) {
            var el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = value;
            form.appendChild(el);
          }
        }

        form.appendChild(file.el);
        document.body.appendChild(iframe).appendChild(form);

        var getResponseData = function getResponseData() {
          var _doc;

          var doc;

          try {
            if (iframe.contentWindow) {
              doc = iframe.contentWindow.document;
            }
          } catch (err) {}

          if (!doc) {
            try {
              // @ts-ignore
              doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
            } catch (err) {
              // @ts-ignore
              doc = iframe.document;
            }
          } // @ts-ignore


          if ((_doc = doc) !== null && _doc !== void 0 && _doc.body) {
            return doc.body.innerHTML;
          }

          return null;
        };

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            if (!file) {
              reject(new Error('not_exists'));
              return;
            }

            file = _this13.update(file, {
              iframe: iframe
            }); // 不存在

            if (!file) {
              return reject(new Error('not_exists'));
            } // 定时检查


            var interval = window.setInterval(function () {
              if (file) {
                if (file = _this13.get(file)) {
                  if (file.fileObject && !file.success && !file.error && file.active) {
                    return;
                  }
                }
              }

              if (interval) {
                clearInterval(interval);
                interval = undefined;
              } // @ts-ignore


              iframe.onabort({
                type: file ? 'abort' : 'not_exists'
              });
            }, 100);
            var complete;

            var fn = function fn(e) {
              var _file3;

              // 已经处理过了
              if (complete) {
                return;
              }

              complete = true;

              if (interval) {
                clearInterval(interval);
                interval = undefined;
              } // 关闭 esc 事件


              document.body.removeEventListener('keydown', onKeydown);

              if (!file) {
                return reject(new Error('not_exists'));
              }

              file = _this13.get(file); // 不存在直接响应

              if (!file) {
                return reject(new Error('not_exists'));
              } // 不是文件对象


              if (!file.fileObject) {
                return reject(new Error('file_object'));
              } // 有错误自动响应


              if (file.error) {
                if (file.error instanceof Error) {
                  return reject(file.error);
                }

                return reject(new Error(file.error));
              } // 未激活


              if (!file.active) {
                return reject(new Error('abort'));
              } // 已完成 直接相应


              if (file.success) {
                return resolve(file);
              }

              var response = getResponseData();
              var data = {};

              if (typeof e === 'string') {
                return reject(new Error(e));
              }

              switch (e.type) {
                case 'abort':
                  data.error = 'abort';
                  break;

                case 'error':
                  if (file.error) {
                    data.error = file.error;
                  } else if (response === null) {
                    data.error = 'network';
                  } else {
                    data.error = 'denied';
                  }

                  break;

                default:
                  if (file.error) {
                    data.error = file.error;
                  } else if (response === null) {
                    data.error = 'network';
                  } else {
                    data.progress = '100.00';
                  }

              }

              if (response !== null) {
                if (response && response.substr(0, 1) === '{' && response.substr(response.length - 1, 1) === '}') {
                  try {
                    response = JSON.parse(response);
                  } catch (err) {}
                }

                data.response = response;
              } // 更新


              file = _this13.update(file, data);

              if (!file) {
                return reject(new Error('not_exists'));
              }

              if ((_file3 = file) !== null && _file3 !== void 0 && _file3.error) {
                if (file.error instanceof Error) {
                  return reject(file.error);
                }

                return reject(new Error(file.error));
              } // 响应


              return resolve(file);
            }; // 添加事件


            iframe.onload = fn;
            iframe.onerror = fn;
            iframe.onabort = fn; // 禁止 esc 键

            document.body.addEventListener('keydown', onKeydown); // 提交

            form.submit();
          }, 50);
        }).then(function (res) {
          var _iframe$parentNode;

          iframe === null || iframe === void 0 ? void 0 : (_iframe$parentNode = iframe.parentNode) === null || _iframe$parentNode === void 0 ? void 0 : _iframe$parentNode.removeChild(iframe);
          return res;
        }).catch(function (res) {
          var _iframe$parentNode2;

          iframe === null || iframe === void 0 ? void 0 : (_iframe$parentNode2 = iframe.parentNode) === null || _iframe$parentNode2 === void 0 ? void 0 : _iframe$parentNode2.removeChild(iframe);
          return res;
        });
      },
      watchActive: function watchActive(active) {
        var file;
        var index = 0;

        while (file = this.files[index]) {
          index++;
          if (!file.fileObject) ;else if (active && !this.destroy) {
            if (this.uploading >= this.thread || this.uploading && !this.features.html5) {
              break;
            }

            if (!file.active && !file.error && !file.success) {
              this.update(file, {
                active: true
              });
            }
          } else {
            if (file.active) {
              this.update(file, {
                active: false
              });
            }
          }
        }

        if (this.uploading === 0) {
          this.active = false;
        }
      },
      watchDrop: function watchDrop(newDrop) {
        var oldDrop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (!this.features.drop) {
          return;
        }

        if (newDrop === oldDrop) {
          return;
        } // 移除挂载


        if (this.dropElement) {
          try {
            document.removeEventListener('dragenter', this.onDragenter, false);
            document.removeEventListener('dragleave', this.onDragleave, false);
            document.removeEventListener('drop', this.onDocumentDrop, false);
            this.dropElement.removeEventListener('dragover', this.onDragover, false);
            this.dropElement.removeEventListener('drop', this.onDrop, false);
          } catch (e) {}
        }

        var el = null;
        if (!newDrop) ;else if (typeof newDrop === 'string') {
          // @ts-ignore
          el = document.querySelector(newDrop) || this.$root.$el.querySelector(newDrop);
        } else if (newDrop === true) {
          // @ts-ignore
          el = this.$parent.$el;
        } else {
          el = newDrop;
        }
        this.dropElement = el;

        if (this.dropElement) {
          document.addEventListener('dragenter', this.onDragenter, false);
          document.addEventListener('dragleave', this.onDragleave, false);
          document.addEventListener('drop', this.onDocumentDrop, false);
          this.dropElement.addEventListener('dragover', this.onDragover, false);
          this.dropElement.addEventListener('drop', this.onDrop, false);
        }
      },
      onDragenter: function onDragenter(e) {
        var _dt$files, _dt$types;

        e.preventDefault();

        if (this.dropActive) {
          return;
        }

        if (!e.dataTransfer) {
          return;
        }

        var dt = e.dataTransfer;

        if (dt !== null && dt !== void 0 && (_dt$files = dt.files) !== null && _dt$files !== void 0 && _dt$files.length) {
          this.dropActive = true;
        } else if (!dt.types) {
          this.dropActive = true;
        } else if (dt.types.indexOf && dt.types.indexOf('Files') !== -1) {
          this.dropActive = true; // @ts-ignore
        } else if ((_dt$types = dt.types) !== null && _dt$types !== void 0 && _dt$types.contains && dt.types.contains('Files')) {
          this.dropActive = true;
        }
      },
      onDragleave: function onDragleave(e) {
        e.preventDefault();

        if (!this.dropActive) {
          return;
        } // @ts-ignore


        if (e.target.nodeName === 'HTML' || e.target === e.explicitOriginalTarget || !e.fromElement && (e.clientX <= 0 || e.clientY <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
          this.dropActive = false;
        }
      },
      onDragover: function onDragover(e) {
        e.preventDefault();
      },
      onDocumentDrop: function onDocumentDrop() {
        this.dropActive = false;
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        e.dataTransfer && this.addDataTransfer(e.dataTransfer);
      },
      inputOnChange: async function inputOnChange(e) {
        var _this14 = this;

        if (!(e.target instanceof HTMLInputElement)) {
          return Promise.reject(new Error("not HTMLInputElement"));
        }

        var target = e.target;

        var reinput = function reinput(res) {
          _this14.reload = true; // @ts-ignore

          _this14.$nextTick(function () {
            _this14.reload = false;
          });

          return res;
        };

        return this.addInputFile(e.target).then(reinput).catch(reinput);
      }
    }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("span", {
      class: _ctx.className
    }, [vue.renderSlot(_ctx.$slots, "default"), vue.createVNode("label", {
      for: _ctx.forId
    }, null, 8, ["for"]), !_ctx.reload ? (vue.openBlock(), vue.createBlock("input", {
      key: 0,
      ref: "input",
      type: "file",
      name: _ctx.name,
      id: _ctx.forId,
      accept: _ctx.accept,
      capture: _ctx.capture,
      disabled: _ctx.disabled,
      webkitdirectory: _ctx.directory && _ctx.features.directory,
      allowdirs: _ctx.directory && _ctx.features.directory,
      directory: _ctx.directory && _ctx.features.directory,
      multiple: _ctx.multiple && _ctx.features.html5,
      onChange: _cache[1] || (_cache[1] = function () {
        return _ctx.inputOnChange && _ctx.inputOnChange.apply(_ctx, arguments);
      })
    }, null, 40, ["name", "id", "accept", "capture", "disabled", "webkitdirectory", "allowdirs", "directory", "multiple"])) : vue.createCommentVNode("", true)], 2);
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "\n.file-uploads {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  display: inline-block;\n}\n.file-uploads.file-uploads-html4 input, .file-uploads.file-uploads-html5 label {\n  /* background fix ie  click */\n  background: #fff;\n  opacity: 0;\n  font-size: 20em;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.file-uploads.file-uploads-html5 input, .file-uploads.file-uploads-html4 label {\n  /* background fix ie  click */\n  background: rgba(255, 255, 255, 0);\n  overflow: hidden;\n  position: fixed;\n  width: 1px;\n  height: 1px;\n  z-index: -1;\n  opacity: 0;\n}\n";
  styleInject(css_248z);
  script.render = render;

  return script;

})));
//# sourceMappingURL=vue-upload-component.js.map


/***/ }),

/***/ 471:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0842":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_3663__("85bc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_3663__("499e").default
var update = add("237a4112", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_6770__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_6770__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_6770__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "85bc":
/***/ (function(module, exports, __nested_webpack_require_14007__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_14007__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{height:100%}.bm-burger-button{position:absolute;width:36px;height:30px;left:36px;top:36px;cursor:pointer}.bm-burger-button.hidden{display:none}.bm-burger-bars{background-color:#373a47}.line-style{position:absolute;height:20%;left:0;right:0}.cross-style{position:absolute;top:12px;right:2px;cursor:pointer}.bm-cross{background:#bdc3c7}.bm-cross-button{height:24px;width:24px}.bm-cross-button.hidden{display:none}.bm-menu{height:100%;width:0;position:fixed;z-index:1000;top:0;left:0;background-color:#3f3f41;overflow-x:hidden;padding-top:60px;-webkit-transition:.5s;transition:.5s}.bm-overlay{background:rgba(0,0,0,.3)}.bm-item-list{color:#b8b7ad;margin-left:10%;font-size:20px}.bm-item-list>*{display:-webkit-box;display:-ms-flexbox;display:flex;text-decoration:none;padding:.7em}.bm-item-list>*>span{margin-left:10px;font-weight:700;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __webpack_require__(214);

/***/ }),

/***/ "96e5":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_18498__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Menu_vue_vue_type_style_index_0_id_b817dacc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18498__("0842");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Menu_vue_vue_type_style_index_0_id_b817dacc_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_18498__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Menu_vue_vue_type_style_index_0_id_b817dacc_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_20124__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_20124__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_20124__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_20124__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_20124__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/slide.vue?vue&type=template&id=70eb7296

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(this.$attrs, {
    onOpenMenu: $options.openMenu,
    onCloseMenu: $options.closeMenu
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/slide.vue?vue&type=template&id=70eb7296

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu.vue?vue&type=template&id=b817dacc

var _hoisted_1 = {
  ref: "sideNav",
  class: "bm-menu"
};
var _hoisted_2 = {
  class: "bm-item-list"
};
function Menuvue_type_template_id_b817dacc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("nav", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
    class: ["bm-cross-button cross-style", {
      hidden: !$props.crossIcon
    }],
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.closeMenu && $setup.closeMenu.apply($setup, arguments);
    })
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(2, function (x, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
      key: x,
      class: "bm-cross",
      style: {
        position: 'absolute',
        width: '3px',
        height: '14px',
        transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'
      }
    }, null, 4);
  }), 64))], 2)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    ref: "bmBurgerButton",
    class: ["bm-burger-button", {
      hidden: !$props.burgerIcon
    }],
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.openMenu && $setup.openMenu.apply($setup, arguments);
    })
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(3, function (x, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
      class: "bm-burger-bars line-style",
      style: {
        top: 20 * (index * 2) + '%'
      },
      key: index
    }, null, 4);
  }), 64))], 2)]);
}
// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=template&id=b817dacc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu.vue?vue&type=script&lang=js

/* harmony default export */ var Menuvue_type_script_lang_js = ({
  name: 'menubar',
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '300'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    noOverlay: {
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false
    },
    closeOnNavigation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var bmBurgerButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var isSideBarOpen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var sideNav = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

    var _toRefs = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(props),
        isOpen = _toRefs.isOpen,
        right = _toRefs.right,
        width = _toRefs.width;

    var closeMenu = function closeMenu() {
      emit('closeMenu');
      isSideBarOpen.value = false;
      document.body.classList.remove('bm-overlay');
      sideNav.value.style.width = '0px';
    };

    var closeMenuOnEsc = function closeMenuOnEsc(e) {
      e = e || window.event;

      if (e.key === 'Escape' || e.keyCode === 27) {
        closeMenu();
      }
    };

    var documentClick = function documentClick(e) {
      var element = bmBurgerButton;
      var target = null;

      if (e && e.target) {
        target = e.target;
      }

      if (element.value && element.value !== target && !element.value.contains(target) && !hasClass(target, 'bm-menu') && isSideBarOpen.value && !props.disableOutsideClick) {
        closeMenu();
      } else if (element.value && hasClass(target, 'bm-menu') && isSideBarOpen.value && props.closeOnNavigation) {
        closeMenu();
      }
    };

    var hasClass = function hasClass(element, className) {
      do {
        if (element.classList && element.classList.contains(className)) {
          return true;
        }

        element = element.parentNode;
      } while (element);

      return false;
    };

    var openMenu = function openMenu() {
      emit('openMenu');
      isSideBarOpen.value = true;

      if (!props.noOverlay) {
        document.body.classList.add('bm-overlay');
      }

      if (props.right) {
        sideNav.value.style.left = 'auto';
        sideNav.value.style.right = '0px';
      }

      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
        sideNav.value.style.width = width.value ? width.value + 'px' : '300px';
      });
    }; // Run created life cycle hook code


    document.addEventListener('click', documentClick);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (!props.disableEsc) {
        document.addEventListener('keyup', closeMenuOnEsc);
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      if (!props.disableEsc) {
        document.removeEventListener('keyup', closeMenuOnEsc);
      }

      document.removeEventListener('click', documentClick);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(isOpen, function (isOpen, prevIsOpen) {
      setTimeout(function () {
        if (!prevIsOpen && isOpen) {
          openMenu();
        }

        if (prevIsOpen && !isOpen) {
          closeMenu();
        }
      });
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(right.value, function (right, prevRight) {
      if (prevRight) {
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
          bmBurgerButton.value.style.left = 'auto';
          bmBurgerButton.value.style.right = '36px';
          sideNav.value.style.left = 'auto';
          sideNav.value.style.right = '0px';
          document.querySelector('.bm-burger-button').style.left = 'auto';
          document.querySelector('.bm-burger-button').style.right = '36px';
          document.querySelector('.bm-menu').style.left = 'auto';
          document.querySelector('.bm-menu').style.right = '0px';
          document.querySelector('.cross-style').style.right = '250px';
        });
      }

      if (right) {
        if (bmBurgerButton.value && bmBurgerButton.value.hasAttribute('style')) {
          bmBurgerButton.value.removeAttribute('style');
          sideNav.value.style.right = 'auto';
          document.querySelector('.bm-burger-button').removeAttribute('style');
          document.getElementById('sideNav').style.right = 'auto';
          document.querySelector('.cross-style').style.right = '0px';
        }
      }
    }, {
      deep: true,
      immediate: true
    });
    return {
      bmBurgerButton: bmBurgerButton,
      closeMenu: closeMenu,
      closeMenuOnEsc: closeMenuOnEsc,
      documentClick: documentClick,
      hasClass: hasClass,
      isSideBarOpen: isSideBarOpen,
      openMenu: openMenu,
      sideNav: sideNav
    };
  }
});
// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Menu.vue?vue&type=style&index=0&id=b817dacc&lang=css
var Menuvue_type_style_index_0_id_b817dacc_lang_css = __nested_webpack_require_20124__("96e5");

// CONCATENATED MODULE: ./src/components/Menu.vue





Menuvue_type_script_lang_js.render = Menuvue_type_template_id_b817dacc_render

/* harmony default export */ var Menu = (Menuvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/slide.vue?vue&type=script&lang=js

/* harmony default export */ var slidevue_type_script_lang_js = ({
  name: 'slide',
  components: {
    Menu: Menu
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit('openMenu');
    },
    closeMenu: function closeMenu() {
      this.$emit('closeMenu');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/slide.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/slide.vue



slidevue_type_script_lang_js.render = render

/* harmony default export */ var slide = (slidevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/bubble.vue?vue&type=template&id=325b4e41

function bubblevue_type_template_id_325b4e41_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    ref: "sideNav"
  }, this.$attrs, {
    onOpenMenu: $options.openMenu,
    onCloseMenu: $options.closeMenu
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/bubble.vue?vue&type=template&id=325b4e41

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/bubble.vue?vue&type=script&lang=js

/* harmony default export */ var bubblevue_type_script_lang_js = ({
  name: 'bubble',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      //this.$emit("openMenu")
      var set = this.sideNav.$el.querySelector('.bm-menu'); //console.log(set,"lallan")

      set.style.borderRadius = '150% / 70%';

      if (this.$attrs.right) {
        set.style.borderTopRightRadius = '0px 900px';
        set.style.borderBottomRightRadius = '0px';
      } else {
        set.style.borderTopLeftRadius = '0px 900px';
        set.style.borderBottomLeftRadius = '0px';
      }

      set.style.transitionTimingFunction = 'easy-in';
      this.$emit("openMenu");
      setTimeout(function () {
        set.style.transitionTimingFunction = 'cubic-bezier(.29, 1.01, 1, -0.68)';
        set.style.borderRadius = '0px';
      }, 300);
    },
    closeMenu: function closeMenu() {
      //this.$emit("closeMenu")
      var set = this.sideNav.$el.querySelector('.bm-menu');
      set.style.transitionTimingFunction = null;
      this.$emit("closeMenu");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/bubble.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/bubble.vue



bubblevue_type_script_lang_js.render = bubblevue_type_template_id_325b4e41_render

/* harmony default export */ var bubble = (bubblevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/reveal.vue?vue&type=template&id=01427236

function revealvue_type_template_id_01427236_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(this.$attrs, {
    onOpenMenu: $options.push,
    onCloseMenu: $options.pull
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/reveal.vue?vue&type=template&id=01427236

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/reveal.vue?vue&type=script&lang=js

/* harmony default export */ var revealvue_type_script_lang_js = ({
  name: 'reveal',
  data: function data() {
    return {
      bodyOldStyle: ''
    };
  },
  components: {
    Menu: Menu
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px )");
      }

      document.querySelector('#page-wrap').style.position = 'relative';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.position = '';
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/reveal.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/reveal.vue



revealvue_type_script_lang_js.render = revealvue_type_template_id_01427236_render

/* harmony default export */ var reveal = (revealvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/push.vue?vue&type=template&id=1e67cf34

function pushvue_type_template_id_1e67cf34_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(this.$attrs, {
    onOpenMenu: $options.push,
    onCloseMenu: $options.pull
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/push.vue?vue&type=template&id=1e67cf34

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/push.vue?vue&type=script&lang=js

/* harmony default export */ var pushvue_type_script_lang_js = ({
  name: 'push',
  data: function data() {
    return {
      bodyOldStyle: ''
    };
  },
  components: {
    Menu: Menu
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px )");
      }

      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/push.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/push.vue



pushvue_type_script_lang_js.render = pushvue_type_template_id_1e67cf34_render

/* harmony default export */ var push = (pushvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/elastic.vue?vue&type=template&id=378b43ec

function elasticvue_type_template_id_378b43ec_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($data.propsToPass, {
    openMenu: "openMenu",
    onCloseMenu: $options.closeMenu
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/elastic.vue?vue&type=template&id=378b43ec

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/elastic.vue?vue&type=script&lang=js

/* harmony default export */ var elasticvue_type_script_lang_js = ({
  name: 'elastic',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/elastic.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/elastic.vue



elasticvue_type_script_lang_js.render = elasticvue_type_template_id_378b43ec_render

/* harmony default export */ var elastic = (elasticvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/fallDown.vue?vue&type=template&id=3802665a

function fallDownvue_type_template_id_3802665a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    ref: "sideNav"
  }, this.$attrs, {
    onOpenMenu: $options.openMenu,
    onCloseMenu: $options.closeMenu
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/fallDown.vue?vue&type=template&id=3802665a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/fallDown.vue?vue&type=script&lang=js

/* harmony default export */ var fallDownvue_type_script_lang_js = ({
  name: 'elastic',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      var _this = this;

      this.$emit("openMenu");
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.sideNav.$el.querySelector('.bm-menu').style.overflowY = 'hidden';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';
      this.sideNav.$el.querySelector('.bm-menu').style.transition = '0.5s';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px )");
      }

      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      this.$nextTick(function () {
        _this.sideNav.$el.querySelector('.bm-menu').style.height = '100%';
      });
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.body.setAttribute('style', this.bodyOldStyle);
      this.sideNav.$el.querySelector('.bm-menu').style.height = '0px';
    }
  },
  mounted: function mounted() {
    this.sideNav.$el.querySelector('.bm-menu').style.height = '0px';
  }
});
// CONCATENATED MODULE: ./src/components/Menu/fallDown.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/fallDown.vue



fallDownvue_type_script_lang_js.render = fallDownvue_type_template_id_3802665a_render

/* harmony default export */ var fallDown = (fallDownvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/pushRotate.vue?vue&type=template&id=b055c8f2

function pushRotatevue_type_template_id_b055c8f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(this.$attrs, {
    onOpenMenu: $options.push,
    onCloseMenu: $options.pull
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/pushRotate.vue?vue&type=template&id=b055c8f2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/pushRotate.vue?vue&type=script&lang=js

/* harmony default export */ var pushRotatevue_type_script_lang_js = ({
  name: 'pushrotate',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      appOldStyle: ''
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px ) rotateY(15deg)");
        document.querySelector('#page-wrap').style.transformOrigin = '100% 50% 0px';
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px ) rotateY(-15deg)");
        document.querySelector('#page-wrap').style.transformOrigin = '0% 50% 0px';
      }

      document.querySelector('#page-wrap').style.transformStyle = 'preserve-3d';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      this.appOldStyle = document.querySelector('#app').getAttribute('style') || '';
      document.querySelector('#app').style.perspective = '1500px';
      document.querySelector('#app').style.overflow = 'hidden';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.transformStyle = '';
      document.querySelector('#page-wrap').style.transformOrigin = '';
      document.querySelector('#app').setAttribute('style', this.appOldStyle);
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/pushRotate.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/pushRotate.vue



pushRotatevue_type_script_lang_js.render = pushRotatevue_type_template_id_b055c8f2_render

/* harmony default export */ var pushRotate = (pushRotatevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/stack.vue?vue&type=template&id=9093ae04

function stackvue_type_template_id_9093ae04_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($data.propsToPass, {
    openMenu: "openMenu",
    onCloseMenu: $options.closeMenu
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/stack.vue?vue&type=template&id=9093ae04

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/stack.vue?vue&type=script&lang=js

/* harmony default export */ var stackvue_type_script_lang_js = ({
  name: 'stack',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/stack.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/stack.vue



stackvue_type_script_lang_js.render = stackvue_type_template_id_9093ae04_render

/* harmony default export */ var stack = (stackvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/scaleRotate.vue?vue&type=template&id=5c3b7fd8

function scaleRotatevue_type_template_id_5c3b7fd8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(this.$attrs, {
    onOpenMenu: $options.push,
    onCloseMenu: $options.pull
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/scaleRotate.vue?vue&type=template&id=5c3b7fd8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/scaleRotate.vue?vue&type=script&lang=js

/* harmony default export */ var scaleRotatevue_type_script_lang_js = ({
  name: 'scalerotate',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      appOldStyle: ''
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '100px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, -600px ) rotateY(20deg)");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, -600px ) rotateY(-20deg)");
      }

      document.querySelector('#page-wrap').style.transformStyle = 'preserve-3d';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.overflow = 'hidden';
      this.appOldStyle = document.querySelector('#app').getAttribute('style') || '';
      document.querySelector('#app').style.perspective = '1500px';
      document.querySelector('#app').style.overflow = 'hidden';
      document.querySelector('#app').style.height = '100%';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.transformStyle = '';
      document.querySelector('#page-wrap').style.transformOrigin = '';
      document.querySelector('#page-wrap').style.overflow = 'auto';
      document.querySelector('#app').setAttribute('style', this.appOldStyle);
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/scaleRotate.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/scaleRotate.vue



scaleRotatevue_type_script_lang_js.render = scaleRotatevue_type_template_id_5c3b7fd8_render

/* harmony default export */ var scaleRotate = (scaleRotatevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/scaleDown.vue?vue&type=template&id=34b586d9

function scaleDownvue_type_template_id_34b586d9_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Menu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Menu, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(this.$attrs, {
    onOpenMenu: $options.push,
    onCloseMenu: $options.pull
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["onOpenMenu", "onCloseMenu"])]);
}
// CONCATENATED MODULE: ./src/components/Menu/scaleDown.vue?vue&type=template&id=34b586d9

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Menu/scaleDown.vue?vue&type=script&lang=js

/* harmony default export */ var scaleDownvue_type_script_lang_js = ({
  name: 'scaledown',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      appOldStyle: ''
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '100px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, -600px ) ");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, -600px ) ");
      }

      document.querySelector('#page-wrap').style.transformStyle = 'preserve-3d';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.overflow = 'hidden';
      this.appOldStyle = document.querySelector('#app').getAttribute('style') || '';
      document.querySelector('#app').style.perspective = '1500px';
      document.querySelector('#app').style.overflow = 'hidden';
      document.querySelector('#app').style.height = '100%';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.transformStyle = '';
      document.querySelector('#page-wrap').style.transformOrigin = '';
      document.querySelector('#page-wrap').style.overflow = 'auto';
      document.querySelector('#app').setAttribute('style', this.appOldStyle);
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/scaleDown.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Menu/scaleDown.vue



scaleDownvue_type_script_lang_js.render = scaleDownvue_type_template_id_34b586d9_render

/* harmony default export */ var scaleDown = (scaleDownvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/index.js
// Different CSS animations











/* harmony default export */ var components = ({
  Menu: Menu,
  Slide: slide,
  Bubble: bubble,
  Reveal: reveal,
  Push: push,
  PushRotate: pushRotate,
  ScaleDown: scaleDown,
  ScaleRotate: scaleRotate,
  Stack: stack,
  FallDown: fallDown,
  Elastic: elastic
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vue3-burger-menu.common.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __assign=Object.assign;!function(e,t){ true?module.exports=t(__webpack_require__(214)):0}(this,(function(e){"use strict";const t={onStart:()=>{},onPreviousStep:e=>{},onNextStep:e=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},o={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,useKeyboardNavigation:!0,enabledNavigationKeys:{ESCAPE:!0,ARROW_RIGHT:!0,ARROW_LEFT:!0},debug:!1},n={ACTIVE:"v-tour--active",TARGET_HIGHLIGHTED:"v-tour__target--highlighted",TARGET_RELATIVE:"v-tour__target--relative"},r="box-shadow 0s ease-in-out 0s",i={enableScrolling:!0,highlight:o.highlight,enabledButtons:o.enabledButtons,modifiers:{arrow:{element:".v-step__arrow"}},placement:"bottom"},s=39,a=37,p=27;const l={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>o},callbacks:{type:Object,default:()=>t}},setup(n,r){const i=e.ref(-1),l=e.computed((()=>__assign(__assign({},o),n.options))),u=e.computed((()=>__assign(__assign({},t),n.callbacks))),f=e.computed((()=>i.value>-1&&i.value<h.value)),c=e.computed((()=>0===i.value)),d=e.computed((()=>i.value===n.steps.length-1)),h=e.computed((()=>n.steps.length)),m=e.computed((()=>n.steps[i.value])),v=async e=>{e=void 0!==e?parseInt(e,10):0;let t=n.steps[e];if(void 0!==t.before)try{await t.before("start")}catch(o){return Promise.reject(o)}return await new Promise(((t,o)=>{setTimeout((()=>{u.value.onStart(),i.value=e,t()}),l.value.startTimeout)})),Promise.resolve()},g=async()=>{let e=i.value-1;if(e>-1){let o=n.steps[e];if(void 0!==o.before)try{await o.before("previous")}catch(t){return Promise.reject(t)}await new Promise(((t,o)=>{u.value.onPreviousStep(i.value),i.value=e,t()}))}return Promise.resolve()},b=async()=>{let e=i.value+1;if(e<h.value&&-1!==i.value){let o=n.steps[e];if(void 0!==o.before)try{await o.before("next")}catch(t){return Promise.reject(t)}await new Promise(((t,o)=>{u.value.onNextStep(i.value),i.value=e,t()}))}return Promise.resolve()},y=()=>{u.value.onStop(),document.body.classList.remove("v-tour--active"),i.value=-1},w=()=>{u.value.onSkip(),y()},S=()=>{u.value.onFinish(),y()},k=e=>{switch(l.value.debug&&console.log("[Vue Tour] A keyup event occured:",e),e.keyCode){case s:E("ARROW_RIGHT")&&b();break;case a:E("ARROW_LEFT")&&g();break;case p:E("ESCAPE")&&y()}},E=e=>{const{enabledNavigationKeys:t}=l.value;return!t.hasOwnProperty(e)||t[e]};return e.onMounted((()=>{e.getCurrentInstance().appContext.config.globalProperties.$tours[n.name]={step:m,start:v,isRunning:f,customOptions:l,currentStep:i,isFirst:c,isLast:d,previousStep:g,nextStep:b,stop:y,skip:w,finish:S},l.value.useKeyboardNavigation&&window.addEventListener("keyup",k)})),e.onBeforeUnmount((()=>{l.value.useKeyboardNavigation&&window.removeEventListener("keyup",k)})),{customOptions:l,currentStep:i,isFirst:c,isLast:d,previousStep:g,nextStep:b,stop:y,skip:w,finish:S}}},u={class:"v-tour"};l.render=function(t,o,n,r,i,s){const a=e.resolveComponent("v-step");return e.openBlock(),e.createBlock("div",u,[e.renderSlot(t.$slots,"default",{currentStep:r.currentStep,steps:n.steps,previousStep:r.previousStep,nextStep:r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,isFirst:r.isFirst,isLast:r.isLast,labels:r.customOptions.labels,enabledButtons:r.customOptions.enabledButtons,highlight:r.customOptions.highlight,debug:r.customOptions.debug},(()=>[n.steps[r.currentStep]?(e.openBlock(),e.createBlock(a,{step:n.steps[r.currentStep],key:r.currentStep,"previous-step":r.previousStep,"next-step":r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,"is-first":r.isFirst,"is-last":r.isLast,labels:r.customOptions.labels,"enabled-buttons":r.customOptions.enabledButtons,highlight:r.customOptions.highlight,"stop-on-fail":r.customOptions.stopOnTargetNotFound,debug:r.customOptions.debug,onTargetNotFound:o[1]||(o[1]=e=>t.$emit("targetNotFound",e))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug"])):e.createCommentVNode("",!0)]))])};
/**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
var f="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,c=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(f&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var d=f&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),c))}};function h(e){return e&&"[object Function]"==={}.toString.call(e)}function m(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?o[t]:o}function v(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function g(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=m(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(o+r+n)?e:g(v(e))}function b(e){return e&&e.referenceNode?e.referenceNode:e}var y=f&&!(!window.MSInputMethodContext||!document.documentMode),w=f&&/MSIE 10/.test(navigator.userAgent);function S(e){return 11===e?y:10===e?w:y||w}function k(e){if(!e)return document.documentElement;for(var t=S(10)?document.body:null,o=e.offsetParent||null;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===m(o,"position")?k(o):o:e?e.ownerDocument.documentElement:document.documentElement}function E(e){return null!==e.parentNode?E(e.parentNode):e}function x(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,r=o?t:e,i=document.createRange();i.setStart(n,0),i.setEnd(r,0);var s,a,p=i.commonAncestorContainer;if(e!==p&&t!==p||n.contains(r))return"BODY"===(a=(s=p).nodeName)||"HTML"!==a&&k(s.firstElementChild)!==s?k(p):p;var l=E(e);return l.host?x(l.host,t):x(e,E(t).host)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",o="top"===t?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[o]}return e[o]}function T(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=O(t,"top"),r=O(t,"left"),i=o?-1:1;return e.top+=n*i,e.bottom+=n*i,e.left+=r*i,e.right+=r*i,e}function B(e,t){var o="x"===t?"Left":"Top",n="Left"===o?"Right":"Bottom";return parseFloat(e["border"+o+"Width"])+parseFloat(e["border"+n+"Width"])}function L(e,t,o,n){return Math.max(t["offset"+e],t["scroll"+e],o["client"+e],o["offset"+e],o["scroll"+e],S(10)?parseInt(o["offset"+e])+parseInt(n["margin"+("Height"===e?"Top":"Left")])+parseInt(n["margin"+("Height"===e?"Bottom":"Right")]):0)}function _(e){var t=e.body,o=e.documentElement,n=S(10)&&getComputedStyle(o);return{height:L("Height",t,o,n),width:L("Width",t,o,n)}}var N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),C=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function M(e){return A({},e,{right:e.left+e.width,bottom:e.top+e.height})}function P(e){var t={};try{if(S(10)){t=e.getBoundingClientRect();var o=O(e,"top"),n=O(e,"left");t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(f){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?_(e.ownerDocument):{},s=i.width||e.clientWidth||r.width,a=i.height||e.clientHeight||r.height,p=e.offsetWidth-s,l=e.offsetHeight-a;if(p||l){var u=m(e);p-=B(u,"x"),l-=B(u,"y"),r.width-=p,r.height-=l}return M(r)}function D(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=S(10),r="HTML"===t.nodeName,i=P(e),s=P(t),a=g(e),p=m(t),l=parseFloat(p.borderTopWidth),u=parseFloat(p.borderLeftWidth);o&&r&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var f=M({top:i.top-s.top-l,left:i.left-s.left-u,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!n&&r){var c=parseFloat(p.marginTop),d=parseFloat(p.marginLeft);f.top-=l-c,f.bottom-=l-c,f.left-=u-d,f.right-=u-d,f.marginTop=c,f.marginLeft=d}return(n&&!o?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(f=T(f,t)),f}function H(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=D(e,o),r=Math.max(o.clientWidth,window.innerWidth||0),i=Math.max(o.clientHeight,window.innerHeight||0),s=t?0:O(o),a=t?0:O(o,"left"),p={top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:r,height:i};return M(p)}function V(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===m(e,"position"))return!0;var o=v(e);return!!o&&V(o)}function I(e){if(!e||!e.parentElement||S())return document.documentElement;for(var t=e.parentElement;t&&"none"===m(t,"transform");)t=t.parentElement;return t||document.documentElement}function R(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},s=r?I(e):x(e,b(t));if("viewport"===n)i=H(s,r);else{var a=void 0;"scrollParent"===n?"BODY"===(a=g(v(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===n?e.ownerDocument.documentElement:n;var p=D(a,s,r);if("HTML"!==a.nodeName||V(s))i=p;else{var l=_(e.ownerDocument),u=l.height,f=l.width;i.top+=p.top-p.marginTop,i.bottom=u+p.top,i.left+=p.left-p.marginLeft,i.right=f+p.left}}var c="number"==typeof(o=o||0);return i.left+=c?o:o.left||0,i.top+=c?o:o.top||0,i.right-=c?o:o.right||0,i.bottom-=c?o:o.bottom||0,i}function j(e){return e.width*e.height}function W(e,t,o,n,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=R(o,n,i,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map((function(e){return A({key:e},a[e],{area:j(a[e])})})).sort((function(e,t){return t.area-e.area})),l=p.filter((function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight})),u=l.length>0?l[0].key:p[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function G(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=n?I(t):x(t,b(o));return D(o,r,n)}function $(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),o=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),n=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+n,height:e.offsetHeight+o}}function U(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function Y(e,t,o){o=o.split("-")[0];var n=$(e),r={width:n.width,height:n.height},i=-1!==["right","left"].indexOf(o),s=i?"top":"left",a=i?"left":"top",p=i?"height":"width",l=i?"width":"height";return r[s]=t[s]+t[p]/2-n[p]/2,r[a]=o===a?t[a]-n[l]:t[U(a)],r}function q(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function K(e,t,o){return(void 0===o?e:e.slice(0,function(e,t,o){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===o}));var n=q(e,(function(e){return e[t]===o}));return e.indexOf(n)}(e,"name",o))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=e.function||e.fn;e.enabled&&h(o)&&(t.offsets.popper=M(t.offsets.popper),t.offsets.reference=M(t.offsets.reference),t=o(t,e))})),t}function z(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=G(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=W(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=Y(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=K(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function X(e,t){return e.some((function(e){var o=e.name;return e.enabled&&o===t}))}function J(e){for(var t=[!1,"ms","Webkit","Moz","O"],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var r=t[n],i=r?""+r+o:e;if(void 0!==document.body.style[i])return i}return null}function Q(){return this.state.isDestroyed=!0,X(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[J("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Z(e){var t=e.ownerDocument;return t?t.defaultView:window}function ee(e,t,o,n){var r="BODY"===e.nodeName,i=r?e.ownerDocument.defaultView:e;i.addEventListener(t,o,{passive:!0}),r||ee(g(i.parentNode),t,o,n),n.push(i)}function te(e,t,o,n){o.updateBound=n,Z(e).addEventListener("resize",o.updateBound,{passive:!0});var r=g(e);return ee(r,"scroll",o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function oe(){this.state.eventsEnabled||(this.state=te(this.reference,this.options,this.state,this.scheduleUpdate))}function ne(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,Z(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function re(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function ie(e,t){Object.keys(t).forEach((function(o){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&re(t[o])&&(n="px"),e.style[o]=t[o]+n}))}var se=f&&/Firefox/i.test(navigator.userAgent);function ae(e,t,o){var n=q(e,(function(e){return e.name===t})),r=!!n&&e.some((function(e){return e.name===o&&e.enabled&&e.order<n.order}));if(!r){var i="`"+t+"`",s="`"+o+"`";console.warn(s+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var pe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],le=pe.slice(3);function ue(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),n=le.slice(o+1).concat(le.slice(0,o));return t?n.reverse():n}var fe="flip",ce="clockwise",de="counterclockwise";function he(e,t,o,n){var r=[0,0],i=-1!==["right","left"].indexOf(n),s=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=s.indexOf(q(s,(function(e){return-1!==e.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var p=/\s*,\s*|\s+/,l=-1!==a?[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1]].concat(s.slice(a+1))]:[s];return(l=l.map((function(e,n){var r=(1===n?!i:i)?"height":"width",s=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,o,n){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],s=r[2];if(!i)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=o;break;case"%":case"%r":default:a=n}return M(a)[t]/100*i}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,r,t,o)}))}))).forEach((function(e,t){e.forEach((function(o,n){re(o)&&(r[t]+=o*("-"===e[n-1]?-1:1))}))})),r}var me={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split("-")[0],n=t.split("-")[1];if(n){var r=e.offsets,i=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(o),p=a?"left":"top",l=a?"width":"height",u={start:C({},p,i[p]),end:C({},p,i[p]+i[l]-s[l])};e.offsets.popper=A({},s,u[n])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o=t.offset,n=e.placement,r=e.offsets,i=r.popper,s=r.reference,a=n.split("-")[0],p=void 0;return p=re(+o)?[+o,0]:he(o,i,s,a),"left"===a?(i.top+=p[0],i.left-=p[1]):"right"===a?(i.top+=p[0],i.left+=p[1]):"top"===a?(i.left+=p[0],i.top-=p[1]):"bottom"===a&&(i.left+=p[0],i.top+=p[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||k(e.instance.popper);e.instance.reference===o&&(o=k(o));var n=J("transform"),r=e.instance.popper.style,i=r.top,s=r.left,a=r[n];r.top="",r.left="",r[n]="";var p=R(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);r.top=i,r.left=s,r[n]=a,t.boundaries=p;var l=t.priority,u=e.offsets.popper,f={primary:function(e){var o=u[e];return u[e]<p[e]&&!t.escapeWithReference&&(o=Math.max(u[e],p[e])),C({},e,o)},secondary:function(e){var o="right"===e?"left":"top",n=u[o];return u[e]>p[e]&&!t.escapeWithReference&&(n=Math.min(u[o],p[e]-("right"===e?u.width:u.height))),C({},o,n)}};return l.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=A({},u,f[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,r=e.placement.split("-")[0],i=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",p=s?"left":"top",l=s?"width":"height";return o[a]<i(n[p])&&(e.offsets.popper[p]=i(n[p])-o[l]),o[p]>i(n[a])&&(e.offsets.popper[p]=i(n[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var o;if(!ae(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,s=i.popper,a=i.reference,p=-1!==["left","right"].indexOf(r),l=p?"height":"width",u=p?"Top":"Left",f=u.toLowerCase(),c=p?"left":"top",d=p?"bottom":"right",h=$(n)[l];a[d]-h<s[f]&&(e.offsets.popper[f]-=s[f]-(a[d]-h)),a[f]+h>s[d]&&(e.offsets.popper[f]+=a[f]+h-s[d]),e.offsets.popper=M(e.offsets.popper);var v=a[f]+a[l]/2-h/2,g=m(e.instance.popper),b=parseFloat(g["margin"+u]),y=parseFloat(g["border"+u+"Width"]),w=v-e.offsets.popper[f]-b-y;return w=Math.max(Math.min(s[l]-h,w),0),e.arrowElement=n,e.offsets.arrow=(C(o={},f,Math.round(w)),C(o,c,""),o),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(X(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=R(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split("-")[0],r=U(n),i=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case fe:s=[n,r];break;case ce:s=ue(n);break;case de:s=ue(n,!0);break;default:s=t.behavior}return s.forEach((function(a,p){if(n!==a||s.length===p+1)return e;n=e.placement.split("-")[0],r=U(n);var l=e.offsets.popper,u=e.offsets.reference,f=Math.floor,c="left"===n&&f(l.right)>f(u.left)||"right"===n&&f(l.left)<f(u.right)||"top"===n&&f(l.bottom)>f(u.top)||"bottom"===n&&f(l.top)<f(u.bottom),d=f(l.left)<f(o.left),h=f(l.right)>f(o.right),m=f(l.top)<f(o.top),v=f(l.bottom)>f(o.bottom),g="left"===n&&d||"right"===n&&h||"top"===n&&m||"bottom"===n&&v,b=-1!==["top","bottom"].indexOf(n),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),w=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),S=y||w;(c||g||S)&&(e.flipped=!0,(c||g)&&(n=s[p+1]),S&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=n+(i?"-"+i:""),e.offsets.popper=A({},e.offsets.popper,Y(e.instance.popper,e.offsets.reference,e.placement)),e=K(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split("-")[0],n=e.offsets,r=n.popper,i=n.reference,s=-1!==["left","right"].indexOf(o),a=-1===["top","left"].indexOf(o);return r[s?"left":"top"]=i[o]-(a?r[s?"width":"height"]:0),e.placement=U(t),e.offsets.popper=M(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!ae(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,o=q(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,r=e.offsets.popper,i=q(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==i?i:t.gpuAcceleration,a=k(e.instance.popper),p=P(a),l={position:r.position},u=function(e,t){var o=e.offsets,n=o.popper,r=o.reference,i=Math.round,s=Math.floor,a=function(e){return e},p=i(r.width),l=i(n.width),u=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),c=t?u||f||p%2==l%2?i:s:a,d=t?i:a;return{left:c(p%2==1&&l%2==1&&!f&&t?n.left-1:n.left),top:d(n.top),bottom:d(n.bottom),right:c(n.right)}}(e,window.devicePixelRatio<2||!se),f="bottom"===o?"top":"bottom",c="right"===n?"left":"right",d=J("transform"),h=void 0,m=void 0;if(m="bottom"===f?"HTML"===a.nodeName?-a.clientHeight+u.bottom:-p.height+u.bottom:u.top,h="right"===c?"HTML"===a.nodeName?-a.clientWidth+u.right:-p.width+u.right:u.left,s&&d)l[d]="translate3d("+h+"px, "+m+"px, 0)",l[f]=0,l[c]=0,l.willChange="transform";else{var v="bottom"===f?-1:1,g="right"===c?-1:1;l[f]=m*v,l[c]=h*g,l.willChange=f+", "+c}var b={"x-placement":e.placement};return e.attributes=A({},b,e.attributes),e.styles=A({},l,e.styles),e.arrowStyles=A({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,o;return ie(e.instance.popper,e.styles),t=e.instance.popper,o=e.attributes,Object.keys(o).forEach((function(e){!1!==o[e]?t.setAttribute(e,o[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&ie(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,r){var i=G(r,t,e,o.positionFixed),s=W(o.placement,i,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute("x-placement",s),ie(t,{position:o.positionFixed?"fixed":"absolute"}),o},gpuAcceleration:void 0}}},ve=function(){function e(t,o){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};N(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=d(this.update.bind(this)),this.options=A({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(A({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){n.options.modifiers[t]=A({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return A({name:e},n.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&h(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return F(e,[{key:"update",value:function(){return z.call(this)}},{key:"destroy",value:function(){return Q.call(this)}},{key:"enableEventListeners",value:function(){return oe.call(this)}},{key:"disableEventListeners",value:function(){return ne.call(this)}}]),e}();ve.Utils=("undefined"!=typeof window?window:__webpack_require__.g).PopperUtils,ve.placements=pe,ve.Defaults=me;var ge=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye=function(){var e=void 0,t=void 0,o=void 0,n=void 0,r=void 0,i=void 0,s=void 0,a=void 0,p=void 0,l=void 0,u=void 0,f=void 0;function c(){return window.scrollY||window.pageYOffset}function d(e){return e.getBoundingClientRect().top+t}function h(o){p||(p=o),u=r(l=o-p,t,s,a),window.scrollTo(0,u),l<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,t+s),e&&i&&(e.setAttribute("tabindex","-1"),e.focus());"function"==typeof f&&f();p=!1}()}return function(p){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=l.duration||1e3,n=l.offset||0,f=l.callback,r=l.easing||ge,i=l.a11y||!1,t=c(),void 0===p?"undefined":be(p)){case"number":e=void 0,i=!1,o=t+p;break;case"object":o=d(e=p);break;case"string":e=document.querySelector(p),o=d(e)}switch(s=o-t+n,be(l.duration)){case"number":a=l.duration;break;case"function":a=l.duration(s)}window.requestAnimationFrame(h)}}();function we(e,t){var o,n;if(0===t.length)return e;for(o=0,n=t.length;o<n;o++)e=(e<<5)-e+t.charCodeAt(o),e|=0;return e<0?-2*e:e}function Se(e,t,o,n){var r,i=we(we(we(e,o),(r=t,Object.prototype.toString.call(r))),typeof t);if(null===t)return we(i,"null");if(void 0===t)return we(i,"undefined");if("object"==typeof t||"function"==typeof t){if(-1!==n.indexOf(t))return we(i,"[Circular]"+o);n.push(t);var s=function(e,t,o){return Object.keys(t).sort().reduce((function(e,n){return Se(e,t[n],n,o)}),e)}(i,t,n);if(!("valueOf"in t)||"function"!=typeof t.valueOf)return s;try{return we(s,String(t.valueOf()))}catch(a){return we(s,"[valueOf exception]"+(a.stack||a.message))}}return we(i,t.toString())}var ke=function(e){return function(e,t){for(;e.length<t;)e="0"+e;return e}(Se(0,e,"",[]).toString(16),8)};const Ee={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){props.stop()}},finish:{type:Function,default:function(){props.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},displayMask:{type:Boolean,default:!1},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean}},emits:["targetNotFound"],setup(t){const o=ke(t.step.target),s=document.querySelector(t.step.target),a=e.computed((()=>__assign(__assign(__assign(__assign({},i),{highlight:t.highlight}),{enabledButtons:Object.assign({},t.enabledButtons)}),t.step.params))),p=e.ref(null),l=()=>{if(a.value.enableScrolling)if(t.step.duration||t.step.offset){let e={duration:t.step.duration||1e3,offset:t.step.offset||0,callback:void 0,a11y:!1};ye(s,e)}else s.scrollIntoView({behavior:"smooth"})},u=()=>(t.debug&&console.log(`[Vue Tour] Highlight is ${a.value.highlight?"enabled":"disabled"} for .v-step[id="${o}"]`),a.value.highlight),f=()=>{if(u()){document.body.classList.add(n.ACTIVE);const e=window.getComputedStyle(s).getPropertyValue("transition");"all 0s ease 0s"!==e&&(s.style.transition=`${e}, ${r}`),s.classList.add(n.TARGET_HIGHLIGHTED),s.style.position||s.classList.add(n.TARGET_RELATIVE)}else document.body.classList.remove(n.ACTIVE)};return e.onMounted((()=>{t.debug&&console.log("[Vue Tour] The target element "+t.step.target+' of .v-step[id="'+o+'"] is:',s),s?(l(),f(),new ve(s,p.value,a.value)):(t.debug&&console.error("[Vue Tour] The target element "+t.step.target+' of .v-step[id="'+o+'"] does not exist!'),t.$emit("targetNotFound",t.step),t.stopOnFail&&t.stop())})),e.onUnmounted((()=>{if(u()){const e=s.style.transition;s.classList.remove(n.TARGET_HIGHLIGHTED),s.classList.remove(n.TARGET_RELATIVE),e.includes(r)&&setTimeout((()=>{s.style.transition=e.replace(`, ${r}`,"")}),0)}})),{hash:o,isButtonEnabled:e=>!a.value.enabledButtons.hasOwnProperty(e)||a.value.enabledButtons[e],VStep:p}}},xe=e.withScopeId("data-v-c1b3a65a");e.pushScopeId("data-v-c1b3a65a");const Oe={key:0,class:"v-step__header"},Te={class:"v-step__content"},Be={key:1},Le={class:"v-step__buttons"};e.popScopeId();const _e=xe(((t,o,n,r,i,s)=>(e.openBlock(),e.createBlock("div",{class:"v-step",id:"v-step-"+r.hash,ref:"VStep"},[e.renderSlot(t.$slots,"header",{},(()=>[n.step.header?(e.openBlock(),e.createBlock("div",Oe,[n.step.header.title?(e.openBlock(),e.createBlock("div",{key:0,innerHTML:n.step.header.title},null,8,["innerHTML"])):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)])),e.renderSlot(t.$slots,"content",{},(()=>[e.createVNode("div",Te,[n.step.content?(e.openBlock(),e.createBlock("div",{key:0,innerHTML:n.step.content},null,8,["innerHTML"])):(e.openBlock(),e.createBlock("div",Be,"props is a demo step! The id of props step is "+e.toDisplayString(r.hash)+" and it targets "+e.toDisplayString(n.step.target)+".",1))])])),e.renderSlot(t.$slots,"actions",{},(()=>[e.createVNode("div",Le,[!n.isLast&&r.isButtonEnabled("buttonSkip")?(e.openBlock(),e.createBlock("button",{key:0,onClick:o[1]||(o[1]=e.withModifiers(((...e)=>n.skip&&n.skip(...e)),["prevent"])),class:"v-step__button v-step__button-skip"},e.toDisplayString(n.labels.buttonSkip),1)):e.createCommentVNode("",!0),!n.isFirst&&r.isButtonEnabled("buttonPrevious")?(e.openBlock(),e.createBlock("button",{key:1,onClick:o[2]||(o[2]=e.withModifiers(((...e)=>n.previousStep&&n.previousStep(...e)),["prevent"])),class:"v-step__button v-step__button-previous"},e.toDisplayString(n.labels.buttonPrevious),1)):e.createCommentVNode("",!0),!n.isLast&&r.isButtonEnabled("buttonNext")?(e.openBlock(),e.createBlock("button",{key:2,onClick:o[3]||(o[3]=e.withModifiers(((...e)=>n.nextStep&&n.nextStep(...e)),["prevent"])),class:"v-step__button v-step__button-next"},e.toDisplayString(n.labels.buttonNext),1)):e.createCommentVNode("",!0),n.isLast&&r.isButtonEnabled("buttonStop")?(e.openBlock(),e.createBlock("button",{key:3,onClick:o[4]||(o[4]=e.withModifiers(((...e)=>n.finish&&n.finish(...e)),["prevent"])),class:"v-step__button v-step__button-stop"},e.toDisplayString(n.labels.buttonStop),1)):e.createCommentVNode("",!0)])])),e.createVNode("div",{class:["v-step__arrow",{"v-step__arrow--dark":n.step.header&&n.step.header.title}]},null,2)],8,["id"]))));Ee.render=_e,Ee.__scopeId="data-v-c1b3a65a";return e=>{e.config.globalProperties.$tours={},e.component(l.name,l),e.component(Ee.name,Ee)}}));


/***/ }),

/***/ 6:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(769).YAML


/***/ }),

/***/ 769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YAML": () => (/* binding */ YAML)
});

;// CONCATENATED MODULE: ./node_modules/yaml/browser/dist/PlainValue-b8036b75.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var Char = {
  ANCHOR: '&',
  COMMENT: '#',
  TAG: '!',
  DIRECTIVES_END: '-',
  DOCUMENT_END: '.'
};
var Type = {
  ALIAS: 'ALIAS',
  BLANK_LINE: 'BLANK_LINE',
  BLOCK_FOLDED: 'BLOCK_FOLDED',
  BLOCK_LITERAL: 'BLOCK_LITERAL',
  COMMENT: 'COMMENT',
  DIRECTIVE: 'DIRECTIVE',
  DOCUMENT: 'DOCUMENT',
  FLOW_MAP: 'FLOW_MAP',
  FLOW_SEQ: 'FLOW_SEQ',
  MAP: 'MAP',
  MAP_KEY: 'MAP_KEY',
  MAP_VALUE: 'MAP_VALUE',
  PLAIN: 'PLAIN',
  QUOTE_DOUBLE: 'QUOTE_DOUBLE',
  QUOTE_SINGLE: 'QUOTE_SINGLE',
  SEQ: 'SEQ',
  SEQ_ITEM: 'SEQ_ITEM'
};
var defaultTagPrefix = 'tag:yaml.org,2002:';
var defaultTags = {
  MAP: 'tag:yaml.org,2002:map',
  SEQ: 'tag:yaml.org,2002:seq',
  STR: 'tag:yaml.org,2002:str'
};

function findLineStarts(src) {
  var ls = [0];
  var offset = src.indexOf('\n');

  while (offset !== -1) {
    offset += 1;
    ls.push(offset);
    offset = src.indexOf('\n', offset);
  }

  return ls;
}

function getSrcInfo(cst) {
  var lineStarts, src;

  if (typeof cst === 'string') {
    lineStarts = findLineStarts(cst);
    src = cst;
  } else {
    if (Array.isArray(cst)) cst = cst[0];

    if (cst && cst.context) {
      if (!cst.lineStarts) cst.lineStarts = findLineStarts(cst.context.src);
      lineStarts = cst.lineStarts;
      src = cst.context.src;
    }
  }

  return {
    lineStarts: lineStarts,
    src: src
  };
}
/**
 * @typedef {Object} LinePos - One-indexed position in the source
 * @property {number} line
 * @property {number} col
 */

/**
 * Determine the line/col position matching a character offset.
 *
 * Accepts a source string or a CST document as the second parameter. With
 * the latter, starting indices for lines are cached in the document as
 * `lineStarts: number[]`.
 *
 * Returns a one-indexed `{ line, col }` location if found, or
 * `undefined` otherwise.
 *
 * @param {number} offset
 * @param {string|Document|Document[]} cst
 * @returns {?LinePos}
 */


function getLinePos(offset, cst) {
  if (typeof offset !== 'number' || offset < 0) return null;

  var _getSrcInfo = getSrcInfo(cst),
      lineStarts = _getSrcInfo.lineStarts,
      src = _getSrcInfo.src;

  if (!lineStarts || !src || offset > src.length) return null;

  for (var i = 0; i < lineStarts.length; ++i) {
    var start = lineStarts[i];

    if (offset < start) {
      return {
        line: i,
        col: offset - lineStarts[i - 1] + 1
      };
    }

    if (offset === start) return {
      line: i + 1,
      col: 1
    };
  }

  var line = lineStarts.length;
  return {
    line: line,
    col: offset - lineStarts[line - 1] + 1
  };
}
/**
 * Get a specified line from the source.
 *
 * Accepts a source string or a CST document as the second parameter. With
 * the latter, starting indices for lines are cached in the document as
 * `lineStarts: number[]`.
 *
 * Returns the line as a string if found, or `null` otherwise.
 *
 * @param {number} line One-indexed line number
 * @param {string|Document|Document[]} cst
 * @returns {?string}
 */

function getLine(line, cst) {
  var _getSrcInfo2 = getSrcInfo(cst),
      lineStarts = _getSrcInfo2.lineStarts,
      src = _getSrcInfo2.src;

  if (!lineStarts || !(line >= 1) || line > lineStarts.length) return null;
  var start = lineStarts[line - 1];
  var end = lineStarts[line]; // undefined for last line; that's ok for slice()

  while (end && end > start && src[end - 1] === '\n') {
    --end;
  }

  return src.slice(start, end);
}
/**
 * Pretty-print the starting line from the source indicated by the range `pos`
 *
 * Trims output to `maxWidth` chars while keeping the starting column visible,
 * using `…` at either end to indicate dropped characters.
 *
 * Returns a two-line string (or `null`) with `\n` as separator; the second line
 * will hold appropriately indented `^` marks indicating the column range.
 *
 * @param {Object} pos
 * @param {LinePos} pos.start
 * @param {LinePos} [pos.end]
 * @param {string|Document|Document[]*} cst
 * @param {number} [maxWidth=80]
 * @returns {?string}
 */

function getPrettyContext(_ref, cst) {
  var start = _ref.start,
      end = _ref.end;
  var maxWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
  var src = getLine(start.line, cst);
  if (!src) return null;
  var col = start.col;

  if (src.length > maxWidth) {
    if (col <= maxWidth - 10) {
      src = src.substr(0, maxWidth - 1) + '…';
    } else {
      var halfWidth = Math.round(maxWidth / 2);
      if (src.length > col + halfWidth) src = src.substr(0, col + halfWidth - 1) + '…';
      col -= src.length - maxWidth;
      src = '…' + src.substr(1 - maxWidth);
    }
  }

  var errLen = 1;
  var errEnd = '';

  if (end) {
    if (end.line === start.line && col + (end.col - start.col) <= maxWidth + 1) {
      errLen = end.col - start.col;
    } else {
      errLen = Math.min(src.length + 1, maxWidth) - col;
      errEnd = '…';
    }
  }

  var offset = col > 1 ? ' '.repeat(col - 1) : '';
  var err = '^'.repeat(errLen);
  return "".concat(src, "\n").concat(offset).concat(err).concat(errEnd);
}

var Range = /*#__PURE__*/function () {
  function Range(start, end) {
    _classCallCheck(this, Range);

    this.start = start;
    this.end = end || start;
  }

  _createClass(Range, [{
    key: "isEmpty",
    value: function isEmpty() {
      return typeof this.start !== 'number' || !this.end || this.end <= this.start;
    }
    /**
     * Set `origStart` and `origEnd` to point to the original source range for
     * this node, which may differ due to dropped CR characters.
     *
     * @param {number[]} cr - Positions of dropped CR characters
     * @param {number} offset - Starting index of `cr` from the last call
     * @returns {number} - The next offset, matching the one found for `origStart`
     */

  }, {
    key: "setOrigRange",
    value: function setOrigRange(cr, offset) {
      var start = this.start,
          end = this.end;

      if (cr.length === 0 || end <= cr[0]) {
        this.origStart = start;
        this.origEnd = end;
        return offset;
      }

      var i = offset;

      while (i < cr.length) {
        if (cr[i] > start) break;else ++i;
      }

      this.origStart = start + i;
      var nextOffset = i;

      while (i < cr.length) {
        // if end was at \n, it should now be at \r
        if (cr[i] >= end) break;else ++i;
      }

      this.origEnd = end + i;
      return nextOffset;
    }
  }], [{
    key: "copy",
    value: function copy(orig) {
      return new Range(orig.start, orig.end);
    }
  }]);

  return Range;
}();

/** Root class of all nodes */

var Node = /*#__PURE__*/function () {
  function Node(type, props, context) {
    _classCallCheck(this, Node);

    Object.defineProperty(this, 'context', {
      value: context || null,
      writable: true
    });
    this.error = null;
    this.range = null;
    this.valueRange = null;
    this.props = props || [];
    this.type = type;
    this.value = null;
  }

  _createClass(Node, [{
    key: "getPropValue",
    value: function getPropValue(idx, key, skipKey) {
      if (!this.context) return null;
      var src = this.context.src;
      var prop = this.props[idx];
      return prop && src[prop.start] === key ? src.slice(prop.start + (skipKey ? 1 : 0), prop.end) : null;
    }
  }, {
    key: "anchor",
    get: function get() {
      for (var i = 0; i < this.props.length; ++i) {
        var anchor = this.getPropValue(i, Char.ANCHOR, true);
        if (anchor != null) return anchor;
      }

      return null;
    }
  }, {
    key: "comment",
    get: function get() {
      var comments = [];

      for (var i = 0; i < this.props.length; ++i) {
        var comment = this.getPropValue(i, Char.COMMENT, true);
        if (comment != null) comments.push(comment);
      }

      return comments.length > 0 ? comments.join('\n') : null;
    }
  }, {
    key: "commentHasRequiredWhitespace",
    value: function commentHasRequiredWhitespace(start) {
      var src = this.context.src;
      if (this.header && start === this.header.end) return false;
      if (!this.valueRange) return false;
      var end = this.valueRange.end;
      return start !== end || Node.atBlank(src, end - 1);
    }
  }, {
    key: "hasComment",
    get: function get() {
      if (this.context) {
        var src = this.context.src;

        for (var i = 0; i < this.props.length; ++i) {
          if (src[this.props[i].start] === Char.COMMENT) return true;
        }
      }

      return false;
    }
  }, {
    key: "hasProps",
    get: function get() {
      if (this.context) {
        var src = this.context.src;

        for (var i = 0; i < this.props.length; ++i) {
          if (src[this.props[i].start] !== Char.COMMENT) return true;
        }
      }

      return false;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return false;
    }
  }, {
    key: "jsonLike",
    get: function get() {
      var jsonLikeTypes = [Type.FLOW_MAP, Type.FLOW_SEQ, Type.QUOTE_DOUBLE, Type.QUOTE_SINGLE];
      return jsonLikeTypes.indexOf(this.type) !== -1;
    }
  }, {
    key: "rangeAsLinePos",
    get: function get() {
      if (!this.range || !this.context) return undefined;
      var start = getLinePos(this.range.start, this.context.root);
      if (!start) return undefined;
      var end = getLinePos(this.range.end, this.context.root);
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "rawValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      return this.context.src.slice(start, end);
    }
  }, {
    key: "tag",
    get: function get() {
      for (var i = 0; i < this.props.length; ++i) {
        var tag = this.getPropValue(i, Char.TAG, false);

        if (tag != null) {
          if (tag[1] === '<') {
            return {
              verbatim: tag.slice(2, -1)
            };
          } else {
            // eslint-disable-next-line no-unused-vars
            var _tag$match = tag.match(/^(.*!)([^!]*)$/),
                _tag$match2 = _slicedToArray(_tag$match, 3);
                _tag$match2[0];
                var handle = _tag$match2[1],
                suffix = _tag$match2[2];

            return {
              handle: handle,
              suffix: suffix
            };
          }
        }
      }

      return null;
    }
  }, {
    key: "valueRangeContainsNewline",
    get: function get() {
      if (!this.valueRange || !this.context) return false;
      var _this$valueRange2 = this.valueRange,
          start = _this$valueRange2.start,
          end = _this$valueRange2.end;
      var src = this.context.src;

      for (var i = start; i < end; ++i) {
        if (src[i] === '\n') return true;
      }

      return false;
    }
  }, {
    key: "parseComment",
    value: function parseComment(start) {
      var src = this.context.src;

      if (src[start] === Char.COMMENT) {
        var end = Node.endOfLine(src, start + 1);
        var commentRange = new Range(start, end);
        this.props.push(commentRange);
        return end;
      }

      return start;
    }
    /**
     * Populates the `origStart` and `origEnd` values of all ranges for this
     * node. Extended by child classes to handle descendant nodes.
     *
     * @param {number[]} cr - Positions of dropped CR characters
     * @param {number} offset - Starting index of `cr` from the last call
     * @returns {number} - The next offset, matching the one found for `origStart`
     */

  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      if (this.range) offset = this.range.setOrigRange(cr, offset);
      if (this.valueRange) this.valueRange.setOrigRange(cr, offset);
      this.props.forEach(function (prop) {
        return prop.setOrigRange(cr, offset);
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = src.slice(range.start, range.end);
      return Node.addStringTerminator(src, range.end, str);
    }
  }], [{
    key: "addStringTerminator",
    value: function addStringTerminator(src, offset, str) {
      if (str[str.length - 1] === '\n') return str;
      var next = Node.endOfWhiteSpace(src, offset);
      return next >= src.length || src[next] === '\n' ? str + '\n' : str;
    } // ^(---|...)

  }, {
    key: "atDocumentBoundary",
    value: function atDocumentBoundary(src, offset, sep) {
      var ch0 = src[offset];
      if (!ch0) return true;
      var prev = src[offset - 1];
      if (prev && prev !== '\n') return false;

      if (sep) {
        if (ch0 !== sep) return false;
      } else {
        if (ch0 !== Char.DIRECTIVES_END && ch0 !== Char.DOCUMENT_END) return false;
      }

      var ch1 = src[offset + 1];
      var ch2 = src[offset + 2];
      if (ch1 !== ch0 || ch2 !== ch0) return false;
      var ch3 = src[offset + 3];
      return !ch3 || ch3 === '\n' || ch3 === '\t' || ch3 === ' ';
    }
  }, {
    key: "endOfIdentifier",
    value: function endOfIdentifier(src, offset) {
      var ch = src[offset];
      var isVerbatim = ch === '<';
      var notOk = isVerbatim ? ['\n', '\t', ' ', '>'] : ['\n', '\t', ' ', '[', ']', '{', '}', ','];

      while (ch && notOk.indexOf(ch) === -1) {
        ch = src[offset += 1];
      }

      if (isVerbatim && ch === '>') offset += 1;
      return offset;
    }
  }, {
    key: "endOfIndent",
    value: function endOfIndent(src, offset) {
      var ch = src[offset];

      while (ch === ' ') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "endOfLine",
    value: function endOfLine(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '\n') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "endOfWhiteSpace",
    value: function endOfWhiteSpace(src, offset) {
      var ch = src[offset];

      while (ch === '\t' || ch === ' ') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "startOfLine",
    value: function startOfLine(src, offset) {
      var ch = src[offset - 1];
      if (ch === '\n') return offset;

      while (ch && ch !== '\n') {
        ch = src[offset -= 1];
      }

      return offset + 1;
    }
    /**
     * End of indentation, or null if the line's indent level is not more
     * than `indent`
     *
     * @param {string} src
     * @param {number} indent
     * @param {number} lineStart
     * @returns {?number}
     */

  }, {
    key: "endOfBlockIndent",
    value: function endOfBlockIndent(src, indent, lineStart) {
      var inEnd = Node.endOfIndent(src, lineStart);

      if (inEnd > lineStart + indent) {
        return inEnd;
      } else {
        var wsEnd = Node.endOfWhiteSpace(src, inEnd);
        var ch = src[wsEnd];
        if (!ch || ch === '\n') return wsEnd;
      }

      return null;
    }
  }, {
    key: "atBlank",
    value: function atBlank(src, offset, endAsBlank) {
      var ch = src[offset];
      return ch === '\n' || ch === '\t' || ch === ' ' || endAsBlank && !ch;
    }
  }, {
    key: "nextNodeIsIndented",
    value: function nextNodeIsIndented(ch, indentDiff, indicatorAsIndent) {
      if (!ch || indentDiff < 0) return false;
      if (indentDiff > 0) return true;
      return indicatorAsIndent && ch === '-';
    } // should be at line or string end, or at next non-whitespace char

  }, {
    key: "normalizeOffset",
    value: function normalizeOffset(src, offset) {
      var ch = src[offset];
      return !ch ? offset : ch !== '\n' && src[offset - 1] === '\n' ? offset - 1 : Node.endOfWhiteSpace(src, offset);
    } // fold single newline into space, multiple newlines to N - 1 newlines
    // presumes src[offset] === '\n'

  }, {
    key: "foldNewline",
    value: function foldNewline(src, offset, indent) {
      var inCount = 0;
      var error = false;
      var fold = '';
      var ch = src[offset + 1];

      while (ch === ' ' || ch === '\t' || ch === '\n') {
        switch (ch) {
          case '\n':
            inCount = 0;
            offset += 1;
            fold += '\n';
            break;

          case '\t':
            if (inCount <= indent) error = true;
            offset = Node.endOfWhiteSpace(src, offset + 2) - 1;
            break;

          case ' ':
            inCount += 1;
            offset += 1;
            break;
        }

        ch = src[offset + 1];
      }

      if (!fold) fold = ' ';
      if (ch && inCount <= indent) error = true;
      return {
        fold: fold,
        offset: offset,
        error: error
      };
    }
  }]);

  return Node;
}();

var YAMLError = /*#__PURE__*/function (_Error) {
  _inherits(YAMLError, _Error);

  var _super = _createSuper(YAMLError);

  function YAMLError(name, source, message) {
    var _this;

    _classCallCheck(this, YAMLError);

    if (!message || !(source instanceof Node)) throw new Error("Invalid arguments for new ".concat(name));
    _this = _super.call(this);
    _this.name = name;
    _this.message = message;
    _this.source = source;
    return _this;
  }

  _createClass(YAMLError, [{
    key: "makePretty",
    value: function makePretty() {
      if (!this.source) return;
      this.nodeType = this.source.type;
      var cst = this.source.context && this.source.context.root;

      if (typeof this.offset === 'number') {
        this.range = new Range(this.offset, this.offset + 1);
        var start = cst && getLinePos(this.offset, cst);

        if (start) {
          var end = {
            line: start.line,
            col: start.col + 1
          };
          this.linePos = {
            start: start,
            end: end
          };
        }

        delete this.offset;
      } else {
        this.range = this.source.range;
        this.linePos = this.source.rangeAsLinePos;
      }

      if (this.linePos) {
        var _this$linePos$start = this.linePos.start,
            line = _this$linePos$start.line,
            col = _this$linePos$start.col;
        this.message += " at line ".concat(line, ", column ").concat(col);
        var ctx = cst && getPrettyContext(this.linePos, cst);
        if (ctx) this.message += ":\n\n".concat(ctx, "\n");
      }

      delete this.source;
    }
  }]);

  return YAMLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var YAMLReferenceError = /*#__PURE__*/function (_YAMLError) {
  _inherits(YAMLReferenceError, _YAMLError);

  var _super2 = _createSuper(YAMLReferenceError);

  function YAMLReferenceError(source, message) {
    _classCallCheck(this, YAMLReferenceError);

    return _super2.call(this, 'YAMLReferenceError', source, message);
  }

  return YAMLReferenceError;
}(YAMLError);
var YAMLSemanticError = /*#__PURE__*/function (_YAMLError2) {
  _inherits(YAMLSemanticError, _YAMLError2);

  var _super3 = _createSuper(YAMLSemanticError);

  function YAMLSemanticError(source, message) {
    _classCallCheck(this, YAMLSemanticError);

    return _super3.call(this, 'YAMLSemanticError', source, message);
  }

  return YAMLSemanticError;
}(YAMLError);
var YAMLSyntaxError = /*#__PURE__*/function (_YAMLError3) {
  _inherits(YAMLSyntaxError, _YAMLError3);

  var _super4 = _createSuper(YAMLSyntaxError);

  function YAMLSyntaxError(source, message) {
    _classCallCheck(this, YAMLSyntaxError);

    return _super4.call(this, 'YAMLSyntaxError', source, message);
  }

  return YAMLSyntaxError;
}(YAMLError);
var YAMLWarning = /*#__PURE__*/function (_YAMLError4) {
  _inherits(YAMLWarning, _YAMLError4);

  var _super5 = _createSuper(YAMLWarning);

  function YAMLWarning(source, message) {
    _classCallCheck(this, YAMLWarning);

    return _super5.call(this, 'YAMLWarning', source, message);
  }

  return YAMLWarning;
}(YAMLError);

var PlainValue = /*#__PURE__*/function (_Node) {
  _inherits(PlainValue, _Node);

  var _super = _createSuper(PlainValue);

  function PlainValue() {
    _classCallCheck(this, PlainValue);

    return _super.apply(this, arguments);
  }

  _createClass(PlainValue, [{
    key: "strValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var src = this.context.src;
      var ch = src[end - 1];

      while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
        ch = src[--end - 1];
      }

      var str = '';

      for (var i = start; i < end; ++i) {
        var _ch = src[i];

        if (_ch === '\n') {
          var _Node$foldNewline = Node.foldNewline(src, i, -1),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset;

          str += fold;
          i = offset;
        } else if (_ch === ' ' || _ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (i < end && (next === ' ' || next === '\t')) {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : _ch;
        } else {
          str += _ch;
        }
      }

      var ch0 = src[start];

      switch (ch0) {
        case '\t':
          {
            var msg = 'Plain value cannot start with a tab character';
            var errors = [new YAMLSemanticError(this, msg)];
            return {
              errors: errors,
              str: str
            };
          }

        case '@':
        case '`':
          {
            var _msg = "Plain value cannot start with reserved character ".concat(ch0);

            var _errors = [new YAMLSemanticError(this, _msg)];
            return {
              errors: _errors,
              str: str
            };
          }

        default:
          return str;
      }
    }
  }, {
    key: "parseBlockValue",
    value: function parseBlockValue(start) {
      var _this$context = this.context,
          indent = _this$context.indent,
          inFlow = _this$context.inFlow,
          src = _this$context.src;
      var offset = start;
      var valueEnd = start;

      for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
        if (Node.atDocumentBoundary(src, offset + 1)) break;
        var end = Node.endOfBlockIndent(src, indent, offset + 1);
        if (end === null || src[end] === '#') break;

        if (src[end] === '\n') {
          offset = end;
        } else {
          valueEnd = PlainValue.endOfLine(src, end, inFlow);
          offset = valueEnd;
        }
      }

      if (this.valueRange.isEmpty()) this.valueRange.start = start;
      this.valueRange.end = valueEnd;
      return valueEnd;
    }
    /**
     * Parses a plain value from the source
     *
     * Accepted forms are:
     * ```
     * #comment
     *
     * first line
     *
     * first line #comment
     *
     * first line
     * block
     * lines
     *
     * #comment
     * block
     * lines
     * ```
     * where block lines are empty or have an indent level greater than `indent`.
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar, may be `\n`
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var inFlow = context.inFlow,
          src = context.src;
      var offset = start;
      var ch = src[offset];

      if (ch && ch !== '#' && ch !== '\n') {
        offset = PlainValue.endOfLine(src, start, inFlow);
      }

      this.valueRange = new Range(start, offset);
      offset = Node.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);

      if (!this.hasComment || this.valueRange.isEmpty()) {
        offset = this.parseBlockValue(offset);
      }

      return offset;
    }
  }], [{
    key: "endOfLine",
    value: function endOfLine(src, start, inFlow) {
      var ch = src[start];
      var offset = start;

      while (ch && ch !== '\n') {
        if (inFlow && (ch === '[' || ch === ']' || ch === '{' || ch === '}' || ch === ',')) break;
        var next = src[offset + 1];
        if (ch === ':' && (!next || next === '\n' || next === '\t' || next === ' ' || inFlow && next === ',')) break;
        if ((ch === ' ' || ch === '\t') && next === '#') break;
        offset += 1;
        ch = next;
      }

      return offset;
    }
  }]);

  return PlainValue;
}(Node);



;// CONCATENATED MODULE: ./node_modules/yaml/browser/dist/parse-cst.js


var BlankLine = /*#__PURE__*/function (_Node) {
  _inherits(BlankLine, _Node);

  var _super = _createSuper(BlankLine);

  function BlankLine() {
    _classCallCheck(this, BlankLine);

    return _super.call(this, Type.BLANK_LINE);
  }
  /* istanbul ignore next */


  _createClass(BlankLine, [{
    key: "includesTrailingLines",
    get: function get() {
      // This is never called from anywhere, but if it were,
      // this is the value it should return.
      return true;
    }
    /**
     * Parses a blank line from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first \n character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      this.range = new Range(start, start + 1);
      return start + 1;
    }
  }]);

  return BlankLine;
}(Node);

var CollectionItem = /*#__PURE__*/function (_Node) {
  _inherits(CollectionItem, _Node);

  var _super = _createSuper(CollectionItem);

  function CollectionItem(type, props) {
    var _this;

    _classCallCheck(this, CollectionItem);

    _this = _super.call(this, type, props);
    _this.node = null;
    return _this;
  }

  _createClass(CollectionItem, [{
    key: "includesTrailingLines",
    get: function get() {
      return !!this.node && this.node.includesTrailingLines;
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src;
      var atLineStart = context.atLineStart,
          lineStart = context.lineStart;
      if (!atLineStart && this.type === Type.SEQ_ITEM) this.error = new YAMLSemanticError(this, 'Sequence items must not have preceding content on the same line');
      var indent = atLineStart ? start - lineStart : context.indent;
      var offset = Node.endOfWhiteSpace(src, start + 1);
      var ch = src[offset];
      var inlineComment = ch === '#';
      var comments = [];
      var blankLine = null;

      while (ch === '\n' || ch === '#') {
        if (ch === '#') {
          var _end = Node.endOfLine(src, offset + 1);

          comments.push(new Range(offset, _end));
          offset = _end;
        } else {
          atLineStart = true;
          lineStart = offset + 1;
          var wsEnd = Node.endOfWhiteSpace(src, lineStart);

          if (src[wsEnd] === '\n' && comments.length === 0) {
            blankLine = new BlankLine();
            lineStart = blankLine.parse({
              src: src
            }, lineStart);
          }

          offset = Node.endOfIndent(src, lineStart);
        }

        ch = src[offset];
      }

      if (Node.nextNodeIsIndented(ch, offset - (lineStart + indent), this.type !== Type.SEQ_ITEM)) {
        this.node = parseNode({
          atLineStart: atLineStart,
          inCollection: false,
          indent: indent,
          lineStart: lineStart,
          parent: this
        }, offset);
      } else if (ch && lineStart > start + 1) {
        offset = lineStart - 1;
      }

      if (this.node) {
        if (blankLine) {
          // Only blank lines preceding non-empty nodes are captured. Note that
          // this means that collection item range start indices do not always
          // increase monotonically. -- eemeli/yaml#126
          var items = context.parent.items || context.parent.contents;
          if (items) items.push(blankLine);
        }

        if (comments.length) Array.prototype.push.apply(this.props, comments);
        offset = this.node.range.end;
      } else {
        if (inlineComment) {
          var c = comments[0];
          this.props.push(c);
          offset = c.end;
        } else {
          offset = Node.endOfLine(src, start + 1);
        }
      }

      var end = this.node ? this.node.valueRange.end : offset;
      this.valueRange = new Range(start, end);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _get(_getPrototypeOf(CollectionItem.prototype), "setOrigRanges", this).call(this, cr, offset);
      return this.node ? this.node.setOrigRanges(cr, offset) : offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          node = this.node,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = node ? src.slice(range.start, node.range.start) + String(node) : src.slice(range.start, range.end);
      return Node.addStringTerminator(src, range.end, str);
    }
  }]);

  return CollectionItem;
}(Node);

var Comment = /*#__PURE__*/function (_Node) {
  _inherits(Comment, _Node);

  var _super = _createSuper(Comment);

  function Comment() {
    _classCallCheck(this, Comment);

    return _super.call(this, Type.COMMENT);
  }
  /**
   * Parses a comment line from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */


  _createClass(Comment, [{
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var offset = this.parseComment(start);
      this.range = new Range(start, offset);
      return offset;
    }
  }]);

  return Comment;
}(Node);

function grabCollectionEndComments(node) {
  var cnode = node;

  while (cnode instanceof CollectionItem) {
    cnode = cnode.node;
  }

  if (!(cnode instanceof Collection)) return null;
  var len = cnode.items.length;
  var ci = -1;

  for (var i = len - 1; i >= 0; --i) {
    var n = cnode.items[i];

    if (n.type === Type.COMMENT) {
      // Keep sufficiently indented comments with preceding node
      var _n$context = n.context,
          indent = _n$context.indent,
          lineStart = _n$context.lineStart;
      if (indent > 0 && n.range.start >= lineStart + indent) break;
      ci = i;
    } else if (n.type === Type.BLANK_LINE) ci = i;else break;
  }

  if (ci === -1) return null;
  var ca = cnode.items.splice(ci, len - ci);
  var prevEnd = ca[0].range.start;

  while (true) {
    cnode.range.end = prevEnd;
    if (cnode.valueRange && cnode.valueRange.end > prevEnd) cnode.valueRange.end = prevEnd;
    if (cnode === node) break;
    cnode = cnode.context.parent;
  }

  return ca;
}
var Collection = /*#__PURE__*/function (_Node) {
  _inherits(Collection, _Node);

  var _super = _createSuper(Collection);

  function Collection(firstItem) {
    var _this;

    _classCallCheck(this, Collection);

    _this = _super.call(this, firstItem.type === Type.SEQ_ITEM ? Type.SEQ : Type.MAP);

    for (var i = firstItem.props.length - 1; i >= 0; --i) {
      if (firstItem.props[i].start < firstItem.context.lineStart) {
        // props on previous line are assumed by the collection
        _this.props = firstItem.props.slice(0, i + 1);
        firstItem.props = firstItem.props.slice(i + 1);
        var itemRange = firstItem.props[0] || firstItem.valueRange;
        firstItem.range.start = itemRange.start;
        break;
      }
    }

    _this.items = [firstItem];
    var ec = grabCollectionEndComments(firstItem);
    if (ec) Array.prototype.push.apply(_this.items, ec);
    return _this;
  }

  _createClass(Collection, [{
    key: "includesTrailingLines",
    get: function get() {
      return this.items.length > 0;
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src; // It's easier to recalculate lineStart here rather than tracking down the
      // last context from which to read it -- eemeli/yaml#2

      var lineStart = Node.startOfLine(src, start);
      var firstItem = this.items[0]; // First-item context needs to be correct for later comment handling
      // -- eemeli/yaml#17

      firstItem.context.parent = this;
      this.valueRange = Range.copy(firstItem.valueRange);
      var indent = firstItem.range.start - firstItem.context.lineStart;
      var offset = start;
      offset = Node.normalizeOffset(src, offset);
      var ch = src[offset];
      var atLineStart = Node.endOfWhiteSpace(src, lineStart) === offset;
      var prevIncludesTrailingLines = false;

      while (ch) {
        while (ch === '\n' || ch === '#') {
          if (atLineStart && ch === '\n' && !prevIncludesTrailingLines) {
            var blankLine = new BlankLine();
            offset = blankLine.parse({
              src: src
            }, offset);
            this.valueRange.end = offset;

            if (offset >= src.length) {
              ch = null;
              break;
            }

            this.items.push(blankLine);
            offset -= 1; // blankLine.parse() consumes terminal newline
          } else if (ch === '#') {
            if (offset < lineStart + indent && !Collection.nextContentHasIndent(src, offset, indent)) {
              return offset;
            }

            var comment = new Comment();
            offset = comment.parse({
              indent: indent,
              lineStart: lineStart,
              src: src
            }, offset);
            this.items.push(comment);
            this.valueRange.end = offset;

            if (offset >= src.length) {
              ch = null;
              break;
            }
          }

          lineStart = offset + 1;
          offset = Node.endOfIndent(src, lineStart);

          if (Node.atBlank(src, offset)) {
            var wsEnd = Node.endOfWhiteSpace(src, offset);
            var next = src[wsEnd];

            if (!next || next === '\n' || next === '#') {
              offset = wsEnd;
            }
          }

          ch = src[offset];
          atLineStart = true;
        }

        if (!ch) {
          break;
        }

        if (offset !== lineStart + indent && (atLineStart || ch !== ':')) {
          if (offset < lineStart + indent) {
            if (lineStart > start) offset = lineStart;
            break;
          } else if (!this.error) {
            var msg = 'All collection items must start at the same column';
            this.error = new YAMLSyntaxError(this, msg);
          }
        }

        if (firstItem.type === Type.SEQ_ITEM) {
          if (ch !== '-') {
            if (lineStart > start) offset = lineStart;
            break;
          }
        } else if (ch === '-' && !this.error) {
          // map key may start with -, as long as it's followed by a non-whitespace char
          var _next = src[offset + 1];

          if (!_next || _next === '\n' || _next === '\t' || _next === ' ') {
            var _msg = 'A collection cannot be both a mapping and a sequence';
            this.error = new YAMLSyntaxError(this, _msg);
          }
        }

        var node = parseNode({
          atLineStart: atLineStart,
          inCollection: true,
          indent: indent,
          lineStart: lineStart,
          parent: this
        }, offset);
        if (!node) return offset; // at next document start

        this.items.push(node);
        this.valueRange.end = node.valueRange.end;
        offset = Node.normalizeOffset(src, node.range.end);
        ch = src[offset];
        atLineStart = false;
        prevIncludesTrailingLines = node.includesTrailingLines; // Need to reset lineStart and atLineStart here if preceding node's range
        // has advanced to check the current line's indentation level
        // -- eemeli/yaml#10 & eemeli/yaml#38

        if (ch) {
          var ls = offset - 1;
          var prev = src[ls];

          while (prev === ' ' || prev === '\t') {
            prev = src[--ls];
          }

          if (prev === '\n') {
            lineStart = ls + 1;
            atLineStart = true;
          }
        }

        var ec = grabCollectionEndComments(node);
        if (ec) Array.prototype.push.apply(this.items, ec);
      }

      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _get(_getPrototypeOf(Collection.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.items.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = src.slice(range.start, items[0].range.start) + String(items[0]);

      for (var i = 1; i < items.length; ++i) {
        var item = items[i];
        var _item$context = item.context,
            atLineStart = _item$context.atLineStart,
            indent = _item$context.indent;
        if (atLineStart) for (var _i = 0; _i < indent; ++_i) {
          str += ' ';
        }
        str += String(item);
      }

      return Node.addStringTerminator(src, range.end, str);
    }
  }], [{
    key: "nextContentHasIndent",
    value: function nextContentHasIndent(src, offset, indent) {
      var lineStart = Node.endOfLine(src, offset) + 1;
      offset = Node.endOfWhiteSpace(src, lineStart);
      var ch = src[offset];
      if (!ch) return false;
      if (offset >= lineStart + indent) return true;
      if (ch !== '#' && ch !== '\n') return false;
      return Collection.nextContentHasIndent(src, offset, indent);
    }
  }]);

  return Collection;
}(Node);

var Directive = /*#__PURE__*/function (_Node) {
  _inherits(Directive, _Node);

  var _super = _createSuper(Directive);

  function Directive() {
    var _this;

    _classCallCheck(this, Directive);

    _this = _super.call(this, Type.DIRECTIVE);
    _this.name = null;
    return _this;
  }

  _createClass(Directive, [{
    key: "parameters",
    get: function get() {
      var raw = this.rawValue;
      return raw ? raw.trim().split(/[ \t]+/) : [];
    }
  }, {
    key: "parseName",
    value: function parseName(start) {
      var src = this.context.src;
      var offset = start;
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '\t' && ch !== ' ') {
        ch = src[offset += 1];
      }

      this.name = src.slice(start, offset);
      return offset;
    }
  }, {
    key: "parseParameters",
    value: function parseParameters(start) {
      var src = this.context.src;
      var offset = start;
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '#') {
        ch = src[offset += 1];
      }

      this.valueRange = new Range(start, offset);
      return offset;
    }
  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var offset = this.parseName(start + 1);
      offset = this.parseParameters(offset);
      offset = this.parseComment(offset);
      this.range = new Range(start, offset);
      return offset;
    }
  }]);

  return Directive;
}(Node);

var Document = /*#__PURE__*/function (_Node) {
  _inherits(Document, _Node);

  var _super = _createSuper(Document);

  function Document() {
    var _this;

    _classCallCheck(this, Document);

    _this = _super.call(this, Type.DOCUMENT);
    _this.directives = null;
    _this.contents = null;
    _this.directivesEndMarker = null;
    _this.documentEndMarker = null;
    return _this;
  }

  _createClass(Document, [{
    key: "parseDirectives",
    value: function parseDirectives(start) {
      var src = this.context.src;
      this.directives = [];
      var atLineStart = true;
      var hasDirectives = false;
      var offset = start;

      while (!Node.atDocumentBoundary(src, offset, Char.DIRECTIVES_END)) {
        offset = Document.startCommentOrEndBlankLine(src, offset);

        switch (src[offset]) {
          case '\n':
            if (atLineStart) {
              var blankLine = new BlankLine();
              offset = blankLine.parse({
                src: src
              }, offset);

              if (offset < src.length) {
                this.directives.push(blankLine);
              }
            } else {
              offset += 1;
              atLineStart = true;
            }

            break;

          case '#':
            {
              var comment = new Comment();
              offset = comment.parse({
                src: src
              }, offset);
              this.directives.push(comment);
              atLineStart = false;
            }
            break;

          case '%':
            {
              var directive = new Directive();
              offset = directive.parse({
                parent: this,
                src: src
              }, offset);
              this.directives.push(directive);
              hasDirectives = true;
              atLineStart = false;
            }
            break;

          default:
            if (hasDirectives) {
              this.error = new YAMLSemanticError(this, 'Missing directives-end indicator line');
            } else if (this.directives.length > 0) {
              this.contents = this.directives;
              this.directives = [];
            }

            return offset;
        }
      }

      if (src[offset]) {
        this.directivesEndMarker = new Range(offset, offset + 3);
        return offset + 3;
      }

      if (hasDirectives) {
        this.error = new YAMLSemanticError(this, 'Missing directives-end indicator line');
      } else if (this.directives.length > 0) {
        this.contents = this.directives;
        this.directives = [];
      }

      return offset;
    }
  }, {
    key: "parseContents",
    value: function parseContents(start) {
      var _this$context = this.context,
          parseNode = _this$context.parseNode,
          src = _this$context.src;
      if (!this.contents) this.contents = [];
      var lineStart = start;

      while (src[lineStart - 1] === '-') {
        lineStart -= 1;
      }

      var offset = Node.endOfWhiteSpace(src, start);
      var atLineStart = lineStart === start;
      this.valueRange = new Range(offset);

      while (!Node.atDocumentBoundary(src, offset, Char.DOCUMENT_END)) {
        switch (src[offset]) {
          case '\n':
            if (atLineStart) {
              var blankLine = new BlankLine();
              offset = blankLine.parse({
                src: src
              }, offset);

              if (offset < src.length) {
                this.contents.push(blankLine);
              }
            } else {
              offset += 1;
              atLineStart = true;
            }

            lineStart = offset;
            break;

          case '#':
            {
              var comment = new Comment();
              offset = comment.parse({
                src: src
              }, offset);
              this.contents.push(comment);
              atLineStart = false;
            }
            break;

          default:
            {
              var iEnd = Node.endOfIndent(src, offset);
              var context = {
                atLineStart: atLineStart,
                indent: -1,
                inFlow: false,
                inCollection: false,
                lineStart: lineStart,
                parent: this
              };
              var node = parseNode(context, iEnd);
              if (!node) return this.valueRange.end = iEnd; // at next document start

              this.contents.push(node);
              offset = node.range.end;
              atLineStart = false;
              var ec = grabCollectionEndComments(node);
              if (ec) Array.prototype.push.apply(this.contents, ec);
            }
        }

        offset = Document.startCommentOrEndBlankLine(src, offset);
      }

      this.valueRange.end = offset;

      if (src[offset]) {
        this.documentEndMarker = new Range(offset, offset + 3);
        offset += 3;

        if (src[offset]) {
          offset = Node.endOfWhiteSpace(src, offset);

          if (src[offset] === '#') {
            var _comment = new Comment();

            offset = _comment.parse({
              src: src
            }, offset);
            this.contents.push(_comment);
          }

          switch (src[offset]) {
            case '\n':
              offset += 1;
              break;

            case undefined:
              break;

            default:
              this.error = new YAMLSyntaxError(this, 'Document end marker line cannot have a non-comment suffix');
          }
        }
      }

      return offset;
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      context.root = this;
      this.context = context;
      var src = context.src;
      var offset = src.charCodeAt(start) === 0xfeff ? start + 1 : start; // skip BOM

      offset = this.parseDirectives(offset);
      offset = this.parseContents(offset);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _get(_getPrototypeOf(Document.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.directives.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      if (this.directivesEndMarker) offset = this.directivesEndMarker.setOrigRange(cr, offset);
      this.contents.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      if (this.documentEndMarker) offset = this.documentEndMarker.setOrigRange(cr, offset);
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var contents = this.contents,
          directives = this.directives,
          value = this.value;
      if (value != null) return value;
      var str = directives.join('');

      if (contents.length > 0) {
        if (directives.length > 0 || contents[0].type === Type.COMMENT) str += '---\n';
        str += contents.join('');
      }

      if (str[str.length - 1] !== '\n') str += '\n';
      return str;
    }
  }], [{
    key: "startCommentOrEndBlankLine",
    value: function startCommentOrEndBlankLine(src, start) {
      var offset = Node.endOfWhiteSpace(src, start);
      var ch = src[offset];
      return ch === '#' || ch === '\n' ? offset : start;
    }
  }]);

  return Document;
}(Node);

var Alias = /*#__PURE__*/function (_Node) {
  _inherits(Alias, _Node);

  var _super = _createSuper(Alias);

  function Alias() {
    _classCallCheck(this, Alias);

    return _super.apply(this, arguments);
  }

  _createClass(Alias, [{
    key: "parse",
    value:
    /**
     * Parses an *alias from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */
    function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = Node.endOfIdentifier(src, start + 1);
      this.valueRange = new Range(start + 1, offset);
      offset = Node.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }]);

  return Alias;
}(Node);

var Chomp = {
  CLIP: 'CLIP',
  KEEP: 'KEEP',
  STRIP: 'STRIP'
};
var BlockValue = /*#__PURE__*/function (_Node) {
  _inherits(BlockValue, _Node);

  var _super = _createSuper(BlockValue);

  function BlockValue(type, props) {
    var _this;

    _classCallCheck(this, BlockValue);

    _this = _super.call(this, type, props);
    _this.blockIndent = null;
    _this.chomping = Chomp.CLIP;
    _this.header = null;
    return _this;
  }

  _createClass(BlockValue, [{
    key: "includesTrailingLines",
    get: function get() {
      return this.chomping === Chomp.KEEP;
    }
  }, {
    key: "strValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (this.valueRange.isEmpty()) return '';
      var lastNewLine = null;
      var ch = src[end - 1];

      while (ch === '\n' || ch === '\t' || ch === ' ') {
        end -= 1;

        if (end <= start) {
          if (this.chomping === Chomp.KEEP) break;else return ''; // probably never happens
        }

        if (ch === '\n') lastNewLine = end;
        ch = src[end - 1];
      }

      var keepStart = end + 1;

      if (lastNewLine) {
        if (this.chomping === Chomp.KEEP) {
          keepStart = lastNewLine;
          end = this.valueRange.end;
        } else {
          end = lastNewLine;
        }
      }

      var bi = indent + this.blockIndent;
      var folded = this.type === Type.BLOCK_FOLDED;
      var atStart = true;
      var str = '';
      var sep = '';
      var prevMoreIndented = false;

      for (var i = start; i < end; ++i) {
        for (var j = 0; j < bi; ++j) {
          if (src[i] !== ' ') break;
          i += 1;
        }

        var _ch = src[i];

        if (_ch === '\n') {
          if (sep === '\n') str += '\n';else sep = '\n';
        } else {
          var lineEnd = Node.endOfLine(src, i);
          var line = src.slice(i, lineEnd);
          i = lineEnd;

          if (folded && (_ch === ' ' || _ch === '\t') && i < keepStart) {
            if (sep === ' ') sep = '\n';else if (!prevMoreIndented && !atStart && sep === '\n') sep = '\n\n';
            str += sep + line; //+ ((lineEnd < end && src[lineEnd]) || '')

            sep = lineEnd < end && src[lineEnd] || '';
            prevMoreIndented = true;
          } else {
            str += sep + line;
            sep = folded && i < keepStart ? ' ' : '\n';
            prevMoreIndented = false;
          }

          if (atStart && line !== '') atStart = false;
        }
      }

      return this.chomping === Chomp.STRIP ? str : str + '\n';
    }
  }, {
    key: "parseBlockHeader",
    value: function parseBlockHeader(start) {
      var src = this.context.src;
      var offset = start + 1;
      var bi = '';

      while (true) {
        var ch = src[offset];

        switch (ch) {
          case '-':
            this.chomping = Chomp.STRIP;
            break;

          case '+':
            this.chomping = Chomp.KEEP;
            break;

          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            bi += ch;
            break;

          default:
            this.blockIndent = Number(bi) || null;
            this.header = new Range(start, offset);
            return offset;
        }

        offset += 1;
      }
    }
  }, {
    key: "parseBlockValue",
    value: function parseBlockValue(start) {
      var _this$context2 = this.context,
          indent = _this$context2.indent,
          src = _this$context2.src;
      var explicit = !!this.blockIndent;
      var offset = start;
      var valueEnd = start;
      var minBlockIndent = 1;

      for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
        offset += 1;
        if (Node.atDocumentBoundary(src, offset)) break;
        var end = Node.endOfBlockIndent(src, indent, offset); // should not include tab?

        if (end === null) break;
        var _ch2 = src[end];
        var lineIndent = end - (offset + indent);

        if (!this.blockIndent) {
          // no explicit block indent, none yet detected
          if (src[end] !== '\n') {
            // first line with non-whitespace content
            if (lineIndent < minBlockIndent) {
              var msg = 'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
              this.error = new YAMLSemanticError(this, msg);
            }

            this.blockIndent = lineIndent;
          } else if (lineIndent > minBlockIndent) {
            // empty line with more whitespace
            minBlockIndent = lineIndent;
          }
        } else if (_ch2 && _ch2 !== '\n' && lineIndent < this.blockIndent) {
          if (src[end] === '#') break;

          if (!this.error) {
            var _src = explicit ? 'explicit indentation indicator' : 'first line';

            var _msg = "Block scalars must not be less indented than their ".concat(_src);

            this.error = new YAMLSemanticError(this, _msg);
          }
        }

        if (src[end] === '\n') {
          offset = end;
        } else {
          offset = valueEnd = Node.endOfLine(src, end);
        }
      }

      if (this.chomping !== Chomp.KEEP) {
        offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
      }

      this.valueRange = new Range(start + 1, offset);
      return offset;
    }
    /**
     * Parses a block value from the source
     *
     * Accepted forms are:
     * ```
     * BS
     * block
     * lines
     *
     * BS #comment
     * block
     * lines
     * ```
     * where the block style BS matches the regexp `[|>][-+1-9]*` and block lines
     * are empty or have an indent level greater than `indent`.
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this block
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = this.parseBlockHeader(start);
      offset = Node.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      offset = this.parseBlockValue(offset);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _get(_getPrototypeOf(BlockValue.prototype), "setOrigRanges", this).call(this, cr, offset);
      return this.header ? this.header.setOrigRange(cr, offset) : offset;
    }
  }]);

  return BlockValue;
}(Node);

var FlowCollection = /*#__PURE__*/function (_Node) {
  _inherits(FlowCollection, _Node);

  var _super = _createSuper(FlowCollection);

  function FlowCollection(type, props) {
    var _this;

    _classCallCheck(this, FlowCollection);

    _this = _super.call(this, type, props);
    _this.items = null;
    return _this;
  }

  _createClass(FlowCollection, [{
    key: "prevNodeIsJsonLike",
    value: function prevNodeIsJsonLike() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.items.length;
      var node = this.items[idx - 1];
      return !!node && (node.jsonLike || node.type === Type.COMMENT && this.prevNodeIsJsonLike(idx - 1));
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src;
      var indent = context.indent,
          lineStart = context.lineStart;
      var char = src[start]; // { or [

      this.items = [{
        char: char,
        offset: start
      }];
      var offset = Node.endOfWhiteSpace(src, start + 1);
      char = src[offset];

      while (char && char !== ']' && char !== '}') {
        switch (char) {
          case '\n':
            {
              lineStart = offset + 1;
              var wsEnd = Node.endOfWhiteSpace(src, lineStart);

              if (src[wsEnd] === '\n') {
                var blankLine = new BlankLine();
                lineStart = blankLine.parse({
                  src: src
                }, lineStart);
                this.items.push(blankLine);
              }

              offset = Node.endOfIndent(src, lineStart);

              if (offset <= lineStart + indent) {
                char = src[offset];

                if (offset < lineStart + indent || char !== ']' && char !== '}') {
                  var msg = 'Insufficient indentation in flow collection';
                  this.error = new YAMLSemanticError(this, msg);
                }
              }
            }
            break;

          case ',':
            {
              this.items.push({
                char: char,
                offset: offset
              });
              offset += 1;
            }
            break;

          case '#':
            {
              var comment = new Comment();
              offset = comment.parse({
                src: src
              }, offset);
              this.items.push(comment);
            }
            break;

          case '?':
          case ':':
            {
              var next = src[offset + 1];

              if (next === '\n' || next === '\t' || next === ' ' || next === ',' || // in-flow : after JSON-like key does not need to be followed by whitespace
              char === ':' && this.prevNodeIsJsonLike()) {
                this.items.push({
                  char: char,
                  offset: offset
                });
                offset += 1;
                break;
              }
            }
          // fallthrough

          default:
            {
              var node = parseNode({
                atLineStart: false,
                inCollection: false,
                inFlow: true,
                indent: -1,
                lineStart: lineStart,
                parent: this
              }, offset);

              if (!node) {
                // at next document start
                this.valueRange = new Range(start, offset);
                return offset;
              }

              this.items.push(node);
              offset = Node.normalizeOffset(src, node.range.end);
            }
        }

        offset = Node.endOfWhiteSpace(src, offset);
        char = src[offset];
      }

      this.valueRange = new Range(start, offset + 1);

      if (char) {
        this.items.push({
          char: char,
          offset: offset
        });
        offset = Node.endOfWhiteSpace(src, offset + 1);
        offset = this.parseComment(offset);
      }

      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _get(_getPrototypeOf(FlowCollection.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.items.forEach(function (node) {
        if (node instanceof Node) {
          offset = node.setOrigRanges(cr, offset);
        } else if (cr.length === 0) {
          node.origOffset = node.offset;
        } else {
          var i = offset;

          while (i < cr.length) {
            if (cr[i] > node.offset) break;else ++i;
          }

          node.origOffset = node.offset + i;
          offset = i;
        }
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var nodes = items.filter(function (item) {
        return item instanceof Node;
      });
      var str = '';
      var prevEnd = range.start;
      nodes.forEach(function (node) {
        var prefix = src.slice(prevEnd, node.range.start);
        prevEnd = node.range.end;
        str += prefix + String(node);

        if (str[str.length - 1] === '\n' && src[prevEnd - 1] !== '\n' && src[prevEnd] === '\n') {
          // Comment range does not include the terminal newline, but its
          // stringified value does. Without this fix, newlines at comment ends
          // get duplicated.
          prevEnd += 1;
        }
      });
      str += src.slice(prevEnd, range.end);
      return Node.addStringTerminator(src, range.end, str);
    }
  }]);

  return FlowCollection;
}(Node);

var QuoteDouble = /*#__PURE__*/function (_Node) {
  _inherits(QuoteDouble, _Node);

  var _super = _createSuper(QuoteDouble);

  function QuoteDouble() {
    _classCallCheck(this, QuoteDouble);

    return _super.apply(this, arguments);
  }

  _createClass(QuoteDouble, [{
    key: "strValue",
    get:
    /**
     * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
     */
    function get() {
      if (!this.valueRange || !this.context) return null;
      var errors = [];
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (src[end - 1] !== '"') errors.push(new YAMLSyntaxError(this, 'Missing closing "quote')); // Using String#replace is too painful with escaped newlines preceded by
      // escaped backslashes; also, this should be faster.

      var str = '';

      for (var i = start + 1; i < end - 1; ++i) {
        var ch = src[i];

        if (ch === '\n') {
          if (Node.atDocumentBoundary(src, i + 1)) errors.push(new YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));

          var _Node$foldNewline = Node.foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;

          str += fold;
          i = offset;
          if (error) errors.push(new YAMLSemanticError(this, 'Multi-line double-quoted string needs to be sufficiently indented'));
        } else if (ch === '\\') {
          i += 1;

          switch (src[i]) {
            case '0':
              str += '\0';
              break;
            // null character

            case 'a':
              str += '\x07';
              break;
            // bell character

            case 'b':
              str += '\b';
              break;
            // backspace

            case 'e':
              str += '\x1b';
              break;
            // escape character

            case 'f':
              str += '\f';
              break;
            // form feed

            case 'n':
              str += '\n';
              break;
            // line feed

            case 'r':
              str += '\r';
              break;
            // carriage return

            case 't':
              str += '\t';
              break;
            // horizontal tab

            case 'v':
              str += '\v';
              break;
            // vertical tab

            case 'N':
              str += "\x85";
              break;
            // Unicode next line

            case '_':
              str += "\xA0";
              break;
            // Unicode non-breaking space

            case 'L':
              str += "\u2028";
              break;
            // Unicode line separator

            case 'P':
              str += "\u2029";
              break;
            // Unicode paragraph separator

            case ' ':
              str += ' ';
              break;

            case '"':
              str += '"';
              break;

            case '/':
              str += '/';
              break;

            case '\\':
              str += '\\';
              break;

            case '\t':
              str += '\t';
              break;

            case 'x':
              str += this.parseCharCode(i + 1, 2, errors);
              i += 2;
              break;

            case 'u':
              str += this.parseCharCode(i + 1, 4, errors);
              i += 4;
              break;

            case 'U':
              str += this.parseCharCode(i + 1, 8, errors);
              i += 8;
              break;

            case '\n':
              // skip escaped newlines, but still trim the following line
              while (src[i + 1] === ' ' || src[i + 1] === '\t') {
                i += 1;
              }

              break;

            default:
              errors.push(new YAMLSyntaxError(this, "Invalid escape sequence ".concat(src.substr(i - 1, 2))));
              str += '\\' + src[i];
          }
        } else if (ch === ' ' || ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (next === ' ' || next === '\t') {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
        } else {
          str += ch;
        }
      }

      return errors.length > 0 ? {
        errors: errors,
        str: str
      } : str;
    }
  }, {
    key: "parseCharCode",
    value: function parseCharCode(offset, length, errors) {
      var src = this.context.src;
      var cc = src.substr(offset, length);
      var ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
      var code = ok ? parseInt(cc, 16) : NaN;

      if (isNaN(code)) {
        errors.push(new YAMLSyntaxError(this, "Invalid escape sequence ".concat(src.substr(offset - 2, length + 2))));
        return src.substr(offset - 2, length + 2);
      }

      return String.fromCodePoint(code);
    }
    /**
     * Parses a "double quoted" value from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = QuoteDouble.endOfQuote(src, start + 1);
      this.valueRange = new Range(start, offset);
      offset = Node.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }], [{
    key: "endOfQuote",
    value: function endOfQuote(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '"') {
        offset += ch === '\\' ? 2 : 1;
        ch = src[offset];
      }

      return offset + 1;
    }
  }]);

  return QuoteDouble;
}(Node);

var QuoteSingle = /*#__PURE__*/function (_Node) {
  _inherits(QuoteSingle, _Node);

  var _super = _createSuper(QuoteSingle);

  function QuoteSingle() {
    _classCallCheck(this, QuoteSingle);

    return _super.apply(this, arguments);
  }

  _createClass(QuoteSingle, [{
    key: "strValue",
    get:
    /**
     * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
     */
    function get() {
      if (!this.valueRange || !this.context) return null;
      var errors = [];
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (src[end - 1] !== "'") errors.push(new YAMLSyntaxError(this, "Missing closing 'quote"));
      var str = '';

      for (var i = start + 1; i < end - 1; ++i) {
        var ch = src[i];

        if (ch === '\n') {
          if (Node.atDocumentBoundary(src, i + 1)) errors.push(new YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));

          var _Node$foldNewline = Node.foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;

          str += fold;
          i = offset;
          if (error) errors.push(new YAMLSemanticError(this, 'Multi-line single-quoted string needs to be sufficiently indented'));
        } else if (ch === "'") {
          str += ch;
          i += 1;
          if (src[i] !== "'") errors.push(new YAMLSyntaxError(this, 'Unescaped single quote? This should not happen.'));
        } else if (ch === ' ' || ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (next === ' ' || next === '\t') {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
        } else {
          str += ch;
        }
      }

      return errors.length > 0 ? {
        errors: errors,
        str: str
      } : str;
    }
    /**
     * Parses a 'single quoted' value from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = QuoteSingle.endOfQuote(src, start + 1);
      this.valueRange = new Range(start, offset);
      offset = Node.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }], [{
    key: "endOfQuote",
    value: function endOfQuote(src, offset) {
      var ch = src[offset];

      while (ch) {
        if (ch === "'") {
          if (src[offset + 1] !== "'") break;
          ch = src[offset += 2];
        } else {
          ch = src[offset += 1];
        }
      }

      return offset + 1;
    }
  }]);

  return QuoteSingle;
}(Node);

function createNewNode(type, props) {
  switch (type) {
    case Type.ALIAS:
      return new Alias(type, props);

    case Type.BLOCK_FOLDED:
    case Type.BLOCK_LITERAL:
      return new BlockValue(type, props);

    case Type.FLOW_MAP:
    case Type.FLOW_SEQ:
      return new FlowCollection(type, props);

    case Type.MAP_KEY:
    case Type.MAP_VALUE:
    case Type.SEQ_ITEM:
      return new CollectionItem(type, props);

    case Type.COMMENT:
    case Type.PLAIN:
      return new PlainValue(type, props);

    case Type.QUOTE_DOUBLE:
      return new QuoteDouble(type, props);

    case Type.QUOTE_SINGLE:
      return new QuoteSingle(type, props);

    /* istanbul ignore next */

    default:
      return null;
    // should never happen
  }
}
/**
 * @param {boolean} atLineStart - Node starts at beginning of line
 * @param {boolean} inFlow - true if currently in a flow context
 * @param {boolean} inCollection - true if currently in a collection context
 * @param {number} indent - Current level of indentation
 * @param {number} lineStart - Start of the current line
 * @param {Node} parent - The parent of the node
 * @param {string} src - Source of the YAML document
 */


var ParseContext = /*#__PURE__*/function () {
  function ParseContext() {
    var _this = this;

    var orig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        atLineStart = _ref.atLineStart,
        inCollection = _ref.inCollection,
        inFlow = _ref.inFlow,
        indent = _ref.indent,
        lineStart = _ref.lineStart,
        parent = _ref.parent;

    _classCallCheck(this, ParseContext);

    _defineProperty(this, "parseNode", function (overlay, start) {
      if (Node.atDocumentBoundary(_this.src, start)) return null;
      var context = new ParseContext(_this, overlay);

      var _context$parseProps = context.parseProps(start),
          props = _context$parseProps.props,
          type = _context$parseProps.type,
          valueStart = _context$parseProps.valueStart;

      var node = createNewNode(type, props);
      var offset = node.parse(context, valueStart);
      node.range = new Range(start, offset);
      /* istanbul ignore if */

      if (offset <= start) {
        // This should never happen, but if it does, let's make sure to at least
        // step one character forward to avoid a busy loop.
        node.error = new Error("Node#parse consumed no characters");
        node.error.parseEnd = offset;
        node.error.source = node;
        node.range.end = start + 1;
      }

      if (context.nodeStartsCollection(node)) {
        if (!node.error && !context.atLineStart && context.parent.type === Type.DOCUMENT) {
          node.error = new YAMLSyntaxError(node, 'Block collection must not have preceding content here (e.g. directives-end indicator)');
        }

        var collection = new Collection(node);
        offset = collection.parse(new ParseContext(context), offset);
        collection.range = new Range(start, offset);
        return collection;
      }

      return node;
    });

    this.atLineStart = atLineStart != null ? atLineStart : orig.atLineStart || false;
    this.inCollection = inCollection != null ? inCollection : orig.inCollection || false;
    this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
    this.indent = indent != null ? indent : orig.indent;
    this.lineStart = lineStart != null ? lineStart : orig.lineStart;
    this.parent = parent != null ? parent : orig.parent || {};
    this.root = orig.root;
    this.src = orig.src;
  }

  _createClass(ParseContext, [{
    key: "nodeStartsCollection",
    value: function nodeStartsCollection(node) {
      var inCollection = this.inCollection,
          inFlow = this.inFlow,
          src = this.src;
      if (inCollection || inFlow) return false;
      if (node instanceof CollectionItem) return true; // check for implicit key

      var offset = node.range.end;
      if (src[offset] === '\n' || src[offset - 1] === '\n') return false;
      offset = Node.endOfWhiteSpace(src, offset);
      return src[offset] === ':';
    } // Anchor and tag are before type, which determines the node implementation
    // class; hence this intermediate step.

  }, {
    key: "parseProps",
    value: function parseProps(offset) {
      var inFlow = this.inFlow,
          parent = this.parent,
          src = this.src;
      var props = [];
      var lineHasProps = false;
      offset = this.atLineStart ? Node.endOfIndent(src, offset) : Node.endOfWhiteSpace(src, offset);
      var ch = src[offset];

      while (ch === Char.ANCHOR || ch === Char.COMMENT || ch === Char.TAG || ch === '\n') {
        if (ch === '\n') {
          var inEnd = offset;
          var lineStart = void 0;

          do {
            lineStart = inEnd + 1;
            inEnd = Node.endOfIndent(src, lineStart);
          } while (src[inEnd] === '\n');

          var indentDiff = inEnd - (lineStart + this.indent);
          var noIndicatorAsIndent = parent.type === Type.SEQ_ITEM && parent.context.atLineStart;
          if (src[inEnd] !== '#' && !Node.nextNodeIsIndented(src[inEnd], indentDiff, !noIndicatorAsIndent)) break;
          this.atLineStart = true;
          this.lineStart = lineStart;
          lineHasProps = false;
          offset = inEnd;
        } else if (ch === Char.COMMENT) {
          var end = Node.endOfLine(src, offset + 1);
          props.push(new Range(offset, end));
          offset = end;
        } else {
          var _end = Node.endOfIdentifier(src, offset + 1);

          if (ch === Char.TAG && src[_end] === ',' && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(src.slice(offset + 1, _end + 13))) {
            // Let's presume we're dealing with a YAML 1.0 domain tag here, rather
            // than an empty but 'foo.bar' private-tagged node in a flow collection
            // followed without whitespace by a plain string starting with a year
            // or date divided by something.
            _end = Node.endOfIdentifier(src, _end + 5);
          }

          props.push(new Range(offset, _end));
          lineHasProps = true;
          offset = Node.endOfWhiteSpace(src, _end);
        }

        ch = src[offset];
      } // '- &a : b' has an anchor on an empty node


      if (lineHasProps && ch === ':' && Node.atBlank(src, offset + 1, true)) offset -= 1;
      var type = ParseContext.parseType(src, offset, inFlow);
      return {
        props: props,
        type: type,
        valueStart: offset
      };
    }
    /**
     * Parses a node from the source
     * @param {ParseContext} overlay
     * @param {number} start - Index of first non-whitespace character for the node
     * @returns {?Node} - null if at a document boundary
     */

  }], [{
    key: "parseType",
    value: function parseType(src, offset, inFlow) {
      switch (src[offset]) {
        case '*':
          return Type.ALIAS;

        case '>':
          return Type.BLOCK_FOLDED;

        case '|':
          return Type.BLOCK_LITERAL;

        case '{':
          return Type.FLOW_MAP;

        case '[':
          return Type.FLOW_SEQ;

        case '?':
          return !inFlow && Node.atBlank(src, offset + 1, true) ? Type.MAP_KEY : Type.PLAIN;

        case ':':
          return !inFlow && Node.atBlank(src, offset + 1, true) ? Type.MAP_VALUE : Type.PLAIN;

        case '-':
          return !inFlow && Node.atBlank(src, offset + 1, true) ? Type.SEQ_ITEM : Type.PLAIN;

        case '"':
          return Type.QUOTE_DOUBLE;

        case "'":
          return Type.QUOTE_SINGLE;

        default:
          return Type.PLAIN;
      }
    }
  }]);

  return ParseContext;
}();

// Published as 'yaml/parse-cst'
function parse(src) {
  var cr = [];

  if (src.indexOf('\r') !== -1) {
    src = src.replace(/\r\n?/g, function (match, offset) {
      if (match.length > 1) cr.push(offset);
      return '\n';
    });
  }

  var documents = [];
  var offset = 0;

  do {
    var doc = new Document();
    var context = new ParseContext({
      src: src
    });
    offset = doc.parse(context, offset);
    documents.push(doc);
  } while (offset < src.length);

  documents.setOrigRanges = function () {
    if (cr.length === 0) return false;

    for (var i = 1; i < cr.length; ++i) {
      cr[i] -= i;
    }

    var crOffset = 0;

    for (var _i = 0; _i < documents.length; ++_i) {
      crOffset = documents[_i].setOrigRanges(cr, crOffset);
    }

    cr.splice(0, cr.length);
    return true;
  };

  documents.toString = function () {
    return documents.join('...\n');
  };

  return documents;
}



;// CONCATENATED MODULE: ./node_modules/yaml/browser/dist/resolveSeq-492ab440.js


function addCommentBefore(str, indent, comment) {
  if (!comment) return str;
  var cc = comment.replace(/[\s\S]^/gm, "$&".concat(indent, "#"));
  return "#".concat(cc, "\n").concat(indent).concat(str);
}
function addComment(str, indent, comment) {
  return !comment ? str : comment.indexOf('\n') === -1 ? "".concat(str, " #").concat(comment) : "".concat(str, "\n") + comment.replace(/^/gm, "".concat(indent || '', "#"));
}

var resolveSeq_492ab440_Node = function Node() {
  _classCallCheck(this, Node);
};

function toJSON(value, arg, ctx) {
  if (Array.isArray(value)) return value.map(function (v, i) {
    return toJSON(v, String(i), ctx);
  });

  if (value && typeof value.toJSON === 'function') {
    var anchor = ctx && ctx.anchors && ctx.anchors.get(value);
    if (anchor) ctx.onCreate = function (res) {
      anchor.res = res;
      delete ctx.onCreate;
    };
    var res = value.toJSON(arg, ctx);
    if (anchor && ctx.onCreate) ctx.onCreate(res);
    return res;
  }

  if ((!ctx || !ctx.keep) && typeof value === 'bigint') return Number(value);
  return value;
}

var Scalar = /*#__PURE__*/function (_Node) {
  _inherits(Scalar, _Node);

  var _super = _createSuper(Scalar);

  function Scalar(value) {
    var _this;

    _classCallCheck(this, Scalar);

    _this = _super.call(this);
    _this.value = value;
    return _this;
  }

  _createClass(Scalar, [{
    key: "toJSON",
    value: function toJSON$1(arg, ctx) {
      return ctx && ctx.keep ? this.value : toJSON(this.value, arg, ctx);
    }
  }, {
    key: "toString",
    value: function toString() {
      return String(this.value);
    }
  }]);

  return Scalar;
}(resolveSeq_492ab440_Node);

function collectionFromPath(schema, path, value) {
  var v = value;

  for (var i = path.length - 1; i >= 0; --i) {
    var k = path[i];

    if (Number.isInteger(k) && k >= 0) {
      var a = [];
      a[k] = v;
      v = a;
    } else {
      var o = {};
      Object.defineProperty(o, k, {
        value: v,
        writable: true,
        enumerable: true,
        configurable: true
      });
      v = o;
    }
  }

  return schema.createNode(v, false);
} // null, undefined, or an empty non-string iterable (e.g. [])


var isEmptyPath = function isEmptyPath(path) {
  return path == null || _typeof(path) === 'object' && path[Symbol.iterator]().next().done;
};
var resolveSeq_492ab440_Collection = /*#__PURE__*/function (_Node) {
  _inherits(Collection, _Node);

  var _super = _createSuper(Collection);

  function Collection(schema) {
    var _this;

    _classCallCheck(this, Collection);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "items", []);

    _this.schema = schema;
    return _this;
  }

  _createClass(Collection, [{
    key: "addIn",
    value: function addIn(path, value) {
      if (isEmptyPath(path)) this.add(value);else {
        var _path = _toArray(path),
            key = _path[0],
            rest = _path.slice(1);

        var node = this.get(key, true);
        if (node instanceof Collection) node.addIn(rest, value);else if (node === undefined && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
      }
    }
  }, {
    key: "deleteIn",
    value: function deleteIn(_ref) {
      var _ref2 = _toArray(_ref),
          key = _ref2[0],
          rest = _ref2.slice(1);

      if (rest.length === 0) return this.delete(key);
      var node = this.get(key, true);
      if (node instanceof Collection) return node.deleteIn(rest);else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
    }
  }, {
    key: "getIn",
    value: function getIn(_ref3, keepScalar) {
      var _ref4 = _toArray(_ref3),
          key = _ref4[0],
          rest = _ref4.slice(1);

      var node = this.get(key, true);
      if (rest.length === 0) return !keepScalar && node instanceof Scalar ? node.value : node;else return node instanceof Collection ? node.getIn(rest, keepScalar) : undefined;
    }
  }, {
    key: "hasAllNullValues",
    value: function hasAllNullValues() {
      return this.items.every(function (node) {
        if (!node || node.type !== 'PAIR') return false;
        var n = node.value;
        return n == null || n instanceof Scalar && n.value == null && !n.commentBefore && !n.comment && !n.tag;
      });
    }
  }, {
    key: "hasIn",
    value: function hasIn(_ref5) {
      var _ref6 = _toArray(_ref5),
          key = _ref6[0],
          rest = _ref6.slice(1);

      if (rest.length === 0) return this.has(key);
      var node = this.get(key, true);
      return node instanceof Collection ? node.hasIn(rest) : false;
    }
  }, {
    key: "setIn",
    value: function setIn(_ref7, value) {
      var _ref8 = _toArray(_ref7),
          key = _ref8[0],
          rest = _ref8.slice(1);

      if (rest.length === 0) {
        this.set(key, value);
      } else {
        var node = this.get(key, true);
        if (node instanceof Collection) node.setIn(rest, value);else if (node === undefined && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
      }
    } // overridden in implementations

    /* istanbul ignore next */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return null;
    }
  }, {
    key: "toString",
    value: function toString(ctx, _ref9, onComment, onChompKeep) {
      var _this2 = this;

      var blockItem = _ref9.blockItem,
          flowChars = _ref9.flowChars,
          isMap = _ref9.isMap,
          itemIndent = _ref9.itemIndent;
      var _ctx = ctx,
          indent = _ctx.indent,
          indentStep = _ctx.indentStep,
          stringify = _ctx.stringify;
      var inFlow = this.type === Type.FLOW_MAP || this.type === Type.FLOW_SEQ || ctx.inFlow;
      if (inFlow) itemIndent += indentStep;
      var allNullValues = isMap && this.hasAllNullValues();
      ctx = Object.assign({}, ctx, {
        allNullValues: allNullValues,
        indent: itemIndent,
        inFlow: inFlow,
        type: null
      });
      var chompKeep = false;
      var hasItemWithNewLine = false;
      var nodes = this.items.reduce(function (nodes, item, i) {
        var comment;

        if (item) {
          if (!chompKeep && item.spaceBefore) nodes.push({
            type: 'comment',
            str: ''
          });
          if (item.commentBefore) item.commentBefore.match(/^.*$/gm).forEach(function (line) {
            nodes.push({
              type: 'comment',
              str: "#".concat(line)
            });
          });
          if (item.comment) comment = item.comment;
          if (inFlow && (!chompKeep && item.spaceBefore || item.commentBefore || item.comment || item.key && (item.key.commentBefore || item.key.comment) || item.value && (item.value.commentBefore || item.value.comment))) hasItemWithNewLine = true;
        }

        chompKeep = false;
        var str = stringify(item, ctx, function () {
          return comment = null;
        }, function () {
          return chompKeep = true;
        });
        if (inFlow && !hasItemWithNewLine && str.includes('\n')) hasItemWithNewLine = true;
        if (inFlow && i < _this2.items.length - 1) str += ',';
        str = addComment(str, itemIndent, comment);
        if (chompKeep && (comment || inFlow)) chompKeep = false;
        nodes.push({
          type: 'item',
          str: str
        });
        return nodes;
      }, []);
      var str;

      if (nodes.length === 0) {
        str = flowChars.start + flowChars.end;
      } else if (inFlow) {
        var start = flowChars.start,
            end = flowChars.end;
        var strings = nodes.map(function (n) {
          return n.str;
        });

        if (hasItemWithNewLine || strings.reduce(function (sum, str) {
          return sum + str.length + 2;
        }, 2) > Collection.maxFlowStringSingleLineLength) {
          str = start;

          var _iterator = _createForOfIteratorHelper(strings),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var s = _step.value;
              str += s ? "\n".concat(indentStep).concat(indent).concat(s) : '\n';
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          str += "\n".concat(indent).concat(end);
        } else {
          str = "".concat(start, " ").concat(strings.join(' '), " ").concat(end);
        }
      } else {
        var _strings = nodes.map(blockItem);

        str = _strings.shift();

        var _iterator2 = _createForOfIteratorHelper(_strings),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _s = _step2.value;
            str += _s ? "\n".concat(indent).concat(_s) : '\n';
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (this.comment) {
        str += '\n' + this.comment.replace(/^/gm, "".concat(indent, "#"));
        if (onComment) onComment();
      } else if (chompKeep && onChompKeep) onChompKeep();

      return str;
    }
  }]);

  return Collection;
}(resolveSeq_492ab440_Node);

_defineProperty(resolveSeq_492ab440_Collection, "maxFlowStringSingleLineLength", 60);

function asItemIndex(key) {
  var idx = key instanceof Scalar ? key.value : key;
  if (idx && typeof idx === 'string') idx = Number(idx);
  return Number.isInteger(idx) && idx >= 0 ? idx : null;
}

var YAMLSeq = /*#__PURE__*/function (_Collection) {
  _inherits(YAMLSeq, _Collection);

  var _super = _createSuper(YAMLSeq);

  function YAMLSeq() {
    _classCallCheck(this, YAMLSeq);

    return _super.apply(this, arguments);
  }

  _createClass(YAMLSeq, [{
    key: "add",
    value: function add(value) {
      this.items.push(value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') return false;
      var del = this.items.splice(idx, 1);
      return del.length > 0;
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') return undefined;
      var it = this.items[idx];
      return !keepScalar && it instanceof Scalar ? it.value : it;
    }
  }, {
    key: "has",
    value: function has(key) {
      var idx = asItemIndex(key);
      return typeof idx === 'number' && idx < this.items.length;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') throw new Error("Expected a valid index, not ".concat(key, "."));
      this.items[idx] = value;
    }
  }, {
    key: "toJSON",
    value: function toJSON$1(_, ctx) {
      var seq = [];
      if (ctx && ctx.onCreate) ctx.onCreate(seq);
      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          seq.push(toJSON(item, String(i++), ctx));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return seq;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      return _get(_getPrototypeOf(YAMLSeq.prototype), "toString", this).call(this, ctx, {
        blockItem: function blockItem(n) {
          return n.type === 'comment' ? n.str : "- ".concat(n.str);
        },
        flowChars: {
          start: '[',
          end: ']'
        },
        isMap: false,
        itemIndent: (ctx.indent || '') + '  '
      }, onComment, onChompKeep);
    }
  }]);

  return YAMLSeq;
}(resolveSeq_492ab440_Collection);

var stringifyKey = function stringifyKey(key, jsKey, ctx) {
  if (jsKey === null) return '';
  if (_typeof(jsKey) !== 'object') return String(jsKey);
  if (key instanceof resolveSeq_492ab440_Node && ctx && ctx.doc) return key.toString({
    anchors: Object.create(null),
    doc: ctx.doc,
    indent: '',
    indentStep: ctx.indentStep,
    inFlow: true,
    inStringifyKey: true,
    stringify: ctx.stringify
  });
  return JSON.stringify(jsKey);
};

var Pair = /*#__PURE__*/function (_Node) {
  _inherits(Pair, _Node);

  var _super = _createSuper(Pair);

  function Pair(key) {
    var _this;

    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Pair);

    _this = _super.call(this);
    _this.key = key;
    _this.value = value;
    _this.type = Pair.Type.PAIR;
    return _this;
  }

  _createClass(Pair, [{
    key: "commentBefore",
    get: function get() {
      return this.key instanceof resolveSeq_492ab440_Node ? this.key.commentBefore : undefined;
    },
    set: function set(cb) {
      if (this.key == null) this.key = new Scalar(null);
      if (this.key instanceof resolveSeq_492ab440_Node) this.key.commentBefore = cb;else {
        var msg = 'Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.';
        throw new Error(msg);
      }
    }
  }, {
    key: "addToJSMap",
    value: function addToJSMap(ctx, map) {
      var key = toJSON(this.key, '', ctx);

      if (map instanceof Map) {
        var value = toJSON(this.value, key, ctx);
        map.set(key, value);
      } else if (map instanceof Set) {
        map.add(key);
      } else {
        var stringKey = stringifyKey(this.key, key, ctx);

        var _value = toJSON(this.value, stringKey, ctx);

        if (stringKey in map) Object.defineProperty(map, stringKey, {
          value: _value,
          writable: true,
          enumerable: true,
          configurable: true
        });else map[stringKey] = _value;
      }

      return map;
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var pair = ctx && ctx.mapAsMap ? new Map() : {};
      return this.addToJSMap(ctx, pair);
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx || !ctx.doc) return JSON.stringify(this);
      var _ctx$doc$options = ctx.doc.options,
          indentSize = _ctx$doc$options.indent,
          indentSeq = _ctx$doc$options.indentSeq,
          simpleKeys = _ctx$doc$options.simpleKeys;
      var key = this.key,
          value = this.value;
      var keyComment = key instanceof resolveSeq_492ab440_Node && key.comment;

      if (simpleKeys) {
        if (keyComment) {
          throw new Error('With simple keys, key nodes cannot have comments');
        }

        if (key instanceof resolveSeq_492ab440_Collection) {
          var msg = 'With simple keys, collection cannot be used as a key value';
          throw new Error(msg);
        }
      }

      var explicitKey = !simpleKeys && (!key || keyComment || (key instanceof resolveSeq_492ab440_Node ? key instanceof resolveSeq_492ab440_Collection || key.type === Type.BLOCK_FOLDED || key.type === Type.BLOCK_LITERAL : _typeof(key) === 'object'));
      var _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent,
          indentStep = _ctx.indentStep,
          stringify = _ctx.stringify;
      ctx = Object.assign({}, ctx, {
        implicitKey: !explicitKey,
        indent: indent + indentStep
      });
      var chompKeep = false;
      var str = stringify(key, ctx, function () {
        return keyComment = null;
      }, function () {
        return chompKeep = true;
      });
      str = addComment(str, ctx.indent, keyComment);

      if (!explicitKey && str.length > 1024) {
        if (simpleKeys) throw new Error('With simple keys, single line scalar must not span more than 1024 characters');
        explicitKey = true;
      }

      if (ctx.allNullValues && !simpleKeys) {
        if (this.comment) {
          str = addComment(str, ctx.indent, this.comment);
          if (onComment) onComment();
        } else if (chompKeep && !keyComment && onChompKeep) onChompKeep();

        return ctx.inFlow && !explicitKey ? str : "? ".concat(str);
      }

      str = explicitKey ? "? ".concat(str, "\n").concat(indent, ":") : "".concat(str, ":");

      if (this.comment) {
        // expected (but not strictly required) to be a single-line comment
        str = addComment(str, ctx.indent, this.comment);
        if (onComment) onComment();
      }

      var vcb = '';
      var valueComment = null;

      if (value instanceof resolveSeq_492ab440_Node) {
        if (value.spaceBefore) vcb = '\n';

        if (value.commentBefore) {
          var cs = value.commentBefore.replace(/^/gm, "".concat(ctx.indent, "#"));
          vcb += "\n".concat(cs);
        }

        valueComment = value.comment;
      } else if (value && _typeof(value) === 'object') {
        value = doc.schema.createNode(value, true);
      }

      ctx.implicitKey = false;
      if (!explicitKey && !this.comment && value instanceof Scalar) ctx.indentAtStart = str.length + 1;
      chompKeep = false;

      if (!indentSeq && indentSize >= 2 && !ctx.inFlow && !explicitKey && value instanceof YAMLSeq && value.type !== Type.FLOW_SEQ && !value.tag && !doc.anchors.getName(value)) {
        // If indentSeq === false, consider '- ' as part of indentation where possible
        ctx.indent = ctx.indent.substr(2);
      }

      var valueStr = stringify(value, ctx, function () {
        return valueComment = null;
      }, function () {
        return chompKeep = true;
      });
      var ws = ' ';

      if (vcb || this.comment) {
        ws = "".concat(vcb, "\n").concat(ctx.indent);
      } else if (!explicitKey && value instanceof resolveSeq_492ab440_Collection) {
        var flow = valueStr[0] === '[' || valueStr[0] === '{';
        if (!flow || valueStr.includes('\n')) ws = "\n".concat(ctx.indent);
      } else if (valueStr[0] === '\n') ws = '';

      if (chompKeep && !valueComment && onChompKeep) onChompKeep();
      return addComment(str + ws + valueStr, ctx.indent, valueComment);
    }
  }]);

  return Pair;
}(resolveSeq_492ab440_Node);

_defineProperty(Pair, "Type", {
  PAIR: 'PAIR',
  MERGE_PAIR: 'MERGE_PAIR'
});

var getAliasCount = function getAliasCount(node, anchors) {
  if (node instanceof resolveSeq_492ab440_Alias) {
    var anchor = anchors.get(node.source);
    return anchor.count * anchor.aliasCount;
  } else if (node instanceof resolveSeq_492ab440_Collection) {
    var count = 0;

    var _iterator = _createForOfIteratorHelper(node.items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var c = getAliasCount(item, anchors);
        if (c > count) count = c;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return count;
  } else if (node instanceof Pair) {
    var kc = getAliasCount(node.key, anchors);
    var vc = getAliasCount(node.value, anchors);
    return Math.max(kc, vc);
  }

  return 1;
};

var resolveSeq_492ab440_Alias = /*#__PURE__*/function (_Node) {
  _inherits(Alias, _Node);

  var _super = _createSuper(Alias);

  function Alias(source) {
    var _this;

    _classCallCheck(this, Alias);

    _this = _super.call(this);
    _this.source = source;
    _this.type = Type.ALIAS;
    return _this;
  }

  _createClass(Alias, [{
    key: "tag",
    set: function set(t) {
      throw new Error('Alias nodes cannot have tags');
    }
  }, {
    key: "toJSON",
    value: function toJSON$1(arg, ctx) {
      if (!ctx) return toJSON(this.source, arg, ctx);
      var anchors = ctx.anchors,
          maxAliasCount = ctx.maxAliasCount;
      var anchor = anchors.get(this.source);
      /* istanbul ignore if */

      if (!anchor || anchor.res === undefined) {
        var msg = 'This should not happen: Alias anchor was not resolved?';
        if (this.cstNode) throw new YAMLReferenceError(this.cstNode, msg);else throw new ReferenceError(msg);
      }

      if (maxAliasCount >= 0) {
        anchor.count += 1;
        if (anchor.aliasCount === 0) anchor.aliasCount = getAliasCount(this.source, anchors);

        if (anchor.count * anchor.aliasCount > maxAliasCount) {
          var _msg = 'Excessive alias count indicates a resource exhaustion attack';
          if (this.cstNode) throw new YAMLReferenceError(this.cstNode, _msg);else throw new ReferenceError(_msg);
        }
      }

      return anchor.res;
    } // Only called when stringifying an alias mapping key while constructing
    // Object output.

  }, {
    key: "toString",
    value: function toString(ctx) {
      return Alias.stringify(this, ctx);
    }
  }], [{
    key: "stringify",
    value: function stringify(_ref, _ref2) {
      var range = _ref.range,
          source = _ref.source;
      var anchors = _ref2.anchors,
          doc = _ref2.doc,
          implicitKey = _ref2.implicitKey,
          inStringifyKey = _ref2.inStringifyKey;
      var anchor = Object.keys(anchors).find(function (a) {
        return anchors[a] === source;
      });
      if (!anchor && inStringifyKey) anchor = doc.anchors.getName(source) || doc.anchors.newName();
      if (anchor) return "*".concat(anchor).concat(implicitKey ? ' ' : '');
      var msg = doc.anchors.getName(source) ? 'Alias node must be after source node' : 'Source node not found for alias node';
      throw new Error("".concat(msg, " [").concat(range, "]"));
    }
  }]);

  return Alias;
}(resolveSeq_492ab440_Node);

_defineProperty(resolveSeq_492ab440_Alias, "default", true);

function findPair(items, key) {
  var k = key instanceof Scalar ? key.value : key;

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;

      if (it instanceof Pair) {
        if (it.key === key || it.key === k) return it;
        if (it.key && it.key.value === k) return it;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return undefined;
}
var YAMLMap = /*#__PURE__*/function (_Collection) {
  _inherits(YAMLMap, _Collection);

  var _super = _createSuper(YAMLMap);

  function YAMLMap() {
    _classCallCheck(this, YAMLMap);

    return _super.apply(this, arguments);
  }

  _createClass(YAMLMap, [{
    key: "add",
    value: function add(pair, overwrite) {
      if (!pair) pair = new Pair(pair);else if (!(pair instanceof Pair)) pair = new Pair(pair.key || pair, pair.value);
      var prev = findPair(this.items, pair.key);
      var sortEntries = this.schema && this.schema.sortMapEntries;

      if (prev) {
        if (overwrite) prev.value = pair.value;else throw new Error("Key ".concat(pair.key, " already set"));
      } else if (sortEntries) {
        var i = this.items.findIndex(function (item) {
          return sortEntries(pair, item) < 0;
        });
        if (i === -1) this.items.push(pair);else this.items.splice(i, 0, pair);
      } else {
        this.items.push(pair);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var it = findPair(this.items, key);
      if (!it) return false;
      var del = this.items.splice(this.items.indexOf(it), 1);
      return del.length > 0;
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      var it = findPair(this.items, key);
      var node = it && it.value;
      return !keepScalar && node instanceof Scalar ? node.value : node;
    }
  }, {
    key: "has",
    value: function has(key) {
      return !!findPair(this.items, key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.add(new Pair(key, value), true);
    }
    /**
     * @param {*} arg ignored
     * @param {*} ctx Conversion context, originally set in Document#toJSON()
     * @param {Class} Type If set, forces the returned collection type
     * @returns {*} Instance of Type, Map, or Object
     */

  }, {
    key: "toJSON",
    value: function toJSON(_, ctx, Type) {
      var map = Type ? new Type() : ctx && ctx.mapAsMap ? new Map() : {};
      if (ctx && ctx.onCreate) ctx.onCreate(map);

      var _iterator2 = _createForOfIteratorHelper(this.items),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          item.addToJSMap(ctx, map);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return map;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);

      var _iterator3 = _createForOfIteratorHelper(this.items),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          if (!(item instanceof Pair)) throw new Error("Map items must all be pairs; found ".concat(JSON.stringify(item), " instead"));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return _get(_getPrototypeOf(YAMLMap.prototype), "toString", this).call(this, ctx, {
        blockItem: function blockItem(n) {
          return n.str;
        },
        flowChars: {
          start: '{',
          end: '}'
        },
        isMap: true,
        itemIndent: ctx.indent || ''
      }, onComment, onChompKeep);
    }
  }]);

  return YAMLMap;
}(resolveSeq_492ab440_Collection);

var MERGE_KEY = '<<';
var Merge = /*#__PURE__*/function (_Pair) {
  _inherits(Merge, _Pair);

  var _super = _createSuper(Merge);

  function Merge(pair) {
    var _this;

    _classCallCheck(this, Merge);

    if (pair instanceof Pair) {
      var seq = pair.value;

      if (!(seq instanceof YAMLSeq)) {
        seq = new YAMLSeq();
        seq.items.push(pair.value);
        seq.range = pair.value.range;
      }

      _this = _super.call(this, pair.key, seq);
      _this.range = pair.range;
    } else {
      _this = _super.call(this, new Scalar(MERGE_KEY), new YAMLSeq());
    }

    _this.type = Pair.Type.MERGE_PAIR;
    return _possibleConstructorReturn(_this);
  } // If the value associated with a merge key is a single mapping node, each of
  // its key/value pairs is inserted into the current mapping, unless the key
  // already exists in it. If the value associated with the merge key is a
  // sequence, then this sequence is expected to contain mapping nodes and each
  // of these nodes is merged in turn according to its order in the sequence.
  // Keys in mapping nodes earlier in the sequence override keys specified in
  // later mapping nodes. -- http://yaml.org/type/merge.html


  _createClass(Merge, [{
    key: "addToJSMap",
    value: function addToJSMap(ctx, map) {
      var _iterator = _createForOfIteratorHelper(this.value.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var source = _step.value.source;
          if (!(source instanceof YAMLMap)) throw new Error('Merge sources must be maps');
          var srcMap = source.toJSON(null, ctx, Map);

          var _iterator2 = _createForOfIteratorHelper(srcMap),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  key = _step2$value[0],
                  value = _step2$value[1];

              if (map instanceof Map) {
                if (!map.has(key)) map.set(key, value);
              } else if (map instanceof Set) {
                map.add(key);
              } else if (!Object.prototype.hasOwnProperty.call(map, key)) {
                Object.defineProperty(map, key, {
                  value: value,
                  writable: true,
                  enumerable: true,
                  configurable: true
                });
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return map;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment) {
      var seq = this.value;
      if (seq.items.length > 1) return _get(_getPrototypeOf(Merge.prototype), "toString", this).call(this, ctx, onComment);
      this.value = seq.items[0];

      var str = _get(_getPrototypeOf(Merge.prototype), "toString", this).call(this, ctx, onComment);

      this.value = seq;
      return str;
    }
  }]);

  return Merge;
}(Pair);

var binaryOptions = {
  defaultType: Type.BLOCK_LITERAL,
  lineWidth: 76
};
var boolOptions = {
  trueStr: 'true',
  falseStr: 'false'
};
var intOptions = {
  asBigInt: false
};
var nullOptions = {
  nullStr: 'null'
};
var strOptions = {
  defaultType: Type.PLAIN,
  doubleQuoted: {
    jsonEncoding: false,
    minMultiLineLength: 40
  },
  fold: {
    lineWidth: 80,
    minContentWidth: 20
  }
};

function resolveScalar(str, tags, scalarFallback) {
  var _iterator = _createForOfIteratorHelper(tags),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          format = _step$value.format,
          test = _step$value.test,
          resolve = _step$value.resolve;

      if (test) {
        var match = str.match(test);

        if (match) {
          var res = resolve.apply(null, match);
          if (!(res instanceof Scalar)) res = new Scalar(res);
          if (format) res.format = format;
          return res;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (scalarFallback) str = scalarFallback(str);
  return new Scalar(str);
}

var FOLD_FLOW = 'flow';
var FOLD_BLOCK = 'block';
var FOLD_QUOTED = 'quoted'; // presumes i+1 is at the start of a line
// returns index of last newline in more-indented block

var consumeMoreIndentedLines = function consumeMoreIndentedLines(text, i) {
  var ch = text[i + 1];

  while (ch === ' ' || ch === '\t') {
    do {
      ch = text[i += 1];
    } while (ch && ch !== '\n');

    ch = text[i + 1];
  }

  return i;
};
/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 *
 * @param {string} text
 * @param {string} indent
 * @param {string} [mode='flow'] `'block'` prevents more-indented lines
 *   from being folded; `'quoted'` allows for `\` escapes, including escaped
 *   newlines
 * @param {Object} options
 * @param {number} [options.indentAtStart] Accounts for leading contents on
 *   the first line, defaulting to `indent.length`
 * @param {number} [options.lineWidth=80]
 * @param {number} [options.minContentWidth=20] Allow highly indented lines to
 *   stretch the line width or indent content from the start
 * @param {function} options.onFold Called once if the text is folded
 * @param {function} options.onFold Called once if any line of text exceeds
 *   lineWidth characters
 */


function foldFlowLines(text, indent, mode, _ref) {
  var indentAtStart = _ref.indentAtStart,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === void 0 ? 80 : _ref$lineWidth,
      _ref$minContentWidth = _ref.minContentWidth,
      minContentWidth = _ref$minContentWidth === void 0 ? 20 : _ref$minContentWidth,
      onFold = _ref.onFold,
      onOverflow = _ref.onOverflow;
  if (!lineWidth || lineWidth < 0) return text;
  var endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep) return text;
  var folds = [];
  var escapedFolds = {};
  var end = lineWidth - indent.length;

  if (typeof indentAtStart === 'number') {
    if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);else end = lineWidth - indentAtStart;
  }

  var split = undefined;
  var prev = undefined;
  var overflow = false;
  var i = -1;
  var escStart = -1;
  var escEnd = -1;

  if (mode === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i);
    if (i !== -1) end = i + endStep;
  }

  for (var ch; ch = text[i += 1];) {
    if (mode === FOLD_QUOTED && ch === '\\') {
      escStart = i;

      switch (text[i + 1]) {
        case 'x':
          i += 3;
          break;

        case 'u':
          i += 5;
          break;

        case 'U':
          i += 9;
          break;

        default:
          i += 1;
      }

      escEnd = i;
    }

    if (ch === '\n') {
      if (mode === FOLD_BLOCK) i = consumeMoreIndentedLines(text, i);
      end = i + endStep;
      split = undefined;
    } else {
      if (ch === ' ' && prev && prev !== ' ' && prev !== '\n' && prev !== '\t') {
        // space surrounded by non-space can be replaced with newline + indent
        var next = text[i + 1];
        if (next && next !== ' ' && next !== '\n' && next !== '\t') split = i;
      }

      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = undefined;
        } else if (mode === FOLD_QUOTED) {
          // white-space collected at end may stretch past lineWidth
          while (prev === ' ' || prev === '\t') {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          } // Account for newline escape, but don't break preceding escape


          var j = i > escEnd + 1 ? i - 2 : escStart - 1; // Bail out if lineWidth & minContentWidth are shorter than an escape string

          if (escapedFolds[j]) return text;
          folds.push(j);
          escapedFolds[j] = true;
          end = j + endStep;
          split = undefined;
        } else {
          overflow = true;
        }
      }
    }

    prev = ch;
  }

  if (overflow && onOverflow) onOverflow();
  if (folds.length === 0) return text;
  if (onFold) onFold();
  var res = text.slice(0, folds[0]);

  for (var _i = 0; _i < folds.length; ++_i) {
    var fold = folds[_i];

    var _end = folds[_i + 1] || text.length;

    if (fold === 0) res = "\n".concat(indent).concat(text.slice(0, _end));else {
      if (mode === FOLD_QUOTED && escapedFolds[fold]) res += "".concat(text[fold], "\\");
      res += "\n".concat(indent).concat(text.slice(fold + 1, _end));
    }
  }

  return res;
}

var getFoldOptions = function getFoldOptions(_ref) {
  var indentAtStart = _ref.indentAtStart;
  return indentAtStart ? Object.assign({
    indentAtStart: indentAtStart
  }, strOptions.fold) : strOptions.fold;
}; // Also checks for lines starting with %, as parsing the output as YAML 1.1 will
// presume that's starting a new document.


var containsDocumentMarker = function containsDocumentMarker(str) {
  return /^(%|---|\.\.\.)/m.test(str);
};

function lineLengthOverLimit(str, lineWidth, indentLength) {
  if (!lineWidth || lineWidth < 0) return false;
  var limit = lineWidth - indentLength;
  var strLen = str.length;
  if (strLen <= limit) return false;

  for (var i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === '\n') {
      if (i - start > limit) return true;
      start = i + 1;
      if (strLen - start <= limit) return false;
    }
  }

  return true;
}

function doubleQuotedString(value, ctx) {
  var implicitKey = ctx.implicitKey;
  var _strOptions$doubleQuo = strOptions.doubleQuoted,
      jsonEncoding = _strOptions$doubleQuo.jsonEncoding,
      minMultiLineLength = _strOptions$doubleQuo.minMultiLineLength;
  var json = JSON.stringify(value);
  if (jsonEncoding) return json;
  var indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
  var str = '';
  var start = 0;

  for (var i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
      // space before newline needs to be escaped to not be folded
      str += json.slice(start, i) + '\\ ';
      i += 1;
      start = i;
      ch = '\\';
    }

    if (ch === '\\') switch (json[i + 1]) {
      case 'u':
        {
          str += json.slice(start, i);
          var code = json.substr(i + 2, 4);

          switch (code) {
            case '0000':
              str += '\\0';
              break;

            case '0007':
              str += '\\a';
              break;

            case '000b':
              str += '\\v';
              break;

            case '001b':
              str += '\\e';
              break;

            case '0085':
              str += '\\N';
              break;

            case '00a0':
              str += '\\_';
              break;

            case '2028':
              str += '\\L';
              break;

            case '2029':
              str += '\\P';
              break;

            default:
              if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2);else str += json.substr(i, 6);
          }

          i += 5;
          start = i + 1;
        }
        break;

      case 'n':
        if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
          i += 1;
        } else {
          // folding will eat first newline
          str += json.slice(start, i) + '\n\n';

          while (json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"') {
            str += '\n';
            i += 2;
          }

          str += indent; // space after newline needs to be escaped to not be folded

          if (json[i + 2] === ' ') str += '\\';
          i += 1;
          start = i + 1;
        }

        break;

      default:
        i += 1;
    }
  }

  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx));
}

function singleQuotedString(value, ctx) {
  if (ctx.implicitKey) {
    if (/\n/.test(value)) return doubleQuotedString(value, ctx);
  } else {
    // single quoted string can't have leading or trailing whitespace around newline
    if (/[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
  }

  var indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
  var res = "'" + value.replace(/'/g, "''").replace(/\n+/g, "$&\n".concat(indent)) + "'";
  return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx));
}

function blockString(_ref2, ctx, onComment, onChompKeep) {
  var comment = _ref2.comment,
      type = _ref2.type,
      value = _ref2.value;

  // 1. Block can't end in whitespace unless the last line is non-empty.
  // 2. Strings consisting of only whitespace are best rendered explicitly.
  if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  var indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? '  ' : '');
  var indentSize = indent ? '2' : '1'; // root is at -1

  var literal = type === Type.BLOCK_FOLDED ? false : type === Type.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, strOptions.fold.lineWidth, indent.length);
  var header = literal ? '|' : '>';
  if (!value) return header + '\n';
  var wsStart = '';
  var wsEnd = '';
  value = value.replace(/[\n\t ]*$/, function (ws) {
    var n = ws.indexOf('\n');

    if (n === -1) {
      header += '-'; // strip
    } else if (value === ws || n !== ws.length - 1) {
      header += '+'; // keep

      if (onChompKeep) onChompKeep();
    }

    wsEnd = ws.replace(/\n$/, '');
    return '';
  }).replace(/^[\n ]*/, function (ws) {
    if (ws.indexOf(' ') !== -1) header += indentSize;
    var m = ws.match(/ +$/);

    if (m) {
      wsStart = ws.slice(0, -m[0].length);
      return m[0];
    } else {
      wsStart = ws;
      return '';
    }
  });
  if (wsEnd) wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, "$&".concat(indent));
  if (wsStart) wsStart = wsStart.replace(/\n+/g, "$&".concat(indent));

  if (comment) {
    header += ' #' + comment.replace(/ ?[\r\n]+/g, ' ');
    if (onComment) onComment();
  }

  if (!value) return "".concat(header).concat(indentSize, "\n").concat(indent).concat(wsEnd);

  if (literal) {
    value = value.replace(/\n+/g, "$&".concat(indent));
    return "".concat(header, "\n").concat(indent).concat(wsStart).concat(value).concat(wsEnd);
  }

  value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
  //         ^ ind.line  ^ empty     ^ capture next empty lines only at end of indent
  .replace(/\n+/g, "$&".concat(indent));
  var body = foldFlowLines("".concat(wsStart).concat(value).concat(wsEnd), indent, FOLD_BLOCK, strOptions.fold);
  return "".concat(header, "\n").concat(indent).concat(body);
}

function plainString(item, ctx, onComment, onChompKeep) {
  var comment = item.comment,
      type = item.type,
      value = item.value;
  var actualString = ctx.actualString,
      implicitKey = ctx.implicitKey,
      indent = ctx.indent,
      inFlow = ctx.inFlow;

  if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
    // not allowed:
    // - empty string, '-' or '?'
    // - start with an indicator character (except [?:-]) or /[?-] /
    // - '\n ', ': ' or ' \n' anywhere
    // - '#' not preceded by a non-space char
    // - end with ' ' or ':'
    return implicitKey || inFlow || value.indexOf('\n') === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
  }

  if (!implicitKey && !inFlow && type !== Type.PLAIN && value.indexOf('\n') !== -1) {
    // Where allowed & type not set explicitly, prefer block style for multiline strings
    return blockString(item, ctx, onComment, onChompKeep);
  }

  if (indent === '' && containsDocumentMarker(value)) {
    ctx.forceBlockIndent = true;
    return blockString(item, ctx, onComment, onChompKeep);
  }

  var str = value.replace(/\n+/g, "$&\n".concat(indent)); // Verify that output will be parsed as a string, as e.g. plain numbers and
  // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
  // and others in v1.1.

  if (actualString) {
    var tags = ctx.doc.schema.tags;
    var resolved = resolveScalar(str, tags, tags.scalarFallback).value;
    if (typeof resolved !== 'string') return doubleQuotedString(value, ctx);
  }

  var body = implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx));

  if (comment && !inFlow && (body.indexOf('\n') !== -1 || comment.indexOf('\n') !== -1)) {
    if (onComment) onComment();
    return addCommentBefore(body, indent, comment);
  }

  return body;
}

function stringifyString(item, ctx, onComment, onChompKeep) {
  var defaultType = strOptions.defaultType;
  var implicitKey = ctx.implicitKey,
      inFlow = ctx.inFlow;
  var _item = item,
      type = _item.type,
      value = _item.value;

  if (typeof value !== 'string') {
    value = String(value);
    item = Object.assign({}, item, {
      value: value
    });
  }

  var _stringify = function _stringify(_type) {
    switch (_type) {
      case Type.BLOCK_FOLDED:
      case Type.BLOCK_LITERAL:
        return blockString(item, ctx, onComment, onChompKeep);

      case Type.QUOTE_DOUBLE:
        return doubleQuotedString(value, ctx);

      case Type.QUOTE_SINGLE:
        return singleQuotedString(value, ctx);

      case Type.PLAIN:
        return plainString(item, ctx, onComment, onChompKeep);

      default:
        return null;
    }
  };

  if (type !== Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
    // force double quotes on control characters
    type = Type.QUOTE_DOUBLE;
  } else if ((implicitKey || inFlow) && (type === Type.BLOCK_FOLDED || type === Type.BLOCK_LITERAL)) {
    // should not happen; blocks are not valid inside flow containers
    type = Type.QUOTE_DOUBLE;
  }

  var res = _stringify(type);

  if (res === null) {
    res = _stringify(defaultType);
    if (res === null) throw new Error("Unsupported default string type ".concat(defaultType));
  }

  return res;
}

function stringifyNumber(_ref) {
  var format = _ref.format,
      minFractionDigits = _ref.minFractionDigits,
      tag = _ref.tag,
      value = _ref.value;
  if (typeof value === 'bigint') return String(value);
  if (!isFinite(value)) return isNaN(value) ? '.nan' : value < 0 ? '-.inf' : '.inf';
  var n = JSON.stringify(value);

  if (!format && minFractionDigits && (!tag || tag === 'tag:yaml.org,2002:float') && /^\d/.test(n)) {
    var i = n.indexOf('.');

    if (i < 0) {
      i = n.length;
      n += '.';
    }

    var d = minFractionDigits - (n.length - i - 1);

    while (d-- > 0) {
      n += '0';
    }
  }

  return n;
}

function checkFlowCollectionEnd(errors, cst) {
  var char, name;

  switch (cst.type) {
    case Type.FLOW_MAP:
      char = '}';
      name = 'flow map';
      break;

    case Type.FLOW_SEQ:
      char = ']';
      name = 'flow sequence';
      break;

    default:
      errors.push(new YAMLSemanticError(cst, 'Not a flow collection!?'));
      return;
  }

  var lastItem;

  for (var i = cst.items.length - 1; i >= 0; --i) {
    var item = cst.items[i];

    if (!item || item.type !== Type.COMMENT) {
      lastItem = item;
      break;
    }
  }

  if (lastItem && lastItem.char !== char) {
    var msg = "Expected ".concat(name, " to end with ").concat(char);
    var err;

    if (typeof lastItem.offset === 'number') {
      err = new YAMLSemanticError(cst, msg);
      err.offset = lastItem.offset + 1;
    } else {
      err = new YAMLSemanticError(lastItem, msg);
      if (lastItem.range && lastItem.range.end) err.offset = lastItem.range.end - lastItem.range.start;
    }

    errors.push(err);
  }
}
function checkFlowCommentSpace(errors, comment) {
  var prev = comment.context.src[comment.range.start - 1];

  if (prev !== '\n' && prev !== '\t' && prev !== ' ') {
    var msg = 'Comments must be separated from other tokens by white space characters';
    errors.push(new YAMLSemanticError(comment, msg));
  }
}
function getLongKeyError(source, key) {
  var sk = String(key);
  var k = sk.substr(0, 8) + '...' + sk.substr(-8);
  return new YAMLSemanticError(source, "The \"".concat(k, "\" key is too long"));
}
function resolveComments(collection, comments) {
  var _iterator = _createForOfIteratorHelper(comments),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          afterKey = _step$value.afterKey,
          before = _step$value.before,
          comment = _step$value.comment;
      var item = collection.items[before];

      if (!item) {
        if (comment !== undefined) {
          if (collection.comment) collection.comment += '\n' + comment;else collection.comment = comment;
        }
      } else {
        if (afterKey && item.value) item = item.value;

        if (comment === undefined) {
          if (afterKey || !item.commentBefore) item.spaceBefore = true;
        } else {
          if (item.commentBefore) item.commentBefore += '\n' + comment;else item.commentBefore = comment;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// on error, will return { str: string, errors: Error[] }
function resolveString(doc, node) {
  var res = node.strValue;
  if (!res) return '';
  if (typeof res === 'string') return res;
  res.errors.forEach(function (error) {
    if (!error.source) error.source = node;
    doc.errors.push(error);
  });
  return res.str;
}

function resolveTagHandle(doc, node) {
  var _node$tag = node.tag,
      handle = _node$tag.handle,
      suffix = _node$tag.suffix;
  var prefix = doc.tagPrefixes.find(function (p) {
    return p.handle === handle;
  });

  if (!prefix) {
    var dtp = doc.getDefaults().tagPrefixes;
    if (dtp) prefix = dtp.find(function (p) {
      return p.handle === handle;
    });
    if (!prefix) throw new YAMLSemanticError(node, "The ".concat(handle, " tag handle is non-default and was not declared."));
  }

  if (!suffix) throw new YAMLSemanticError(node, "The ".concat(handle, " tag has no suffix."));

  if (handle === '!' && (doc.version || doc.options.version) === '1.0') {
    if (suffix[0] === '^') {
      doc.warnings.push(new YAMLWarning(node, 'YAML 1.0 ^ tag expansion is not supported'));
      return suffix;
    }

    if (/[:/]/.test(suffix)) {
      // word/foo -> tag:word.yaml.org,2002:foo
      var vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
      return vocab ? "tag:".concat(vocab[1], ".yaml.org,2002:").concat(vocab[2]) : "tag:".concat(suffix);
    }
  }

  return prefix.prefix + decodeURIComponent(suffix);
}

function resolveTagName(doc, node) {
  var tag = node.tag,
      type = node.type;
  var nonSpecific = false;

  if (tag) {
    var handle = tag.handle,
        suffix = tag.suffix,
        verbatim = tag.verbatim;

    if (verbatim) {
      if (verbatim !== '!' && verbatim !== '!!') return verbatim;
      var msg = "Verbatim tags aren't resolved, so ".concat(verbatim, " is invalid.");
      doc.errors.push(new YAMLSemanticError(node, msg));
    } else if (handle === '!' && !suffix) {
      nonSpecific = true;
    } else {
      try {
        return resolveTagHandle(doc, node);
      } catch (error) {
        doc.errors.push(error);
      }
    }
  }

  switch (type) {
    case Type.BLOCK_FOLDED:
    case Type.BLOCK_LITERAL:
    case Type.QUOTE_DOUBLE:
    case Type.QUOTE_SINGLE:
      return defaultTags.STR;

    case Type.FLOW_MAP:
    case Type.MAP:
      return defaultTags.MAP;

    case Type.FLOW_SEQ:
    case Type.SEQ:
      return defaultTags.SEQ;

    case Type.PLAIN:
      return nonSpecific ? defaultTags.STR : null;

    default:
      return null;
  }
}

function resolveByTagName(doc, node, tagName) {
  var tags = doc.schema.tags;
  var matchWithTest = [];

  var _iterator = _createForOfIteratorHelper(tags),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tag = _step.value;

      if (tag.tag === tagName) {
        if (tag.test) matchWithTest.push(tag);else {
          var res = tag.resolve(doc, node);
          return res instanceof resolveSeq_492ab440_Collection ? res : new Scalar(res);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var str = resolveString(doc, node);
  if (typeof str === 'string' && matchWithTest.length > 0) return resolveScalar(str, matchWithTest, tags.scalarFallback);
  return null;
}

function getFallbackTagName(_ref) {
  var type = _ref.type;

  switch (type) {
    case Type.FLOW_MAP:
    case Type.MAP:
      return defaultTags.MAP;

    case Type.FLOW_SEQ:
    case Type.SEQ:
      return defaultTags.SEQ;

    default:
      return defaultTags.STR;
  }
}

function resolveTag(doc, node, tagName) {
  try {
    var res = resolveByTagName(doc, node, tagName);

    if (res) {
      if (tagName && node.tag) res.tag = tagName;
      return res;
    }
  } catch (error) {
    /* istanbul ignore if */
    if (!error.source) error.source = node;
    doc.errors.push(error);
    return null;
  }

  try {
    var fallback = getFallbackTagName(node);
    if (!fallback) throw new Error("The tag ".concat(tagName, " is unavailable"));
    var msg = "The tag ".concat(tagName, " is unavailable, falling back to ").concat(fallback);
    doc.warnings.push(new YAMLWarning(node, msg));

    var _res = resolveByTagName(doc, node, fallback);

    _res.tag = tagName;
    return _res;
  } catch (error) {
    var refError = new YAMLReferenceError(node, error.message);
    refError.stack = error.stack;
    doc.errors.push(refError);
    return null;
  }
}

var isCollectionItem = function isCollectionItem(node) {
  if (!node) return false;
  var type = node.type;
  return type === Type.MAP_KEY || type === Type.MAP_VALUE || type === Type.SEQ_ITEM;
};

function resolveNodeProps(errors, node) {
  var comments = {
    before: [],
    after: []
  };
  var hasAnchor = false;
  var hasTag = false;
  var props = isCollectionItem(node.context.parent) ? node.context.parent.props.concat(node.props) : node.props;

  var _iterator = _createForOfIteratorHelper(props),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          start = _step$value.start,
          end = _step$value.end;

      switch (node.context.src[start]) {
        case Char.COMMENT:
          {
            if (!node.commentHasRequiredWhitespace(start)) {
              var msg = 'Comments must be separated from other tokens by white space characters';
              errors.push(new YAMLSemanticError(node, msg));
            }

            var header = node.header,
                valueRange = node.valueRange;
            var cc = valueRange && (start > valueRange.start || header && start > header.start) ? comments.after : comments.before;
            cc.push(node.context.src.slice(start + 1, end));
            break;
          }
        // Actual anchor & tag resolution is handled by schema, here we just complain

        case Char.ANCHOR:
          if (hasAnchor) {
            var _msg = 'A node can have at most one anchor';
            errors.push(new YAMLSemanticError(node, _msg));
          }

          hasAnchor = true;
          break;

        case Char.TAG:
          if (hasTag) {
            var _msg2 = 'A node can have at most one tag';
            errors.push(new YAMLSemanticError(node, _msg2));
          }

          hasTag = true;
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    comments: comments,
    hasAnchor: hasAnchor,
    hasTag: hasTag
  };
}

function resolveNodeValue(doc, node) {
  var anchors = doc.anchors,
      errors = doc.errors,
      schema = doc.schema;

  if (node.type === Type.ALIAS) {
    var name = node.rawValue;
    var src = anchors.getNode(name);

    if (!src) {
      var msg = "Aliased anchor not found: ".concat(name);
      errors.push(new YAMLReferenceError(node, msg));
      return null;
    } // Lazy resolution for circular references


    var res = new resolveSeq_492ab440_Alias(src);

    anchors._cstAliases.push(res);

    return res;
  }

  var tagName = resolveTagName(doc, node);
  if (tagName) return resolveTag(doc, node, tagName);

  if (node.type !== Type.PLAIN) {
    var _msg3 = "Failed to resolve ".concat(node.type, " node here");

    errors.push(new YAMLSyntaxError(node, _msg3));
    return null;
  }

  try {
    var str = resolveString(doc, node);
    return resolveScalar(str, schema.tags, schema.tags.scalarFallback);
  } catch (error) {
    if (!error.source) error.source = node;
    errors.push(error);
    return null;
  }
} // sets node.resolved on success


function resolveNode(doc, node) {
  if (!node) return null;
  if (node.error) doc.errors.push(node.error);

  var _resolveNodeProps = resolveNodeProps(doc.errors, node),
      comments = _resolveNodeProps.comments,
      hasAnchor = _resolveNodeProps.hasAnchor,
      hasTag = _resolveNodeProps.hasTag;

  if (hasAnchor) {
    var anchors = doc.anchors;
    var name = node.anchor;
    var prev = anchors.getNode(name); // At this point, aliases for any preceding node with the same anchor
    // name have already been resolved, so it may safely be renamed.

    if (prev) anchors.map[anchors.newName(name)] = prev; // During parsing, we need to store the CST node in anchors.map as
    // anchors need to be available during resolution to allow for
    // circular references.

    anchors.map[name] = node;
  }

  if (node.type === Type.ALIAS && (hasAnchor || hasTag)) {
    var msg = 'An alias node must not specify any properties';
    doc.errors.push(new YAMLSemanticError(node, msg));
  }

  var res = resolveNodeValue(doc, node);

  if (res) {
    res.range = [node.range.start, node.range.end];
    if (doc.options.keepCstNodes) res.cstNode = node;
    if (doc.options.keepNodeTypes) res.type = node.type;
    var cb = comments.before.join('\n');

    if (cb) {
      res.commentBefore = res.commentBefore ? "".concat(res.commentBefore, "\n").concat(cb) : cb;
    }

    var ca = comments.after.join('\n');
    if (ca) res.comment = res.comment ? "".concat(res.comment, "\n").concat(ca) : ca;
  }

  return node.resolved = res;
}

function resolveMap(doc, cst) {
  if (cst.type !== Type.MAP && cst.type !== Type.FLOW_MAP) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a mapping");
    doc.errors.push(new YAMLSyntaxError(cst, msg));
    return null;
  }

  var _ref = cst.type === Type.FLOW_MAP ? resolveFlowMapItems(doc, cst) : resolveBlockMapItems(doc, cst),
      comments = _ref.comments,
      items = _ref.items;

  var map = new YAMLMap();
  map.items = items;
  resolveComments(map, comments);
  var hasCollectionKey = false;

  for (var i = 0; i < items.length; ++i) {
    var iKey = items[i].key;
    if (iKey instanceof resolveSeq_492ab440_Collection) hasCollectionKey = true;

    if (doc.schema.merge && iKey && iKey.value === MERGE_KEY) {
      items[i] = new Merge(items[i]);
      var sources = items[i].value.items;
      var error = null;
      sources.some(function (node) {
        if (node instanceof resolveSeq_492ab440_Alias) {
          // During parsing, alias sources are CST nodes; to account for
          // circular references their resolved values can't be used here.
          var type = node.source.type;
          if (type === Type.MAP || type === Type.FLOW_MAP) return false;
          return error = 'Merge nodes aliases can only point to maps';
        }

        return error = 'Merge nodes can only have Alias nodes as values';
      });
      if (error) doc.errors.push(new YAMLSemanticError(cst, error));
    } else {
      for (var j = i + 1; j < items.length; ++j) {
        var jKey = items[j].key;

        if (iKey === jKey || iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, 'value') && iKey.value === jKey.value) {
          var _msg = "Map keys must be unique; \"".concat(iKey, "\" is repeated");

          doc.errors.push(new YAMLSemanticError(cst, _msg));
          break;
        }
      }
    }
  }

  if (hasCollectionKey && !doc.options.mapAsMap) {
    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new YAMLWarning(cst, warn));
  }

  cst.resolved = map;
  return map;
}

var valueHasPairComment = function valueHasPairComment(_ref2) {
  var _ref2$context = _ref2.context,
      lineStart = _ref2$context.lineStart,
      node = _ref2$context.node,
      src = _ref2$context.src,
      props = _ref2.props;
  if (props.length === 0) return false;
  var start = props[0].start;
  if (node && start > node.valueRange.start) return false;
  if (src[start] !== Char.COMMENT) return false;

  for (var i = lineStart; i < start; ++i) {
    if (src[i] === '\n') return false;
  }

  return true;
};

function resolvePairComment(item, pair) {
  if (!valueHasPairComment(item)) return;
  var comment = item.getPropValue(0, Char.COMMENT, true);
  var found = false;
  var cb = pair.value.commentBefore;

  if (cb && cb.startsWith(comment)) {
    pair.value.commentBefore = cb.substr(comment.length + 1);
    found = true;
  } else {
    var cc = pair.value.comment;

    if (!item.node && cc && cc.startsWith(comment)) {
      pair.value.comment = cc.substr(comment.length + 1);
      found = true;
    }
  }

  if (found) pair.comment = comment;
}

function resolveBlockMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = undefined;
  var keyStart = null;

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    switch (item.type) {
      case Type.BLANK_LINE:
        comments.push({
          afterKey: !!key,
          before: items.length
        });
        break;

      case Type.COMMENT:
        comments.push({
          afterKey: !!key,
          before: items.length,
          comment: item.comment
        });
        break;

      case Type.MAP_KEY:
        if (key !== undefined) items.push(new Pair(key));
        if (item.error) doc.errors.push(item.error);
        key = resolveNode(doc, item.node);
        keyStart = null;
        break;

      case Type.MAP_VALUE:
        {
          if (key === undefined) key = null;
          if (item.error) doc.errors.push(item.error);

          if (!item.context.atLineStart && item.node && item.node.type === Type.MAP && !item.node.context.atLineStart) {
            var msg = 'Nested mappings are not allowed in compact mappings';
            doc.errors.push(new YAMLSemanticError(item.node, msg));
          }

          var valueNode = item.node;

          if (!valueNode && item.props.length > 0) {
            // Comments on an empty mapping value need to be preserved, so we
            // need to construct a minimal empty node here to use instead of the
            // missing `item.node`. -- eemeli/yaml#19
            valueNode = new PlainValue(Type.PLAIN, []);
            valueNode.context = {
              parent: item,
              src: item.context.src
            };
            var pos = item.range.start + 1;
            valueNode.range = {
              start: pos,
              end: pos
            };
            valueNode.valueRange = {
              start: pos,
              end: pos
            };

            if (typeof item.range.origStart === 'number') {
              var origPos = item.range.origStart + 1;
              valueNode.range.origStart = valueNode.range.origEnd = origPos;
              valueNode.valueRange.origStart = valueNode.valueRange.origEnd = origPos;
            }
          }

          var pair = new Pair(key, resolveNode(doc, valueNode));
          resolvePairComment(item, pair);
          items.push(pair);

          if (key && typeof keyStart === 'number') {
            if (item.range.start > keyStart + 1024) doc.errors.push(getLongKeyError(cst, key));
          }

          key = undefined;
          keyStart = null;
        }
        break;

      default:
        if (key !== undefined) items.push(new Pair(key));
        key = resolveNode(doc, item);
        keyStart = item.range.start;
        if (item.error) doc.errors.push(item.error);

        next: for (var j = i + 1;; ++j) {
          var nextItem = cst.items[j];

          switch (nextItem && nextItem.type) {
            case Type.BLANK_LINE:
            case Type.COMMENT:
              continue next;

            case Type.MAP_VALUE:
              break next;

            default:
              {
                var _msg2 = 'Implicit map keys need to be followed by map values';
                doc.errors.push(new YAMLSemanticError(item, _msg2));
                break next;
              }
          }
        }

        if (item.valueRangeContainsNewline) {
          var _msg3 = 'Implicit map keys need to be on a single line';
          doc.errors.push(new YAMLSemanticError(item, _msg3));
        }

    }
  }

  if (key !== undefined) items.push(new Pair(key));
  return {
    comments: comments,
    items: items
  };
}

function resolveFlowMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = undefined;
  var explicitKey = false;
  var next = '{';

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    if (typeof item.char === 'string') {
      var char = item.char,
          offset = item.offset;

      if (char === '?' && key === undefined && !explicitKey) {
        explicitKey = true;
        next = ':';
        continue;
      }

      if (char === ':') {
        if (key === undefined) key = null;

        if (next === ':') {
          next = ',';
          continue;
        }
      } else {
        if (explicitKey) {
          if (key === undefined && char !== ',') key = null;
          explicitKey = false;
        }

        if (key !== undefined) {
          items.push(new Pair(key));
          key = undefined;

          if (char === ',') {
            next = ':';
            continue;
          }
        }
      }

      if (char === '}') {
        if (i === cst.items.length - 1) continue;
      } else if (char === next) {
        next = ':';
        continue;
      }

      var msg = "Flow map contains an unexpected ".concat(char);
      var err = new YAMLSyntaxError(cst, msg);
      err.offset = offset;
      doc.errors.push(err);
    } else if (item.type === Type.BLANK_LINE) {
      comments.push({
        afterKey: !!key,
        before: items.length
      });
    } else if (item.type === Type.COMMENT) {
      checkFlowCommentSpace(doc.errors, item);
      comments.push({
        afterKey: !!key,
        before: items.length,
        comment: item.comment
      });
    } else if (key === undefined) {
      if (next === ',') doc.errors.push(new YAMLSemanticError(item, 'Separator , missing in flow map'));
      key = resolveNode(doc, item);
    } else {
      if (next !== ',') doc.errors.push(new YAMLSemanticError(item, 'Indicator : missing in flow map entry'));
      items.push(new Pair(key, resolveNode(doc, item)));
      key = undefined;
      explicitKey = false;
    }
  }

  checkFlowCollectionEnd(doc.errors, cst);
  if (key !== undefined) items.push(new Pair(key));
  return {
    comments: comments,
    items: items
  };
}

function resolveSeq(doc, cst) {
  if (cst.type !== Type.SEQ && cst.type !== Type.FLOW_SEQ) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a sequence");
    doc.errors.push(new YAMLSyntaxError(cst, msg));
    return null;
  }

  var _ref = cst.type === Type.FLOW_SEQ ? resolveFlowSeqItems(doc, cst) : resolveBlockSeqItems(doc, cst),
      comments = _ref.comments,
      items = _ref.items;

  var seq = new YAMLSeq();
  seq.items = items;
  resolveComments(seq, comments);

  if (!doc.options.mapAsMap && items.some(function (it) {
    return it instanceof Pair && it.key instanceof resolveSeq_492ab440_Collection;
  })) {
    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new YAMLWarning(cst, warn));
  }

  cst.resolved = seq;
  return seq;
}

function resolveBlockSeqItems(doc, cst) {
  var comments = [];
  var items = [];

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    switch (item.type) {
      case Type.BLANK_LINE:
        comments.push({
          before: items.length
        });
        break;

      case Type.COMMENT:
        comments.push({
          comment: item.comment,
          before: items.length
        });
        break;

      case Type.SEQ_ITEM:
        if (item.error) doc.errors.push(item.error);
        items.push(resolveNode(doc, item.node));

        if (item.hasProps) {
          var msg = 'Sequence items cannot have tags or anchors before the - indicator';
          doc.errors.push(new YAMLSemanticError(item, msg));
        }

        break;

      default:
        if (item.error) doc.errors.push(item.error);
        doc.errors.push(new YAMLSyntaxError(item, "Unexpected ".concat(item.type, " node in sequence")));
    }
  }

  return {
    comments: comments,
    items: items
  };
}

function resolveFlowSeqItems(doc, cst) {
  var comments = [];
  var items = [];
  var explicitKey = false;
  var key = undefined;
  var keyStart = null;
  var next = '[';
  var prevItem = null;

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    if (typeof item.char === 'string') {
      var char = item.char,
          offset = item.offset;

      if (char !== ':' && (explicitKey || key !== undefined)) {
        if (explicitKey && key === undefined) key = next ? items.pop() : null;
        items.push(new Pair(key));
        explicitKey = false;
        key = undefined;
        keyStart = null;
      }

      if (char === next) {
        next = null;
      } else if (!next && char === '?') {
        explicitKey = true;
      } else if (next !== '[' && char === ':' && key === undefined) {
        if (next === ',') {
          key = items.pop();

          if (key instanceof Pair) {
            var msg = 'Chaining flow sequence pairs is invalid';
            var err = new YAMLSemanticError(cst, msg);
            err.offset = offset;
            doc.errors.push(err);
          }

          if (!explicitKey && typeof keyStart === 'number') {
            var keyEnd = item.range ? item.range.start : item.offset;
            if (keyEnd > keyStart + 1024) doc.errors.push(getLongKeyError(cst, key));
            var src = prevItem.context.src;

            for (var _i = keyStart; _i < keyEnd; ++_i) {
              if (src[_i] === '\n') {
                var _msg = 'Implicit keys of flow sequence pairs need to be on a single line';
                doc.errors.push(new YAMLSemanticError(prevItem, _msg));
                break;
              }
            }
          }
        } else {
          key = null;
        }

        keyStart = null;
        explicitKey = false;
        next = null;
      } else if (next === '[' || char !== ']' || i < cst.items.length - 1) {
        var _msg2 = "Flow sequence contains an unexpected ".concat(char);

        var _err = new YAMLSyntaxError(cst, _msg2);

        _err.offset = offset;
        doc.errors.push(_err);
      }
    } else if (item.type === Type.BLANK_LINE) {
      comments.push({
        before: items.length
      });
    } else if (item.type === Type.COMMENT) {
      checkFlowCommentSpace(doc.errors, item);
      comments.push({
        comment: item.comment,
        before: items.length
      });
    } else {
      if (next) {
        var _msg3 = "Expected a ".concat(next, " in flow sequence");

        doc.errors.push(new YAMLSemanticError(item, _msg3));
      }

      var value = resolveNode(doc, item);

      if (key === undefined) {
        items.push(value);
        prevItem = item;
      } else {
        items.push(new Pair(key, value));
        key = undefined;
      }

      keyStart = item.range.start;
      next = ',';
    }
  }

  checkFlowCollectionEnd(doc.errors, cst);
  if (key !== undefined) items.push(new Pair(key));
  return {
    comments: comments,
    items: items
  };
}



;// CONCATENATED MODULE: ./node_modules/yaml/browser/dist/warnings-df54cb69.js



/* global atob, btoa, Buffer */
var binary = {
  identify: function identify(value) {
    return value instanceof Uint8Array;
  },
  // Buffer inherits from Uint8Array
  default: false,
  tag: 'tag:yaml.org,2002:binary',

  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve: function resolve(doc, node) {
    var src = resolveString(doc, node);

    if (typeof Buffer === 'function') {
      return Buffer.from(src, 'base64');
    } else if (typeof atob === 'function') {
      // On IE 11, atob() can't handle newlines
      var str = atob(src.replace(/[\n\r]/g, ''));
      var buffer = new Uint8Array(str.length);

      for (var i = 0; i < str.length; ++i) {
        buffer[i] = str.charCodeAt(i);
      }

      return buffer;
    } else {
      var msg = 'This environment does not support reading binary tags; either Buffer or atob is required';
      doc.errors.push(new YAMLReferenceError(node, msg));
      return null;
    }
  },
  options: binaryOptions,
  stringify: function stringify(_ref, ctx, onComment, onChompKeep) {
    var comment = _ref.comment,
        type = _ref.type,
        value = _ref.value;
    var src;

    if (typeof Buffer === 'function') {
      src = value instanceof Buffer ? value.toString('base64') : Buffer.from(value.buffer).toString('base64');
    } else if (typeof btoa === 'function') {
      var s = '';

      for (var i = 0; i < value.length; ++i) {
        s += String.fromCharCode(value[i]);
      }

      src = btoa(s);
    } else {
      throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
    }

    if (!type) type = binaryOptions.defaultType;

    if (type === Type.QUOTE_DOUBLE) {
      value = src;
    } else {
      var lineWidth = binaryOptions.lineWidth;
      var n = Math.ceil(src.length / lineWidth);
      var lines = new Array(n);

      for (var _i = 0, o = 0; _i < n; ++_i, o += lineWidth) {
        lines[_i] = src.substr(o, lineWidth);
      }

      value = lines.join(type === Type.BLOCK_LITERAL ? '\n' : ' ');
    }

    return stringifyString({
      comment: comment,
      type: type,
      value: value
    }, ctx, onComment, onChompKeep);
  }
};

function parsePairs(doc, cst) {
  var seq = resolveSeq(doc, cst);

  for (var i = 0; i < seq.items.length; ++i) {
    var item = seq.items[i];
    if (item instanceof Pair) continue;else if (item instanceof YAMLMap) {
      if (item.items.length > 1) {
        var msg = 'Each pair must have its own sequence indicator';
        throw new YAMLSemanticError(cst, msg);
      }

      var pair = item.items[0] || new Pair();
      if (item.commentBefore) pair.commentBefore = pair.commentBefore ? "".concat(item.commentBefore, "\n").concat(pair.commentBefore) : item.commentBefore;
      if (item.comment) pair.comment = pair.comment ? "".concat(item.comment, "\n").concat(pair.comment) : item.comment;
      item = pair;
    }
    seq.items[i] = item instanceof Pair ? item : new Pair(item);
  }

  return seq;
}
function createPairs(schema, iterable, ctx) {
  var pairs = new YAMLSeq(schema);
  pairs.tag = 'tag:yaml.org,2002:pairs';

  var _iterator = _createForOfIteratorHelper(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;
      var key = void 0,
          value = void 0;

      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else throw new TypeError("Expected [key, value] tuple: ".concat(it));
      } else if (it && it instanceof Object) {
        var keys = Object.keys(it);

        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else throw new TypeError("Expected { key: value } tuple: ".concat(it));
      } else {
        key = it;
      }

      var pair = schema.createPair(key, value, ctx);
      pairs.items.push(pair);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return pairs;
}
var pairs = {
  default: false,
  tag: 'tag:yaml.org,2002:pairs',
  resolve: parsePairs,
  createNode: createPairs
};

var YAMLOMap = /*#__PURE__*/function (_YAMLSeq) {
  _inherits(YAMLOMap, _YAMLSeq);

  var _super = _createSuper(YAMLOMap);

  function YAMLOMap() {
    var _this;

    _classCallCheck(this, YAMLOMap);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "add", YAMLMap.prototype.add.bind(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "delete", YAMLMap.prototype.delete.bind(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "get", YAMLMap.prototype.get.bind(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "has", YAMLMap.prototype.has.bind(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "set", YAMLMap.prototype.set.bind(_assertThisInitialized(_this)));

    _this.tag = YAMLOMap.tag;
    return _this;
  }

  _createClass(YAMLOMap, [{
    key: "toJSON",
    value: function toJSON$1(_, ctx) {
      var map = new Map();
      if (ctx && ctx.onCreate) ctx.onCreate(map);

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          var key = void 0,
              value = void 0;

          if (pair instanceof Pair) {
            key = toJSON(pair.key, '', ctx);
            value = toJSON(pair.value, key, ctx);
          } else {
            key = toJSON(pair, '', ctx);
          }

          if (map.has(key)) throw new Error('Ordered maps must not include duplicate keys');
          map.set(key, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return map;
    }
  }]);

  return YAMLOMap;
}(YAMLSeq);

_defineProperty(YAMLOMap, "tag", 'tag:yaml.org,2002:omap');

function parseOMap(doc, cst) {
  var pairs = parsePairs(doc, cst);
  var seenKeys = [];

  var _iterator2 = _createForOfIteratorHelper(pairs.items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value.key;

      if (key instanceof Scalar) {
        if (seenKeys.includes(key.value)) {
          var msg = 'Ordered maps must not include duplicate keys';
          throw new YAMLSemanticError(cst, msg);
        } else {
          seenKeys.push(key.value);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return Object.assign(new YAMLOMap(), pairs);
}

function createOMap(schema, iterable, ctx) {
  var pairs = createPairs(schema, iterable, ctx);
  var omap = new YAMLOMap();
  omap.items = pairs.items;
  return omap;
}

var omap = {
  identify: function identify(value) {
    return value instanceof Map;
  },
  nodeClass: YAMLOMap,
  default: false,
  tag: 'tag:yaml.org,2002:omap',
  resolve: parseOMap,
  createNode: createOMap
};

var YAMLSet = /*#__PURE__*/function (_YAMLMap) {
  _inherits(YAMLSet, _YAMLMap);

  var _super = _createSuper(YAMLSet);

  function YAMLSet() {
    var _this;

    _classCallCheck(this, YAMLSet);

    _this = _super.call(this);
    _this.tag = YAMLSet.tag;
    return _this;
  }

  _createClass(YAMLSet, [{
    key: "add",
    value: function add(key) {
      var pair = key instanceof Pair ? key : new Pair(key);
      var prev = findPair(this.items, pair.key);
      if (!prev) this.items.push(pair);
    }
  }, {
    key: "get",
    value: function get(key, keepPair) {
      var pair = findPair(this.items, key);
      return !keepPair && pair instanceof Pair ? pair.key instanceof Scalar ? pair.key.value : pair.key : pair;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (typeof value !== 'boolean') throw new Error("Expected boolean value for set(key, value) in a YAML set, not ".concat(_typeof(value)));
      var prev = findPair(this.items, key);

      if (prev && !value) {
        this.items.splice(this.items.indexOf(prev), 1);
      } else if (!prev && value) {
        this.items.push(new Pair(key));
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      return _get(_getPrototypeOf(YAMLSet.prototype), "toJSON", this).call(this, _, ctx, Set);
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      if (this.hasAllNullValues()) return _get(_getPrototypeOf(YAMLSet.prototype), "toString", this).call(this, ctx, onComment, onChompKeep);else throw new Error('Set items must all have null values');
    }
  }]);

  return YAMLSet;
}(YAMLMap);

_defineProperty(YAMLSet, "tag", 'tag:yaml.org,2002:set');

function parseSet(doc, cst) {
  var map = resolveMap(doc, cst);
  if (!map.hasAllNullValues()) throw new YAMLSemanticError(cst, 'Set items must all have null values');
  return Object.assign(new YAMLSet(), map);
}

function createSet(schema, iterable, ctx) {
  var set = new YAMLSet();

  var _iterator = _createForOfIteratorHelper(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      set.items.push(schema.createPair(value, null, ctx));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return set;
}

var set = {
  identify: function identify(value) {
    return value instanceof Set;
  },
  nodeClass: YAMLSet,
  default: false,
  tag: 'tag:yaml.org,2002:set',
  resolve: parseSet,
  createNode: createSet
};

var parseSexagesimal = function parseSexagesimal(sign, parts) {
  var n = parts.split(':').reduce(function (n, p) {
    return n * 60 + Number(p);
  }, 0);
  return sign === '-' ? -n : n;
}; // hhhh:mm:ss.sss


var stringifySexagesimal = function stringifySexagesimal(_ref) {
  var value = _ref.value;
  if (isNaN(value) || !isFinite(value)) return stringifyNumber(value);
  var sign = '';

  if (value < 0) {
    sign = '-';
    value = Math.abs(value);
  }

  var parts = [value % 60]; // seconds, including ms

  if (value < 60) {
    parts.unshift(0); // at least one : is required
  } else {
    value = Math.round((value - parts[0]) / 60);
    parts.unshift(value % 60); // minutes

    if (value >= 60) {
      value = Math.round((value - parts[0]) / 60);
      parts.unshift(value); // hours
    }
  }

  return sign + parts.map(function (n) {
    return n < 10 ? '0' + String(n) : String(n);
  }).join(':').replace(/000000\d*$/, '') // % 60 may introduce error
  ;
};

var intTime = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
  resolve: function resolve(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ''));
  },
  stringify: stringifySexagesimal
};
var floatTime = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
  resolve: function resolve(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ''));
  },
  stringify: stringifySexagesimal
};
var timestamp = {
  identify: function identify(value) {
    return value instanceof Date;
  },
  default: true,
  tag: 'tag:yaml.org,2002:timestamp',
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp('^(?:' + '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' + // YYYY-Mm-Dd
  '(?:(?:t|T|[ \\t]+)' + // t | T | whitespace
  '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' + // Hh:Mm:Ss(.ss)?
  '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' + // Z | +5 | -03:30
  ')?' + ')$'),
  resolve: function resolve(str, year, month, day, hour, minute, second, millisec, tz) {
    if (millisec) millisec = (millisec + '00').substr(1, 3);
    var date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec || 0);

    if (tz && tz !== 'Z') {
      var d = parseSexagesimal(tz[0], tz.slice(1));
      if (Math.abs(d) < 30) d *= 60;
      date -= 60000 * d;
    }

    return new Date(date);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '');
  }
};

/* global console, process, YAML_SILENCE_DEPRECATION_WARNINGS, YAML_SILENCE_WARNINGS */
function shouldWarn(deprecation) {
  var env = typeof process !== 'undefined' && process.env || {};

  if (deprecation) {
    if (typeof YAML_SILENCE_DEPRECATION_WARNINGS !== 'undefined') return !YAML_SILENCE_DEPRECATION_WARNINGS;
    return !env.YAML_SILENCE_DEPRECATION_WARNINGS;
  }

  if (typeof YAML_SILENCE_WARNINGS !== 'undefined') return !YAML_SILENCE_WARNINGS;
  return !env.YAML_SILENCE_WARNINGS;
}

function warn(warning, type) {
  if (shouldWarn(false)) {
    var emit = typeof process !== 'undefined' && process.emitWarning; // This will throw in Jest if `warning` is an Error instance due to
    // https://github.com/facebook/jest/issues/2549

    if (emit) emit(warning, type);else {
      // eslint-disable-next-line no-console
      console.warn(type ? "".concat(type, ": ").concat(warning) : warning);
    }
  }
}
function warnFileDeprecation(filename) {
  if (shouldWarn(true)) {
    var path = filename.replace(/.*yaml[/\\]/i, '').replace(/\.js$/, '').replace(/\\/g, '/');
    warn("The endpoint 'yaml/".concat(path, "' will be removed in a future release."), 'DeprecationWarning');
  }
}
var warned = {};
function warnOptionDeprecation(name, alternative) {
  if (!warned[name] && shouldWarn(true)) {
    warned[name] = true;
    var msg = "The option '".concat(name, "' will be removed in a future release");
    msg += alternative ? ", use '".concat(alternative, "' instead.") : '.';
    warn(msg, 'DeprecationWarning');
  }
}



;// CONCATENATED MODULE: ./node_modules/yaml/browser/dist/Schema-e94716c8.js




function createMap(schema, obj, ctx) {
  var map = new YAMLMap(schema);

  if (obj instanceof Map) {
    var _iterator = _createForOfIteratorHelper(obj),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        map.items.push(schema.createPair(key, value, ctx));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (obj && _typeof(obj) === 'object') {
    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var _key = _Object$keys[_i];
      map.items.push(schema.createPair(_key, obj[_key], ctx));
    }
  }

  if (typeof schema.sortMapEntries === 'function') {
    map.items.sort(schema.sortMapEntries);
  }

  return map;
}

var map = {
  createNode: createMap,
  default: true,
  nodeClass: YAMLMap,
  tag: 'tag:yaml.org,2002:map',
  resolve: resolveMap
};

function createSeq(schema, obj, ctx) {
  var seq = new YAMLSeq(schema);

  if (obj && obj[Symbol.iterator]) {
    var _iterator = _createForOfIteratorHelper(obj),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var it = _step.value;
        var v = schema.createNode(it, ctx.wrapScalars, null, ctx);
        seq.items.push(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return seq;
}

var seq = {
  createNode: createSeq,
  default: true,
  nodeClass: YAMLSeq,
  tag: 'tag:yaml.org,2002:seq',
  resolve: resolveSeq
};

var string = {
  identify: function identify(value) {
    return typeof value === 'string';
  },
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: resolveString,
  stringify: function stringify(item, ctx, onComment, onChompKeep) {
    ctx = Object.assign({
      actualString: true
    }, ctx);
    return stringifyString(item, ctx, onComment, onChompKeep);
  },
  options: strOptions
};

var failsafe = [map, seq, string];

/* global BigInt */

var intIdentify$2 = function intIdentify(value) {
  return typeof value === 'bigint' || Number.isInteger(value);
};

var intResolve$1 = function intResolve(src, part, radix) {
  return intOptions.asBigInt ? BigInt(src) : parseInt(part, radix);
};

function intStringify$1(node, radix, prefix) {
  var value = node.value;
  if (intIdentify$2(value) && value >= 0) return prefix + value.toString(radix);
  return stringifyNumber(node);
}

var nullObj = {
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new Scalar(null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve() {
    return null;
  },
  options: nullOptions,
  stringify: function stringify() {
    return nullOptions.nullStr;
  }
};
var boolObj = {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: function resolve(str) {
    return str[0] === 't' || str[0] === 'T';
  },
  options: boolOptions,
  stringify: function stringify(_ref) {
    var value = _ref.value;
    return value ? boolOptions.trueStr : boolOptions.falseStr;
  }
};
var octObj = {
  identify: function identify(value) {
    return intIdentify$2(value) && value >= 0;
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'OCT',
  test: /^0o([0-7]+)$/,
  resolve: function resolve(str, oct) {
    return intResolve$1(str, oct, 8);
  },
  options: intOptions,
  stringify: function stringify(node) {
    return intStringify$1(node, 8, '0o');
  }
};
var intObj = {
  identify: intIdentify$2,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^[-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return intResolve$1(str, str, 10);
  },
  options: intOptions,
  stringify: stringifyNumber
};
var hexObj = {
  identify: function identify(value) {
    return intIdentify$2(value) && value >= 0;
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'HEX',
  test: /^0x([0-9a-fA-F]+)$/,
  resolve: function resolve(str, hex) {
    return intResolve$1(str, hex, 16);
  },
  options: intOptions,
  stringify: function stringify(node) {
    return intStringify$1(node, 16, '0x');
  }
};
var nanObj = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve(str, nan) {
    return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  },
  stringify: stringifyNumber
};
var expObj = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'EXP',
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return Number(value).toExponential();
  }
};
var floatObj = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,
  resolve: function resolve(str, frac1, frac2) {
    var frac = frac1 || frac2;
    var node = new Scalar(parseFloat(str));
    if (frac && frac[frac.length - 1] === '0') node.minFractionDigits = frac.length;
    return node;
  },
  stringify: stringifyNumber
};
var core = failsafe.concat([nullObj, boolObj, octObj, intObj, hexObj, nanObj, expObj, floatObj]);

/* global BigInt */

var intIdentify$1 = function intIdentify(value) {
  return typeof value === 'bigint' || Number.isInteger(value);
};

var stringifyJSON = function stringifyJSON(_ref) {
  var value = _ref.value;
  return JSON.stringify(value);
};

var json = [map, seq, {
  identify: function identify(value) {
    return typeof value === 'string';
  },
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: resolveString,
  stringify: stringifyJSON
}, {
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new Scalar(null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^null$/,
  resolve: function resolve() {
    return null;
  },
  stringify: stringifyJSON
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^true|false$/,
  resolve: function resolve(str) {
    return str === 'true';
  },
  stringify: stringifyJSON
}, {
  identify: intIdentify$1,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^-?(?:0|[1-9][0-9]*)$/,
  resolve: function resolve(str) {
    return intOptions.asBigInt ? BigInt(str) : parseInt(str, 10);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return intIdentify$1(value) ? value.toString() : JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  },
  stringify: stringifyJSON
}];

json.scalarFallback = function (str) {
  throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(str)));
};

/* global BigInt */

var boolStringify = function boolStringify(_ref) {
  var value = _ref.value;
  return value ? boolOptions.trueStr : boolOptions.falseStr;
};

var intIdentify = function intIdentify(value) {
  return typeof value === 'bigint' || Number.isInteger(value);
};

function intResolve(sign, src, radix) {
  var str = src.replace(/_/g, '');

  if (intOptions.asBigInt) {
    switch (radix) {
      case 2:
        str = "0b".concat(str);
        break;

      case 8:
        str = "0o".concat(str);
        break;

      case 16:
        str = "0x".concat(str);
        break;
    }

    var _n = BigInt(str);

    return sign === '-' ? BigInt(-1) * _n : _n;
  }

  var n = parseInt(str, radix);
  return sign === '-' ? -1 * n : n;
}

function intStringify(node, radix, prefix) {
  var value = node.value;

  if (intIdentify(value)) {
    var str = value.toString(radix);
    return value < 0 ? '-' + prefix + str.substr(1) : prefix + str;
  }

  return stringifyNumber(node);
}

var yaml11 = failsafe.concat([{
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new Scalar(null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve() {
    return null;
  },
  options: nullOptions,
  stringify: function stringify() {
    return nullOptions.nullStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: function resolve() {
    return true;
  },
  options: boolOptions,
  stringify: boolStringify
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
  resolve: function resolve() {
    return false;
  },
  options: boolOptions,
  stringify: boolStringify
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'BIN',
  test: /^([-+]?)0b([0-1_]+)$/,
  resolve: function resolve(str, sign, bin) {
    return intResolve(sign, bin, 2);
  },
  stringify: function stringify(node) {
    return intStringify(node, 2, '0b');
  }
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'OCT',
  test: /^([-+]?)0([0-7_]+)$/,
  resolve: function resolve(str, sign, oct) {
    return intResolve(sign, oct, 8);
  },
  stringify: function stringify(node) {
    return intStringify(node, 8, '0');
  }
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^([-+]?)([0-9][0-9_]*)$/,
  resolve: function resolve(str, sign, abs) {
    return intResolve(sign, abs, 10);
  },
  stringify: stringifyNumber
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'HEX',
  test: /^([-+]?)0x([0-9a-fA-F_]+)$/,
  resolve: function resolve(str, sign, hex) {
    return intResolve(sign, hex, 16);
  },
  stringify: function stringify(node) {
    return intStringify(node, 16, '0x');
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve(str, nan) {
    return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  },
  stringify: stringifyNumber
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'EXP',
  test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseFloat(str.replace(/_/g, ''));
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return Number(value).toExponential();
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
  resolve: function resolve(str, frac) {
    var node = new Scalar(parseFloat(str.replace(/_/g, '')));

    if (frac) {
      var f = frac.replace(/_/g, '');
      if (f[f.length - 1] === '0') node.minFractionDigits = f.length;
    }

    return node;
  },
  stringify: stringifyNumber
}], binary, omap, pairs, set, intTime, floatTime, timestamp);

var schemas = {
  core: core,
  failsafe: failsafe,
  json: json,
  yaml11: yaml11
};
var tags = {
  binary: binary,
  bool: boolObj,
  float: floatObj,
  floatExp: expObj,
  floatNaN: nanObj,
  floatTime: floatTime,
  int: intObj,
  intHex: hexObj,
  intOct: octObj,
  intTime: intTime,
  map: map,
  null: nullObj,
  omap: omap,
  pairs: pairs,
  seq: seq,
  set: set,
  timestamp: timestamp
};

function findTagObject(value, tagName, tags) {
  if (tagName) {
    var match = tags.filter(function (t) {
      return t.tag === tagName;
    });
    var tagObj = match.find(function (t) {
      return !t.format;
    }) || match[0];
    if (!tagObj) throw new Error("Tag ".concat(tagName, " not found"));
    return tagObj;
  } // TODO: deprecate/remove class check


  return tags.find(function (t) {
    return (t.identify && t.identify(value) || t.class && value instanceof t.class) && !t.format;
  });
}

function createNode(value, tagName, ctx) {
  if (value instanceof resolveSeq_492ab440_Node) return value;
  var defaultPrefix = ctx.defaultPrefix,
      onTagObj = ctx.onTagObj,
      prevObjects = ctx.prevObjects,
      schema = ctx.schema,
      wrapScalars = ctx.wrapScalars;
  if (tagName && tagName.startsWith('!!')) tagName = defaultPrefix + tagName.slice(2);
  var tagObj = findTagObject(value, tagName, schema.tags);

  if (!tagObj) {
    if (typeof value.toJSON === 'function') value = value.toJSON();
    if (!value || _typeof(value) !== 'object') return wrapScalars ? new Scalar(value) : value;
    tagObj = value instanceof Map ? map : value[Symbol.iterator] ? seq : map;
  }

  if (onTagObj) {
    onTagObj(tagObj);
    delete ctx.onTagObj;
  } // Detect duplicate references to the same object & use Alias nodes for all
  // after first. The `obj` wrapper allows for circular references to resolve.


  var obj = {
    value: undefined,
    node: undefined
  };

  if (value && _typeof(value) === 'object' && prevObjects) {
    var prev = prevObjects.get(value);

    if (prev) {
      var alias = new resolveSeq_492ab440_Alias(prev); // leaves source dirty; must be cleaned by caller

      ctx.aliasNodes.push(alias); // defined along with prevObjects

      return alias;
    }

    obj.value = value;
    prevObjects.set(value, obj);
  }

  obj.node = tagObj.createNode ? tagObj.createNode(ctx.schema, value, ctx) : wrapScalars ? new Scalar(value) : value;
  if (tagName && obj.node instanceof resolveSeq_492ab440_Node) obj.node.tag = tagName;
  return obj.node;
}

function getSchemaTags(schemas, knownTags, customTags, schemaId) {
  var tags = schemas[schemaId.replace(/\W/g, '')]; // 'yaml-1.1' -> 'yaml11'

  if (!tags) {
    var keys = Object.keys(schemas).map(function (key) {
      return JSON.stringify(key);
    }).join(', ');
    throw new Error("Unknown schema \"".concat(schemaId, "\"; use one of ").concat(keys));
  }

  if (Array.isArray(customTags)) {
    var _iterator = _createForOfIteratorHelper(customTags),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tag = _step.value;
        tags = tags.concat(tag);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (typeof customTags === 'function') {
    tags = customTags(tags.slice());
  }

  for (var i = 0; i < tags.length; ++i) {
    var _tag = tags[i];

    if (typeof _tag === 'string') {
      var tagObj = knownTags[_tag];

      if (!tagObj) {
        var _keys = Object.keys(knownTags).map(function (key) {
          return JSON.stringify(key);
        }).join(', ');

        throw new Error("Unknown custom tag \"".concat(_tag, "\"; use one of ").concat(_keys));
      }

      tags[i] = tagObj;
    }
  }

  return tags;
}

var sortMapEntriesByKey = function sortMapEntriesByKey(a, b) {
  return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
};

var Schema = /*#__PURE__*/function () {
  // TODO: remove in v2
  // TODO: remove in v2
  function Schema(_ref) {
    var customTags = _ref.customTags,
        merge = _ref.merge,
        schema = _ref.schema,
        sortMapEntries = _ref.sortMapEntries,
        deprecatedCustomTags = _ref.tags;

    _classCallCheck(this, Schema);

    this.merge = !!merge;
    this.name = schema;
    this.sortMapEntries = sortMapEntries === true ? sortMapEntriesByKey : sortMapEntries || null;
    if (!customTags && deprecatedCustomTags) warnOptionDeprecation('tags', 'customTags');
    this.tags = getSchemaTags(schemas, tags, customTags || deprecatedCustomTags, schema);
  }

  _createClass(Schema, [{
    key: "createNode",
    value: function createNode$1(value, wrapScalars, tagName, ctx) {
      var baseCtx = {
        defaultPrefix: Schema.defaultPrefix,
        schema: this,
        wrapScalars: wrapScalars
      };
      var createCtx = ctx ? Object.assign(ctx, baseCtx) : baseCtx;
      return createNode(value, tagName, createCtx);
    }
  }, {
    key: "createPair",
    value: function createPair(key, value, ctx) {
      if (!ctx) ctx = {
        wrapScalars: true
      };
      var k = this.createNode(key, ctx.wrapScalars, null, ctx);
      var v = this.createNode(value, ctx.wrapScalars, null, ctx);
      return new Pair(k, v);
    }
  }]);

  return Schema;
}();

_defineProperty(Schema, "defaultPrefix", defaultTagPrefix);

_defineProperty(Schema, "defaultTags", defaultTags);



;// CONCATENATED MODULE: ./node_modules/yaml/browser/dist/index.js






var defaultOptions = {
  anchorPrefix: 'a',
  customTags: null,
  indent: 2,
  indentSeq: true,
  keepCstNodes: false,
  keepNodeTypes: true,
  keepBlobsInJSON: true,
  mapAsMap: false,
  maxAliasCount: 100,
  prettyErrors: false,
  // TODO Set true in v2
  simpleKeys: false,
  version: '1.2'
};
var scalarOptions = {
  get binary() {
    return binaryOptions;
  },

  set binary(opt) {
    Object.assign(binaryOptions, opt);
  },

  get bool() {
    return boolOptions;
  },

  set bool(opt) {
    Object.assign(boolOptions, opt);
  },

  get int() {
    return intOptions;
  },

  set int(opt) {
    Object.assign(intOptions, opt);
  },

  get null() {
    return nullOptions;
  },

  set null(opt) {
    Object.assign(nullOptions, opt);
  },

  get str() {
    return strOptions;
  },

  set str(opt) {
    Object.assign(strOptions, opt);
  }

};
var documentOptions = {
  '1.0': {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: defaultTagPrefix
    }, {
      handle: '!!',
      prefix: 'tag:private.yaml.org,2002:'
    }]
  },
  1.1: {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: defaultTagPrefix
    }]
  },
  1.2: {
    schema: 'core',
    merge: false,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: defaultTagPrefix
    }]
  }
};

function stringifyTag(doc, tag) {
  if ((doc.version || doc.options.version) === '1.0') {
    var priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
    if (priv) return '!' + priv[1];
    var vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
    return vocab ? "!".concat(vocab[1], "/").concat(vocab[2]) : "!".concat(tag.replace(/^tag:/, ''));
  }

  var p = doc.tagPrefixes.find(function (p) {
    return tag.indexOf(p.prefix) === 0;
  });

  if (!p) {
    var dtp = doc.getDefaults().tagPrefixes;
    p = dtp && dtp.find(function (p) {
      return tag.indexOf(p.prefix) === 0;
    });
  }

  if (!p) return tag[0] === '!' ? tag : "!<".concat(tag, ">");
  var suffix = tag.substr(p.prefix.length).replace(/[!,[\]{}]/g, function (ch) {
    return {
      '!': '%21',
      ',': '%2C',
      '[': '%5B',
      ']': '%5D',
      '{': '%7B',
      '}': '%7D'
    }[ch];
  });
  return p.handle + suffix;
}

function getTagObject(tags, item) {
  if (item instanceof resolveSeq_492ab440_Alias) return resolveSeq_492ab440_Alias;

  if (item.tag) {
    var match = tags.filter(function (t) {
      return t.tag === item.tag;
    });
    if (match.length > 0) return match.find(function (t) {
      return t.format === item.format;
    }) || match[0];
  }

  var tagObj, obj;

  if (item instanceof Scalar) {
    obj = item.value; // TODO: deprecate/remove class check

    var _match = tags.filter(function (t) {
      return t.identify && t.identify(obj) || t.class && obj instanceof t.class;
    });

    tagObj = _match.find(function (t) {
      return t.format === item.format;
    }) || _match.find(function (t) {
      return !t.format;
    });
  } else {
    obj = item;
    tagObj = tags.find(function (t) {
      return t.nodeClass && obj instanceof t.nodeClass;
    });
  }

  if (!tagObj) {
    var name = obj && obj.constructor ? obj.constructor.name : _typeof(obj);
    throw new Error("Tag not resolved for ".concat(name, " value"));
  }

  return tagObj;
} // needs to be called before value stringifier to allow for circular anchor refs


function stringifyProps(node, tagObj, _ref) {
  var anchors = _ref.anchors,
      doc = _ref.doc;
  var props = [];
  var anchor = doc.anchors.getName(node);

  if (anchor) {
    anchors[anchor] = node;
    props.push("&".concat(anchor));
  }

  if (node.tag) {
    props.push(stringifyTag(doc, node.tag));
  } else if (!tagObj.default) {
    props.push(stringifyTag(doc, tagObj.tag));
  }

  return props.join(' ');
}

function stringify$1(item, ctx, onComment, onChompKeep) {
  var _ctx$doc = ctx.doc,
      anchors = _ctx$doc.anchors,
      schema = _ctx$doc.schema;
  var tagObj;

  if (!(item instanceof resolveSeq_492ab440_Node)) {
    var createCtx = {
      aliasNodes: [],
      onTagObj: function onTagObj(o) {
        return tagObj = o;
      },
      prevObjects: new Map()
    };
    item = schema.createNode(item, true, null, createCtx);

    var _iterator = _createForOfIteratorHelper(createCtx.aliasNodes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var alias = _step.value;
        alias.source = alias.source.node;
        var name = anchors.getName(alias.source);

        if (!name) {
          name = anchors.newName();
          anchors.map[name] = alias.source;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (item instanceof Pair) return item.toString(ctx, onComment, onChompKeep);
  if (!tagObj) tagObj = getTagObject(schema.tags, item);
  var props = stringifyProps(item, tagObj, ctx);
  if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart || 0) + props.length + 1;
  var str = typeof tagObj.stringify === 'function' ? tagObj.stringify(item, ctx, onComment, onChompKeep) : item instanceof Scalar ? stringifyString(item, ctx, onComment, onChompKeep) : item.toString(ctx, onComment, onChompKeep);
  if (!props) return str;
  return item instanceof Scalar || str[0] === '{' || str[0] === '[' ? "".concat(props, " ").concat(str) : "".concat(props, "\n").concat(ctx.indent).concat(str);
}

var Anchors = /*#__PURE__*/function () {
  function Anchors(prefix) {
    _classCallCheck(this, Anchors);

    _defineProperty(this, "map", Object.create(null));

    this.prefix = prefix;
  }

  _createClass(Anchors, [{
    key: "createAlias",
    value: function createAlias(node, name) {
      this.setAnchor(node, name);
      return new resolveSeq_492ab440_Alias(node);
    }
  }, {
    key: "createMergePair",
    value: function createMergePair() {
      var _this = this;

      var merge = new Merge();

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      merge.value.items = sources.map(function (s) {
        if (s instanceof resolveSeq_492ab440_Alias) {
          if (s.source instanceof YAMLMap) return s;
        } else if (s instanceof YAMLMap) {
          return _this.createAlias(s);
        }

        throw new Error('Merge sources must be Map nodes or their Aliases');
      });
      return merge;
    }
  }, {
    key: "getName",
    value: function getName(node) {
      var map = this.map;
      return Object.keys(map).find(function (a) {
        return map[a] === node;
      });
    }
  }, {
    key: "getNames",
    value: function getNames() {
      return Object.keys(this.map);
    }
  }, {
    key: "getNode",
    value: function getNode(name) {
      return this.map[name];
    }
  }, {
    key: "newName",
    value: function newName(prefix) {
      if (!prefix) prefix = this.prefix;
      var names = Object.keys(this.map);

      for (var i = 1; true; ++i) {
        var name = "".concat(prefix).concat(i);
        if (!names.includes(name)) return name;
      }
    } // During parsing, map & aliases contain CST nodes

  }, {
    key: "resolveNodes",
    value: function resolveNodes() {
      var map = this.map,
          _cstAliases = this._cstAliases;
      Object.keys(map).forEach(function (a) {
        map[a] = map[a].resolved;
      });

      _cstAliases.forEach(function (a) {
        a.source = a.source.resolved;
      });

      delete this._cstAliases;
    }
  }, {
    key: "setAnchor",
    value: function setAnchor(node, name) {
      if (node != null && !Anchors.validAnchorNode(node)) {
        throw new Error('Anchors may only be set for Scalar, Seq and Map nodes');
      }

      if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
        throw new Error('Anchor names must not contain whitespace or control characters');
      }

      var map = this.map;
      var prev = node && Object.keys(map).find(function (a) {
        return map[a] === node;
      });

      if (prev) {
        if (!name) {
          return prev;
        } else if (prev !== name) {
          delete map[prev];
          map[name] = node;
        }
      } else {
        if (!name) {
          if (!node) return null;
          name = this.newName();
        }

        map[name] = node;
      }

      return name;
    }
  }], [{
    key: "validAnchorNode",
    value: function validAnchorNode(node) {
      return node instanceof Scalar || node instanceof YAMLSeq || node instanceof YAMLMap;
    }
  }]);

  return Anchors;
}();

var visit = function visit(node, tags) {
  if (node && _typeof(node) === 'object') {
    var tag = node.tag;

    if (node instanceof resolveSeq_492ab440_Collection) {
      if (tag) tags[tag] = true;
      node.items.forEach(function (n) {
        return visit(n, tags);
      });
    } else if (node instanceof Pair) {
      visit(node.key, tags);
      visit(node.value, tags);
    } else if (node instanceof Scalar) {
      if (tag) tags[tag] = true;
    }
  }

  return tags;
};

var listTagNames = function listTagNames(node) {
  return Object.keys(visit(node, {}));
};

function parseContents(doc, contents) {
  var comments = {
    before: [],
    after: []
  };
  var body = undefined;
  var spaceBefore = false;

  var _iterator = _createForOfIteratorHelper(contents),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.valueRange) {
        if (body !== undefined) {
          var msg = 'Document contains trailing content not separated by a ... or --- line';
          doc.errors.push(new YAMLSyntaxError(node, msg));
          break;
        }

        var res = resolveNode(doc, node);

        if (spaceBefore) {
          res.spaceBefore = true;
          spaceBefore = false;
        }

        body = res;
      } else if (node.comment !== null) {
        var cc = body === undefined ? comments.before : comments.after;
        cc.push(node.comment);
      } else if (node.type === Type.BLANK_LINE) {
        spaceBefore = true;

        if (body === undefined && comments.before.length > 0 && !doc.commentBefore) {
          // space-separated comments at start are parsed as document comments
          doc.commentBefore = comments.before.join('\n');
          comments.before = [];
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  doc.contents = body || null;

  if (!body) {
    doc.comment = comments.before.concat(comments.after).join('\n') || null;
  } else {
    var cb = comments.before.join('\n');

    if (cb) {
      var cbNode = body instanceof resolveSeq_492ab440_Collection && body.items[0] ? body.items[0] : body;
      cbNode.commentBefore = cbNode.commentBefore ? "".concat(cb, "\n").concat(cbNode.commentBefore) : cb;
    }

    doc.comment = comments.after.join('\n') || null;
  }
}

function resolveTagDirective(_ref, directive) {
  var tagPrefixes = _ref.tagPrefixes;

  var _directive$parameters = _slicedToArray(directive.parameters, 2),
      handle = _directive$parameters[0],
      prefix = _directive$parameters[1];

  if (!handle || !prefix) {
    var msg = 'Insufficient parameters given for %TAG directive';
    throw new YAMLSemanticError(directive, msg);
  }

  if (tagPrefixes.some(function (p) {
    return p.handle === handle;
  })) {
    var _msg = 'The %TAG directive must only be given at most once per handle in the same document.';
    throw new YAMLSemanticError(directive, _msg);
  }

  return {
    handle: handle,
    prefix: prefix
  };
}

function resolveYamlDirective(doc, directive) {
  var _directive$parameters2 = _slicedToArray(directive.parameters, 1),
      version = _directive$parameters2[0];

  if (directive.name === 'YAML:1.0') version = '1.0';

  if (!version) {
    var msg = 'Insufficient parameters given for %YAML directive';
    throw new YAMLSemanticError(directive, msg);
  }

  if (!documentOptions[version]) {
    var v0 = doc.version || doc.options.version;

    var _msg2 = "Document will be parsed as YAML ".concat(v0, " rather than YAML ").concat(version);

    doc.warnings.push(new YAMLWarning(directive, _msg2));
  }

  return version;
}

function parseDirectives(doc, directives, prevDoc) {
  var directiveComments = [];
  var hasDirectives = false;

  var _iterator = _createForOfIteratorHelper(directives),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var directive = _step.value;
      var comment = directive.comment,
          name = directive.name;

      switch (name) {
        case 'TAG':
          try {
            doc.tagPrefixes.push(resolveTagDirective(doc, directive));
          } catch (error) {
            doc.errors.push(error);
          }

          hasDirectives = true;
          break;

        case 'YAML':
        case 'YAML:1.0':
          if (doc.version) {
            var msg = 'The %YAML directive must only be given at most once per document.';
            doc.errors.push(new YAMLSemanticError(directive, msg));
          }

          try {
            doc.version = resolveYamlDirective(doc, directive);
          } catch (error) {
            doc.errors.push(error);
          }

          hasDirectives = true;
          break;

        default:
          if (name) {
            var _msg3 = "YAML only supports %TAG and %YAML directives, and not %".concat(name);

            doc.warnings.push(new YAMLWarning(directive, _msg3));
          }

      }

      if (comment) directiveComments.push(comment);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (prevDoc && !hasDirectives && '1.1' === (doc.version || prevDoc.version || doc.options.version)) {
    var copyTagPrefix = function copyTagPrefix(_ref2) {
      var handle = _ref2.handle,
          prefix = _ref2.prefix;
      return {
        handle: handle,
        prefix: prefix
      };
    };

    doc.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
    doc.version = prevDoc.version;
  }

  doc.commentBefore = directiveComments.join('\n') || null;
}

function assertCollection(contents) {
  if (contents instanceof resolveSeq_492ab440_Collection) return true;
  throw new Error('Expected a YAML collection as document contents');
}

var Document$1 = /*#__PURE__*/function () {
  function Document(options) {
    _classCallCheck(this, Document);

    this.anchors = new Anchors(options.anchorPrefix);
    this.commentBefore = null;
    this.comment = null;
    this.contents = null;
    this.directivesEndMarker = null;
    this.errors = [];
    this.options = options;
    this.schema = null;
    this.tagPrefixes = [];
    this.version = null;
    this.warnings = [];
  }

  _createClass(Document, [{
    key: "add",
    value: function add(value) {
      assertCollection(this.contents);
      return this.contents.add(value);
    }
  }, {
    key: "addIn",
    value: function addIn(path, value) {
      assertCollection(this.contents);
      this.contents.addIn(path, value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      assertCollection(this.contents);
      return this.contents.delete(key);
    }
  }, {
    key: "deleteIn",
    value: function deleteIn(path) {
      if (isEmptyPath(path)) {
        if (this.contents == null) return false;
        this.contents = null;
        return true;
      }

      assertCollection(this.contents);
      return this.contents.deleteIn(path);
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return Document.defaults[this.version] || Document.defaults[this.options.version] || {};
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      return this.contents instanceof resolveSeq_492ab440_Collection ? this.contents.get(key, keepScalar) : undefined;
    }
  }, {
    key: "getIn",
    value: function getIn(path, keepScalar) {
      if (isEmptyPath(path)) return !keepScalar && this.contents instanceof Scalar ? this.contents.value : this.contents;
      return this.contents instanceof resolveSeq_492ab440_Collection ? this.contents.getIn(path, keepScalar) : undefined;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.contents instanceof resolveSeq_492ab440_Collection ? this.contents.has(key) : false;
    }
  }, {
    key: "hasIn",
    value: function hasIn(path) {
      if (isEmptyPath(path)) return this.contents !== undefined;
      return this.contents instanceof resolveSeq_492ab440_Collection ? this.contents.hasIn(path) : false;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      assertCollection(this.contents);
      this.contents.set(key, value);
    }
  }, {
    key: "setIn",
    value: function setIn(path, value) {
      if (isEmptyPath(path)) this.contents = value;else {
        assertCollection(this.contents);
        this.contents.setIn(path, value);
      }
    }
  }, {
    key: "setSchema",
    value: function setSchema(id, customTags) {
      if (!id && !customTags && this.schema) return;
      if (typeof id === 'number') id = id.toFixed(1);

      if (id === '1.0' || id === '1.1' || id === '1.2') {
        if (this.version) this.version = id;else this.options.version = id;
        delete this.options.schema;
      } else if (id && typeof id === 'string') {
        this.options.schema = id;
      }

      if (Array.isArray(customTags)) this.options.customTags = customTags;
      var opt = Object.assign({}, this.getDefaults(), this.options);
      this.schema = new Schema(opt);
    }
  }, {
    key: "parse",
    value: function parse(node, prevDoc) {
      if (this.options.keepCstNodes) this.cstNode = node;
      if (this.options.keepNodeTypes) this.type = 'DOCUMENT';
      var _node$directives = node.directives,
          directives = _node$directives === void 0 ? [] : _node$directives,
          _node$contents = node.contents,
          contents = _node$contents === void 0 ? [] : _node$contents,
          directivesEndMarker = node.directivesEndMarker,
          error = node.error,
          valueRange = node.valueRange;

      if (error) {
        if (!error.source) error.source = this;
        this.errors.push(error);
      }

      parseDirectives(this, directives, prevDoc);
      if (directivesEndMarker) this.directivesEndMarker = true;
      this.range = valueRange ? [valueRange.start, valueRange.end] : null;
      this.setSchema();
      this.anchors._cstAliases = [];
      parseContents(this, contents);
      this.anchors.resolveNodes();

      if (this.options.prettyErrors) {
        var _iterator = _createForOfIteratorHelper(this.errors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _error = _step.value;
            if (_error instanceof YAMLError) _error.makePretty();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(this.warnings),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var warn = _step2.value;
            if (warn instanceof YAMLError) warn.makePretty();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this;
    }
  }, {
    key: "listNonDefaultTags",
    value: function listNonDefaultTags() {
      return listTagNames(this.contents).filter(function (t) {
        return t.indexOf(Schema.defaultPrefix) !== 0;
      });
    }
  }, {
    key: "setTagPrefix",
    value: function setTagPrefix(handle, prefix) {
      if (handle[0] !== '!' || handle[handle.length - 1] !== '!') throw new Error('Handle must start and end with !');

      if (prefix) {
        var prev = this.tagPrefixes.find(function (p) {
          return p.handle === handle;
        });
        if (prev) prev.prefix = prefix;else this.tagPrefixes.push({
          handle: handle,
          prefix: prefix
        });
      } else {
        this.tagPrefixes = this.tagPrefixes.filter(function (p) {
          return p.handle !== handle;
        });
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON$1(arg, onAnchor) {
      var _this = this;

      var _this$options = this.options,
          keepBlobsInJSON = _this$options.keepBlobsInJSON,
          mapAsMap = _this$options.mapAsMap,
          maxAliasCount = _this$options.maxAliasCount;
      var keep = keepBlobsInJSON && (typeof arg !== 'string' || !(this.contents instanceof Scalar));
      var ctx = {
        doc: this,
        indentStep: '  ',
        keep: keep,
        mapAsMap: keep && !!mapAsMap,
        maxAliasCount: maxAliasCount,
        stringify: stringify$1 // Requiring directly in Pair would create circular dependencies

      };
      var anchorNames = Object.keys(this.anchors.map);
      if (anchorNames.length > 0) ctx.anchors = new Map(anchorNames.map(function (name) {
        return [_this.anchors.map[name], {
          alias: [],
          aliasCount: 0,
          count: 1
        }];
      }));

      var res = toJSON(this.contents, arg, ctx);

      if (typeof onAnchor === 'function' && ctx.anchors) {
        var _iterator3 = _createForOfIteratorHelper(ctx.anchors.values()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _step3.value,
                count = _step3$value.count,
                _res = _step3$value.res;
            onAnchor(_res, count);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      return res;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
      var indentSize = this.options.indent;

      if (!Number.isInteger(indentSize) || indentSize <= 0) {
        var s = JSON.stringify(indentSize);
        throw new Error("\"indent\" option must be a positive integer, not ".concat(s));
      }

      this.setSchema();
      var lines = [];
      var hasDirectives = false;

      if (this.version) {
        var vd = '%YAML 1.2';

        if (this.schema.name === 'yaml-1.1') {
          if (this.version === '1.0') vd = '%YAML:1.0';else if (this.version === '1.1') vd = '%YAML 1.1';
        }

        lines.push(vd);
        hasDirectives = true;
      }

      var tagNames = this.listNonDefaultTags();
      this.tagPrefixes.forEach(function (_ref) {
        var handle = _ref.handle,
            prefix = _ref.prefix;

        if (tagNames.some(function (t) {
          return t.indexOf(prefix) === 0;
        })) {
          lines.push("%TAG ".concat(handle, " ").concat(prefix));
          hasDirectives = true;
        }
      });
      if (hasDirectives || this.directivesEndMarker) lines.push('---');

      if (this.commentBefore) {
        if (hasDirectives || !this.directivesEndMarker) lines.unshift('');
        lines.unshift(this.commentBefore.replace(/^/gm, '#'));
      }

      var ctx = {
        anchors: Object.create(null),
        doc: this,
        indent: '',
        indentStep: ' '.repeat(indentSize),
        stringify: stringify$1 // Requiring directly in nodes would create circular dependencies

      };
      var chompKeep = false;
      var contentComment = null;

      if (this.contents) {
        if (this.contents instanceof resolveSeq_492ab440_Node) {
          if (this.contents.spaceBefore && (hasDirectives || this.directivesEndMarker)) lines.push('');
          if (this.contents.commentBefore) lines.push(this.contents.commentBefore.replace(/^/gm, '#')); // top-level block scalars need to be indented if followed by a comment

          ctx.forceBlockIndent = !!this.comment;
          contentComment = this.contents.comment;
        }

        var onChompKeep = contentComment ? null : function () {
          return chompKeep = true;
        };
        var body = stringify$1(this.contents, ctx, function () {
          return contentComment = null;
        }, onChompKeep);
        lines.push(addComment(body, '', contentComment));
      } else if (this.contents !== undefined) {
        lines.push(stringify$1(this.contents, ctx));
      }

      if (this.comment) {
        if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '') lines.push('');
        lines.push(this.comment.replace(/^/gm, '#'));
      }

      return lines.join('\n') + '\n';
    }
  }]);

  return Document;
}();

_defineProperty(Document$1, "defaults", documentOptions);

function dist_createNode(value) {
  var wrapScalars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var tag = arguments.length > 2 ? arguments[2] : undefined;

  if (tag === undefined && typeof wrapScalars === 'string') {
    tag = wrapScalars;
    wrapScalars = true;
  }

  var options = Object.assign({}, Document$1.defaults[defaultOptions.version], defaultOptions);
  var schema = new Schema(options);
  return schema.createNode(value, wrapScalars, tag);
}

var dist_Document = /*#__PURE__*/function (_YAMLDocument) {
  _inherits(Document, _YAMLDocument);

  var _super = _createSuper(Document);

  function Document(options) {
    _classCallCheck(this, Document);

    return _super.call(this, Object.assign({}, defaultOptions, options));
  }

  return Document;
}(Document$1);

function parseAllDocuments(src, options) {
  var stream = [];
  var prev;

  var _iterator = _createForOfIteratorHelper(parse(src)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cstDoc = _step.value;
      var doc = new dist_Document(options);
      doc.parse(cstDoc, prev);
      stream.push(doc);
      prev = doc;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return stream;
}

function parseDocument(src, options) {
  var cst = parse(src);
  var doc = new dist_Document(options).parse(cst[0]);

  if (cst.length > 1) {
    var errMsg = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
    doc.errors.unshift(new YAMLSemanticError(cst[1], errMsg));
  }

  return doc;
}

function dist_parse(src, options) {
  var doc = parseDocument(src, options);
  doc.warnings.forEach(function (warning) {
    return warn(warning);
  });
  if (doc.errors.length > 0) throw doc.errors[0];
  return doc.toJSON();
}

function stringify(value, options) {
  var doc = new dist_Document(options);
  doc.contents = value;
  return String(doc);
}

var YAML = {
  createNode: dist_createNode,
  defaultOptions: defaultOptions,
  Document: dist_Document,
  parse: dist_parse,
  parseAllDocuments: parseAllDocuments,
  parseCST: parse,
  parseDocument: parseDocument,
  scalarOptions: scalarOptions,
  stringify: stringify
};




/***/ })

}]);
//# sourceMappingURL=699.js.map