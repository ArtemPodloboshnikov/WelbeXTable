const server_url = 'http://localhost:8000/';
export enum OPERATORS{

    MORE = '>',
    LESS = '<',
    EQUALLY = '='
}

export enum COLUMNS_NAME{

    DATE = 'date',
    TITLE = 'title',
    QUANTITY = 'quantity',
    DISTANCE = 'distance'
}

export const COUNT_PAGES_STORAGE = 'count_pages';
export const COUNT_DATA_PAGE = 5;
export const LAST_PAGE_STORAGE = 'last_page';
export const TABLE_STORAGE = 'table_data';
export const QUERIES = {
        
    pageData: `${server_url}getPageData?offset=_offset_`,
    getCount: `${server_url}getCount`,
    searchDataEqually: `${server_url}searchDataEqually?column=_column_&value=_value_`,
    searchDataMoreLess: `${server_url}searchDataMoreLess?column=_column_&value=_value_&condition=_condition_`
};
export const ERROR_MESSAGE = {

    [COLUMNS_NAME.DATE]: 'error',
    [COLUMNS_NAME.TITLE]: 'Запись не найдена'
};

const constants = {

    COLUMNS: {
        titles: {
            [COLUMNS_NAME.DATE]: 'Дата', 
            [COLUMNS_NAME.TITLE]: 'Название', 
            [COLUMNS_NAME.QUANTITY]: 'Количество', 
            [COLUMNS_NAME.DISTANCE]: 'Расстояние'
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
    RESET: {

        text: 'Сбросить',
        name: 'reset_btn'
    }
}

export default constants;