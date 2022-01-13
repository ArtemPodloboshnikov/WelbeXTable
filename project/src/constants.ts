const server_url = 'http://localhost:8000/';
export enum OPERATORS{

    MORE = 'more',
    LESS = 'less',
    EQUALLY = 'equally'
}
const constants = {

    TABLE_STORAGE: 'table_data',
    COLUMNS: {
        titles: {
            date: 'Дата', 
            title: 'Название', 
            quantity: 'Количество', 
            distance: 'Расстояние'
        },
        name: 'search_column',
        placeholder: 'Колонка'
    },
    CONDITION: {
        values: {
            [OPERATORS.MORE]: '>', 
            [OPERATORS.LESS]: '<', 
            [OPERATORS.EQUALLY]: '='
        },
        name: 'search_condition',
        placeholder: 'Условие'
    },
    SEARCH: {

        placeholder: 'Значение',
        name: 'search_value'
    },
    QUERIES: {
        
        all: `${server_url}getAll`
    }
}

export default constants;