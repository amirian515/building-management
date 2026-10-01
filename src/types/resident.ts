 export type debtsType ={
    id:number,
    title:string,
    amount:number,
    date:string,
    unitId:number

}
  export type billsType ={
    id:number,
    title:string,
    amount:number,
    status:string
}
 export type paymentsType ={
    id:number,
    unitId:number,
    title:string,
    amount:number,
    date:string
}
  export type expensesType ={
    id:number,
    title:string,
    amount:number,
    date:string
}
  export type unitType ={
    id:number,
    name:string,
    unitNumber:number,
    status:string,
    debt:number
    residentCount:number
}
