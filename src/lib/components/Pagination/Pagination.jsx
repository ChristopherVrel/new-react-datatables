import "./Pagination.css";
import React, { useEffect, useState } from "react";

const Pagination = ({ pagIcons = { left: "<", right: ">" }, entrySelected, endPage, index, setIndex }) => {
    const [isSelected, setIsSelected] = useState();
    const [arrPage, setArrPage] = useState([]);

    // create the pagination array to show
    useEffect(() => {
        if (index > endPage) {
            setIndex(endPage);
        }

        createArrayOfIndexToShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entrySelected, endPage, index]);

    useEffect(() => {
        selectedLogic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrPage]);

    const createArrayOfIndexToShow = () => {
        let t = [];
        let maxSize = 7;

        if (endPage > maxSize) {
            t  = [...Array(maxSize)].map((_, i) => {
                if (i === 0) {
                    return 1;
                }
                else if (i === 6) {
                    return endPage;
                }
                else {
                    if (index <= 4) {
                        if (i === 5) {
                            return "...";
                        }
                        else {
                            return i + 1;
                        }
                    }
                    else if (index > 4 && index < endPage - 3) {
                        let res;

                        switch (i) {
                            case 1: case 5:
                                res = "...";
                                break;
                            case 2:
                                res = index - 1;
                                break;
                            case 3:
                                res = index;
                                break;
                            case 4:
                                res = index + 1;
                                break;
                            default:
                                break;
                        }

                        return res;
                    }
                    else {
                        let res;

                        switch (i) {
                            case 1:
                                res = "...";
                                break;
                            case 2:
                                res = endPage - 4;
                                break;
                            case 3:
                                res = endPage - 3;
                                break;
                            case 4:
                                res = endPage - 2;
                                break;
                            case 5:
                                res = endPage - 1;
                                break;
                            default:
                                break;
                        }

                        return res;
                    }
                }
            });
        }
        else {
            t = [...Array(endPage)].map((_, i) => i + 1);
        }

        setArrPage(t);
    }

    const selectedLogic = () => {
        if (isSelected === undefined || isSelected === -1 || isSelected > endPage - 1) {
            setIsSelected(0);
            setIndex(1);
        }
        else {
            let selectedIndex = 0

            if (index <= 3) {
                selectedIndex = index - 1;
            }
            else if (index > 3 && index <= endPage - 3) {
                selectedIndex = 3;
            }
            else if (index < endPage ) {
                selectedIndex = isSelected + (index - arrPage[isSelected]);
            }
            else {
                selectedIndex = arrPage.length - 1;
            }

            setIsSelected(selectedIndex);
        }
    }

    const paginationBackward = (e) => {
        if (typeof(e) === "number") {
            setIndex(e);
        }
        else if (index - 1 > 0) {
            setIndex(index - 1);
        }
    }

    const paginationForward = (e) => {
        if (typeof(e) === "number") {
            setIndex(e);
        }
        else if (index < endPage) {
            setIndex(index + 1);
        }
    }

    const handlePaginationClick = (e, i) => {
        if (e === "..." || i === isSelected) {
            return;
        }

        if (e <= index) {
            paginationBackward(e);
        }
        else {
            paginationForward(e);
        }
    }

    return (
        <div className="pagination-container">
            <button onClick={paginationBackward}>{pagIcons.left}</button>

            <ul>
                {
                    arrPage.map((e, i) => {
                        return (
                            <li onClick={() => handlePaginationClick(e, i)} className={(isSelected === i) ? "selected" : null} key={i}>
                                { e }
                            </li>
                        )
                    })
                }
            </ul>
            
            <button onClick={paginationForward}>{pagIcons.right}</button>
        </div>
    );
}

export default Pagination;