import React from "react";

export default function LoginComponent() {
  return (
    <div>
      <form type="#">
        <table>
          <tr>
            <td>
              <label for="username">User Name</label>
            </td>
            <td>
              <input type="text" name="username"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label for="username">Password</label>
            </td>
            <td>
              <input type="password" name="username"></input>
            </td>
          </tr>
          <tr>
              <button type="submit">Log In</button>
          </tr>
        </table>
      </form>
    </div>
  );
}
