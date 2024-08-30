interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",
        // { cache: 'no-store' } // disable caching
        { next: { revalidate: 10 } } // this means that next.js will run background job and fetch data from the backend every 10 seconds. So, this is how caching works in Next.js. Now, one thing we need to know is that this behavior is only implemented in the fetch function . So, if we use a third-party library, like axios, we are not gonna get this, we are not gonna get the data cache.
    )
    const users: User[] = await res.json()

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UsersPage