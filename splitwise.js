const Splitwise = require('splitwise')
const sw = Splitwise({
    consumerKey: '5aPHkRhdJNr4f97YbaEvMWtsMi3qE7gFXBpdwfL8',
    consumerSecret: 'LylFUxKQqIiLIkpPaM3eAYxmbwh6wvF1iQMPOZUM',
    groupId: '44868346'
})

sw.createExpense({
    users__0__user_id: '54986668',
    users__0__paid_share: '10',
    users__1__first_name: "Callum",
    users__1__last_name: "Li",
    users__1__email: 'calluml1009@gmail.com',
    users__1__owed_share: '10',
    cost: 10,
    description: "Test",
    groupId: '44868346',
    split_equally: true,
}).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
});