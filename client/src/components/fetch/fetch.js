import { useState, useEffect } from "../../imports";

const Fetch = ({ endpoint, body }) => {

    const [rest, setrest] = useState();

    useEffect(async () => {
        const request = await fetch(`${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const response = await request.json();
        setrest(response);

    });

    return {rest};
};

export default Fetch;