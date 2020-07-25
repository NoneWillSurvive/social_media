import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPageS,
    getIsFetchedUserS, getIsFollowingInProgressS,
    getPageSizeS,
    getTotalUserCountS,
    getUsersS
} from "../../redux/selectors/usersSelector";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
    };
    onNextPage = () => {
        let pageNumber = this.props.currentPage;
        if (!(pageNumber >= Math.ceil(this.props.totalUsersCount / this.props.pageSize))) {
            this.props.getUsers(this.props.pageSize, pageNumber + 1);
        }
    };
    onNextSkip = () => {
        let pageNumber = this.props.currentPage + 2;
        this.props.getUsers(this.props.pageSize, pageNumber);
    };
    onBackSkip = () => {
        let pageNumber = this.props.currentPage - 2;
        this.props.getUsers(this.props.pageSize, pageNumber);
    };
    onPreviousPage = () => {

        let pageNumber = this.props.currentPage;
        if (!(pageNumber <= 1)) {
            this.props.getUsers(this.props.pageSize, pageNumber-1);
        }
    };

    render() {
        return <>
            {
                this.props.isFetched ? <Preloader/> : <Users onPageChanged={this.onPageChanged}
                                                             onNextPage={this.onNextPage}
                                                             onNextSkip={this.onNextSkip}
                                                             onBackSkip={this.onBackSkip}
                                                             onPreviousPage={this.onPreviousPage}
                                                             currentPage={this.props.currentPage}
                                                             users={this.props.users}
                                                             totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             unfollow={this.props.unfollow}
                                                             follow={this.props.follow}
                                                             isFollowingInProgress={this.props.isFollowingInProgress}

                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersS(state),
        totalUsersCount: getTotalUserCountS(state),
        pageSize: getPageSizeS(state),
        currentPage: getCurrentPageS(state),
        isFetched: getIsFetchedUserS(state),
        isFollowingInProgress: getIsFollowingInProgressS(state)
    }
};

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersAPIContainer);
