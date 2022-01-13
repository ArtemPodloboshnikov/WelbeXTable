export type Data = {

    [key: string]: string
    // readonly date: Date, 
    // readonly title: string, 
    // readonly quantity: number, 
    // readonly distance: number
}
type TableProps = {

    readonly data: Data[]

}
export type FieldsProps = {
    readonly data: Data[], 
    readonly count_columns: number, 
    readonly columns_names: string[]
};

export default TableProps;