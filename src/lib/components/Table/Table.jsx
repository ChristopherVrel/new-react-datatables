import "./Table.css";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const Table = ({  
        showStep, 
        userIcon = { icon: null, anchor: null, before: true }, // only work on One cell per row !
        highlightedCol = { id: "third", color: "#2900ff" },
        columns = { 
            first: "Default 1", 
            second: "Default 2",
            third: { value: "Start Date", isDate: true },
            fourth: "Default 4",
            fifth: "Default 5",
            sixth: "Default 6"
        }, 
        data,
        filterIcons = {
            up: String.fromCodePoint(8593),
            down: String.fromCodePoint(8595)
        }
    }) => {

    const [dataArray, setDataArray] = useState([
        { first: "row 1 / cell 1", second: "row 1 / cell 2", third: "2020-10-06 18:36:29", fourth: "row 1 / cell 4", fifth: "row 1 / cell 5", sixth: "row 1 / cell 6" },
        { first: "row 2 / cell 1", second: "row 2 / cell 2", third: "2020-10-07 18:36:29", fourth: "row 2 / cell 4", fifth: "row 2 / cell 5", sixth: "row 2 / cell 6" },
        { first: "row 3 / cell 1", second: "row 3 / cell 2", third: "2020-10-08 18:36:29", fourth: "row 3 / cell 4", fifth: "row 3 / cell 5", sixth: "row 3 / cell 6" }
    ]);
 
    const [dataToShow, setDataToShow] = useState();
    const [emptyRows, setEmptyRows] = useState(0);
    const [filterUsed, setFilterUsed] = useState();
    
    const [pagIndex, setPagIndex] = useState(1);

    const [nRowToShow] = useState((showStep && showStep.length > 0 ) ? showStep : [4, 8, 12]);
    const [entrySelected, setEntrySelected] = useState(nRowToShow[1]);

    // update data array on orginal data change
    useEffect(() => {
        if (data && data.length > 0) {
            setDataArray(data);
        }
    }, [data]);

    // recreate an array of items to show when the pagination, the nb of entries selected or the data array is set
    useEffect(() => {
        const start = parseInt(entrySelected) * (pagIndex - 1);
        const end = (parseInt(entrySelected) * (pagIndex - 1)) + parseInt(entrySelected);

        createDataArrayToShow(start, end);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entrySelected, pagIndex, setPagIndex, dataArray]);

    const createDataArrayToShow = (start, end) => {
        const t = (dataArray.length > 0) ? dataArray.filter((_, i) => i >= start && i < end) : dataArray;

        const response = {
            data: t,
            pagination: (dataArray.length > 0) ? Math.ceil(dataArray.length / parseInt(entrySelected)) : 0
        };

        setDataToShow(response);

        if (t.length !== entrySelected) {
            setEmptyRows(entrySelected - t.length);
        }
        else {
            setEmptyRows(0);
        }
    }

    // sorting data
    const handleFiltering = (k) => {
        // using "filterUsed" to know if the filtering has already been firing in that case we reverse the array

        const filtedDataArray = [...dataArray].sort((a, b) => {
            if (typeof(a[k]) === "number") {
                return a[k] - b[k];
            }
            else {
                return ((a[k].toLowerCase() < b[k].toLowerCase()) ? -1 : (a[k].toLowerCase() > b[k].toLowerCase()) ? 1 : 0);
            }
        })

        if (filterUsed && filterUsed === k) {
            setDataArray(filtedDataArray.reverse());

            setFilterUsed(null);
        }
        else {
            setDataArray(filtedDataArray);

            setFilterUsed(k);
        }
    }

    const getFormatDate = (date) => {
        let fDate = new Date(date);
        let y = fDate.getFullYear();
        let m = fDate.getMonth() + 1;
        let d = fDate.getDate();

        // mm-dd-yyyy   <-- US format
        return `${(m < 10) ? `0${m}` : m}-${(d < 10) ? `0${d}` : d}-${y}`;
    }

    return (
        <div className="table-main">
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                Object.entries(columns).map(([k, v], i) => {
                                    return (
                                        <th key={`col-${i}`} scope="col" onClick={() => handleFiltering(k, v)}>
                                            <div className="th-content">
                                                {(typeof(v) === "object" && v?.value) ? v.value : (typeof(v) === "object" && !v?.value) ? "Date column" : v}
                                                <span>{(filterUsed && filterUsed === k) ? filterIcons.up : filterIcons.down}</span>
                                            </div>
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            (dataToShow) &&
                            dataToShow.data.map((da, i) => {
                                return (
                                    <tr key={`row-${i}`}>
                                        { 
                                            Object.entries(columns).map(([key, val], ind) => {
                                                if (da.hasOwnProperty(key)) {
                                                    return (
                                                        <td style={(key === highlightedCol.id) ? { color: highlightedCol.color} : null} key={`cell-${ind}`}>
                                                            { (userIcon.icon && key === userIcon.anchor && userIcon.before) ? userIcon.icon : null }
                                                            {
                                                                (typeof(val) === "object" && val?.isDate) 
                                                                    ? getFormatDate(da[key]) 
                                                                    : (typeof(val) === "object" && (!val?.isDate || !val.isDate) ? "Malformed" : da[key])
                                                            }
                                                            { (userIcon.icon && key === userIcon.anchor && !userIcon.before) ? userIcon.icon : null }
                                                        </td>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <td key={`cell-${ind}-empty`}></td>
                                                    )
                                                }
                                            })
                                        }
                                    </tr>  
                                )
                            })
                        }
                        {
                            (emptyRows > 0) &&
                            [...Array(emptyRows)].map((_, i) => <tr className={"empty-row"} key={`empty-row-${i}`}></tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                (nRowToShow && dataToShow) &&
                <div className="table-pagination">
                    <div className="entries-container">
                        <label htmlFor="entries-select">Show</label>

                        <select 
                            onChange={e => setEntrySelected(e.target.value)} 
                            defaultValue={entrySelected} 
                            name="entries" 
                            id="entries-select">
                            {
                                nRowToShow.map((e, i) => {
                                    return (
                                        <option key={`entry-${i}`} value={e}>{e}</option>
                                    )
                                })
                            }
                        </select>
                        <span>entries</span>
                    </div>

                    <Pagination entrySelected={entrySelected} endPage={dataToShow.pagination} index={pagIndex} setIndex={setPagIndex} />
                </div>   
            }
        </div>
    );
}

export default Table;