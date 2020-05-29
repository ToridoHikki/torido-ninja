import React from "react";

const SectionLabel = ({time}) => {
    return (
        <div style={{ background:"#e1f5fe", textAlign: "right", margin:"0 20px 0 20px"}}>
            {time}
        </div>
    );
};

export default SectionLabel;