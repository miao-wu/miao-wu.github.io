$(document).ready(function () {
     // 列名映射关系（新增）
    const columnNameMapping = {
        "platformOrderNumber": "平台订单号",
        "recipientName": "收件人姓名",
        "recipientMobilePhone": "收件人手机号/电话",
        "recipientAddress": "收件人地址",
        "merchantCode": "商家编码",
        "productInfo": "货品信息",
        "specifications": "规格信息",
        "quantity": "货品数量",
        "unitPrice": "货品单价",
        "subtotal": "金额小计",
        "postageIncome": "邮费收入",
        "store": "店铺",
        "buyerMessage": "买家留言",
        "customerServiceNotes": "客服备注",
        "buyerNickname": "买家昵称",
        "anchorId": "主播ID",
        "anchorName": "主播名称",
        "salesman": "业务员",
        "paymentType": "付款类型"
    };
    // 平台配置
    const platformConfig = {
        ny: {
            name: "南粤平台",
            columnMap: {
                "platformOrderNumber": 2,      // 订单编号
                "recipientName": 15,           // 收货人
                "recipientMobilePhone": 16,    // 电话
                "recipientAddress": 20,        // 地址
                "merchantCode": 6,             // 商家编码
                // "productInfo": 0,              // 货品信息
                // "specifications": 0,           // 规格信息
                "quantity": 10,                 // 数量
                // "unitPrice": 0,                // 货品单价
                // "subtotal": 0,                 // 金额小计
                // "postageIncome": 0,            // 邮费收入
                //"store": 0,                    // 店铺
                // "buyerMessage": 0,             // 买家留言
                // "customerServiceNotes": 0,      // 客服备注
                // "buyerNickname": 0,            // 买家昵称
                // "anchorId": 0,                 // 主播ID
                // "anchorName": 0,               // 主播名称
                // "salesman": 0,                 // 业务员
                // "paymentType": 0               // 付款类型
            },
            fixedValues: {
                11: "阿布丹",
                13: "ny",
            },
            productMap: {
                //南粤 key：skuid
                "50563293": "阿布丹 核桃玛仁原味 228g",
                "50563362": "阿布丹核桃玛仁玫瑰味 228g",
                "50563403": "阿布丹核桃玛仁葡萄味 228g",
                "50563431": "阿布丹 核桃玛仁芝麻味 228g",
                "50585703": "阿布丹核桃玛仁什锦装 380g",
                "50586156": "阿布丹熟鹰嘴豆500g",
                "50586215": "阿布丹多彩400g",
                "50586270": "阿布丹桑葚干400g",
                "50586340": "阿布丹小银杏400g",
                "50586392": "阿布丹罐装葡萄干400g",
                "50586424": "阿布丹奶油巴旦木300g",
                "50586499": "阿布丹无花果400g",
                "50586701": "阿布丹绿香妃400g",
                "50586782": "阿布丹枸杞400g",
                "50587040": "阿布丹罐装巴旦木仁400g",
                "50587550": "阿布丹 干果组合装A款礼盒1518g",
                "50587736": "阿布丹 干果组合装B款礼盒 1600g/盒",
                "50587815": "阿布丹 干果休闲组合装C款 2400g",
                "50587906": "阿布丹 干果组合装礼盒D款 1418g",
                "50992920": "阿布丹熟鹰嘴豆500g",
                "50993198": "阿布丹多彩400g",
                "50993329": "阿布丹桑葚干400g",
                "52000086": "阿布丹 干果组合装A款礼盒1518g",
                "52009617": "阿布丹和田大枣500g",
                "52009729": "阿布丹纸皮核桃500g",
                "52009815": "阿布丹带衣腰果400g",
                "52009870": "阿布丹开心果400g",
                "52009940": "阿布丹每日坚果400g",
                "52010020": "阿布丹半边梅400g",
                "52642876": "阿布丹蜂蜜280g",
                "67137504": "阿布丹 核桃玛仁原味 228g",
                "67137505": "阿布丹核桃玛仁葡萄味 228g",
                "67137506": "阿布丹 核桃玛仁芝麻味 228g",
                "67137507": "阿布丹核桃玛仁玫瑰味 228g",
                "67137508": "阿布丹核桃玛仁什锦装 380g",
                "67578006": "阿布丹 核桃玛仁酥480g",
                "67578007": "阿布丹去皮红枣500g",
            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
        axbj: {
            name: "爱心北京",
            columnMap: {
                "platformOrderNumber": 0,      // 订单编号
                "recipientName": 12,           // 收货人
                "recipientMobilePhone": 13,    // 电话
                "recipientAddress": 17,        // 地址
                "merchantCode": 24,            // 商品名称
                "quantity": 6,                 // 数量
            },
            fixedValues: {
                11: "阿布丹",
                13: "axbj",
            },
            productMap: {
                //爱心北京 key：商品ID
                "84dfef0ec3824b7eb931517878ca8ebf": "阿布丹 干果组合装C款 2400g",
                "a4e39d312e90494f9802acaabffd79be": "阿布丹 干果组合装A款礼盒1518g",
                "a497841d8cf04d31a8111e91c495fc0b": "阿布丹蜂蜜280g",
                "2cad6f1225624c3699a395fceca6ce8e": "阿布丹半边梅400g",
                "83884e0b09e5472babeddb22f668d5c5": "阿布丹每日坚果400g",
                "9ca5c24d99ec40b5ac10bb73ec9f564a": "阿布丹开心果400g",
                "79dbd81cf5e94755a9753e3ed9201e59": "阿布丹带衣腰果400g",
                "d881765fb21a4226aa35a344a12537ff": "阿布丹和田大枣500g",
                "9ab6185e3dce4d8f80c6924865fa8e88": "阿布丹纸皮核桃500g",
                "40c96eb9eb67423395236dc6bf248e77": "阿布丹罐装巴旦木仁400g",
                "26a1179829344c2ca9d16708437c1668": "阿布丹枸杞400g",
                "da44e4e8506245888148d45f7511a1e7": "阿布丹绿香妃400g",
                "868de3dc2932465592e77f166f9eaaa7": "阿布丹无花果400g",
                "27c308eebbf4490a91d51405f363c5b9": "阿布丹奶油巴旦木300g",
                "77e3e7a0f30b4631a1be37a591b07820": "阿布丹罐装葡萄干400g",
                "3bfa18b4715345268fb2f609e4987870": "阿布丹小银杏400g",
                "dab637d527e44c4a9ab6b46261ab18e4": "阿布丹桑葚干400g",
                "49315d119fe84976abecad543a1134d0": "阿布丹多彩400g",
                "1f40c4035ebd4caea703ad1a850101ac": "阿布丹熟鹰嘴豆500g",
                "a2ecaba926d945529caa8df098374506": "阿布丹半边梅400g,阿布丹熟鹰嘴豆500g",
                "b274f0b61c5344619998db969ce7f9c3": "阿布丹多彩400g,阿布丹开心果400g,阿布丹枸杞400g,阿布丹小银杏400g,阿布丹和田大枣500g,阿布丹奶油巴旦木300g,阿布丹琥珀核桃仁400g,阿布丹蜂蜜280g",
                "26138f6a5e4e456d8b17e915731da363": "阿布丹多彩400g,阿布丹纸皮核桃500g,阿布丹每日坚果400g,阿布丹半边梅400g,阿布丹桑葚干400g,阿布丹带衣腰果400g",
                "08a5c268f10f45fc81cb13ea65ab925a": "阿布丹桑葚干400g,阿布丹熟鹰嘴豆500g,阿布丹半边梅400g,阿布丹和田大枣500g",
                "0fc5499bb8374003b54e33473b039c59": "阿布丹奶油巴旦木300g,阿布丹多彩400g",
                "1bd9ac3574de441989749e98edaf48a9": "阿布丹奶油巴旦木300g,阿布丹半边梅400g",
                "f582388d23c94aa38b3869a4a5772a1b": "阿布丹奶油巴旦木300g,阿布丹熟鹰嘴豆500g",
                "1e270ebc15b0486d8c2a008e40f23592": "阿布丹奶油巴旦木300g,阿布丹罐装和田红枣218g",
                "eeed7c88451b439fa1cd173f07b702e6": "阿布丹多彩400g,阿布丹半边梅400g",
                "e2f4416e1e9443cf8a56bc5ab5bbd869": "阿布丹多彩400g,阿布丹熟鹰嘴豆500g",
                "11ac67e7bab445edbaf618966b9e408c": "阿布丹多彩400g,阿布丹罐装和田红枣218g",
                "64946f5563b144768ed550c7f6f99c18": "阿布丹核桃玛仁什锦装 380g",
                "53602780cd3840efa2b66031a71b3671": "阿布丹核桃玛仁玫瑰味 228g",
                "e3c7888e269141128b45b8554fdab852": "阿布丹 核桃玛仁芝麻味 228g",
                "1159cbfff4dd4a96be8dc1a78e01355e": "阿布丹核桃玛仁葡萄味 228g",
                "9ff45f2e286049ad8f7fd778d64c75d7": "阿布丹 核桃玛仁原味 228g",
                "9b012c34f1c84a85b76b1a59450d5580": "阿布丹去皮红枣500g",
                "8dcc4e2f3f234418befe8f30d6c48d85": "阿布丹 核桃玛仁酥480g",
                "64165eabfc37400e886b83248ed8995e": "(四罐装礼盒)阿布丹罐装巴旦木仁400g,阿布丹无花果400g,阿布丹带衣腰果400g,阿布丹开心果400g",
                "62b8953ff1914a5fa6ef57130fe17989": "(八罐装礼盒 阿布丹 干果组合装J款 3180g)阿布丹蜂蜜280g,阿布丹每日坚果400g,阿布丹开心果400g,阿布丹带衣腰果400g,阿布丹和田大枣500g,阿布丹枸杞400g,阿布丹绿香妃400g,阿布丹罐装巴旦木仁400g",
                "2b9f4750b78f422f96eb9024a734bf73": "(四罐装礼盒 阿布丹干果五一优惠组合装A款)阿布丹半边梅400g,阿布丹和田大枣500g,阿布丹熟鹰嘴豆500g,阿布丹桑葚干400g",
                "f9f024af4fe14a5f88f7742ea7890614": "(四罐装礼盒 阿布丹干果五一优惠组合装B款)阿布丹纸皮核桃500g,阿布丹罐装葡萄干400g,阿布丹三色豆400g,阿布丹灰枣280g",
            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
        sx: {
            name: "三峡",
            columnMap: {
                "platformOrderNumber": 6,      // 订单编号
                "recipientName": 12,           // 收货人
                "recipientMobilePhone": 13,    // 电话
                "recipientAddress": 14,        // 地址
                "merchantCode": 7,            // 商品名称
                "quantity": 10,                 // 数量
            },
            fixedValues: {
                11: "阿布丹",
                13: "sx",
            },
            productMap: {
                //三峡e购 key：商品编码
                "12437567": "阿布丹 核桃玛仁原味 228g",
                "12438423": "阿布丹核桃玛仁玫瑰味 228g",
                "12438878": "阿布丹核桃玛仁葡萄味 228g",
                "12438967": "阿布丹 核桃玛仁芝麻味 228g",
                "12467822": "阿布丹核桃玛仁什锦装 380g",
                "12468012": "阿布丹熟鹰嘴豆500g",
                "12468129": "阿布丹多彩400g",
                "12468267": "阿布丹桑葚干400g",
                "12468344": "阿布丹小银杏400g",
                "12468439": "阿布丹罐装葡萄干400g",
                "12468672": "阿布丹奶油巴旦木300g",
                "12468793": "阿布丹无花果400g",
                "12468920": "阿布丹绿香妃400g",
                "12469106": "阿布丹枸杞400g",
                "12469214": "阿布丹罐装巴旦木仁400g",
                "12469215": "阿布丹纸皮核桃500g",
                "12469216": "阿布丹和田大枣500g",
                "12469241": "阿布丹带衣腰果400g",
                "12469242": "阿布丹开心果400g",
                "12469243": "阿布丹每日坚果400g",
                "12469244": "阿布丹半边梅400g",
                "12469319": "阿布丹 干果组合装A款礼盒1518g",
                "12469320": "阿布丹 干果组合装B款礼盒 1600g/盒",
                "12469321": "阿布丹 干果组合装C款 2400g",
                "12469322": "阿布丹 干果组合装礼盒D款 1418g",
                "14571183": "阿布丹奶油巴旦木300g,阿布丹多彩400g",
                "14573857": "阿布丹多彩400g,阿布丹熟鹰嘴豆500g",
                "14573978": "阿布丹多彩400g,阿布丹半边梅400g",
                "14574077": "阿布丹多彩400g,阿布丹罐装和田红枣218g",
                "14574155": "阿布丹奶油巴旦木300g,阿布丹熟鹰嘴豆500g",
                "14574197": "阿布丹奶油巴旦木300g,阿布丹半边梅400g",
                "14574275": "阿布丹奶油巴旦木300g,阿布丹罐装和田红枣218g",
                "17681076": "阿布丹每日坚果400g,阿布丹半边梅400g",
                "17681077": "阿布丹罐装葡萄干400g,阿布丹无花果400g",
                "17681078": "阿布丹桑葚干400g,阿布丹熟鹰嘴豆500g",
                "20314756": "阿布丹去皮红枣500g",
                "20312548": "阿布丹 核桃玛仁酥480g",
                "21561861": "阿布丹混合坚果400g",
                "21267354": "阿布丹新疆粗粮薄盐三色豆400g",
                "21561887": "阿布丹新疆灰枣280g",
            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
        yghg: {
            name: "yghg",
            columnMap: {
                "platformOrderNumber": 0,      // 订单编号
                "recipientName": 19,           // 收货人
                "recipientMobilePhone": 20,    // 电话
                "recipientAddress": 15,        // 地址
                "merchantCode": 7,             // 商品名称
                "quantity": 5,                 // 数量
            },
            fixedValues: {
                11: "阿布丹",
                13: "yghg",
            },
            productMap: {
                //粤工惠购 ID=>name
                "12580": "阿布丹枸杞400g",
                "12572": "阿布丹多彩400g",
                "12595": "阿布丹 干果组合装B款礼盒 1600g/盒",
                "12601": "阿布丹开心果400g",
                "12602": "阿布丹每日坚果400g",
                "12600": "阿布丹带衣腰果400g",
                "12599": "阿布丹和田大枣500g",
                "12597": "阿布丹 干果组合装礼盒D款 1418g",
                "12566": "阿布丹核桃玛仁什锦装 380g",
                "12570": "阿布丹熟鹰嘴豆500g",
                "12574": "阿布丹桑葚干400g",
                "12575": "阿布丹小银杏400g",
                "12581": "阿布丹罐装巴旦木仁400g",
                "12603": "阿布丹半边梅400g",
                "12557": "阿布丹核桃玛仁芝麻味 228g",
                "12576": "阿布丹罐装葡萄干400g",
                "12577": "阿布丹奶油巴旦木300g",
                "12584": "阿布丹 干果组合装A款礼盒1518g",
                "12596": "阿布丹 干果组合装C款 2400g",
                "12579": "阿布丹绿香妃400g",
                "12554": "阿布丹 核桃玛仁葡萄味 228g",
                "12556": "阿布丹 核桃玛仁原味 228g",
                "12565": "阿布丹 核桃玛仁玫瑰味 228g",
                "12578": "阿布丹无花果400g",
                "12598": "阿布丹纸皮核桃500g",
            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
        zx: {
            name: "zx",
            columnMap: {
                "platformOrderNumber": 0,      // 订单编号
                "recipientName": 4,           // 收货人
                "recipientMobilePhone": 5,    // 电话
                "recipientAddress": 6,        // 地址
                "merchantCode": 7,             // 商品名称
                "quantity": 8,                 // 数量
            },
            fixedValues: {
                11: "阿布丹",
                13: "zx",
            },
            productMap: {
                //茶觉文化-中信
                "【新疆墨玉】阿布丹 核桃玛仁原味228g": "阿布丹 核桃玛仁原味 228g",
                "【新疆墨玉】阿布丹 核桃玛仁葡萄味228g": "阿布丹核桃玛仁葡萄味 228g",
                "【新疆墨玉】阿布丹 核桃玛仁芝麻味228g": "阿布丹 核桃玛仁芝麻味 228g",
                "【新疆墨玉】阿布丹 核桃玛仁玫瑰味228g": "阿布丹核桃玛仁玫瑰味 228g",
                "【新疆墨玉】阿布丹 核桃玛仁什锦装380g": "阿布丹核桃玛仁什锦装 380g",
                "【新疆墨玉】阿布丹 核桃玛仁什锦装500g": "阿布丹 核桃玛仁什锦装500g",
                "【新疆墨玉】阿布丹 熟鹰嘴豆500g/罐": "阿布丹熟鹰嘴豆500g",
                "【新疆墨玉】阿布丹 多彩葡萄干400g/罐": "阿布丹多彩400g",
                "【新疆墨玉】阿布丹 桑葚干400g/罐": "阿布丹桑葚干400g",
                "【新疆墨玉】阿布丹 手剥小白杏核400g/罐": "阿布丹小银杏400g",
                "【新疆墨玉】阿布丹 葡萄干400g/罐": "阿布丹罐装葡萄干400g",
                "【新疆墨玉】阿布丹 巴旦木300g/罐": "阿布丹奶油巴旦木300g",
                "【新疆墨玉】阿布丹 无花果干400g/罐": "阿布丹无花果400g",
                "【新疆墨玉】阿布丹 绿香妃葡萄干400g/罐": "阿布丹绿香妃400g",
                "【新疆墨玉】阿布丹 巴旦木仁400g/罐": "阿布丹罐装巴旦木仁400g",
                "【新疆墨玉】阿布丹 枸杞400g/罐": "阿布丹枸杞400g",
                "【新疆墨玉】阿布丹 纸皮核桃500g/袋": "阿布丹纸皮核桃500g",
                "【新疆墨玉】阿布丹 和田大枣500g/袋": "阿布丹和田大枣500g",
                "【新疆墨玉】阿布丹 带衣腰果400g/罐": "阿布丹带衣腰果400g",
                "【新疆墨玉】阿布丹 开心果400g/罐": "阿布丹开心果400g",
                "【新疆墨玉】阿布丹 每日坚果400g/罐": "阿布丹每日坚果400g",
                "【新疆墨玉】阿布丹 半边梅400g/罐": "阿布丹半边梅400g",
                "【新疆墨玉】阿布丹 琥珀核桃仁400g/罐": "阿布丹琥珀核桃仁400g",
                "【新疆墨玉】阿布丹 新疆黑蜂蜂蜜280g/罐": "阿布丹蜂蜜280g",
                "【新疆墨玉】阿布丹 干果组合装礼盒A款1518g": "阿布丹罐装和田红枣218g,阿布丹熟鹰嘴豆500g,阿布丹桑葚干400g,阿布丹罐装葡萄干400g",
                "【新疆墨玉】阿布丹 干果组合装礼盒B款1600g": "阿布丹桑葚干400g,阿布丹无花果400g,阿布丹绿香妃400g,阿布丹小银杏400g",
                "【新疆墨玉】阿布丹 干果组合装礼盒C款2400g": "阿布丹桑葚干400g,阿布丹熟鹰嘴豆500g,阿布丹无花果400g,阿布丹奶油巴旦木300g,阿布丹小银杏400g,阿布丹多彩400g",
                "【新疆墨玉】阿布丹 干果组合装礼盒D款1418g": "阿布丹罐装和田红枣218g,阿布丹熟鹰嘴豆500g,阿布丹多彩400g,阿布丹奶油巴旦木300g",
                "【新疆墨玉】阿布丹 干果组合装礼盒F款1518g": "阿布丹罐装和田红枣218g,阿布丹熟鹰嘴豆500g,阿布丹多彩400g,阿布丹桑葚干400g",
                "【新疆墨玉】阿布丹 干果组合装礼盒G款2056g": "阿布丹熟鹰嘴豆500g,阿布丹多彩400g,阿布丹奶油巴旦木300g,阿布丹绿香妃400g,阿布丹 核桃玛仁原味 228g*2",
                "【新疆墨玉】阿布丹 干果组合装礼盒H款1700g": "阿布丹熟鹰嘴豆500g,阿布丹多彩400g,阿布丹琥珀核桃仁400g,阿布丹半边梅400g",
                "【新疆墨玉】阿布丹 干果组合装礼盒I款1700g": "阿布丹桑葚干400g,阿布丹枸杞400g,阿布丹每日坚果400g,阿布丹和田大枣500g",
                "【新疆墨玉】阿布丹 干果休闲组合B款2318g": "阿布丹熟鹰嘴豆500g,阿布丹小银杏400g,阿布丹罐装和田红枣218g,阿布丹无花果400g,阿布丹琥珀核桃仁400g,阿布丹罐装葡萄干400g",
                "【新疆墨玉】阿布丹 干果休闲组合D款1600g": "阿布丹熟鹰嘴豆500g,阿布丹多彩400g,阿布丹奶油巴旦木300g,阿布丹带衣腰果400g",
                "【新疆墨玉】阿布丹 干果休闲组合装E款3180g": "阿布丹带衣腰果400g,阿布丹开心果400g,阿布丹每日坚果400g,阿布丹半边梅400g,阿布丹绿香妃400g,阿布丹罐装巴旦木仁400g,阿布丹和田大枣500g,阿布丹蜂蜜280g",
            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
        zhht: {
            name: "zhht",
            columnMap: {
                "platformOrderNumber": 0,      // 订单编号
                "recipientName": 23,           // 收货人
                "recipientMobilePhone": 24,    // 电话
                "recipientAddress": 28,        // 地址
                "merchantCode": 5,             // 商品名称
                "quantity": 16,                 // 数量
            },
            fixedValues: {
                11: "阿布丹",
                13: "zhht",
            },
            productMap: {
                //中汇豪泰 商品编号=>名称
                "33077445": "阿布丹核桃玛仁原味 228g",
                "33077446": "阿布丹核桃玛仁葡萄味 228g",
                "33077447": "阿布丹核桃玛仁芝麻味 228g",
                "33077505": "阿布丹核桃玛仁玫瑰味 228g",
                "33077509": "阿布丹核桃玛仁什锦装 380g",
                "33077512": "阿布丹核桃玛仁什锦装 500g",
                "33077516": "阿布丹熟鹰嘴豆500g",
                "33077519": "阿布丹多彩400g",
                "33077522": "阿布丹桑葚干400g",
                "33077524": "阿布丹小银杏400g",
                "33077526": "阿布丹罐装葡萄干400g",
                "33077530": "阿布丹奶油巴旦木300g",
                "33077533": "阿布丹无花果400g",
                "33077538": "阿布丹绿香妃400g",
                "33077540": "阿布丹枸杞400g",
                "33077543": "阿布丹罐装巴旦木仁400g",
                "33077545": "阿布丹纸皮核桃500g",
                "33077546": "阿布丹和田大枣500g",
                "33077547": "阿布丹带衣腰果400g",
                "33077548": "阿布丹开心果400g",
                "33077549": "阿布丹每日坚果400g",
                "33077550": "阿布丹半边梅400g",
                "33077569": "阿布丹琥珀核桃仁400g",
                "33077586": "阿布丹蜂蜜280g",
                "33077587": "阿布丹 干果组合装A款礼盒1518g",
                "33077589": "阿布丹 干果组合装B款礼盒 1600g/盒",
                "33077590": "阿布丹 干果组合装C款 2400g",
                "33077591": "阿布丹 干果组合装礼盒D款 1418g",
                "33077593": "阿布丹 干果休闲组合B款 2318g",

            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
        xchp: {
            name: "xchp",
            columnMap: {
                "platformOrderNumber": 1,      // 订单编号
                "recipientName": 20,           // 收货人
                "recipientMobilePhone": 21,    // 电话
                "recipientAddress": 22,        // 地址
                "merchantCode": 11,             // 商品名称
                "quantity": 13,                 // 数量
            },
            fixedValues: {
                11: "阿布丹",
                13: "xchp",
            },
            productMap: {
                //好品 商品SKU编号=>名称
                "746918": "阿布丹核桃玛仁原味 228g",
                "620369": "阿布丹核桃玛仁葡萄味 228g",
                "620371": "阿布丹核桃玛仁芝麻味 228g",
                "746917": "阿布丹核桃玛仁玫瑰味 228g",
                "571642": "阿布丹核桃玛仁什锦装 380g",
                "988990": "阿布丹核桃玛仁什锦装 500g",
                "632816": "阿布丹熟鹰嘴豆500g",
                "741553": "阿布丹多彩400g",
                "741581": "阿布丹桑葚干400g",
                "632812": "阿布丹小银杏400g",
                "632029": "阿布丹罐装葡萄干400g",
                "746900": "阿布丹奶油巴旦木300g",
                "632813": "阿布丹无花果400g",
                "632818": "阿布丹绿香妃400g",
                "1117361": "阿布丹枸杞400g",
                "741632": "阿布丹罐装巴旦木仁400g",
                "1062889": "阿布丹纸皮核桃500g",
                "1061507": "阿布丹和田大枣500g",
                "1063066": "阿布丹带衣腰果400g",
                "1063055": "阿布丹开心果400g",
                "1062988": "阿布丹每日坚果400g",
                "1063129": "阿布丹半边梅400g",
                "P033947601": "阿布丹去皮红枣500g",
                "P035700301": "阿布丹 核桃玛仁酥480g",
                "P043249301": "阿布丹混合坚果400g",
                "P043248201": "阿布丹新疆粗粮薄盐三色豆400g",
                "P040024901": "阿布丹新疆核桃仁300g",
            },
            template: [
                "平台订单号", "收件人姓名", "收件人手机号/电话", "收件人地址", "商家编码", "货品信息", "规格信息", "货品数量", "货品单价", "金额小计", "邮费收入", "店铺", "买家留言", "客服备注", "买家昵称", "主播ID", "主播名称", "业务员", "付款类型"
            ]
        },
    };

    // 文件上传处理
    $(".uploadBox").click(function () {
        $("#fileUpload").click().change(function (e) {
            const file = e.target.files[0];
            file && $(".uploadBox").text(file.name);
        });
    });

    // 生成CSV
    $("#generateCsv").click(function () {
        const platform = $("#platformSelect").val();
        const file = $("#fileUpload").prop("files")[0];

        if (!file) {
            alert("请先上传文件");
            return;
        }

        Papa.parse(file, {
            encoding: "gb2312",
            complete: function (results) {
                const config = platformConfig[platform];
                const processedData = processData(results.data, config);

                $("#beforeObj").val(JSON.stringify(results.data, null, 2));
                $("#resultObj").val(processedData.csvString);

                downloadCSV(processedData.data, config.template);
                renderTable(processedData.data, "resultTable");  // 渲染处理结果
                renderTable(results.data, "beforeTable");       // 渲染原始数据
            }
        });
    });
    function renderTable(data, tableId) {
        const table = document.getElementById(tableId);
        table.tBodies[0].innerHTML = data.map(row => `
        <tr>
          ${row.map(cell => `<td>${cell}</td>`).join('')}
        </tr>
      `).join('');
    }
    // 修复后的数据处理核心方法
    function processData(rawData, config) {
        const output = [config.template]; // 初始化时只包含标题行

        rawData.slice(1).forEach((row) => {
            // 跳过空行处理
            if (row.every(cell => cell.trim() === "")) return;

            const newRow = new Array(config.template.length).fill("");

            // 处理列映射（保持原始列映射）
            Object.entries(config.columnMap).forEach(([enKey, srcIndex]) => {
                const cnCol = columnNameMapping[enKey];
                const targetIndex = config.template.indexOf(cnCol);

                if (targetIndex !== -1 && srcIndex < row.length) {
                    newRow[targetIndex] = row[srcIndex]?.trim() || "";
                }
            });

            // 处理固定值
            Object.entries(config.fixedValues).forEach(([index, value]) => {
                if (index < newRow.length) {
                    newRow[index] = value;
                }
            });

            // 商品名称处理（核心修改部分）
            const skuIndex = config.template.indexOf("商家编码");

            if (skuIndex !== -1) {
                // 获取原始SKU值
                const originalSkus = newRow[skuIndex].split(",");

                // 转换为商品名称
                const productNames = originalSkus.map(sku =>
                    config.productMap[sku.trim()] || sku.trim()
                );

                // 将商品名称放入编号列
                newRow[skuIndex] = productNames.join(", ");

            }

            output.push(newRow);
        });

        return {
            data: output,
            csvString: output.map(row => row.join(",")).join("\n")
        };
    }

    // 下载CSV文件
    function downloadCSV(data, headers) {
        const csvContent = data.map(row =>
            row.map(col => `"${String(col).replace(/"/g, '""')}"`).join(",")
        ).join("\n");

        const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = $("#platformSelect").find('option:selected').text() + `_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
    }
    //################################################################
    let defaultConfig = {
        //好物购
        "零食礼包四": "阿布丹核桃玛仁原味 228g,阿布丹去皮红枣500g,阿布丹带衣腰果400g",
        "零食礼包二": "阿布丹核桃玛仁什锦装 380g,阿布丹无花果400g,阿布丹带衣腰果400g,阿布丹去皮红枣500g,阿布丹半边梅400g",
        "零食礼包一": "阿布丹核桃玛仁什锦装 380g,阿布丹熟鹰嘴豆500g,阿布丹多彩400g,阿布丹桑葚干400g,阿布丹去皮红枣500g,阿布丹琥珀核桃仁400g",
        "零食礼包九": "阿布丹带衣腰果400g,阿布丹去皮红枣500g,阿布丹蜂蜜280g,阿布丹 核桃玛仁酥480g,阿布丹琥珀核桃仁400g",
        "零食礼包八": "阿布丹去皮红枣500g,阿布丹核桃玛仁原味 228g,阿布丹奶油巴旦木300g",
        "零食礼包十": "阿布丹去皮红枣500g,阿布丹核桃玛仁玫瑰味 228g,阿布丹奶油巴旦木300g",
        "零食礼包五": "阿布丹核桃玛仁玫瑰味 228g,阿布丹琥珀核桃仁400g,阿布丹多彩400g",
        "阿布丹 核桃玛仁酥 480g/罐": "阿布丹 核桃玛仁酥480g",
        "阿布丹新疆去皮无核枣 500g/罐": "阿布丹去皮红枣500g",
        "库尔勒香梨 5kg/箱": "库尔勒香梨 5kg/箱",
        "新疆阿克苏冰糖心苹果 10kg/箱": "新疆阿克苏冰糖心苹果 10kg/箱",
        "阿布丹 干果组合礼盒A款4罐装1518g": "阿布丹 干果组合装A款礼盒1518g",
        "阿布丹 干果组合装礼盒C款6罐装2400g": "阿布丹干果组合装C款 2400g",
        "阿布丹 核桃玛仁原味 228g/袋": "阿布丹核桃玛仁原味 228g",
        "阿布丹 和田大枣 500g/袋": "阿布丹和田大枣500g",
        "阿布丹 新疆黑蜂蜂蜜 280g/瓶": "阿布丹蜂蜜280g",
        "阿布丹 奶油味巴旦木300g/罐": "阿布丹奶油巴旦木300g",
        "阿布丹 奶油味巴旦木 300g/罐": "阿布丹奶油巴旦木300g",
        "阿布丹 半边梅400g/罐": "阿布丹半边梅400g",
        "阿布丹 半边梅 400g/罐": "阿布丹半边梅400g",
        "阿布丹 带衣腰果 400g/罐": "阿布丹带衣腰果400g",
        "阿布丹葡萄干400g/罐": "阿布丹罐装葡萄干400g",
        "阿布丹 葡萄干 400g/罐": "阿布丹罐装葡萄干400g",
        "阿布丹葡萄干 400g/罐": "阿布丹罐装葡萄干400g",
        "阿布丹 多彩葡萄干 400g/罐": "阿布丹多彩400g",
        "阿布丹 手剥小白杏核 400g/罐": "阿布丹小银杏400g",
        "阿布丹 开心果400g/罐": "阿布丹开心果400g",
        "阿布丹 开心果 400g/罐": "阿布丹开心果400g",
        "阿布丹 绿香妃葡萄干 400g/罐": "阿布丹绿香妃400g",
        "阿布丹 每日坚果 400g/罐": "阿布丹每日坚果400g",
        "阿布丹 桑葚干400g/罐": "阿布丹桑葚干400g",
        "阿布丹 桑葚干 400g/罐": "阿布丹桑葚干400g",
        "阿布丹 无花果干 400g/罐": "阿布丹无花果400g",
        "阿布丹 新疆鹰嘴豆（熟）500g/罐": "阿布丹熟鹰嘴豆500g",
        "阿布丹 新疆鹰嘴豆（熟） 500g/罐": "阿布丹熟鹰嘴豆500g",
        "阿布丹 纸皮核桃 500g/袋": "阿布丹纸皮核桃500g",
        "阿布丹 芝麻琥珀核桃仁400g/罐": "阿布丹琥珀核桃仁400g",
        "阿布丹 芝麻琥珀核桃仁 400g/罐": "阿布丹琥珀核桃仁400g",
        "阿布丹 核桃玛仁玫瑰味 228g/袋": "阿布丹核桃玛仁玫瑰味 228g",
        "阿布丹 核桃玛仁葡萄味 228g/袋": "阿布丹核桃玛仁葡萄味 228g",
        "阿布丹 核桃玛仁芝麻味 228g/袋": "阿布丹核桃玛仁芝麻味 228g",
        "阿布丹 核桃玛仁什锦装 380g/袋": "阿布丹核桃玛仁什锦装 380g",
        "阿布丹 枸杞 400g/罐": "阿布丹枸杞400g",
        "阿布丹 巴旦木仁 300g/罐": "阿布丹罐装巴旦木仁400g",
    };
    //拆单-好物购
    $("#hwgSplit").click(function (e) {
        var file = $("#fileUpload").prop("files")[0];
        Papa.parse(file, {
            encoding: "gb2312",
            complete: function (results) {
                let data = clipHwg(results.data);
                downloadTabCsv(data);
                renderTable(data, "resultTable");  // 渲染处理结果
                renderTable(results.data, "beforeTable");
            },
        });
    });
    //制单-好物购
    $("#hwgCreate").click(function (e) {
        var file = $("#fileUpload").prop("files")[0];
        Papa.parse(file, {
            encoding: "gb2312",
            complete: function (results) {
                let newTable = creatTab(results.data, "hwg");
                let data = creatCsvTab(newTable);
                downloadTabCsv(data);
                renderTable(data, "resultTable");  // 渲染处理结果
                renderTable(results.data, "beforeTable");
            },
        });
    });
    function downloadTabCsv(dataArray) {
        // 将数组转换为 csv 格式的字符串
        var csvString = dataArray.map(function (row) {
            return row.join(","); // 用逗号分隔数组中的每个元素
        }).join("\n"); // 用换行符分隔每一行
        let filename = $(".uploadBox").text().replaceAll(".csv", "") + "-" + new Date().toISOString().slice(0, 10) + ".csv";
        // 创建一个隐藏的 a 标签用于下载
        var downloadLink = $("<a></a>")
            .attr("href", "data:text/csv;charset=utf-8,\uFEFF" + encodeURIComponent(csvString)) // 设置下载链接，\uFEFF 是 BOM 字符，用于 Excel 正确识别 UTF-8 编码
            .attr("download", filename) // 设置下载文件名
            .appendTo("body");

        // 触发点击事件，开始下载
        downloadLink[0].click();
        // 下载完成后移除 a 标签
        downloadLink.remove();
    };
    let tableCsvHeader = ["订单编号", "客户网名", "收货人", "电话", "州省", "区市", "区县", "地址", "客服备注", "客户备注", "编号", "品名", " ", " ", "数量", "合计"];
    let ptConfig = { "hwg": [0, 6, 7, 8, 11, 12, 12] };
    //按照平台配置信息矩阵返回对应的数组 
    let creatTab = (arr, obj) => {
        let tableCsv = ["订单编号", "客户网名", "收货人", "电话", "州省", "区市", "区县", "地址", "客服备注", "客户备注", "编号", "品名", " ", " ", "数量", "合计"];
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            let tabArr = ptConfig[obj];
            if (arr[j] !== undefined && arr[j].length > 0) {
                let row = arr[j];
                let tableRowStr = row[0] + "A" + i + "|" + "阿布丹|" + row[6] + "|" + row[7] + "|" + "  |" + "  |" + "  |" + row[8] + "|" + obj + "|  |" + defaultConfig[row[11]] + "|" + "  |" + "  |" + "  |" + row[12] + "|" + row[12];
                tableCsv.push(tableRowStr.split("|"));
            };
        };
        return tableCsv;
    };
    //好物购制单
    let creatCsvTab = (arr) => {
        let CsvTab = [["订单编号", "客户网名", "收货人", "电话", "州省", "区市", "区县", "地址", "客服备注", "客户备注", "编号", "品名", " ", " ", "数量", "合计"]];
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i][10];
            if (obj !== undefined && obj.length > 0) {
                let spArr = obj.split(",");
                for (let j = 0; j < spArr.length; j++) {
                    let rowStr = arr[i][0] + j + "," + arr[i][1] + "," + arr[i][2] + "," + arr[i][3] + "," + arr[i][4] + "," + arr[i][5] + "," + arr[i][6] + "," + arr[i][7] + "," + arr[i][8] + "," + arr[i][9] + "," + spArr[j] + "," + arr[i][11] + "," + arr[i][12] + "," + arr[i][13] + "," + arr[i][14] + "," + arr[i][15];
                    CsvTab.push(rowStr.split(","));
                }
            }
        };
        return CsvTab;
    };
    function clipHwg(data) {
        // console.log(data);
        let arrayData = [];
        for (let i = 0; i < data.length - 1; i++) {
            //csv行数据
            let objStr = data[i][4];
            let obj = objStr.replaceAll("[", "").replaceAll("]", "").split(', ');
            for (let j = 0; j < obj.length; j++) {
                let dataArray = obj[j];
                let name = dataArray.slice(0, dataArray.indexOf("*"));
                let num = dataArray.slice(dataArray.indexOf("*") + 1);
                let str = data[i].join("|") + "|" + data[i][0] + "A" + j + "|" + name + "|" + num;
                arrayData.push(str);
            }
        };
        let newArray = [];
        let tilArray = [];
        tilArray.push((data[0] + ",新订单编号,商品名称,数量").split(","));
        newArray.push(tilArray);
        let datalist = arrayData.shift();
        for (let i = 0; i < arrayData.length; i++) {
            let arr = [];
            arr.push(arrayData[i].replaceAll(",", "、").replaceAll("\n", " ").split("|"));
            newArray.push(arr);
        };
        return newArray;
    };
    //##################################################################
    // 按钮点击事件绑定
    $("#splitCsv").click(function (e) {
        var file = $("#fileUpload").prop("files")[0];
        Papa.parse(file, {
            encoding: "gb2312",
            complete: function (results) {
                let data = results.data;
                console.log(data)
                // 处理后的数据
                const processedData = [];

                // 遍历原始数据
                $.each(data, function (_, item) {
                    const key = item[0];
                    let value = item[1]; // 用 let 允许后续修改

                    // 防御性检查：确保 value 是字符串
                    value = (typeof value === 'string') ? value : String(value || '');

                    // 检查拆分条件
                    if (value.includes(",")) {
                        const values = value.split(",").map(v => v.trim());
                        $.each(values, function (_, subValue) {
                            processedData.push([key, subValue]);
                        });
                    } else {
                        processedData.push([key, value]);
                    }
                });
                downloadCSV(processedData);
                renderTable(processedData, "resultTable");  // 渲染处理结果
                renderTable(results.data, "beforeTable");
            },
        });
    });
});
