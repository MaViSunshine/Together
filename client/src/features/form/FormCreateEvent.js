import React from "react";
import { useFormContext } from "contexts/FormContext";
import { useAuthContext } from "contexts/AuthContext";

// This Component gets the Title, Description, and the start/end Dates for the event
export default function FormCreateEvent() {

  const auth = useAuthContext();
  const { formData, setFormData } = useFormContext();
  // const {formCompleted, setFormCompleted} = useState();

  const handleChange = e => {

    const { name, value } = e.target;

    // TODO: These are devs notes, delete this line and possibly the rest before PRing
    // Using an anonymous function like so allows us to get the previous state of the data and extend it
    // [name]: value overrides the value at the [name] on which handleChange is called
    // e.g. if [name] is "title" in the form input, the value of "title" gets changed in formData
    // the data is then also extended by your Discord username
    setFormData(prevFormData => ({ ...prevFormData, [name]: value, discordName: auth.user?.displayName }));

    // Next button stays greyed out/disabled by default, and as long as any field is empty
    // and also if a date is out of range, etc.

    // TODO: Ask Caleb about making end date just one or two years from now in the Issue thread.
  };

  // useEffect(() => { // Debug code
  //   console.log(formData);
  // }, [formData])

  return (
    // TITLE OF EVENT FIELD
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Title
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={formData["title"] || ""}
            name="title"
            placeholder="Title"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            required
          />
        </div>
      </div>

      {/* DESCRIPTION OF EVENT FIELD */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Description
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={formData["description"] || ""}
            name="description"
            placeholder="Description"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            required
          />
        </div>
      </div>

      {/* LOCATION FIELD */}
      <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
            Location
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              onChange={handleChange}
              value={formData["location"] || ""}
              name="location"
              placeholder="Location"
              className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            />
          </div>
        </div>

        {/* DISCORD USERNAME FIELD */}
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
            Discord Name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              onChange={handleChange}
              value={auth.user?.displayName || ""}
              name="discordName"
              disabled={true}
              placeholder="Discord Name"
              className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}