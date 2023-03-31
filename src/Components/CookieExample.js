import { useCookies } from "react-cookie";
import { withCookies, Cookies } from 'react-cookie';


function CookieExample() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const onSubmit = (data) => {
    setCookie("user", data, { path: "/" });
  };

  return (
    <div>
<h2 id="bigblue">CookieExample</h2>
<button
        onClick={() => {
            setCookie("user", "data", { path: "/" });

        }}
      >
        Set user cookie
      </button>
      <button
        onClick={() => {
          alert(`User cookie is ${JSON.stringify(cookies["user"])}`);
        }}
      >
        Show user cookie
      </button>
      <button
        onClick={() => {
          removeCookie("user");
        }}
      >
        Delete user cookie
      </button>
      </div>
  )
}
export default CookieExample;