import { useEffect, useState } from "react";

type CelebData = {
    id: number;
    first: string;
    last: string;
    dob: string;
    gender: string;
    email: string;
    picture: string;
    country: string;
    description: string;
};

function List() {
    const [celebrities, setCelebrities] = useState<CelebData[]>([]);

    useEffect(() => {
        // Fetch data from celebrities.json
        fetch("../data/celebrities.json")
            .then((res) => res.json())
            .then((data: CelebData[]) => setCelebrities(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {celebrities.map((celeb) => {
                return (
                    <div key={celeb.id}>
                        <h1 className="bold">
                            {celeb.first} {celeb.last}
                        </h1>
                        <p>{celeb.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default List;
