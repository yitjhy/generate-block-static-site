"use strict";(self.webpackChunkblock_static_site=self.webpackChunkblock_static_site||[]).push([[238],{4624:function(e,n,s){s.r(n),s.d(n,{default:function(){return C}});var o,i,r,p,a=s(7363),A=s(8723),t=s(8795),l=s(4025),g=s(168),d=s(2982),T=s(885),x=s(3115),c=s(6417),w=function(e){var n=e.items,s=e.onChange,o=e.defaultTab,i=(0,a.useState)(o?[o]:[n[0].key]),r=(0,T.Z)(i,2),p=r[0],A=r[1],t=(0,a.useState)(o||n[0].key),l=(0,T.Z)(t,2),g=l[0],x=l[1],w=(0,a.useState)(0),G=(0,T.Z)(w,2),u=G[0],J=G[1],C=(0,a.useState)(0),v=(0,T.Z)(C,2),O=v[0],k=v[1],Y=n.map((function(e){return{key:e.key,label:e.label}}));return(0,a.useEffect)((function(){!o&&function(){var e,s=null===(e=n[0])||void 0===e?void 0:e.key;x(s)}()}),[n]),(0,a.useEffect)((function(){o&&(x(o),A([].concat((0,d.Z)(p),[o])))}),[o]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(h,{children:[(0,c.jsx)(Z,{children:Y.map((function(e){return(0,c.jsx)(R,{isChecked:e.key===g,ref:function(n){g===e.key&&setTimeout((function(){var e=null===n||void 0===n?void 0:n.offsetWidth,s=null===n||void 0===n?void 0:n.offsetLeft;e&&(k(e),J(s))}),100)},onClick:function(n){!function(e,n){A([].concat((0,d.Z)(p),[e.key])),J(n.target.offsetLeft),k(n.target.offsetWidth),x(e.key),s&&s(e)}(e,n)},children:e.label},e.key)}))}),(0,c.jsx)(B,{left:u,width:O}),p.length>0&&n.map((function(e){return(0,c.jsx)(c.Fragment,{children:p.includes(e.key)&&(0,c.jsx)("div",{style:{display:e.key===g?"block":"none"},children:e.children},e.key)})}))]})})},h=x.ZP.div(o||(o=(0,g.Z)(["\n  width: 100%;\n"]))),Z=x.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  position: relative;\n"]))),R=x.ZP.div(r||(r=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  text-transform: capitalize;\n  color: ",";\n  margin-right: 52px;\n  cursor: pointer;\n  transition: all linear 0.15s;\n  user-select: none;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  &:hover {\n    color: #1677ff;\n  }\n"])),(function(e){return e.isChecked?"#1677ff":"#252525"})),B=x.ZP.div(p||(p=(0,g.Z)(["\n  width: 100%;\n  height: 1px;\n  background: #1677ff;\n  position: relative;\n  margin-top: 10px;\n  &::after {\n    content: '';\n    position: absolute;\n    width: ",";\n    height: 2px;\n    background: #73d37b;\n    left: ",";\n    top: 0;\n    transition: all linear 0.15s;\n  }\n"])),(function(e){return e.width+"px"}),(function(e){return e.left+"px"})),G=(0,a.memo)(w),u=function(){var e=[{key:"categories",label:"Top Categories",children:(0,c.jsxs)("div",{style:{padding:"10px 5px"},children:[(0,c.jsx)("div",{children:"Top Categories Top Categories Top Categories"}),(0,c.jsx)("div",{children:"Top Categories Top Categories Top Categories"}),(0,c.jsx)("div",{children:"Top Categories Top Categories Top Categories"}),(0,c.jsx)("div",{children:"Top Categories Top Categories Top Categories"}),(0,c.jsx)("div",{children:"Top Categories Top Categories Top Categories"})]})},{key:"sales",label:"Top Sales",children:(0,c.jsxs)("div",{style:{padding:"10px 5px"},children:[(0,c.jsx)("div",{children:"Top Sales Top Sales Top Sales Top Sales Top Sales"}),(0,c.jsx)("div",{children:"Top Sales Top Sales Top Sales Top Sales Top Sales"}),(0,c.jsx)("div",{children:"Top Sales Top Sales Top Sales Top Sales Top Sales"}),(0,c.jsx)("div",{children:"Top Sales Top Sales Top Sales Top Sales Top Sales"}),(0,c.jsx)("div",{children:"Top Sales Top Sales Top Sales Top Sales Top Sales"})]})},{key:"owners",label:"Top Owners",children:(0,c.jsxs)("div",{style:{padding:"10px 5px"},children:[(0,c.jsx)("div",{children:"Top Owners Top Owners Top Owners Top Owners Top Owners"}),(0,c.jsx)("div",{children:"Top Owners Top Owners Top Owners Top Owners Top Owners"}),(0,c.jsx)("div",{children:"Top Owners Top Owners Top Owners Top Owners Top Owners"}),(0,c.jsx)("div",{children:"Top Owners Top Owners Top Owners Top Owners Top Owners"}),(0,c.jsx)("div",{children:"Top Owners Top Owners Top Owners Top Owners Top Owners"})]})},{key:"gainers",label:"Top Gainers",children:(0,c.jsxs)("div",{style:{padding:"10px 5px"},children:[(0,c.jsx)("div",{children:"Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers"}),(0,c.jsx)("div",{children:"Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers"}),(0,c.jsx)("div",{children:"Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers"}),(0,c.jsx)("div",{children:"Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers"}),(0,c.jsx)("div",{children:"Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers"})]})}];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(G,{items:e,onChange:function(e){console.log(e)}})})},J=(0,A.marked)("\n# Tabs \u6807\u7b7e\u9875\n\u9009\u9879\u5361\u5207\u6362\u7ec4\u4ef6\u3002\n\n## \u4f55\u65f6\u4f7f\u7528\n\u63d0\u4f9b\u5e73\u7ea7\u7684\u533a\u57df\u5c06\u5927\u5757\u5185\u5bb9\u8fdb\u884c\u6536\u7eb3\u548c\u5c55\u73b0\uff0c\u4fdd\u6301\u754c\u9762\u6574\u6d01\u3002\n  \n## \u5176\u4ed6\n- \u547d\u4ee4\u5f0f\u751f\u6210:  `generateblock tabs`\n\n- [\u4ee3\u7801\u5730\u5740](https://github.com/yitjhy/generate-block-static-site/tree/master/docs/tabs)\n  ",{renderer:new A.marked.Renderer,gfm:!0,breaks:!1});J=J.replace(/<a([^>]+?)>([^<]+?)<\/a>/g,'<a $1 target="_blank">$2</a>');var C=function(){return(0,c.jsxs)("div",{className:"template",children:[(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:J}}),(0,c.jsx)("h2",{children:"\u4ee3\u7801\u6f14\u793a"}),(0,c.jsx)(t.Z,{codeSandBoxParameter:"N4IgZglgNgpgziAXKCA7AJjAHgOgC5xZKgDGA9qnjJUiBALYAOZATngAQBKMAhiR2BZl67AOQte_UQG4AOqgbM27YOxISeVTmTIcAvu0HCxG_gFp0wgPQkoEanhnzFrDgBEY9MoaEjROK0wvJ1R5dV4tHTwACksSAFd6BxwAcxg8AFFYJMoAIQBPAEl0aPEo0QBKCpwJDBgWaIAeDy92KwA-CukQABo6OFy0HhZ8pDwWeJg9PrRMXAALPHooYhBySgdaRoBCNwB5AGEAFQBNAAUM9kXl9vlG66h2KB5UFIBeWRBqT9vUdnZ7rx0L9_v9Gkk8Dw1PNhnB0h8QPE8GAzAAOH7yUEAiFQ1A8JIIgBu9gA7ko8J81BQqJQESSIOg8PM3phiSQYGZ6Yz5j12GgIHgIDwoGY4CRhTA3gBGXlweYsNAAazMeDIZkgeDeqDIGL-oPB6Vx-MlnyZng55CgrEp6xpms-AGIAAwu126sFWeZAkEAgBGZHQ-R9YPQEEJfPQCKEukpcDw-VgCMYPHQodeiHYACYACyMLCUjqYgFWf2B36NT1LKDtXr9QZ4kZjCZTPrJkiKnhpHAAKzgFFWts2yBAgrwsFoRx4vrg7EA4BaAP29AK4ZtcwjGomFQJHsCGHAAF42u4FZTHhaFLUTgnThMwA2Wv7_KH4-SPAWYRni9XqVO2snj-Xy9fxfN96H_K8fz6OMExgdAzHIJgKAcHcQAAVhwABmHA7z6B8nyg2BYPg5hUCQ2g0Kla9sJARghEYFVH3gWhnioOMQD0di-iIxDKCPSFp3wQgB2pIc6AQ5R8JgnxjFECTCOEYikNEZwxI4bg-DwXlVHiOEAGVISoXltJgDIwDAGB-F5AAxA5eSSVoDCMPwTyU0ISKwck-Q2FgwD4GB2EnadCioegzlomdgCLRUYHyDM1P4HAAGloqLZ5fRgKBYpfHA4rwAA5AM_IAH3YOMFVeIsSHmaB0FqTL1Oyl98swdhitKtAUnkPR5HkbAPIPPy-LgAAJIF6lCshGBnN52D2egBUaAK4CCzxxsm3lREq6ralEX5nC8nz2X8qc4FW8KiwFTw4AzRblpCsKAG0AF0i0wHz4igPAAoAfgzNrXha9hUESNKWCLCgDhhV4YB-9hokJYUM0GkaUzGsKKnYN52nYQkyAZTrus3Cg4yO6cM2shbjtOrHpuiVQLvoOBeXByG0l5V6eHez6p3YPR0cxlQKqJjh7phdBuDqFgArOF4YFldIhpTcXMElqdpZIx6MfYIy9M0GBGmiP6UgBoH6BBionvaaIi3-dnOYC9gvvYe7bY-gKNYze76bge6nUenAovyZ69QqQXUGJ-7KvMqL0GKOW8AhqOYOKDXpu1_S9cN43gfqS2Xa530WuKr2fb9gOQ71dZw7IUy4TwAAZGAwA0kr0j2Gv0gbpuU613T0-iJ1y_-SvhersBa4AdQZJk47bsf0kn7lu7T3X-_L0PiaR0aWDcTQeER47keV06ns1r2cHoHhGGiaJ6b5rGIr1f4JDweIWD-VQA4zen_ei3lUvSr-wUcD_0eF1PUvMCZDyFuwNIeAPBvQ-gAQX4GGGASV8ia2iHfAWj8qRhw4OpVB6DT7BW9r7L6P98jWxbvHL07Yk4lEIYSNB0VB6gmfq_P4TCWFUPAZAvBxNIboFgAcOw7ZMHoF3vvach9UYTUZuwGAdV4oAFkyBGQyMwygjQhpHBUXXNwYYsjmkoJ0DG99qG1wVmLdc9QpYy2iPdHAzjRZKzsarGWbNd6UMemw_4tdZ6107jEaIMB8DDFgewHgM5dH6MMYSYxOQ8DVFHkExuyTLGt3bngBeTJr5hMhCwSJ0T2CxIMUY7IDgUnZNyfMPxNCE70JjiUSRkJKH1OZi8NI7AABkPT2CdKhrEXebCwFFg0aZcyITsEPyxNsPO9s-kwPSPAjmSCUHMPQVgos0wnZe18eMuEJkzL8GvjM6hEAwCwwWVOdGsysQNLodHYosRG5rPzvU_x8tFa2JVr6NWMBHHOJwK4359iSJszeXbKcBzcFgP-Ls52ULXYwrYRwt-sNqGNGDPqRaBxhKUHHiwS-a4WA4qxBTacRKSU52oQ8lQm8Ubb28RfK-N9grnNwfSp-6ROGYq5dysEN1gp0sFaCCAcBGnRzeMAb-AcMZvGmpHJpxR4VivpQHGVcropqvVViCQYAZXRG1JgTleruWXNhsq556AFXTW1fkO5orzVfM-gwGA6jpnmJwS6sVw8Bk1KnvMTBJq_IlLKfExJVSKGpPnkG51vqBEcFjfXdJIaCpRJiXo8pCTKmUAqDG7JwSE2-stdEFNtSnUCsTaCAJgbuTlvrUyT5Nba1ZLnqmpujaO3BJbTW3VrbdnfgHiWsVA7zXsVHfS8GYjFRGpgGa1tQiRGzvZZ4XkC6p0PMndW7l5K9WyqASA8dYqKzCs8Pu-lfbQS8xPR6Ra1LGCksvQCOuaA_KwCbjKlNwSDBciZN-pt8wDCFl3cAUFEtwVhNgK8Jk7AsZOl6T00dZ9WXX1vt6-56r0V_Ctru-l2Kt1YnAz8yDHiSI4DQLYeImA4BrvoO0pD_LW0AlDOGTVh7PCUIMBJGVqhQxwEYM8GKfIgHysVUqp5DCHZiF9Fadsoh2AZlENqEiin2IvvNZxhjm0oA1WoHevVFY2Oae5RUQzBHQO-qsFYVjYZ2AcYdTx-MiZgD8YlUJngImHV2uhInZpMnRBybIAppTYhVMwHU3oUzWIbOgm0zgXT-nUAWYeXF4zYYYvsGvQi8zoqz3HXxRsQlxKn20twRWH05cxmE3wSTSVBKcmldJZrWSOA2MAAMiz_vmBmYdABSOQqAuuuX9Q-5r9RWsuZgu1sMI2bYeeExmMAsAsBDf-MwOAAoIAUAzBIZiqChsjbCNA89IhpptbY40OmkqpPoAzP6MgsAXg83aPNww1JRTTYzNqFgF8oDrY-5QTkMAIApEWBmbMLpAdgE-1tgAXko9gUobx5kB3YEiZgvRg4h1mJ0aOixUCwK-cYLw4Cw7-xmcUjABTCggIjwHlpWAZgACTAFpnyW7_mebYJvlzppgWHQo4AOzC9Mop5TDpMwoWl9LyoehAcXyKWgMwCpwd4AzDLgnFdX59hYBmZgaAqAsEB6TsO23dtRKgI8DHvAWDsC_ChOAgOjIsFFOlKZP3EKA-TKmdqGZEOom1wtwTS3DCrcB3TlIqAzBeypw4eogOemIHmGQZh9usNUitPr9gQubyi9MoDsBx3avEzfSRKb0F0CzcJNdp46SfvZxN-wHrjfTaTei-91vyOXSDaLNj9XfXg_sF9HwRUKQhDxAwBmPPBewA-7IFtwUlv9uaEO0WJXKQVeqkYH1_Ha2izJ8QDwJuk3M-DkoMpkIWJNsW9QBmY6T2kQwEB_8bvbOOc9Z596r_ABqMQeYogCu1CA-uOmYw-_wo-7YE-6i0-uewu6E6A6Ewuvor-9eTcrO7Oqgn6-g2COB7A_-oggBwBuCO-AeaBZuS-O29-VuNu76wwDuOAUoTuRe8gJevUrg7Aec7AdkZA0Qi05ctYEq9YwwowiAPkUAcI0wIAQQZAAkRAw4F-p4iAokHki0mk9Wt0p0PMUkfgAQXEJEPEVgg0Lk_qLQ3gNMi6_qg0O8kI10x0WhD03c901Cme_wn8Yg4oVAKQrA24ogPQoqICymRwE07ABwusPhCo8A_hoqSWtUzG3KjQbGJU02fG7AvuaYKQym34eY7AKEgBPM0Wo6SRmWIRjAYRERvh8A_koR4R3hVRM4ZRFR9RURcAGWhIpmJRHRTRdRMAkR24NR5RvR_R1RPRlRrR7RnRJmYxLRAxMxfRDRgxzRCxExgQmWxR0xtR4xcxWxsxoxuxKx24kxGxpRBxIxjRZxix8x5xxxu6txV6ARcKjxxGoqHhMkEocAMRAqQRYgTROkHxXx9KcR1AGYeGgqXRKR0EaRGR_uYgORWAeRBRGmJx3RoR_xsAFx5R6J-xWJHxSx2JmJ7ABJ9xp6mxuJGJ-JeJfxVJaJNJ5J8AJJ4JZJRJdJLJFJ1J7JtJnJ9JbRaxHRKJ7QHJOJbJwpBJlJ3JIpvJJmApQphJYpsp4popHxjJDyKp_wFQzxN6mp_wbhDm0UymZAJIJELAnx2poIPxogTRewRp9QppsRVUem8RYJiRyRvGbm6RKYmR2R--iJWAUWUxpx5R1pxphJwZtpSxYZJpEZNpUZVpMZUp6x-GdmqJQZ8Z0ZIZ6Z4ZcZGZ2ZtpapqpzJkZoZaZuZsZoRRZmZJp-ZFKhZJZ5ZdZqZOZ9ZTZjZeZfJAZKZM0DZXZLZPZWZzZ_ZrZVZ7ZCa-ZGp1C0wrhrx-pYgKQPA76JpgJDyFpTRAA4vOSGUuViMCTQc6QRq6ake6TCemHCT6fkX6YUR2YKaEeuQuYSbeb2Q-YOewE-WWeUa-QmfyUmV0dee-Ruc-R-UsYBWuf-W-S-aBZ-VeSBXeUBRBbBTBdBY-RBdWfqMycBTeXBYhQBZhRhXeShSGIGeBQhbhUhcRX-WRURSGShWOWaZOXqEHDyi_BinuQCPupSnAAmnFjcr6G8BtNsdEQml7DKjYbvIZoMmkEaq0jwIuoKpXE9tBmQCkMMpCNejuvSlZvqBpdVj1O5JwdweYfIEIQMEMI2IgOMJMOxHoEAA",allCodes:l.eA,blockName:"tabs",children:(0,c.jsx)(u,{})})]})}}}]);