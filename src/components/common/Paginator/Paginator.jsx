import React from 'react';
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.UsersPagePagination}>
            {pages.map(page => {
                return <div
                    className={currentPage === page ? `${styles.UsersPagePaginationItem} ${styles.sellectedPage}` : styles.UsersPagePaginationItem}
                    onClick={(e) => {
                        onPageChanged(page)
                    }}>{page}</div>
            })}
        </div>
    )
}

export default Paginator