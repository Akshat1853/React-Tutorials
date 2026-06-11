// Formats a number as Indian Rupee currency.
// Example: 1500 -> ₹1,500.00

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency", // Format as currency
    currency: "INR", // Indian Rupee
    maximumFractionDigits: 2, // Show up to 2 decimal places
  }).format(amount);
};

// Converts a date string into a readable format.
// Example: "2026-06-10" -> "Jun 10, 2026"
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric", // 2026
    month: "short", // Jun
    day: "numeric", // 10
  });
};

// Calculates the total amount spent across all expenses.
//
// Example:
// [
//   { amount: 100 },
//   { amount: 200 }
// ]
//
// Result: 300
export const getTotalExpenses = (expenses) => {
  return expenses.reduce(
    (total, expense) => total + expense.amount,
    0 // Initial value
  );
};

// Groups expenses by category and calculates
// total spending for each category.
//
// Example Output:
// {
//   food: 500,
//   transport: 200,
//   shopping: 1000,
//   ...
// }
export const getExpensesByCategory = (expenses) => {
  // Initialize all categories with 0
  const categories = {
    food: 0,
    transport: 0,
    entertainment: 0,
    shopping: 0,
    utilities: 0,
    other: 0,
    health: 0,
  };

  expenses.forEach((expense) => {
    // Add current expense amount to its category total
    categories[expense.category] += expense.amount;
  });

  return categories;
};

// Converts category totals into chart-friendly data.
//
// Example Input:
// {
//   food: 500,
//   transport: 300
// }
//
// Example Output:
// [
//   { name: "Food", value: 500 },
//   { name: "Transport", value: 300 }
// ]
export const getChartData = (expenses) => {
  // Get category-wise totals first
  const expensesByCategory = getExpensesByCategory(expenses);

  return Object.entries(expensesByCategory)
    // Remove categories with zero expenses
    .filter(([_, value]) => value > 0)
    // Convert object into array format required by chart libraries
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize first letter
      value,
    }));
};

// Returns Tailwind text color classes based on category.
//
// Example:
// getCategoryTextColor("food")
// => "text-indigo-500"
export const getCategoryTextColor = (category) => {
  const colors = {
    food: "text-indigo-500",
    transport: "text-cyan-500",
    entertainment: "text-purple-500",
    utilities: "text-teal-500",
    health: "text-green-500",
    shopping: "text-orange-500",
    other: "text-slate-500",
  };

  // Return matching color or default gray color
  return colors[category] || "text-gray-500";
};

// Returns the full month name from a Date object.
//
// Example:
// new Date("2026-06-10")
// => "June"
export const getMonthName = (date) => {
  return date.toLocaleString("default", {
    month: "long",
  });
};

// Calculates total expenses for the last N months.
//
// Default: Last 6 months
//
// Example Output:
// {
//   "June 2026": 2000,
//   "May 2026": 1500,
//   "April 2026": 1000
// }
export const getExpensesByMonth = (expenses, numMonths = 6) => {
  const now = new Date();

  // Stores monthly totals
  const result = {};

  // Step 1:
  // Create keys for the last N months
  // and initialize them to 0
  for (let i = 0; i < numMonths; i++) {
    const d = new Date(
      now.getFullYear(),
      now.getMonth() - i,
      1
    );

    const monthYear = `${getMonthName(d)} ${d.getFullYear()}`;

    result[monthYear] = 0;
  }

  // Step 2:
  // Iterate through expenses and add them
  // to the correct month
  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.date);

    const monthYear = `${getMonthName(
      expenseDate
    )} ${expenseDate.getFullYear()}`;

    // Only include expenses within the selected months
    if (result[monthYear] !== undefined) {
      result[monthYear] += expense.amount;
    }
  });

  return result;
};