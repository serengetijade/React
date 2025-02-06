interface Props {
    isLoggedIn: boolean;
}
function Greeting({ isLoggedIn }: Props) {
    return <div>
        {!isLoggedIn && <h2>Please sign in.</h2>}
    </div>
}

export default Greeting;