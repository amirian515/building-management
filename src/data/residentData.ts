import type { debtsType } from "../types/resident"
import type { billsType } from "../types/resident"
import type { paymentsType } from "../types/resident"
import type { expensesType } from "../types/resident"

   export const debts:debtsType[] =[{
        id:1,
        title:"شارژ شهریور",
        amount:150000
        ,date:"1405/07/12"},
        {
        id:2,
        title:"شارژ مرداد",
        amount:150000
        ,date:"1405/07/12"},
        {
        id:3,
        title:" هزینه آسانسور",
        amount:150000
        ,date:"1405/07/12"}
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
        date : "1405/05/30"
    },
        {
        id:2,
        title:"شارژ تیر",
        amount :150000,
        date : "1405/04/30"
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