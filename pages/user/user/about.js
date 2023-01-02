import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("user_loggedin");
    router.push('/user')
  };
  
  return (
    <div>
      <Link href="/user">
        <nav>
          <h1>Login</h1>
        </nav>
      </Link>
      <div className="dashboard">
        <h1>You Are Logged In! About</h1>
        <button
          type="submit"
          onClick={() => logOut()}
          style={{ backgroundColor: "#D93025", marginTop: "400px" }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
