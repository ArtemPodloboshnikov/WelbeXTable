const constants = {

    REQUEST: {

        getCount: 'SELECT count(*) FROM test',
        getPageData: 'SELECT * FROM test LIMIT 5 OFFSET ' 
    }

}

module.exports = constants;