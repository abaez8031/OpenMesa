import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

const UserShow = () => {
  const sessionUser = useSelector(state => state.session.user)
  const { userId } = useParams();
  if(!sessionUser || sessionUser.id != userId) return <Redirect to="/"/>
  return (
    <div>
      <li>{sessionUser.firstName}</li>
      <li>{sessionUser.lastName}</li>
      <li>{sessionUser.phoneNumber}</li>
      <li>{sessionUser.emailAddress}</li>
    </div>
  )
}

export default UserShow;