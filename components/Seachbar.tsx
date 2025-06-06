import React, { useState } from "react";

const Searchbar: React.FC<{ onSearch?: (value: string) => void }> = ({ onSearch }) => {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onSearch) onSearch(e.target.value);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search..."
                style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "999px",
                    border: "1px solid #ccc",
                    outline: "none",
                    fontSize: "1rem",
                    width: "100%",
                    maxWidth: "400px",
                    boxSizing: "border-box",
                }}
            />
        </div>
    );
};

export default Searchbar;