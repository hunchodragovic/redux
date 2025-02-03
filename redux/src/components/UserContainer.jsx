import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userActions"; // ✅ Correct import
import { useEffect } from "react";

const UserContainer = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser(); // ✅ Correct function name
  }, [fetchUser]);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users list</h2>
      <div>
        {userData &&
          userData.data && // ✅ Corrected from userData.users
          userData.data.map((user, index) => <p key={index}>{user}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()), // ✅ Corrected function name
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
