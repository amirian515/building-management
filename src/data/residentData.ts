import type { debtsType } from "../types/resident"
import type { billsType } from "../types/resident"
import type { paymentsType } from "../types/resident"
import type { expensesType } from "../types/resident"
import type { unitType } from "../types/resident"

   export const debts:debtsType[] =[{
        id:1,
        title:"شارژ شهریور",
        amount:150000
        ,date:"1405/07/12",
        unitId:702},
        {
        id:2,
        title:"شارژ مرداد",
        amount:150000
        ,date:"1405/07/12",
         unitId:403,},
        {
        id:3,
        title:" هزینه آسانسور",
        amount:150000
        ,date:"1405/07/12",
        unitId:102,},
                {
        id:4,
        title:"شارژ مرداد",
        amount:150000
        ,date:"1405/07/12",
         unitId:702,},
     ]
     export const bills:billsType[] =[
        {id:1,
        title:" آب",
        amount:20000000,
        status:"پرداخت شده"
        },
        {id:2,
        title:" برق موتور خانه",
        amount:9152000,
        status:"پرداخت شده"
},
        {id:3,
        title:" گاز موتور خانه",
        amount:5600000,
        status:"پرداخت شده"
}]
     export const payments:paymentsType[] =[
    {
        id:1,
        title:"شارژ مرداد",
        amount :150000,
        date : "1405/05/30",
        unitId:702

    },
        {
        id:2,
        title:"شارژ تیر",
        amount :150000,
        date : "1405/04/30",
        unitId:403
    }]
       export const expenses :expensesType[] = [
    {
        id:1,
        title:"سرویس آسانسور",
        amount:750000,
        date:"1405/07/30"
   },
      {
        id:2,
        title:"سرویس موتور خانه",
        amount:700000,
        date:"1405/07/30"
   }

]
export const units :unitType[]=[{
    id:1,
    name:"صادقی",
    unitNumber:702,
    status:"تسویه",
    debt:0,
    residentCount:2
   },
   {
    id:2,
    name:"رزاقی",
    unitNumber:102,
    status:"بدهکار",
    debt:1000000,
    residentCount:4
   },
   {
    id:3,
    name:"محمدی",
    unitNumber:403,
    status:"بدهکار",
    debt:2500000,
    residentCount:3
   }
]