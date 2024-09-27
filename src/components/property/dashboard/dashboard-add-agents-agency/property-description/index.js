"use client";
import Select from "react-select";
import UploadPhotoGallery from "../upload-media/UploadPhotoGallery";

const PropertyDescription = () => {
  const catergoryOptions = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const listedIn = [
    { value: "All Listing", label: "All Listing" },
    { value: "Active", label: "Active" },
    { value: "Sold", label: "Sold" },
    { value: "Processing", label: "Processing" },
  ];
  const PropertyStatus = [
    { value: "All Cities", label: "All Cities" },
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Published", label: "Published" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Agent Name"
                required
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Enter CNIC#
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="00000-0000-000-0"
                required
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Phone#
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="+92-000-0000000"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">About</label>
            <textarea
              cols={30}
              rows={5}
              placeholder="There are many variations of passages."
              defaultValue={""}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20">
            <UploadPhotoGallery />
          </div>
        </div>
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Select Category
            </label>
            <div className="location-area">
              <Select
                defaultValue={[catergoryOptions[1]]}
                name="colors"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div> */}
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Listed in
            </label>
            <div className="location-area">
              <Select
                defaultValue={[listedIn[1]]}
                name="colors"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div> */}
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Property Status
            </label>
            <div className="location-area">
              <Select
                defaultValue={[PropertyStatus[1]]}
                name="colors"
                options={PropertyStatus}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div> */}
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Price in $
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div> */}
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Yearly Tax Rate
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div> */}
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              After Price Label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div> */}
        {/* End .col-6 */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="button" className="ud-btn btn-thm">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertyDescription;
