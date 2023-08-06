import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import CelebData from "../type.ts";
import { useState } from "react";

function User({ user }: { user: CelebData }) {
  const [open, setOpen] = useState(false);

  // Calculating Age
  function calculateAge(dataOfBirth: string): number {
    const now = new Date();
    const birthDate = new Date(dataOfBirth);
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff == 0 && now.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  // Handle Delete
  function HandleDelete(): undefined {
    if (window.confirm("Are you sure you want to delete the user?")) {
    }
  }

  return (
    <div className="flex flex-col py-3 m-5 gap-9 border border-slate-950 rounded-md items-center">
      <div className="flex items-center gap-4 w-full">
        <div className="flex gap-5 items-center flex-1 pl-4">
          <img
            className="rounded-full w-14 h-14"
            src={user.picture}
            alt="Picture"
          />
          <h1 className="font-bold flex-1">
            {user.first} {user.last}
          </h1>
        </div>
        <button
          className="w-10 h-10 pr-12"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? (
            <VscChevronDown className="w-6 h-6" />
          ) : (
            <VscChevronUp className="w-6 h-6" />
          )}
        </button>
      </div>
      {open && (
        <>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h1 className="font-bold">Age</h1>
              <div>{calculateAge(user.dob)} Years</div>
            </div>
            <div>
              <h1 className="font-bold">Gender</h1>
              <div>{user.gender}</div>
            </div>
            <div>
              <h1 className="font-bold">Country</h1>
              <div>{user.country}</div>
            </div>
          </div>
          {/* description */}
          <div className="px-5">
            <h1 className="font-bold">Description</h1>
            <p>{user.description}</p>
          </div>

          {/* Edit & Delete Button */}
          <div className="flex left-44 relative gap-8">
            <button onClick={() => HandleDelete()}>
              <BsTrash className="w-7 h-7" style={{ color: "red" }} />
            </button>
            <button>
              <BsPencil className="w-7 h-7" style={{ color: "#0096FF" }} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
