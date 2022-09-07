export interface HomeProps{
    productName:string
    visible:boolean
    setVisible:React.Dispatch<React.SetStateAction<boolean>>
    fetchData:(e:string)=>void;
}