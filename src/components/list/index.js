import React, { useEffect } from "react";
export default function ComboList({ comboList }) {
    useEffect(() => { }, [comboList]);

    return (
        <div className="combo-div">
            {/* {
                comboList.length
            }
            &nbsp;matches found
            {
                comboList &&
                comboList.map((combo, i) => (
                    <div key={i}
                        className="combo-list"
                    >
                        <p>{combo}</p>
                    </div>
                ))
            } */}
        </div>
    )
}