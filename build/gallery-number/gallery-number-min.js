YUI.add("gallery-number",function(A){YUI.add("gallery-number",function(E){var B=E.Lang,C=B.isNumber,D=Number.NaN,F=[3,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199];E.Number={degrees:function(G){return C(G)?G*180/Math.PI:D;},format:function(I,P){if(!C(I)){return"";}if(!B.isString(P)){P="0,0.00";}var H=-1<P.indexOf(","),G=P.replace(/[^0-9\u2013\-\.]/g,"").split(".");if(1<G.length){I=I.toFixed(G[1].length);}else{if(2<G.length){throw ("NumberFormatException: invalid format, formats should have no more than 1 period: "+P);}else{I=I.toFixed(0);}}var Q=I.toString();if(H){G=Q.split(".");var M=G[0],J=[],K=M.length,O=Math.floor(K/3),N=(M.length%3)||3;for(var L=0;L<K;L+=N){if(0!==L){N=3;}J[J.length]=M.substr(L,N);O-=1;}Q=J.join(",");if(G[1]){Q+="."+G[1];}}return P.replace(/[\d,\.]+/,Q);},getPrecision:function(H){if(!C(H)){return D;}var G=(""+Math.abs(H)).split(".");return 1===G.length?0:G[1].length;},isBetween:function(J,I,H,G){if(!(C(J)&&C(I)&&C(H))){return false;}return G?((I<=J&&H>=J)||(H<=J&&I>=J)):((I<J&&H>J)||(H<J&&I>J));},isEven:function(G){return C(G)?0===G%2:D;},isNotBetween:function(J,I,H,G){return(C(J)&&C(I)&&C(H))&&!E.Number.isBetween(J,I,H,G);},isOdd:function(G){return C(G)?0!==G%2:D;},isPrime:function(L){if(C(L)){if(2===L||5===L){return true;}if(L%2){var K,I,J,H,G;if(200>L){return -1<E.Array.indexOf(F,L);}J=Math.sqrt(L);for(H=0,G=F.length;H<G;H+=1){I=F[H];K=L/I;if(K===Math.round(K)){return false;}if(I>J){return true;}}return true;}}return false;},radians:function(G){return C(G)?G*Math.PI/180:D;},random:function(H,J){if(!C(H)){return D;}if(J===H){return J;}if(!J){J=0;}var G=(J<H)?H:J,I=J===G?H:J;return I+Math.floor(Math.random()*(G-I)+1);},roundToDigit:function(H,G){if(!(C(H)||C(G))){return D;}var I=0>H,P=(""+Math.abs(H)).split("."),N=P[0],L=P[1]?P[1]:"",K=(""+G).length-1,O=N.length,M,J;for(M=O;M<K;M+=1){N="0"+N;}J=parseFloat(N.substr(0,O-K)+"."+N.substr(O-K)+L);J=Math.round(J);if(I){J*=-1;}return 0===K?J:J*Math.pow(10,K);}};},"3.0.0");},"gallery-2010.03.10-18");