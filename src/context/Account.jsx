export const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const data = response.data
            setUsers(data)
        }
        fetchUsers()
    }, [])

    return (
        <div>
        <h1>user list</h1>
        </div>
    )
}
export const Register = () => {

    return (
        <div>
        <h1>user list</h1>
        </div>
    )
}
export const Register = () => {
    return (
        <div>
            <h1>user list</h1>
        </div>
    )
}
export const Info = () => {
    return (
        <div>
            <h1>user list</h1>
        </div>
    )
}



