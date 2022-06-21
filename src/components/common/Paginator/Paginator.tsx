import styles from "./Paginator.module.css";
import React from "react";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
            <div>
                {pages.map((p,index:number) => {
                    return <span
                        key = {index}
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
    )
}