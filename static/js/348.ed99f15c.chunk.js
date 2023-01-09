"use strict";(self.webpackChunkblock_static_site=self.webpackChunkblock_static_site||[]).push([[348],{3329:function(n,e,i){i.r(e),i.d(e,{default:function(){return v}});var t,a,r,A=i(7363),s=i(8723),o=i(1100),l=i(4025),c=i(168),g=i(3115),u=i(6417);function h(n){var e=(0,A.useRef)(null);return(0,A.useEffect)((function(){var i,t=null===(i=e.current)||void 0===i?void 0:i.parentElement;if(t){var a=function(){n.onChange(n.value===r.DEFAULT?r.DESC:n.value===r.DESC?r.ASC:r.DEFAULT)};return t.addEventListener("click",a),function(){t.removeEventListener("click",a)}}}),[n.value]),(0,u.jsxs)(Y,{ref:e,className:n.className,style:n.style,children:[(0,u.jsx)(D,{src:n.value===r.ASC?"Images.TABLE.UP_ACTIVE_SVG":"Images.TABLE.UP_SVG"}),(0,u.jsx)(D,{src:n.value===r.DESC?"Images.TABLE.DOWN_ACTIVE_SVG":"Images.TABLE.DOWN_SVG"})]})}!function(n){n[n.DEFAULT=0]="DEFAULT",n[n.DESC=1]="DESC",n[n.ASC=2]="ASC"}(r||(r={}));var C,w,m,p,x,E,d,B,f,Z,Y=g.ZP.span(t||(t=(0,c.Z)(["\n  height: 14px;\n  width: 7px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  margin-left: 4px;\n"]))),D=g.ZP.img(a||(a=(0,c.Z)(["\n  width: 7px;\n  height: 7px;\n"])));function k(n){return(0,u.jsxs)(H,{style:n.style,className:n.className,children:[(0,u.jsx)(I,{className:"table-header",gap:n.gap,children:n.columns.map((function(e){return(0,u.jsxs)(T,{className:"table-th",style:e.headStyle,width:e.width,flex:e.flex||1,clickable:e.sortable,children:[e.name," ",e.sortable&&(0,u.jsx)(h,{value:e.sort||r.DEFAULT,onChange:function(i){var t=JSON.parse(JSON.stringify(n.columns)),a=t.find((function(n){return n.name===e.name}));a&&(a.sort=i,n.updateColumns&&n.updateColumns(t))}})]},e.name)}))}),(0,u.jsx)(U,{className:"table-body",children:n.data.map((function(e,i){return(0,u.jsx)(y,{onClick:function(){return n.onRowClick&&n.onRowClick(e,i)},className:"table-row",gap:n.gap,clickable:!!n.onRowClick,children:n.columns.map((function(n){var t=n.render?n.render(e,i,n.key):n.key?e[n.key]:n.key;return[void 0,"",null].includes(t)&&(t="-"),(0,u.jsx)(N,{style:n.itemStyle,className:"table-td",flex:n.flex||1,width:n.width,align:n.align,children:t},n.name)}))},n.keyName?e[n.keyName]:i)}))})]})}var H=g.ZP.div(C||(C=(0,c.Z)(["\n  width: 100%;\n  position: relative;\n"]))),I=g.ZP.div(w||(w=(0,c.Z)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  border-radius: 5px;\n  background: #f6f6f6;\n  & > :first-child {\n    margin-left: 0;\n  }\n  & > * {\n    margin-left: ",";\n  }\n"])),(function(n){return n.gap||0})),T=g.ZP.span(m||(m=(0,c.Z)(["\n  user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  ",";\n  ",";\n  font-size: 14px;\n  color: #9f9f9f;\n  text-align: center;\n  cursor: ",";\n"])),(function(n){var e=n.width;return e?(0,g.iv)(p||(p=(0,c.Z)(["\n          width: ",";\n        "])),e):""}),(function(n){var e=n.flex;return!n.width&&e?(0,g.iv)(x||(x=(0,c.Z)(["\n          flex: ",";\n        "])),e):""}),(function(n){return n.clickable?"pointer":"inherit"})),U=g.ZP.ul(E||(E=(0,c.Z)(["\n  width: 100%;\n  position: relative;\n  padding: 0;\n"]))),y=g.ZP.li(d||(d=(0,c.Z)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  cursor: ",";\n  & > :first-child {\n    margin-left: 0;\n  }\n  & > * {\n    margin-left: ",";\n  }\n  border-radius: 5px;\n  transition: all 0.15s linear;\n  &:hover {\n    box-shadow: 0px 4px 10px rgba(114, 175, 120, 0.1);\n  }\n  border-bottom: solid 1px #e2e2e2;\n"])),(function(n){return n.clickable?"pointer":"inherit"}),(function(n){return n.gap||0})),N=g.ZP.div(B||(B=(0,c.Z)(["\n  height: 100%;\n  ",";\n  ",";\n  font-size: 14px;\n  color: #737373;\n  line-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  position: relative;\n"])),(function(n){var e=n.width;return e?(0,g.iv)(f||(f=(0,c.Z)(["\n          width: ",";\n        "])),e):""}),(function(n){var e=n.flex;return!n.width&&e?(0,g.iv)(Z||(Z=(0,c.Z)(["\n          flex: ",";\n        "])),e):""}),(function(n){var e=n.align;return"left"===e?"flex-start":"right"===e?"flex-end":"center"})),G=[{name:"Price",sortable:!1,key:"price"},{name:"USD Price",sortable:!1,key:"price_usd",render:function(n){return n.price_usd?"\xa5".concat(n.price_usd):"-"}},{name:"Expiration",sortable:!1,key:"expiration"},{name:"From",sortable:!1,key:"from"}],Q=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k,{data:[{price:23423,price_usd:123123,expiration:"2022-09-15 18:36:28",from:"\u56db\u5ddd\u7701\u6210\u90fd\u5e02"},{price:23423,price_usd:123123,expiration:"2022-09-15 18:36:28",from:"\u56db\u5ddd\u7701\u6210\u90fd\u5e02"},{price:23423,price_usd:123123,expiration:"2022-09-15 18:36:28",from:"\u56db\u5ddd\u7701\u6210\u90fd\u5e02"},{price:23423,price_usd:123123,expiration:"2022-09-15 18:36:28",from:"\u56db\u5ddd\u7701\u6210\u90fd\u5e02"}],columns:G})})},F=(0,s.marked)("\n# Table \u8868\u683c\n\u5c55\u793a\u884c\u5217\u6570\u636e\u3002\n\n## \u4f55\u65f6\u4f7f\u7528\n- \u5f53\u6709\u5927\u91cf\u7ed3\u6784\u5316\u7684\u6570\u636e\u9700\u8981\u5c55\u73b0\u65f6\uff1b\n\n- \u5f53\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u641c\u7d22\u3001\u5206\u9875\u3001\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7b49\u590d\u6742\u884c\u4e3a\u65f6\u3002\n  \n## \u5176\u4ed6\n- \u547d\u4ee4\u5f0f\u751f\u6210:  `generateblock table`\n\n- [github\u5730\u5740](https://github.com/yitjhy/generate-block-static-site/tree/master/docs/table)\n\n- [gitee\u4ee3\u7801\u5730\u5740](https://gitee.com/yitjhy/block/tree/master/docs/table)\n\n  ",{renderer:new s.marked.Renderer,gfm:!0,breaks:!1});F=F.replace(/<a([^>]+?)>([^<]+?)<\/a>/g,'<a $1 target="_blank">$2</a>');var v=function(){return(0,u.jsxs)("div",{className:"template",children:[(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:F}}),(0,u.jsx)("h2",{children:"\u4ee3\u7801\u6f14\u793a"}),(0,u.jsx)(o.Z,{codeSandBoxParameter:"N4IgZglgNgpgziAXKCA7AJjAHgOgC5xZKgDGA9qnjJUiBALYAOZATngAQBKMAhiR2BZl67AOQte_UQG4AOqgbM27YOxISeVTmTIcAvu0HCxG_gFp0wgPQkoEanhnzFrDgBEY9MoaEjROK0wvJ1R5dV4tHTwACksSAFd6BxwAcxg8AFFYJMoAIQBPAEl0aPEo0QBKCpwJDBgWaIAeDy92KwA-CukQABo6OFy0HhZ8pDwWeJg9PrRMXAALPHooYhBySgdaRoBCNwB5AGEAFQBNAAUM9kXl9vlG66h2KB5UFIBeWRBqT9vUdnZ7rx0L9_v9Gkk8Dw1PNhnB0h8QPE8GAzAAOH7yUEAiFQ1A8JIIgBu9gA7ko8J81BQqJQESSIOg8PM3phiSQYGZ6Yz5j12GgIHgIDwoGY4CRhTA3gBGXlweYsNAAazMeDIZkgeDeqDIGL-oPB6Vx-MlnyZng55CgrEp6xpms-AGIAAwu126sFWeZAkEAgBGZHQ-R9YPQEEJfPQCKEukpcDw-VgCMYPHQodeiHYACYACyMLCUjqYgFWf2B36NT1LKDtXr9QZ4kZjCZTPrJkiKnhpHAAKzgFFWts2yBAgrwsFoRx4vtg7EAFhGAHgta5hGNRMKgSPYEMOAALxldwKymPC0KWonBOnCZgBstd3-X3h8keAswhPZ4vUqdtaPb_P5-_T4vvQv4Xl-fRxgmMDoGY5BMBQDhbiAACsOAAMw4DefR3g-EGwNBsHMKgCG0ChUqXphICMEIjAqve8C0M8VBxiAeisX0BHwZQB4AMquFOsD4IQA7UkOdBwcoqgHNx3FnNR9SCvAvLxHCGRgGAMD8EpcLcGA7AGEYfhHqIzjiRwuFQT4xiiOZ-HCIRCHGaERFYOS7DUIk7C8RJRZuBkABiACCACqAAyRw9D5GTcQcEV6gF0WxXo8jYK5mBgDw8RQAI8TroKFCeXx04wNEVFkIwcAZsARaEsKkwZl5FJ6hQBwwq8MAZtEfZsPVrgVOwbztOwhJkAyRa2DwcBwAAcsaAD8GZxgqrxFuZ83sFJMlyWwm7yHofVVXq6xxuwEi6W87DKTAOmNAAEkcACyIXccmqBZOalDtNEqCZVAFRFpdqnqfw0TRH1A0qEW_xHRwMCPOdp04AkLC1Hgs04MmKNvTkjVYhAunRLD-2Q6C0NqHY7Y3S86CwCw_XsKD_WDQdWJYqV5U4M1rVpCV1FwDgNVQJM_VvOdDU4L5gWhUc7CzQVbDi1FBzsBmbN8wLQsi6LrgK9FMty3gODxUrPXyxLwVhX9epYklVugrDOApugGSEg4IUQHG1D1KUtgQO2oi8j7FNUzTlssyd6TxCwfwM-DzNh25UA1J4ZAu87rvuzSXuiIHir-2TvuKpTGAh8T_w29bRbTOwADaqv87VMAALqh-HeCR9HxONA1_EwAA6iwPCMCutOnW8wCnQY42TTNBLAHXU_TcaBjmWPdfmXowb6kcCovCkM5wCwJCr7z9eCzAwta_LRt66IhT0J28A4EcAW5CFGQ4EFZwAPoBcchQAGoZC_txf-ABxUQysxB3wfnzZ-r936f2AWA0QBhCy2zBNvIUrx96H2PmVNWDcL76x1krWWt975pFgS_N-4s9i9ymj_P-gCkHgMgeQmBT9qHv32PQlhKC2ibwrN3Iq_dB7Dx9JbG2YQKDHWEbAURQ96h0xsjgOAL0AAGRYvQQBSIsDMUpcxYDkHqLkTIMwAHY8zGKhpHLqKsRobBYNY9goY1HPHyBmMAsAjFFm7MpQUYB8gwREpQBabYOS-nSCSGA1BnHCh0agMwApPAVTUA4eozivHYAsBACQ_AIAUAzJaRIqBnH3xYCkNAZhYBgDwBmQxxjNFOVJpg3eM5zoqIYCkJp_xTHzAsVYrRMAdF6PYJYnxqAmm1ndvWYYoxEDpSgHCaYaw7KcQIFYScRVBJEGHIOGgiAxKuUktJWSZV5Kbj0pZQyT5HIuGUDZXkqgSCTSuQZMQNlglwSIlxO5pl9Y9yefrN5vgxABDkTARyyUXKuHYHuc-WzYABTsCkP451RA1McOwAAPmIdkjiIG4vECMxw8hoWuTQFQFg6V2TsERTAA4ZBBb0FQI0aW2AaToDgOwMgvpuwaTwEzIseIkgLXGGgFIQyUzcXjLANaG0znDwUnAIsyT6AysgvK05W1lVFkVDAfIa19X5DILpI4RZaiYBYGtWImgeAZnCnyOoWAMzfXoJElgvJjVGoNaaulYNBoACluIAA0cBYwcDi9gi0JVFiyVgNabqPVFj6WtGNy09TxNRWtelyKEkrUKnKjM_omW8Ccv8LqqMTaNSkc5VKMB0qZWyrlApfx6VsrclgTl3LeX8v4J9VWlUizoDtQ66ujcxpMpKak-ljLmWsqOO0cdRYUiDzTeKjN_xjUzxgD6k1ZqixWhTBKtaJbYAvDGs8aec0xVLUlXqVaGYFU6p2nqeIjAR1UDndOm1xSWUzp7t-llbKl3N0ZkNEa6AiwUG0CSA45NFQ2s_faulvJZjYFdYkD1AaIOjVQHtCGeoJBtyjvTTu9KFHD2jbKyUc8T7rzJhNRes955XuY1MTeGCe43SBEoheO6x6iEhEVMwXoUz1H4auxgeD2ZSY3qXUEdH8GIynf-nA99GAgz_agHD0QFNYjZfMfTLNjVj20zgEVUxjNYn48aQTwnYAqnmCg6zoIV7AHM2J9AGrYDl3jliPpZnVOoBwH0vz_n_jxqC_OnA8acW4qlOFiLOce7RZKaowtVn0Es04_HDzwWLNL2ABAlz2Ww75Zi5Wnu7AABkNWyNlfjl3TLrmw7q1o-Zyt8XiFmylkliLoJOa71o51Vw1acNxwG2HUmth4LoCA6gVJ8K_Xz2C9y86wa9hTXRrCYqm3tvpsqYEnmyntNwCqK1-OpNIQVPSHTWbRF5trdi7MEGWAcO4Es0Q8zlmW5TZZnjemN20h4CJo1_7wP0gZeUB01wl3_N13fZ-hla3av1cRx-zQKP51wGiA9qCC3zvw5Zv1qbrFidoP-xUUnBnNnzFy_8KopOKz0p4-JlguW2U91yAGfIjHr2zyEz3MwpZ8goIZyoOuyH1ODxBugNDzrdOua50VWDl3moIbHjHQadcYNkDgwhtH7BdeoFg_BgusQFdzGp5d0zSn2bbuNHrWItcT6O6SI3dgE0veoD597w7fUMzoawDTlmtnBcOY5EIEkpX_tSZk3zOTl2UtFTHtsbYJuzcIdD_8CXWJ7d8zOzLzTePgsTeJ7ADglr6jcDgE2-7BXq8sGJ_8WW5mm-W6dXMAOBXjV_f-5A8zxqW_O_QNXIfBrPfe5eH77lAeR9FN7wainVh2C7jgEk1FrAYDE8B9EauOU0poCgryUQedvpQCgI3HAaBbDxEwLjpvtem1VEIwP0ET_4D1_RWYRy7_a3v7EbtwNbv4YJQbg4RZ24_ZLwj4Vo0ZpYso35UDqo0Y57JZsYCbFaR4qjoCx6gGRbeIIEhZxbYoJZoH-aBYVbpZhawFe4oqoBEEOz0HkE5a0HABWAABUVgVg6-m-2oEgXBLB5Wn-deWUQh-omywIxO_e_me0aBLOPcsGEuTOCmChRUPOZYncmyPclG9QEiu0ZK64MiHAFGA8iitMHSNG6AOAoYhIPS7AfS-iLoAApM4swHAAKK2hmBIIxGGDAI0tIotiYdxrxhYdRpBNYbYY0KoFJuunenpO0PYdoronUuwEhE6IMnqK4owO4p4t4s4n4nGHjEEvsqkWonwBElEjEqUkWFmokmqqkvilSm4WQB4XlKgN4bDJoH4c4v6CwFamYAPKGMpBmEhJkf8L6HwIqCkEIIfhmA6GAFeIsYsc4vVoNAsrknGDBPMNAOgG_qCOUpUokpihmE6M4n5msewBwfsf8IcVUicewAACTADRAxGDx6Q4ZSbdZOh6DnHyBNKBHHRHDzDKJWGqIvTREOEMhMhxESrSCGDeKJpYYZL5ztg9yno6Dnp_Abz2GXQsCiiwwCqurwTOLZG5EInYAFH-LFHBIbChJpKOJxL0FJLIGNHpJOJDIkpOFOiuFFjPGvFQncgfGMzEx9IKZt6TT2EUHQn9JPHABhbOJhxSmggZhn6_F8kvGqDxq8h9LCkDTEzbC6l1YUn5jZYSlwDKlhzxoZjPHxrqmNaWlsIoKZLUiigQAABe7U7ABi4xVIVoLA8xAAnGAMGcGc4lQF2mYHUUUuyc4kjHYnKSduVLpqxgXNVmQswJShJmwmgF6AqI4NTgEUYUEXStzrzqCRETgJlPYY4d6S4S0W0V4eHL4S7G4Y7BKqcUWYCcEarvrhWXhDgHYJCbEbenCaiR2EVBiaWi8AkUkcMikaMRkRMv8GSTwB4iaVSUUYErSXaGEhUSLlUbErUcyQ0TGYyUWO4Z4YUs2d0a2WNLYqwDaS8arOXrbEAaRunqmWiUVDfJmQSjmagHmQKH_npPaf8JcRsSwFsSQDsVAHsZNuwHcccQ2qkWcZXEWJcdcQhUhdUihU-QKV8QRuDF8aQewD8X8XqH0QMUMRACMWkb6eMC8I2decKI8B-EhNynYERMMKsYgPMCnEoghf6FgKKDCJYCSKcXmOwIYnWVJRUpMdEFKAYryFKOYkhCpZmE6LyB-F0OhZRawAMf6HgKqPQAtEygyN6VJQ6DAJmDZTZUWS0nsZYZWVEaoKmqOa8PCfGkie6iiXUTmj3HmqirOZyQuXWTyc4vyW5TKXqZvGKWaWoJKa5rWc8QqcZo6aqc6RqQKdqYKUyLFQaUafVvGuKYlRaa5taXKXaYqSzBlWIFlXqGAK6R4Z6fog0pOv6fMeYqhN1d1c4lxRyMkaMukb6aueufGkyQkiySkmec0b4tSduaUfhaoHUbFfTKtZrGIJihAmQvGqKDdlihmBtSLCYCSjtWIHtauBAqqU0RJoWRea0VeR0TeYKHeZMvINMgMEMI2AssKMsn0EEGQDssJHSceIcvcj2bAECrOsFiClZAEBxD8hsvSlCpQHRHSm7HGIUMgXTHHFRL7F6UmvUBeQqOyF_MpOgJhr5c3nqClLkt0deYdnGr4B5fejbDNmtg6oBsFmypjXgNjZ4KBnTNXEWAhZZqqbJATf7MTFVkVJ4n9TALFFiMaqqfjeyNLXqNMKLcTOLWIEFNxG4OwJLerUrW5plvLUsorcTCrWIGrTAOTXALgabf8E3h1MhrptLnbQ7XsbLOogAKXPGe2k320U16DqJsK_4VCm1a16hi3GiqkZAuT03tEa1Yiy2wAW1wjO3sA22iB00Dwp3R2m1x2ipiB-S-Cp1m1sA9yZ1W22y50GSV0x0TrFnHQtDeDnTa77HXY9xuCjoY0ZwC30DjrC3EyqB20ZiZioTZhT28he0U36JT1Siz2dqMDJ1NmiCaWZiZhmBOiBlmBShITemoiICoRXiICZioh5wGSqmADbaoALu6gAgO6AAIRoAL8JgAQHoQIx357G7B2T3T0r3z2O2L2oTL2oS8j50M3PWb1Ojb27372H3H2n3n2X3X0s1iAP0v0f1f3Z3j1_1ZgAPgO_0E3e0gNgMQNJ0F0b1b07170H1H2njIMX1X28g30YNP1v2f16S4PEPsj_0z1ENAOU3elL0r2QPtGqk0PwP0NINn3MNoPCB30cPYPcNFgt0u0RykZ6a2yNCc70ouJ2pjyR592QiTxrZEFwCoKCKU7sCSLkqwppQZRZTsDt0fUzBfUNjzLjCTCsR6BAA",allCodes:l.Kz,children:(0,u.jsx)(Q,{})})]})}}}]);