!function(){var a=window.Base={},b=/\s+/,c=Array.prototype.slice;a.Event={on:function(a,c,d){var e,f,g,h,i;if(!c)return this;for(a=a.split(b),e=this._callbacks||(this._callbacks={});f=a.shift();)i=e[f],g=i?i.tail:{},g.next=h={},g.context=d,g.callback=c,e[f]={tail:h,next:i?i.next:g};return this},fire:function(a){var d,e,f,g,h,i,j,k;if(!(f=this._callbacks))return this;for(i=f.all,a=a.split(b),j=c.call(arguments,1);d=a.shift();){if(e=f[d])for(g=e.tail;(e=e.next)!==g&&(k=e.callback.apply(e.context||this,j))!==!1;);if(e=i)for(g=e.tail,h=[d].concat(j);(e=e.next)!==g;)e.callback.apply(e.context||this,h)}return k},off:function(a){var c,d,e,f;if(!(e=this._callbacks))return this;for(a=a.split(b);c=a.shift();)(d=e[c])&&(f=d.tail,d.next=f)},offAll:function(){this._callbacks={}}}}();