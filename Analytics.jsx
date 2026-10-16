
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line
} from "recharts";

const COLORS = [
  "#4F46E5", // Indigo
  "#0D9488", // Teal
  "#F59E0B", // Amber
  "#E11D48", // Rose
  "#8B5CF6", // Purple
  "#0284C7"  // Blue
];

export default function Analytics() {
  // 1. Scheme category data
  const schemeData = [
    { name: "Women", value: 2 },
    { name: "Education", value: 1 },
    { name: "Health", value: 1 },
    { name: "Social Welfare", value: 2 }
  ];

  const totalSchemes = schemeData.reduce(
    (total, item) => total + item.value,
    0
  );

  // 2. Accessibility indicators (sample scores)
  const accessibilityData = [
    { name: "Information", score: 90 },
    { name: "Eligibility", score: 75 },
    { name: "Application", score: 65 },
    { name: "Document Help", score: 70 }
  ];

  // 3. Coverage percentages (illustrative only)
  const coverageData = [
    { name: "Women", coverage: 82 },
    { name: "Students", coverage: 75 },
    { name: "Health", coverage: 68 },
    { name: "Social Welfare", coverage: 60 }
  ];

  // 4. Monthly trend (example data)
  const trendData = [
    { month: "Jan", awareness: 45, applications: 30 },
    { month: "Feb", awareness: 52, applications: 38 },
    { month: "Mar", awareness: 58, applications: 43 },
    { month: "Apr", awareness: 65, applications: 51 },
    { month: "May", awareness: 72, applications: 60 },
    { month: "Jun", awareness: 80, applications: 68 }
  ];

  // Reusable chart card
  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "18px",
    padding: "24px",
    marginBottom: "26px",
    boxShadow: "0 5px 20px rgba(15, 23, 42, 0.05)",
    minWidth: 0
  };

  const headingStyle = {
    color: "#1e293b",
    fontSize: "23px",
    margin: "0 0 8px"
  };

  const descriptionStyle = {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: 1.7,
    marginBottom: "22px"
  };

  const chartHeight = {
    width: "100%",
    height: 340,
    minWidth: 0
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "32px 5%",
        color: "#334155",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box"
      }}
    >
      {/* PAGE HEADER */}
      <header style={{ marginBottom: "30px" }}>
        <p
          style={{
            color: "#4f46e5",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "12px",
            marginBottom: "10px"
          }}
        >
          AI & ML PROJECT DASHBOARD
        </p>

        <h1
          style={{
            color: "#1e293b",
            fontSize: "clamp(27px, 4vw, 38px)",
            margin: "0 0 12px"
          }}
        >
          Welfare Scheme Analytics
        </h1>

        <p style={{ color: "#64748b", lineHeight: 1.8, margin: 0 }}>
          Graphical analysis of welfare scheme categories,
          accessibility indicators, beneficiary coverage
          and monthly trends in Maharashtra.
        </p>

        <span
          style={{
            display: "inline-block",
            marginTop: "16px",
            background: "#e0e7ff",
            color: "#3730a3",
            padding: "8px 13px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          DEMONSTRATION DATA
        </span>
      </header>

      {/* SUMMARY CARDS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "18px",
          marginBottom: "28px"
        }}
      >
        {[
          {
            label: "Total Schemes",
            value: totalSchemes,
            color: "#4f46e5",
            background: "#eef2ff",
            icon: "▤"
          },
          {
            label: "Categories",
            value: schemeData.length,
            color: "#0d9488",
            background: "#ccfbf1",
            icon: "◉"
          },
          {
            label: "Accessibility Indicators",
            value: accessibilityData.length,
            color: "#d97706",
            background: "#fef3c7",
            icon: "↗"
          },
          {
            label: "Coverage Groups",
            value: coverageData.length,
            color: "#e11d48",
            background: "#ffe4e6",
            icon: "▥"
          }
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "#ffffff",
              padding: "22px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 15px rgba(15,23,42,0.04)"
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: item.background,
                color: item.color,
                fontSize: "24px",
                marginBottom: "15px"
              }}
            >
              {item.icon}
            </div>

            <h2
              style={{
                color: item.color,
                fontSize: "32px",
                margin: "0 0 7px"
              }}
            >
              {item.value}
            </h2>

            <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* GRAPH 1: SCHEME CATEGORY BAR CHART */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>
          1. Number of Schemes by Category
        </h2>

        <p style={descriptionStyle}>
          Compare the number of schemes listed in each category.
        </p>

        <div style={chartHeight}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={schemeData}
              margin={{ top: 25, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="name"
                tick={{ fill: "#475569", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                allowDecimals={false}
                domain={[0, 3]}
                tick={{ fill: "#64748b", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                cursor={{ fill: "#f1f5f9" }}
                formatter={(value) => [value, "Number of schemes"]}
              />

              <Bar dataKey="value" name="Schemes" radius={[7, 7, 0, 0]}>
                {schemeData.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GRAPH 2: PIE CHART */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>
          2. Scheme Category Distribution
        </h2>

        <p style={descriptionStyle}>
          View the share of each category among all listed schemes.
        </p>

        <div style={chartHeight}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={schemeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={55}
                outerRadius={105}
                paddingAngle={4}
                label={({ percent }) =>
                  `${(percent * 100).toFixed(0)}%`
                }
              >
                {schemeData.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name) => [
                  `${value} scheme(s)`,
                  name
                ]}
              />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GRAPH 3: ACCESSIBILITY ANALYSIS */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>
          3. Scheme Accessibility Analysis
        </h2>

        <p style={descriptionStyle}>
          Illustrative scores for information, eligibility,
          application and document-related guidance.
        </p>

        <div style={chartHeight}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={accessibilityData}
              margin={{ top: 20, right: 15, left: 0, bottom: 30 }}
            >
              <CartesianGrid
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="name"
                interval={0}
                angle={-10}
                textAnchor="end"
                height={60}
                tick={{ fill: "#475569", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                domain={[0, 100]}
                tick={{ fill: "#64748b", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                formatter={(value) => [`${value}/100`, "Sample score"]}
              />

              <Bar
                dataKey="score"
                name="Accessibility score"
                fill="#F59E0B"
                radius={[7, 7, 0, 0]}
                maxBarSize={65}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GRAPH 4: BENEFICIARY COVERAGE */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>
          4. Beneficiary Coverage Comparison
        </h2>

        <p style={descriptionStyle}>
          Illustrative coverage percentages for different welfare groups.
          These are examples, not measured coverage statistics.
        </p>

        <div style={chartHeight}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={coverageData}
              layout="vertical"
              margin={{ top: 10, right: 25, left: 15, bottom: 10 }}
            >
              <CartesianGrid
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                horizontal={false}
              />

              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <YAxis
                type="category"
                dataKey="name"
                width={110}
                tick={{ fill: "#475569", fontSize: 12 }}
              />

              <Tooltip
                formatter={(value) => [`${value}%`, "Sample coverage"]}
              />

              <Bar
                dataKey="coverage"
                name="Coverage"
                fill="#E11D48"
                radius={[0, 7, 7, 0]}
                maxBarSize={42}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GRAPH 5: MONTHLY TREND */}
      <section style={cardStyle}>
        <h2 style={headingStyle}>
          5. Monthly Awareness and Application Trend
        </h2>

        <p style={descriptionStyle}>
          Example line chart showing how awareness and an application
          trend index could be tracked over time.
        </p>

        <div style={chartHeight}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendData}
              margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />

              <XAxis
                dataKey="month"
                tick={{ fill: "#475569", fontSize: 12 }}
              />

              <YAxis
                domain={[0, 100]}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="awareness"
                name="Awareness score"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ r: 4, fill: "#8B5CF6" }}
                activeDot={{ r: 7 }}
              />

              <Line
                type="monotone"
                dataKey="applications"
                name="Application trend index"
                stroke="#0284C7"
                strokeWidth={3}
                dot={{ r: 4, fill: "#0284C7" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ANALYSIS SUMMARY */}
      <section
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "18px",
          padding: "25px"
        }}
      >
        <h2 style={{ color: "#1e293b", marginTop: 0 }}>
          Graphical Analysis Summary
        </h2>

        <ul style={{ color: "#475569", lineHeight: 2 }}>
          <li>
            <strong style={{ color: "#4F46E5" }}>Category chart:</strong>{" "}
            compares the number of schemes in each category.
          </li>
          <li>
            <strong style={{ color: "#0D9488" }}>Pie chart:</strong>{" "}
            shows each category's share of listed schemes.
          </li>
          <li>
            <strong style={{ color: "#D97706" }}>Accessibility chart:</strong>{" "}
            compares illustrative accessibility scores.
          </li>
          <li>
            <strong style={{ color: "#E11D48" }}>Coverage chart:</strong>{" "}
            demonstrates a visual comparison of coverage percentages.
          </li>
          <li>
            <strong style={{ color: "#8B5CF6" }}>Trend chart:</strong>{" "}
            demonstrates how indicators can be plotted over time.
          </li>
        </ul>
      </section>

      {/* DATA DISCLAIMER */}
      <p
        style={{
          color: "#64748b",
          fontSize: "12px",
          lineHeight: 1.8,
          marginTop: "22px"
        }}
      >
        Data note: Category counts are demonstration values for this
        project. Accessibility scores, coverage percentages and monthly
        trends are illustrative data, not official Maharashtra Government
        statistics or verified beneficiary records.
      </p>
    </main>
  );
}
