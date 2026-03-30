import { useState, useEffect } from "react";
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
const ChartBar = ({ transactions, income, expense }) => {
  const chartData = [
    { name: "Income", value: income },
    { name: "Expense", value: Math.abs(expense) },
  ];
  const COLORS = ["#19a719ff", "#d81f1fff"];
  return (
    <div className="chart">
      {transactions.length > 0 && (income > 0 || expense < 0) ? (
        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
          Add transactions to see breakdown
        </p>
      )}
    </div>
  );
}

export default ChartBar;