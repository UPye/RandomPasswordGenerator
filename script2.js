function rando(a,b,e){function f(a){return"undefined"===typeof a}function h(a){return"number"===typeof a&&!isNaN(a)}function d(a){return!f(a)&&null!==a&&a.constructor===Array}try{if(null!==a&&null!==b&&null!==e){if(f(a))return Math.random();if(window.jQuery&&a instanceof jQuery&&f(b)){if(0==a.length)return!1;var c=rando(0,a.length-1);return{index:c,value:a.eq(c)}}if(h(a)&&h(b)&&"string"===typeof e&&"float"==e.toLowerCase().trim()){if(a>b){var k=b;b=a;a=k}return Math.random()*(b-a)+a}if(d(a)&&0<a.length&&
f(b)){var g=Math.floor(Math.random()*a.length);return{index:g,value:a[g]}}if("object"===typeof a&&f(b)){g=a;var l=Object.keys(g);if(0<l.length){var m=l[l.length*Math.random()<<0];return{key:m,value:g[m]}}}if((!0===a&&!1===b||!1===a&&!0===b)&&f(e))return.5<rando();if(h(a)&&f(b))return 0<=a?rando(0,a):rando(a,0);if(h(a)&&"string"===typeof b&&"float"==b.toLowerCase().trim()&&f(e))return 0<=a?rando(0,a,"float"):rando(a,0,"float");if(h(a)&&h(b)&&f(e))return a>b&&(k=b,b=a,a=k),a=Math.floor(a),b=Math.floor(b),
Math.floor(Math.random()*(b-a+1)+a);if("string"===typeof a&&0<a.length&&f(b))return a.charAt(rando(0,a.length-1))}return!1}catch(n){return!1}}
function randoSequence(a,b){function e(a){return"undefined"===typeof a}function f(a){return"number"===typeof a&&!isNaN(a)}function h(a){return!e(a)&&null!==a&&a.constructor===Array}try{if(e(a)||null===a||null===b)return!1;var d=[];if(window.jQuery&&a instanceof jQuery&&e(b)){if(0<a.length){d=randoSequence(0,a.length-1);for(var c=0;c<d.length;c++)d[c]={index:d[c],value:a.eq(d[c])}}return d}if(e(b))if(h(a)&&e(b))for(c=0;c<a.length;c++)d[d.length]={index:c,value:a[c]};else if("object"===typeof a&&e(b))for(var k in a)Object.prototype.hasOwnProperty.call(a,
k)&&(d[d.length]={key:k,value:a[k]});else if("string"===typeof a&&e(b))for(c=0;c<a.length;c++)d[d.length]=a.charAt(c);else return f(a)&&e(b)?0<=a?randoSequence(0,a):randoSequence(a,0):!1;else{if(!f(a)||!f(b)||0<a%1||0<b%1)return!1;if(a>b){var g=b;b=a;a=g}for(c=a;c<=b;c++)d[d.length]=c}for(c=d.length-1;0<c;c--){var l=rando(c);g=d[c];d[c]=d[l];d[l]=g}return d}catch(m){return!1}};