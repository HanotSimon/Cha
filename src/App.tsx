import HeartAnimation from "./components/HeartAnimation/HeartAnimation";
import HomePage from "./pages/Home/HomePage";

export default function App() {
    const isAuthorized = false;

    if (isAuthorized) {
        return <HomePage />;
    }
    else{
        return (
            <HeartAnimation/>
        );
    }

}
