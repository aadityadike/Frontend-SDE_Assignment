import { useEffect, useState } from "react";
import CelebData from '../type.ts'
import User from "./User";
function List({ name }: { name: string }) {
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

    // Identify whether the name is there or not 
    const isMatchingName = (firstName: string, lastName: string) => {
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        const searchName = name.toLowerCase();
        return fullName.includes(searchName)
    };


    // Filter celebrities based on the provided first and last name
    const filteredCelebrities = celebrities.filter(celeb => isMatchingName(celeb.first, celeb.last));

    return (
        <div>
            {filteredCelebrities.map(celeb => (
                <User user={celeb} />
            ))}
        </div>
    );
}

export default List;
