import NumToWords from "./numtowords";

var WordTranslations = function (curConf = null, numConf = null) {
    this.curConf = {"eur":{"name":{"lv":"euro","ru":"\u0415\u0432\u0440\u043e","en":"euro"},"hundredths":{"lv":"centi","ru":"\u0446\u0435\u043d\u0442\u043e\u0432","en":"cents"},"sex":{"ru":"he"}},"usd":{"name":{"lv":"dol\u0101rs","ru":"\u0414\u043e\u043b\u043b\u0430\u0440","en":"dollar"},"hundredths":{"lv":"centi","ru":"\u0446\u0435\u043d\u0442\u043e\u0432","en":"cents"},"sex":{"ru":"he"}},"gbp":{"name":{"lv":"Lielbrit\u0101nijas m\u0101rci\u0146a","ru":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432","en":"british pound"},"hundredths":{"lv":"peni","ru":"\u043f\u0435\u043d\u0438","en":"pence"},"sex":{"ru":"he"}},"rub":{"name":{"lv":"Krievijas rublis","ru":"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","en":"russian ruble"},"hundredths":{"lv":"kapeik\u0101s","ru":"\u043a\u043e\u043f\u0435\u0435\u043a","en":"kopeks"},"sex":{"ru":"he"}},"pln":{"name":{"lv":"Polijas zlots","ru":"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439","en":"polish zloty"},"hundredths":{"lv":"gro\u0161i","ru":"\u0433\u0440\u043e\u0448","en":"grosz"},"sex":{"ru":"he"}},"kzt":{"name":{"lv":"Kazahst\u0101nas tenge","ru":"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0442\u0435\u043d\u0433\u0435","en":"kazakhstan tenge"},"hundredths":{"lv":"tij\u012bni","ru":"\u0442\u0438\u044b\u043d","en":"t\u0131yns"},"sex":{"ru":"he"}},"chf":{"name":{"lv":"\u0160veices franks","ru":"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a","en":"swiss franc"},"hundredths":{"lv":"rapeni","ru":"\u0440\u0430\u043f\u043f\u0435\u043d\u043e\u0432","en":"rappens"},"sex":{"ru":"he"}},"aed":{"name":{"lv":"Apvienoto Ar\u0101bu Emir\u0101tu dirhams","ru":"\u0414\u0438\u0440\u0445\u0430\u043c \u041e\u0410\u042d","en":"united arab emirates dirham"},"hundredths":{"lv":"fili","ru":"\u0444\u0438\u043b\u0441","en":"fils"},"sex":{"ru":"he"}},"dkk":{"name":{"lv":"D\u0101nijas krona","ru":"\u0414\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"danish krone"},"hundredths":{"lv":"\u0113ri","ru":"\u044d\u0440\u0435","en":"ore"},"sex":{"ru":"she"}},"sek":{"name":{"lv":"Zviedrijas krona","ru":"\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"swedish krona"},"hundredths":{"lv":"\u0113ri","ru":"\u044d\u0440\u0435","en":"ore"},"sex":{"ru":"she"}},"nok":{"name":{"lv":"Norv\u0113\u0123ijas krona","ru":"\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"norwegian krone"},"hundredths":{"lv":"\u0113ri","ru":"\u044d\u0440\u0435","en":"ore"},"sex":{"ru":"she"}},"bgn":{"name":{"lv":"Bulg\u0101rijas leva","ru":"\u0411\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043b\u0435\u0432","en":"bulgarian lev"},"sex":{"ru":"he"}},"huf":{"name":{"lv":"Ung\u0101rijas forints","ru":"\u0432\u0435\u043d\u0433\u0435\u0440\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u0438\u043d\u0442","en":"hungarian forint"},"sex":{"ru":"he"}},"try":{"name":{"lv":"Turcijas lira","ru":"\u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043b\u0438\u0440\u0430","en":"turkish lira"},"sex":{"ru":"she"}},"all":{"name":{"lv":"Alb\u0101nijas leks","ru":"\u0410\u043b\u0431\u0430\u043d\u0441\u043a\u0438\u0439 \u043b\u0435\u043a","en":"albanian lek"},"sex":{"ru":"he"}},"hrk":{"name":{"lv":"Horv\u0101tijas kuna","ru":"X\u043e\u0440\u0432\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0443\u043d\u0430","en":"croatian kuna"},"sex":{"ru":"she"}},"czk":{"name":{"lv":"\u010cehijas krona","ru":"\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"czech koruna"},"sex":{"ru":"she"}},"gel":{"name":{"lv":"Gruzijas lari","ru":"\u0413\u0440\u0443\u0437\u0438\u043d\u0441\u043a\u0438\u0439 \u043b\u0430\u0440\u0438","en":"georgian lari"},"sex":{"ru":"he"}},"lkr":{"name":{"lv":"\u0160rilankas r\u016bpija","ru":"\u0428\u0440\u0438-\u043b\u0430\u043d\u043a\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"sri lankan rupee"},"sex":{"ru":"she"}},"tnd":{"name":{"lv":"Tunisijas din\u0101rs","ru":"\u0422\u0443\u043d\u0438\u0441\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"tunisian dinar"},"sex":{"ru":"he"}},"ils":{"name":{"lv":"Izra\u0113las \u0161ekels","ru":"\u0418\u0437\u0440\u0430\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0435\u043a\u0435\u043b\u044c","en":"israeli sheqel"},"sex":{"ru":"he"}},"jod":{"name":{"lv":"Jord\u0101nijas din\u0101rs","ru":"\u0418\u043e\u0440\u0434\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"jordanian dinar"},"sex":{"ru":"he"}},"byn":{"name":{"lv":"Baltkrievijas rublis","ru":"\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","en":"belarusian new ruble"},"sex":{"ru":"he"}},"egp":{"name":{"lv":"\u0112\u0123iptes m\u0101rci\u0146a","ru":"\u0415\u0433\u0438\u043f\u0435\u0442\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442","en":"egyptian pound"},"sex":{"ru":"he"}},"uah":{"name":{"lv":"Ukrainas grivna","ru":"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0430\u044f \u0433\u0440\u0438\u0432\u043d\u0430","en":"ukrainian hryvnia"},"sex":{"ru":"she"}},"cny":{"name":{"lv":"\u0136\u012bnas jua\u0146a","ru":"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044e\u0430\u043d\u044c","en":"chinese yuan"},"sex":{"ru":"he"}},"thb":{"name":{"lv":"Taizemes bats","ru":"\u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0431\u0430\u0442","en":"thai baht"},"sex":{"ru":"he"}},"vnd":{"name":{"lv":"Vjetnamas dongs","ru":"\u0412\u044c\u0435\u0442\u043d\u0430\u043c\u0441\u043a\u0438\u0439 \u0434\u043e\u043d\u0433","en":"vietnamese dong"},"sex":{"ru":"he"}},"php":{"name":{"lv":"Filip\u012bnu peso","ru":"\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"philippine peso"},"sex":{"ru":"he"}},"mad":{"name":{"lv":"Marokas dirhams","ru":"\u041c\u0430\u0440\u043e\u043a\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u0440\u0445\u0430\u043c","en":"moroccan dirham"},"sex":{"ru":"he"}},"aud":{"name":{"lv":"Austr\u0101lijas dol\u0101rs","ru":"\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"australian dollar"},"sex":{"ru":"he"}},"ars":{"name":{"lv":"Argent\u012bnas peso","ru":"\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"argentine peso"},"sex":{"ru":"he"}},"jpy":{"name":{"lv":"Jap\u0101nas j\u0113na","ru":"\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430","en":"japanese yen"},"sex":{"ru":"she"}},"idr":{"name":{"lv":"Indon\u0113zijas r\u016bpija","ru":"\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"indonesian rupiah"},"sex":{"ru":"she"}},"isk":{"name":{"lv":"Islandes krona","ru":"\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"iceland krona"},"sex":{"ru":"she"}},"amd":{"name":{"lv":"Arm\u0113nijas drams","ru":"\u0410\u0440\u043c\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0440\u0430\u043c","en":"armenian dram"},"sex":{"ru":"he"}},"ron":{"name":{"lv":"Rum\u0101nijas leja","ru":"\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0430\u044f \u043b\u0435\u044f","en":"romanian leu"},"sex":{"ru":"she"}},"sgd":{"name":{"lv":"Singap\u016bras dol\u0101rs","ru":"\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"singapore dollar"},"sex":{"ru":"he"}},"sbp":{"name":{"lv":"Skotijas m\u0101rci\u0146a","ru":"\u0428\u043e\u0442\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442","en":"scottish pound"},"sex":{"ru":"he"}},"cad":{"name":{"lv":"Kan\u0101das dol\u0101rs","ru":"\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"canadian dollar"},"sex":{"ru":"he"}},"brl":{"name":{"lv":"Braz\u012blijas re\u0101ls","ru":"\u0411\u0440\u0430\u0437\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0435\u0430\u043b","en":"brazilian real"},"sex":{"ru":"he"}},"zar":{"name":{"lv":"Dienvid\u0101frikas rends","ru":"\u042e\u0436\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u044d\u043d\u0434","en":"south african rand"},"sex":{"ru":"he"}},"inr":{"name":{"lv":"Indijas r\u016bpija","ru":"\u0418\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"indian rupee"},"sex":{"ru":"she"}},"rsd":{"name":{"lv":"Serbijas din\u0101rs","ru":"\u0421\u0435\u0440\u0431\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"serbian dinar"},"sex":{"ru":"he"}},"nzd":{"name":{"lv":"Jaunz\u0113landes dol\u0101rs","ru":"\u041d\u043e\u0432\u043e\u0437\u0435\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"new zealand dollar"},"sex":{"ru":"he"}},"myr":{"name":{"lv":"Malaizijas ringits","ru":"M\u0430\u043b\u0430\u0439\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0433\u0433\u0438\u0442","en":"malaysian ringgit"},"sex":{"ru":"he"}},"mur":{"name":{"lv":"Maur\u012bcijas salas r\u016bpija","ru":"\u041c\u0430\u0432\u0440\u0438\u043a\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"mauritian rupee"},"sex":{"ru":"she"}},"hkd":{"name":{"lv":"Honkongas dol\u0101rs","ru":"\u0413\u043e\u043d\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"hong kong dollar"},"sex":{"ru":"he"}},"krw":{"name":{"lv":"Dienvidkorejas vona","ru":"\u042e\u0436\u043d\u043e\u043a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0432\u043e\u043d\u0430","en":"south korean won"},"sex":{"ru":"she"}},"mxn":{"name":{"lv":"Meksikas peso","ru":"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"mexican peso"},"sex":{"ru":"he"}},"mkd":{"name":{"lv":"Ma\u0137edonijas den\u0101rs","ru":"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"macedonian dinar"},"sex":{"ru":"he"}},"dop":{"name":{"lv":"Dominik\u0101nas peso","ru":"\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"dominican peso"},"sex":{"ru":"he"}},"kes":{"name":{"lv":"Kenijas \u0161ili\u0146\u0161","ru":"\u041a\u0435\u043d\u0438\u0439\u0441\u043a\u0438\u0439 \u0448\u0438\u043b\u043b\u0438\u043d\u0433","en":"kenya shilling"},"sex":{"ru":"he"}},"dem":{"name":{"lv":"V\u0101cijas marka","ru":"\u041d\u0435\u043c\u0435\u0446\u043a\u0430\u044f \u043c\u0430\u0440\u043a\u0430","en":"german mark"},"sex":{"ru":"she"}},"eek":{"name":{"lv":"Igaunijas krona","ru":"\u042d\u0441\u0442\u043e\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"estonian kroon"},"sex":{"ru":"she"}},"ltl":{"name":{"lv":"Lietuvas lits","ru":"\u041b\u0438\u0442\u043e\u0432\u0441\u043a\u0438\u0439 \u043b\u0438\u0442","en":"lithuanian litas"},"sex":{"ru":"he"}},"lvl":{"name":{"lv":"Latvijas lats","ru":"\u041b\u0430\u0442\u0432\u0438\u0439\u0441\u043a\u0438\u0439 \u043b\u0430\u0442","en":"latvian lats"},"hundredths":{"lv":"santimi","ru":"\u0441\u0430\u043d\u0442\u0438\u043c\u043e\u0432","en":"santims"},"sex":{"ru":"he"}}};
    this.numConf = {"units":{"lv":["","viens","divi","tr\u012bs","\u010detri","pieci","se\u0161i","septi\u0146i","asto\u0146i","devi\u0146i"],"ru":["",["\u043e\u0434\u0438\u043d","\u043e\u0434\u043d\u0430"],["\u0434\u0432\u0430","\u0434\u0432\u0435"],"\u0442\u0440\u0438","\u0447\u0435\u0442\u044b\u0440\u0435","\u043f\u044f\u0442\u044c","\u0448\u0435\u0441\u0442\u044c","\u0441\u0435\u043c\u044c","\u0432\u043e\u0441\u0435\u043c\u044c","\u0434\u0435\u0432\u044f\u0442\u044c"]},"teens":{"lv":{"10":"desmit","11":"vienpadsmit","12":"divpadsmit","13":"tr\u012bspadsmit","14":"\u010detrpadsmit","15":"piecpadsmit","16":"se\u0161padsmit","17":"septi\u0146padsmit","18":"asto\u0146padsmit","19":"devi\u0146padsmit"},"ru":{"10":"\u0434\u0435\u0441\u044f\u0442\u044c","11":"\u043e\u0434\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c","12":"\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c","13":"\u0442\u0440\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c","14":"\u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c","15":"\u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","16":"\u0448\u0435\u0441\u043d\u0430\u0434\u0446\u0430\u0442\u044c","17":"\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","18":"\u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","19":"\u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c"}},"tenners":{"lv":{"2":"divdesmit","3":"tr\u012bsdesmit","4":"\u010detrdesmit","5":"piecdesmit","6":"se\u0161desmit","7":"septi\u0146desmit","8":"asto\u0146desmit","9":"devi\u0146desmit"},"ru":{"2":"\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c","3":"\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c","4":"\u0441\u043e\u0440\u043e\u043a","5":"\u043f\u044f\u044c\u0434\u0435\u0441\u044f\u0442","6":"\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442","7":"\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","8":"\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","9":"\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e"}},"hundreds":{"ru":{"":"","0":"","1":"\u0441\u0442\u043e","2":"\u0434\u0432\u0435\u0441\u0442\u0438","3":"\u0442\u0440\u0438\u0441\u0442\u0430","4":"\u0447\u0435\u0442\u044b\u0440\u0435\u0441\u0442\u0430","5":"\u043f\u044f\u0442\u044c\u0441\u043e\u0442","6":"\u0448\u0435\u0441\u0442\u044c\u0441\u043e\u0442","7":"\u0441\u0435\u043c\u044c\u0441\u043e\u0442","8":"\u0432\u043e\u0441\u0435\u043c\u044c\u0441\u043e\u0442","9":"\u0434\u0435\u0432\u044f\u0442\u044c\u0441\u043e\u0442"}}};
    if (curConf) {
        this.curConf = curConf;
    }
    if (numConf) {
        this.curConf = numConf;
    }

    var confNames = {};
    var confHund = {};
    for (var code in this.curConf) {
        if (this.curConf[code]['name'] !== undefined) {
            for (var lang in this.curConf[code]['name']) {
                if (confNames[lang] === undefined) {
                    confNames[lang] = {};
                }
                confNames[lang][code] = this.curConf[code]['name'][lang];
            }
        }
        if (this.curConf[code]['hundredths'] !== undefined) {
            for (lang in this.curConf[code]['hundredths']) {
                if (confHund[lang] === undefined) {
                    confHund[lang] = {};
                }
                confHund[lang][code] = this.curConf[code]['hundredths'][lang];
            }
        }
    }
    this.currencyLv = confNames.lv;
    this.hundredthsLv = confHund.lv;
    this.currencyRu = confNames.ru;
    this.hundredthsRu = confHund.ru;
    this.currencyEn = confNames.en;
    this.hundredthsEn = confHund.en;

    this.oneHundredLv = 'viens simts';
    this.hundrads = 'simti';
    this.ands = {'lv': 'un', 'en':'and', 'ru':'и'};
    this.comats = {'lv': 'komats', 'en':'coma', 'ru':'кома'};
    this.nulle = {'lv': 'nulle', 'ru':'ноль'};

    this.bigNums = {
        '3': {
            'ru': ['тысяча', 'тысяч', 'тысячи'],
            'lv': ['tūkstotis', 'tūkstoši']
        },
        '6': {
            'ru': ['миллион', 'миллионов', 'миллиона'],
            'lv': ['miljons', 'miljoni']
        },
        '9': {
            'ru': ['миллиард', 'миллионов', 'миллиарда'],
            'lv': ['miljards', 'miljardi']
        },
        '12': {
            'ru': ['триллион', 'триллионов', 'триллиона'],
            'lv': ['triljons', 'triljoni']
        },
        '15': {
            'ru': ['квадриллион', 'квадриллионов', 'квадриллиона'],
            'lv': ['kvadriljons', 'kvadriljoni']
        }
    }
}

export default WordTranslations;
