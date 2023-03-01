export default {
    name:'TheAllUsersComponent',

    template: `<section>
    <h1>The All USers Compomnent</h1>
    <h1>Who is using it?</h1>
    </section>
    `,

    created() {
        console.log('all users i ready')
        fetch('/ums/users')
        .then(res => res.json())
        .then(data => console.table(date))
    .catch(error => console.error(error));
    }
}