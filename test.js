//////////////////////////////////////////////////////////////////////////////////////////////////////////
// test API Gateway endpoint
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function testAPI() {
    console.log('testAPI: starting');
    fetch('https://uh3xocp8qa.execute-api.ap-southeast-2.amazonaws.com/dev/mpgputitem', { method: 'post',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: '{"text": "A text from the client"}' })
        .then(res => console.log('Success: res:', res))
        .catch(err => console.log('Error: error:', err));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// call testAPI
//////////////////////////////////////////////////////////////////////////////////////////////////////////
testAPI();