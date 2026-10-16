import { useParams, Link } from "react-router-dom";

function SchemeDetails() {

  const { id } = useParams();

  const schemes = [
    {
      id: "1",
      name: "Mukhyamantri Majhi Ladki Bahin Yojana",
      category: "Women",
      department: "Women and Child Development Department",
      status: "Active",

      description:
        "Mukhyamantri Majhi Ladki Bahin Yojana is a Maharashtra Government welfare scheme designed to provide financial support to eligible women and improve their financial independence and overall well-being.",

      objective:
        "The main objective of the scheme is to provide financial assistance to eligible women and support their economic independence, health, nutrition and overall development.",

      benefits: [
        "Financial assistance to eligible women.",
        "Supports women's financial independence.",
        "Helps eligible women manage household and personal expenses.",
        "Provides direct financial support through the applicable government system.",
        "Supports the overall economic well-being of eligible women."
      ],

      eligibility: [
        "Applicant should be a resident of Maharashtra.",
        "Applicant must satisfy the applicable age criteria.",
        "Applicant must satisfy the applicable family income criteria.",
        "Applicant must satisfy other conditions specified by the government.",
        "Applicant should have the required identity and bank account documents."
      ],

      documents: [
        "Aadhaar Card",
        "Maharashtra residence proof",
        "Bank account details",
        "Income-related document where applicable",
        "Mobile number",
        "Other documents required by the government"
      ],

      target:
        "Eligible women residing in Maharashtra who satisfy the applicable government conditions.",

      application:
        "Applicants should follow the latest official Maharashtra Government application process and submit the required documents through the applicable platform or authority.",

      importance:
        "The scheme aims to improve women's financial security and make welfare support more accessible to eligible women."
    },

    {
      id: "2",
      name: "Lek Ladki Yojana",
      category: "Women & Children",
      department: "Women and Child Development Department",
      status: "Active",

      description:
        "Lek Ladki Yojana is a Maharashtra Government welfare initiative that provides support for the development, education and welfare of eligible girl children.",

      objective:
        "The objective is to provide financial support to eligible girl children, encourage education and promote their social and economic development.",

      benefits: [
        "Financial assistance according to applicable government rules.",
        "Encourages education of girl children.",
        "Supports the overall development of girls.",
        "Helps eligible families with education-related expenses.",
        "Promotes the welfare of girl children."
      ],

      eligibility: [
        "The girl child and family must satisfy applicable government conditions.",
        "The family must satisfy applicable income conditions.",
        "The girl child must satisfy the applicable scheme conditions.",
        "Required documents must be available.",
        "Other scheme-specific conditions may apply."
      ],

      documents: [
        "Aadhaar Card",
        "Birth certificate",
        "Residence proof",
        "Income certificate where applicable",
        "Bank account details",
        "Other required documents"
      ],

      target:
        "Eligible girl children and families satisfying the applicable Maharashtra Government conditions.",

      application:
        "Eligible families should follow the latest official Maharashtra Government application procedure and submit the required documents.",

      importance:
        "The scheme supports the welfare and education of girl children and encourages families to invest in their future."
    },

    {
      id: "3",
      name: "Education Scholarship Schemes",
      category: "Education",
      department: "Education and related Government Departments",
      status: "Active",

      description:
        "The Maharashtra Government provides different scholarship and financial assistance schemes for eligible students to help them continue their education.",

      objective:
        "The main objective is to reduce the financial burden on students and encourage them to continue school, college and higher education.",

      benefits: [
        "Financial assistance for eligible students.",
        "Support for education-related expenses.",
        "Encourages higher education.",
        "Reduces financial burden on families.",
        "Supports eligible students from different backgrounds."
      ],

      eligibility: [
        "Student must satisfy the educational criteria of the particular scholarship.",
        "Student must satisfy applicable income conditions where required.",
        "Student must meet the conditions of the specific scholarship.",
        "Student must provide required educational documents.",
        "Other scholarship-specific conditions may apply."
      ],

      documents: [
        "Aadhaar Card",
        "Previous examination marksheet",
        "Current admission proof",
        "Income certificate where applicable",
        "Caste certificate where applicable",
        "Bank account details"
      ],

      target:
        "Eligible school, college and higher education students depending on the specific scholarship.",

      application:
        "Students should apply through the applicable official Maharashtra scholarship portal or department process.",

      importance:
        "Scholarships help students continue their education even when their families face financial difficulties."
    },

    {
      id: "4",
      name: "Mahatma Jyotirao Phule Jan Arogya Yojana",
      category: "Health",
      department: "Public Health Department",
      status: "Active",

      description:
        "Mahatma Jyotirao Phule Jan Arogya Yojana is a Maharashtra Government health welfare programme that provides healthcare support to eligible beneficiaries through participating healthcare facilities.",

      objective:
        "The objective is to improve access to healthcare and reduce the financial burden on eligible beneficiaries for covered medical treatments.",

      benefits: [
        "Healthcare support for eligible beneficiaries.",
        "Access to covered medical treatment.",
        "Financial protection for eligible healthcare services.",
        "Treatment through participating hospitals according to scheme rules.",
        "Helps eligible families access healthcare services."
      ],

      eligibility: [
        "Beneficiary must satisfy applicable scheme eligibility conditions.",
        "Beneficiary must have the required eligibility or identification documents.",
        "Treatment must fall under applicable scheme coverage.",
        "Other government conditions may apply."
      ],

      documents: [
        "Aadhaar Card or applicable identity document",
        "Eligibility or residence proof where required",
        "Medical documents",
        "Health-related reports where applicable",
        "Other documents requested by the participating hospital"
      ],

      target:
        "Eligible citizens covered under the applicable Maharashtra Government health programme.",

      application:
        "Beneficiaries should check the latest official health department information and participating healthcare facilities for the current application and treatment process.",

      importance:
        "The scheme helps eligible families access healthcare while reducing the financial burden associated with covered treatments."
    },

    {
      id: "5",
      name: "Social Welfare Schemes",
      category: "Social Welfare",
      department: "Social Justice and Special Assistance Department",
      status: "Active",

      description:
        "The Maharashtra Government operates various social welfare programmes for eligible citizens and communities requiring social and economic support.",

      objective:
        "The objective is to improve social welfare, provide financial assistance and increase access to government support programmes.",

      benefits: [
        "Financial assistance under applicable schemes.",
        "Social support for eligible beneficiaries.",
        "Support for education and development.",
        "Improved access to government welfare programmes.",
        "Support for eligible disadvantaged communities."
      ],

      eligibility: [
        "Eligibility depends on the specific welfare scheme.",
        "Applicant must satisfy applicable government conditions.",
        "Income conditions may apply.",
        "Applicant may need to satisfy category-specific conditions.",
        "Required documents must be submitted."
      ],

      documents: [
        "Aadhaar Card",
        "Residence proof",
        "Income certificate where applicable",
        "Caste certificate where applicable",
        "Bank account details",
        "Other scheme-specific documents"
      ],

      target:
        "Eligible citizens and communities covered by the specific Maharashtra social welfare programme.",

      application:
        "Applicants should identify the applicable welfare scheme and follow the official department's latest application procedure.",

      importance:
        "Social welfare programmes help improve access to financial, educational and social support for eligible citizens."
    },

    {
      id: "6",
      name: "Maharashtra Government Scholarship",
      category: "Education",
      department: "Higher and Technical Education Department",
      status: "Active",

      description:
        "Maharashtra Government provides different scholarship and financial assistance programmes for eligible students pursuing education.",

      objective:
        "The objective is to provide financial support to eligible students and encourage them to continue their education.",

      benefits: [
        "Financial assistance for eligible students.",
        "Support for education-related expenses.",
        "Encourages higher education.",
        "Reduces financial pressure on students and families.",
        "Helps students continue their educational journey."
      ],

      eligibility: [
        "Student must satisfy the eligibility requirements of the particular scholarship.",
        "Educational criteria must be fulfilled.",
        "Income criteria may apply.",
        "Student may need to satisfy category-specific conditions.",
        "Other scholarship-specific conditions may apply."
      ],

      documents: [
        "Aadhaar Card",
        "Educational certificates",
        "Previous examination marksheet",
        "Income certificate where applicable",
        "Caste certificate where applicable",
        "Bank account details"
      ],

      target:
        "Eligible students pursuing education under applicable Maharashtra Government scholarship programmes.",

      application:
        "Students should use the applicable official Maharashtra scholarship portal and follow the latest instructions for their scholarship category.",

      importance:
        "Scholarship programmes help students continue their education and reduce financial barriers."
    }
  ];


  const scheme = schemes.find(
    (item) => item.id === id
  );


  /* If scheme does not exist */

  if (!scheme) {
    return (
      <div className="scheme-details-page">

        <div className="scheme-details-container">

          <h1>
            Scheme Not Found
          </h1>

          <p>
            The requested welfare scheme could not
            be found.
          </p>

          <Link
            to="/schemes"
            className="back-button"
          >
            ← Back to Schemes
          </Link>

        </div>

      </div>
    );
  }


  return (

    <div className="scheme-details-page">

      <div className="scheme-details-container">


        {/* BACK BUTTON */}

        <Link
          to="/schemes"
          className="back-button"
        >
          ← Back to Schemes
        </Link>


        {/* HEADER */}

        <div className="scheme-details-header">

          <p className="small-title">
            MAHARASHTRA WELFARE SCHEME
          </p>

          <h1>
            {scheme.name}
          </h1>

          <div className="details-meta">

            <span>
              Category: {scheme.category}
            </span>

            <span>
              Status: {scheme.status}
            </span>

          </div>

          <p className="details-department">

            <strong>
              Department:
            </strong>{" "}

            {scheme.department}

          </p>

        </div>


        {/* ABOUT */}

        <div className="details-section">

          <h2>
            📋 About the Scheme
          </h2>

          <p>
            {scheme.description}
          </p>

        </div>


        {/* OBJECTIVE */}

        <div className="details-section">

          <h2>
            🎯 Objective of the Scheme
          </h2>

          <p>
            {scheme.objective}
          </p>

        </div>


        {/* BENEFITS */}

        <div className="details-section">

          <h2>
            💰 Benefits
          </h2>

          <ul>

            {scheme.benefits.map(
              (benefit, index) => (

                <li key={index}>
                  {benefit}
                </li>

              )
            )}

          </ul>

        </div>


        {/* ELIGIBILITY */}

        <div className="details-section">

          <h2>
            ✅ Eligibility Criteria
          </h2>

          <ul>

            {scheme.eligibility.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>

              )
            )}

          </ul>

        </div>


        {/* DOCUMENTS */}

        <div className="details-section">

          <h2>
            📄 Required Documents
          </h2>

          <ul>

            {scheme.documents.map(
              (document, index) => (

                <li key={index}>
                  {document}
                </li>

              )
            )}

          </ul>

        </div>


        {/* TARGET */}

        <div className="details-section">

          <h2>
            👥 Target Beneficiaries
          </h2>

          <p>
            {scheme.target}
          </p>

        </div>


        {/* APPLICATION */}

        <div className="details-section">

          <h2>
            📝 How to Apply
          </h2>

          <p>
            {scheme.application}
          </p>

        </div>


        {/* IMPORTANCE */}

        <div className="details-section">

          <h2>
            ⭐ Importance of the Scheme
          </h2>

          <p>
            {scheme.importance}
          </p>

        </div>


        {/* IMPORTANT NOTE */}

        <div className="official-note">

          <strong>
            Important Information
          </strong>

          <p>
            This website is developed as an
            academic project.
          </p>

          <p>
            Scheme eligibility, benefits,
            documents and application procedures
            may change according to the latest
            Government of Maharashtra rules.
          </p>

          <p>
            Please verify the latest information
            from official Maharashtra Government
            sources before applying.
          </p>

        </div>


        {/* BACK BUTTON */}

        <Link
          to="/schemes"
          className="back-button bottom-back"
        >
          ← Back to All Schemes
        </Link>

      </div>

    </div>
  );
}

export default SchemeDetails;