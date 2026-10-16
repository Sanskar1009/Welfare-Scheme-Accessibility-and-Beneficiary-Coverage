import { useState } from "react";
import { Link } from "react-router-dom";

function Schemes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const schemes = [
    {
      id: 1,
      title: "Mukhyamantri Majhi Ladki Bahin Yojana",
      category: "Women",
      department: "Women and Child Development Department",
      status: "Active",
      description:
        "A Maharashtra government scheme that provides financial support to eligible women to improve their economic independence and overall well-being."
    },

    {
      id: 2,
      title: "Lek Ladki Yojana",
      category: "Women & Children",
      department: "Women and Child Development Department",
      status: "Active",
      description:
        "A welfare scheme designed to support the education and development of girls from eligible families in Maharashtra."
    },

    {
      id: 3,
      title: "Education Scholarship Schemes",
      category: "Education",
      department: "Higher and Technical Education Department",
      status: "Active",
      description:
        "Various scholarship and financial assistance schemes are available to support students in continuing their education."
    },

    {
      id: 4,
      title: "Mahatma Jyotirao Phule Jan Arogya Yojana",
      category: "Health",
      department: "Public Health Department",
      status: "Active",
      description:
        "A Maharashtra health welfare scheme that provides financial protection and access to healthcare services for eligible beneficiaries."
    },

    {
      id: 5,
      title: "Social Welfare Schemes",
      category: "Social Welfare",
      department: "Social Justice and Special Assistance Department",
      status: "Active",
      description:
        "Various welfare initiatives provide support and assistance to economically and socially disadvantaged sections of society."
    },

    {
      id: 6,
      title: "Maharashtra Government Scholarship",
      category: "Education",
      department: "Government of Maharashtra",
      status: "Active",
      description:
        "Scholarship assistance for eligible students to reduce financial barriers and encourage higher education."
    }
  ];

  const categories = [
    "All",
    "Women",
    "Women & Children",
    "Education",
    "Health",
    "Social Welfare"
  ];

  // Search and category filter
  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.title.toLowerCase().includes(search.toLowerCase()) ||
      scheme.description.toLowerCase().includes(search.toLowerCase()) ||
      scheme.department.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || scheme.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="schemes-page">

      {/* Header */}
      <div className="schemes-header">
        <p className="small-title">
          MAHARASHTRA WELFARE SCHEMES
        </p>

        <h1>Government Schemes</h1>

        <p>
          Explore welfare schemes and find information about
          eligibility, benefits and application procedures.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="scheme-tools">

        <input
          type="text"
          placeholder="Search schemes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

      {/* Scheme Count */}
      <div className="scheme-count">
        Showing <strong>{filteredSchemes.length}</strong> scheme
        {filteredSchemes.length !== 1 ? "s" : ""}
      </div>

      {/* Scheme Cards */}
      <div className="scheme-grid">

        {filteredSchemes.map((scheme) => (
          <div className="scheme-box" key={scheme.id}>

            {/* Status */}
            <span className="scheme-status">
              {scheme.status}
            </span>

            {/* Category */}
            <span className="scheme-category">
              {scheme.category}
            </span>

            {/* Title */}
            <h2>{scheme.title}</h2>

            {/* Department */}
            <p className="scheme-department">
              <strong>Department:</strong>{" "}
              {scheme.department}
            </p>

            {/* Description */}
            <p className="scheme-description">
              {scheme.description}
            </p>

            {/* View Details */}
            <Link
              to={`/scheme/${scheme.id}`}
              className="details-button"
            >
              View Details
            </Link>

          </div>
        ))}

      </div>

      {/* No Results */}
      {filteredSchemes.length === 0 && (
        <div className="no-results">
          <h2>No Schemes Found</h2>

          <p>
            Try changing your search or category filter.
          </p>
        </div>
      )}

    </div>
  );
}

export default Schemes;