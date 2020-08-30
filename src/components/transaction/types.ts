export type Somethings = {id: number,name: string, description: string,date: Date | string,amount: string, currency: string}
export type Selected= (selected: Somethings) => void
export type ShowForm = () => void
export type AddToStore = (total:number,name: string, description:string, date:string, amount:string, currency:string) => void