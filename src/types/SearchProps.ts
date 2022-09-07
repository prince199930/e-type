export interface SearchProps{
    value:string
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
    onClick?:(event: React.MouseEvent<HTMLElement>)=>void
}