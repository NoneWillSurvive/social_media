import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetched,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);
        userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(
            data => {
                this.props.toggleIsFetched(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetched(true);
        userAPI.getUsers(this.props.pageSize, pageNumber)
            .then(
                data => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
    };
    onNextPage = () => {
        let pageNumber = this.props.currentPage;
        if (!(pageNumber >= Math.ceil(this.props.totalUsersCount / this.props.pageSize))) {
            this.props.toggleIsFetched(true);
            this.props.setCurrentPage(pageNumber + 1);
            userAPI.getUsers(this.props.pageSize, pageNumber + 1)
                .then(
                    data => {
                        this.props.toggleIsFetched(false);
                        this.props.setUsers(data.items);
                        this.props.setTotalUsersCount(data.totalCount);
                    });
        }
    };
    onNextSkip = () => {
        this.props.toggleIsFetched(true);
        let pageNumber = this.props.currentPage + 2;
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(this.props.pageSize, pageNumber)
            .then(
                data => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });

    };
    onBackSkip = () => {
        this.props.toggleIsFetched(true);
        let pageNumber = this.props.currentPage - 2;
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(this.props.pageSize, pageNumber)
            .then(
                data => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });

    };
    onPreviousPage = () => {

        let pageNumber = this.props.currentPage;
        if (!(pageNumber <= 1)) {
            this.props.toggleIsFetched(true);
            this.props.setCurrentPage(pageNumber - 1);
            userAPI.getUsers(this.props.pageSize, pageNumber - 1)
                .then(
                    data => {
                        this.props.toggleIsFetched(false);
                        this.props.setUsers(data.items);
                        this.props.setTotalUsersCount(data.totalCount);
                    });
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
                                                             toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
};

let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetched,
    toggleFollowingProgress
})(UsersAPIContainer);

export default UsersContainer;
