import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetched,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(
                response => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetched(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(
                response => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
    };
    onNextPage = () => {
        let pageNumber = this.props.currentPage;
        if (!(pageNumber >= Math.ceil(this.props.totalUsersCount / this.props.pageSize))) {
            this.props.toggleIsFetched(true);
            this.props.setCurrentPage(pageNumber + 1);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber + 1}`)
                .then(
                    response => {
                        this.props.toggleIsFetched(false);
                        this.props.setUsers(response.data.items);
                        this.props.setTotalUsersCount(response.data.totalCount);
                    });
        }
    };
    onNextSkip = () => {
        this.props.toggleIsFetched(true);
        let pageNumber = this.props.currentPage + 2;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(
                response => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });

    };
    onBackSkip = () => {
        this.props.toggleIsFetched(true);
        let pageNumber = this.props.currentPage - 2;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(
                response => {
                    this.props.toggleIsFetched(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });

    };
    onPreviousPage = () => {

        let pageNumber = this.props.currentPage;
        if (!(pageNumber <= 1)) {
            this.props.toggleIsFetched(true);
            this.props.setCurrentPage(pageNumber - 1);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber - 1}`)
                .then(
                    response => {
                        this.props.toggleIsFetched(false);
                        this.props.setUsers(response.data.items);
                        this.props.setTotalUsersCount(response.data.totalCount);
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
        isFetched: state.usersPage.isFetched
    }
};

let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetched
})(UsersAPIContainer);

export default UsersContainer;
