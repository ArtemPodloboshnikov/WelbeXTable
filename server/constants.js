const constants = {

    REQUEST: {

        getCount: 'SELECT count(*) FROM test',
        getPageData: 'SELECT * FROM test LIMIT 5 OFFSET _offset_',
        searchDataEqually: "SELECT * FROM test WHERE _column_ LIKE '_value_%'",
        searchDataMoreLess: "SELECT * FROM test WHERE _column_ _condition_ _value_" 
    },
    QUERY: {

        getPageData: ['offset'],
        searchDataEqually: ['column', 'value'],
        searchDataMoreLess: ['column', 'value', 'condition']
    }

}

module.exports = constants;