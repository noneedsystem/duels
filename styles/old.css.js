:root{
    "ruleColorTextLight": "color:#FFFFFF",
    "ruleColorTextDark": "color:#383838",
    "textSmall": "12px",
    "textNormal": "16px",
    "textBig": "18px",
    "colorAccept": "#92C24C",
    "colorEdit": "#E4AE33",
    "colorDelete": "#EB4B4B",
    "colorLight" : "#FFFFFF",
    "colorMain" : "#D32CE6",
    "colorOrange" : "#ED6639",
    "colorDark" : "#383838",
    "colorGrey" : "#9E9E9E",
    "colorBlue" : "#39C0ED",
    "colorCom" : "#B0C3D9",
    "colorUnc" : "#5E98D9",
    "colorRare" : "#4B69FF",
    "colorMyth" : "#8847FF",
    "colorLeg" : "#D32CE6",
    "colorAnc" : "#EB4B4B",
    "colorIm" : "#E4AE33",
    "colorArc" : "#ADE55C"
}

*{padding:0;margin:0;border:none;text-decoration:none;box-sizing:border-box;}
body{padding:1px;font-family:"Arial";font-size:var(textNormal);/*background:#ffcf01;*/}
a{var(ruleColorTextLight);}
.inputs{padding:5px 10px 5px 10px;color:var(colorDark);border:solid 2px var(colorDark);border-left:none;background:var(colorLight);}
.left{float:left;}
.right{float:right;}

#toolbar{border-bottom:solid 5px var(colorDark);overflow:hidden;position:fixed;bottom:0px;width:100%;}

.list{padding:40px 5px 5px 40px;background:var(colorMain);border-right:solid 2px var(colorLight);}
.list_small{padding:10px 5px 5px 40px; margin-top:30px;}
.list:hover{background:var(colorDark);padding:60px 5px 5px 40px;margin-top:-20px;}
.textLight{var(ruleColorTextLight)}
.textSmall{font-size:var(textSmall);}
.textBig{font-size:var(textBig);text-transform:uppercase;}

.icon img{height:17px;}
.page{overflow:hidden;margin:auto;width:100%;text-align:center;border-top:solid 5px var(colorDark)}
table{font-size:var(textNormal);}
table td > div{padding:2px 5px 2px 5px;}
.tournament{float:left;padding-left:30px;/*border:solid 1px var(colorGrey);*/}
.spaced{min-width:200px;display:inline-block;}
.spaced .b-l{padding-top:5px;padding-bottom:5px;}

.b-r{border-right:solid 2px var(colorDark);}
.b-r-r{border-right:solid 2px var(colorDelete);}
.b-l{border-left:solid 2px var(colorDark);}
.b-t{border-top:solid 2px var(colorDark);}
.b-b{border-bottom:solid 2px var(colorDark);}
.b-a{border:solid 2px var(colorDark);}
.nb-r{border-right:none;}

.rare{background:var(colorRare);}
.unc{background:var(colorUnc);}
.com{background:var(colorCom);}
.key{background:var(colorIm);}

.dark{background:var(colorDark);}

.click{text-align:right;padding:2px 5px 2px 5px;overflow:hidden;}
.neutral{padding:2px 5px 2px 5px;color:var(colorDark);}
.tip{width:70px;text-align:left;font-size:var(textSmall);}
.dest{padding:8px 5px 0px 10px;}
.click:hover{background:var(colorDark)}
.note{display:none;position:absolute;border-radius:2px;margin-left:20px;margin-top:-17px;padding:3px;font-size:11px;background:var(colorDark);}

.players{padding:0px; padding-right:2px}
.players img{width:35px; border:solid 2px var(colorDark);padding:0px;margin:0px;}

.duel{padding:0px;padding-right:3px;}
.img{border:solid 2px var(colorDark);width:35px;}
.first{margin-right:2px;}
.duel div{text-align:center;padding:2px}
.win{width:40px;border:solid 2px var(colorDark);border-top:2px solid var(colorAccept);}
.lose{width:25px;border:solid 2px var(colorDark);border-top:solid 2px var(colorDelete);}


.accept{background:var(colorAccept);}
.edit{background:var(colorEdit);}
.delete{background:var(colorDelete);}