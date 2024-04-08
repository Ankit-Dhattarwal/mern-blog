import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16, 23, 42)] min-h-sceen">
        {children}
      </div>
    </div>
  );
}

// import { useSelector } from "react-redux";

// export default function ThemeProvider({ children }) {
//   const { theme } = useSelector((state) => state.theme);

//   // Define inline styles for background color and text color based on the theme
//   const styles = {
//     backgroundColor: theme === "dark" ? "rgb(16, 23, 42)" : "white",
//     color: theme === "dark" ? "#ccc" : "#333",
//   };

//   return <div style={styles}>{children}</div>;
// }
