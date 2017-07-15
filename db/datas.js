/**
 * Created by yjf on 2017/7/15.
 */

var datas = {
    meds: [
        {
            medId: "100001",
            medName: "999感冒灵",
            medPro: '龙抬头',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '感冒',
            medPri: '11.8',
            medCount: '20',
            medSala: '张三'
        },
        {
            medId: "100002",
            medName: "维生素C",
            medPro: '龙抬头',
            medDate: '2017/7/1',
            medTime: '24个月',
            medUse: '补充维c',
            medPri: '22',
            medCount: '22',
            medSala: '李四'
        },
        {
            medId: "100003",
            medName: "百蕊颗粒",
            medPro: '白美星',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '消热解暑',
            medPri: '67',
            medCount: '18',
            medSala: '李四'
        },
        {
            medId: "100004",
            medName: "枇杷露",
            medPro: '念慈庵',
            medDate: '2017/7/1',
            medTime: '24个月',
            medUse: '止咳',
            medPri: '42',
            medCount: '80',
            medSala: '王五'
        },
        {
            medId: "100005",
            medName: "人参健脾丸",
            medPro: '龙抬头',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '消化',
            medPri: '9',
            medCount: '30',
            medSala: '张三'
        },
        {
            medId: "100006",
            medName: "枸杞子",
            medPro: '养方堂',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '保健',
            medPri: '29',
            medCount: '22',
            medSala: '王五'
        },
        {
            medId: "100007",
            medName: "眼药水",
            medPro: '闪亮',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '视力',
            medPri: '23',
            medCount: '34',
            medSala: '王五'
        },
        {
            medId: "100008",
            medName: "蛋白粉",
            medPro: '养方堂',
            medDate: '2017/7/1',
            medTime: '24个月',
            medUse: '保健',
            medPri: '348',
            medCount: '45',
            medSala: '李四'
        },
        {
            medId: "100009",
            medName: "口炎清颗粒",
            medPro: '大神',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '口腔溃疡',
            medPri: '17',
            medCount: '45',
            medSala: '李四'
        },
        {
            medId: "100010",
            medName: "马来酸曲",
            medPro: '舒丽',
            medDate: '2017/7/1',
            medTime: '12个月',
            medUse: '消化',
            medPri: '20',
            medCount: '28',
            medSala: '张三'
        }
    ],
    inOut: [
        {
            medId: '100001',
            medPla: 'a13',
            inCount: '40',
            outCount: '20'
        },
        {
            medId: '100002',
            medPla: 'a12',
            inCount: '50',
            outCount: '28'
        },
        {
            medId: '100003',
            medPla: 'a23',
            inCount: '50',
            outCount: '32'
        },
        {
            medId: '100004',
            medPla: 'a24',
            inCount: '100',
            outCount: '20'
        },
        {
            medId: '100005',
            medPla: 'b12',
            inCount: '100',
            outCount: '70'
        },
        {
            medId: '100006',
            medPla: 'b14',
            inCount: '50',
            outCount: '28'
        },
        {
            medId: '100007',
            medPla: 'b13',
            inCount: '60',
            outCount: '26'
        },
        {
            medId: '100008',
            medPla: 'b22',
            inCount: '60',
            outCount: '15'
        },
        {
            medId: '100009',
            medPla: 'c11',
            inCount: '60',
            outCount: '15'
        },
        {
            medId: '100010',
            medPla: 'c14',
            inCount: '60',
            outCount: '22'
        }
    ],
    salas: [
        {
            salaId: '1',
            salaName: '张三',
            sex: '男',
            age: '26',
            work: '销售员'
        },
        {
            salaId: '2',
            salaName: '李四',
            sex: '男',
            age: '35',
            work: '销售员'
        },
        {
            salaId: '3',
            salaName: '王五',
            sex: '女',
            age: '33',
            work: '销售员'
        },
        {
            salaId: '4',
            salaName: '刘阳',
            sex: '男',
            age: '28',
            work: '采购员'
        },
        {
            salaId: '5',
            salaName: '程丽丽',
            sex: '女',
            age: '32',
            work: '验收员'
        },
        {
            salaId: '6',
            salaName: '白嫣',
            sex: '女',
            age: '26',
            work: '收银员'
        },
        {
            salaId: '7',
            salaName: '柳七夕',
            sex: '女',
            age: '25',
            work: '质量管理员'
        },
        {
            salaId: '8',
            salaName: '顾旭',
            sex: '男',
            age: '35',
            work: '店长'
        },
        {
            salaId: '9',
            salaName: '李默',
            sex: '男',
            age: '29',
            work: '仓库保管员'
        }
    ],
    cums: [
        {
            cumsId: '200001',
            cumsName: '杨菲菲',
            cumsTel: '18716033332',
            cumsTime: '2017/6/1',
            cumsCount: '1',
            medId: '100003'
        },
        {
            cumsId: '200002',
            cumsName: '查立',
            cumsTel: '18716054679',
            cumsTime: '2017/6/1',
            cumsCount: '3',
            medId: '100001'
        },
        {
            cumsId: '200003',
            cumsName: '赵超',
            cumsTel: '18716054321',
            cumsTime: '2017/6/1',
            cumsCount: '1',
            medId: '100001'
        },
        {
            cumsId: '200004',
            cumsName: '步云',
            cumsTel: '18716033432',
            cumsTime: '2017/6/1',
            cumsCount: '2',
            medId: '100008'
        },
        {
            cumsId: '200001',
            cumsName: '张长庚',
            cumsTel: '18716054459',
            cumsTime: '2017/6/1',
            cumsCount: '5',
            medId: '10006'
        },
        {
            cumsId: '200001',
            cumsName: '年非',
            cumsTel: '18716023921',
            cumsTime: '2017/6/1',
            cumsCount: '4',
            medId: '100010'
        }
    ]
};
module.exports = datas;